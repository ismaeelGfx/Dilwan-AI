import logo from "../assets/logo.png";
import Typography from "../components/Typography";
import { chatData, popularData, RecentChat } from "../types/types";
import chat from "../assets/chat.png";
import pop1 from "../assets/pop1.png";
import pop2 from "../assets/pop2.png";
import pop3 from "../assets/pop3.png";
import pop4 from "../assets/pop4.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Chat = () => {
  const [show, setShow] = useState(false);
  const toggle = () => setShow(!show);
  const navigate = useNavigate();
  const homeNavigate = () => {
    navigate("/home");
  };


  const recentChat: RecentChat[] = [
    {
      text: "Hi! My kitchen sink is draining slowly. What should I do?",
    },
    {
      text: "I`m remodeling my bathroom. What are the latest trends?",
    },
    {
      text: "I have a few missing roof shingles. Should I replace them myself?",
    },
    {
      text: " I have a leaky faucet. Can I fix it myself?",
    },
  ];
  const popularData: popularData[] = [
    {
      img: pop1,
      text: "My kitchen sink is draining slowly. What should I do?",
    },
    {
      img: pop2,
      text: "I`m remodeling my bathroom. What are the latest trends?",
    },
    {
      img: pop3,
      text: " I have a leaky faucet. Can I fix it myself?",
    },
    {
      img: pop4,
      text: " I have a few missing roof shingles. Should I replace them myself?",
    },
  ];
  const chatData: chatData[] = [
    {
      id: 1,
      userText: "My kitchen sink is draining slowly. What should I do?",
      aiText:
        "Hi! A slow drain might be due to grease or food buildup. Try plunging it or using a baking soda and vinegar mixture followed by hot water. If itsstill slow, you might need a plumber's snake or professional help.",
    },
    {
      id: 2,
      userText: "Got it. I also have a leaky faucet. Can I fix it myself?",
      aiText:
        " Yes, you can! First, turn off the water, then disassemble the faucet and check for worn washers or O-rings. Replace any damaged parts, and reassemble.",
    },
    {
      id: 3,
      userText: "Cool. I’m remodeling my bathroom. What are the latest trends?",
      aiText:
        "Popular trends include freestanding tubs, large-format tiles, smart showers, natural materials, and bold colors. Interested in details on any of these?",
    },
  ];

  const UserDetails = sessionStorage.getItem("User_Data")

  console.log(UserDetails,"CHAT")


  return (
    <section className="chat-main-h">
      <div className="chat-main-cont">
        <div className="chat-left-cont">
          <div onClick={homeNavigate} className="chat-logo">
            <img src={logo} alt="" />
          </div>
          <div className="recent-chat-cont">
            <Typography variant="main-heading" text="Recent" />

            {recentChat.map((item) => (
              <Typography variant="parapgraph" text={item.text} />
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
                open: {
                  opacity: 1,
                  width: "70%",
                  transition: { duration: 0.4 },
                },
                collapsed: {
                  opacity: 0,
                  width: 0,
                  transition: { duration: 0.4 },
                },
              }}
              className="chat-left-cont-alt"
            >
              <div onClick={homeNavigate} className="chat-logo">
                <img src={logo} alt="" />
              </div>
              <div className="recent-chat-cont">
                <Typography variant="main-heading" text="Recent" />

                {chatData.map((item) => (
                  <Typography variant="parapgraph" text={item.userText} />
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
            {popularData.map((item) => (
              <div className="pop-chat-cont">
                <div className="popular-chat-img">
                  <img src={item.img} alt="" />
                </div>
                <Typography variant="parapgraph" text={item.text} />
              </div>
            ))}
          </div>

          <div className="chat-cont-h">
            <section className="user-ai-msg-cont">
              {chatData.map((item) => (
                <>
                  <Typography
                    extraClasses="user-chat"
                    variant="parapgraph"
                    text={item.userText}
                  />

                  <Typography
                    extraClasses="ai-chat"
                    variant="parapgraph"
                    text={item.aiText}
                  />
                </>
              ))}
            </section>

            <div className="chat-input-cont">
              <input type="text" placeholder="Message" />
              <img className="send-icon" src={chat} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chat;
