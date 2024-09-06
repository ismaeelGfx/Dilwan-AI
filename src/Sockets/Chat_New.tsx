
import logo from "../assets/logo.png";
import Typography from "../components/Typography";
import {  List, popularData } from "../types/types";
import chat from "../assets/chat.png";
import pop1 from "../assets/candlemkaing.jpg";
import pop2 from "../assets/pop2.png";
import pop3 from "../assets/garden.jpg";
import pop4 from "../assets/automate.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { io, Socket } from "socket.io-client";
import { baseURL } from "../BaseUrl/baseurl";
import axios from "axios";

import delete_logo from "../assets/delete.png";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
 
import LoaderTS from "../Loader/LoaderTwo";
 
type Message = {
  user_id: string;
  gpt_id: string;
  message: string;
  gpt_response: string | any;
};


type Message1 = {
    user_id: string | any;
    gpt_id: string;
    message: string;
   
  };

const Chat_New: React.FC = () => {
  const [show, setShow] = useState(false);
  const toggle = () => setShow(!show);
  const navigate = useNavigate();
  const homeNavigate = () => {
    navigate("/home");
  };
  const [isLoading, setIsLoading] = useState<boolean>(false);

   

  const popularData: popularData[] = [
    { img: pop1, text: "How to make candle?" },
    { img: pop2, text: "How to unclog Toilet?" },
    { img: pop3, text: "How to renovate Garden?" },
    { img: pop4, text: "How to Automate your Home?" },
  ];

   

  const user_id = sessionStorage.getItem("User_Data");

  console.log(user_id, "CHAT");

  const SocketRef = useRef<Socket | null>(null);
  const [listname, setlistname] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);

  const [list, setlist] = useState<List[]>([]);

  
  const [gpt_id, setGptId] = useState("gpt_id");
//   const [user_id, setUserId] = useState("user_id");

  useEffect(() => {
    SocketRef.current = io("http://localhost:5000");

    // SocketRef.current = io("https://dylanaibackendmvc-production.up.railway.app");

        // SocketRef.current = io("https://automationpupeeter-6ede47bc29db.herokuapp.com");

   

    SocketRef.current.on("get_previous_messages", (prevMessages: Message[]) => {
      console.log(prevMessages, "PREV MESSAGES");
      setMessages(prevMessages);
      setIsLoading(false)
    });

    SocketRef.current.on("chat_message", (incomingMessage: Message) => {
        setIsLoading(false)
      setMessages((prevMessages) => [...prevMessages, incomingMessage]);
    });

    SocketRef.current.on("specific_message", (incomingMessage: Message) => {
      setIsLoading(false)
    setMessages((prevMessages) => [...prevMessages, incomingMessage]);
  });

    // SocketRef.current.on("specific_message",(msg:any)=>{

    //   console.log(msg,"SPECIFIC MSG REPLY")

    // })



    return () => {
      SocketRef.current?.off("previous_messages");
      SocketRef.current?.off("chat_message");
      SocketRef.current?.off("specific_message");
      SocketRef.current?.disconnect();
    };
  }, []);

  useEffect(() => {
    if (user_id && gpt_id) {
      SocketRef.current?.emit("get_previous_messages", { user_id, gpt_id });

      get_List()
    }
  }, [user_id, gpt_id]);

  const SendMessage = () => {
    if (message.trim() && SocketRef.current  ) {
      console.log(message, "NEW MSS",messages);

      const newMessage: Message1 = {
        message,
        user_id,
        gpt_id,
      };

      // setMessages((prevMessages: Message[]) => [...prevMessages, newMessage]);
    setIsLoading(true)
      SocketRef.current.emit("chat_message", newMessage);
      setMessage(""); // Clear the input field after sending
    }
  };


  const Change_Chat_Id=(e:any)=>{

    setGptId(e)
    console.log(e,"TS")
  }




  const Create_list= async()=>{

    const formdata={

     user_id:user_id,
     listname:listname

    }

    axios.post(`${baseURL}/create-list`,formdata)
    .then((res)=>{
        console.log(res)
        

        get_List()
    })
    .catch((error)=>{
        console.log(error)
    })


  }


  const get_List= async()=>{

    await axios.get(`${baseURL}/getlist/${user_id}`)
    .then((res)=>{
        console.log(res)
        setlist(res.data.create_list)
    })
    .catch((error)=>{
        console.log(error)
    })

  }


  // const GPT_Message=(p:any)=>{


  //   if (p.trim() && SocketRef.current  ) {
  //       console.log(p, "NEW MSS");
  
  //       const newMessage: Message1 = {
  //         message:p,
  //         user_id,
  //         gpt_id,
  //       };
  
  //     //   setMessages((prevMessages: Message1[]) => [...prevMessages, newMessage]);
  //     setIsLoading(true)
  //       SocketRef.current.emit("chat_message", newMessage);
  //       setMessage(""); // Clear the input field after sending
  //     }

  // }


  const GPT_Message=(p:any)=>{


    if (p.trim() && SocketRef.current  ) {
        console.log(p, "NEW MSS");
  
        const newMessage: Message1 = {
          message:p,
          user_id,
          gpt_id,
        };
  
      //   setMessages((prevMessages: Message1[]) => [...prevMessages, newMessage]);
      setIsLoading(true)
        SocketRef.current.emit("specific_message", newMessage);
        setMessage(""); // Clear the input field after sending
      }

  }


  const handle_delete_list = (p:any)=>{

        console.log(p,"delete")

        Delete_List(p)

      



  }


  const Delete_List = async(e:any)=>{

    const formData={
        _id:e
    }

    axios.post(`${baseURL}/delete-list`,formData)
    .then((res)=>{

        console.log(res)
        get_List()
        showAlert("Success!","List Deleted Successfully!","success")
    })
    .catch((error)=>{
        console.log(error)
    })

  }



  const MySwal = withReactContent(Swal);

  const showAlert = (p:any,error:any,s:any) => {
    MySwal.fire({
      title: p,
      text: error,
      icon: s,
      timer: 3000, // 3 seconds
      timerProgressBar: true, // Shows a progress bar
      showConfirmButton: false, // Hides the confirm button
      background: '#232B2B', // Set background color to black
      color: '#fff', 
    });
  };
  const formatResponse = (responseText: string) => {
    return responseText
    .replace(/(\d+\.\s)/g, '<br /><br /> <br />$1')  // Add a line break before each numbered point
    .replace(/(<br\s*\/>\s*){2}/g, '<br />') 
     // Replace double breaks with a single break
    .trim();
  };


  return (
    <section className="chat-main-h">
      <div className="chat-main-cont">
        <div className="chat-left-cont">
          <div onClick={homeNavigate} className="chat-logo">
            <img src={logo} alt="Logo" />
          </div>
          <div style={{display:'flex',
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            gap:'10px',
            marginTop:'20px'
          }}>
                <input  onChange={(e)=>setlistname(e.target.value)}   className="input_ai_ts"
                placeholder="Create a List"
                
                />
                <button onClick={Create_list}  className="btn_ts">
                    Create
                </button>
              </div>
          <div className="recent-chat-cont">
            <Typography variant="main-heading" text="Recent" />
            
            {list.map((item, index) => (
            //   <Typography key={index} variant="parapgraph" text={item.listname} />
              <div key={index}   className="list">
                <div onClick={()=>Change_Chat_Id(item._id)}>


                {item.listname}
                    </div>

                    <div className="delete" onClick={()=>{handle_delete_list(item._id)}}>
                        <img src={delete_logo}/>
                    </div>

                </div>
            ))}
          </div>
        </div>
        <AnimatePresence>
          {show && (
            <motion.div
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, width: "70%", transition: { duration: 0.4 } },
                collapsed: { opacity: 0, width: 0, transition: { duration: 0.4 } },
              }}
              className="chat-left-cont-alt"
            >
              <div onClick={homeNavigate} className="chat-logo">
                <img src={logo} alt="Logo" />
              </div>
              <div className="recent-chat-cont">
                <Typography variant="main-heading" text="Recent" />
                {list.map((item, index) => (
            //   <Typography key={index} variant="parapgraph" text={item.listname} />
              <div key={index}   className="list">
                <div onClick={()=>Change_Chat_Id(item._id)}>


                {item.listname}
                    </div>

                    <div className="delete" onClick={()=>{handle_delete_list(item._id)}}>
                        <img src={delete_logo}/>
                    </div>

                </div>
            ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="line"></div>
        <div className="chat-right-cont">
          <div className="chat-title">
            <Typography variant="main-heading" text="Dilwan AI" />
            <svg
              onClick={toggle}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 chat-nav-btn"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
              />
            </svg>
          </div>


          <div className="right-popular-chat-cont">
  {messages.length ===1 ? (
    popularData.map((item, index) => (
      <div key={index} className="pop-chat-cont" onClick={() => GPT_Message(item.text)}>
        <div className="popular-chat-img">
          <img src={item.img} alt={`Popular chat ${index + 1}`} />
        </div>
        <Typography variant="parapgraph" text={item.text} />
      </div>
    ))
  ) :  (null)}
</div>



          <div className="chat-cont-h  ">
            <section className= { messages.length===1?"nodatats":"user-ai-msg-cont"}>
              {messages.map((item, index) => (
                
                <div key={index}>
                  <Typography extraClasses="user-chat" variant="parapgraph" text={item.message==="-"?'Hello!':item.message} />
                  
                  <Typography extraClasses="ai-chat" variant="parapgraph" text={<span dangerouslySetInnerHTML={{ __html: formatResponse(item.gpt_response) }} />} />
                </div>
              ))}

            {/* {isLoading && <Loader />}  */}

{
  isLoading &&
<div className="chat-spinner">

            {/* <ColorSpinner /> */}

            <LoaderTS shape={"circle"}/>

            <LoaderTS shape={"triangle"}/>
            <LoaderTS shape={"rect"}/>

</div>
}

             
            </section>

            <div className="chat-input-cont">
      
              <input
                type="text"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <img className="send-icon" src={chat} alt="Send" onClick={SendMessage} />
            </div>
          </div>
        </div>
      </div>


            


    </section>
  );
};

export default Chat_New;

