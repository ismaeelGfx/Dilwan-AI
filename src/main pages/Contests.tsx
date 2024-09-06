   
import Container from "../components/Container";
 import uploadbtn from '../../src/assets/upload_button.png'
 


const Contests=()=>{

return (


    <Container>


        <div className="contest--main--heading">

            <p>
                Contests
                </p>  

        </div>

<div style={{
    width:'100%', justifyContent:'center',alignItems:'center',display:'flex'
}}>

                <div className="contest--main--data">

                <p>
                Monthly DIY Contest: Winner Gets $250 and a free yearly subscription to Dilwan AI.
                    
                    </p>  
                </div>

</div>


 

<div className="contest---main">


        <div className="contest---main1">
            <p>
            Upload Image
            </p>

            <div className="image--container--contest--parent">
                <div className="image--container--contest">

                <img
                src={uploadbtn}
                />
                </div>

                <div className="image--container--contest">

                                            <img
                                            src={uploadbtn}
                                            />
                                            </div>


                                            <div className="image--container--contest">

                                            <img
                                            src={uploadbtn}
                                            />
                                            </div>
                                                        

            </div>


            <div className="contest---main1">
                    <p>
                        Message*
                    </p>


                    <textarea className="textarea---contest">


                    </textarea>

                    <button className="button---contest">
                        Submit Project
                    </button>


            </div>
            
            
            </div>    




      </div>

 

         
         



 
 
        



  </Container>







)





}

export default Contests