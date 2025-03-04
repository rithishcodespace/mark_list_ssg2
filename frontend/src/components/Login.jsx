import { useState } from "react";
import {useNavigate} from "react-router-dom";

const Login = () => {

    const [emailId,setemailId] = useState("");
    const [password,setpassword] = useState("");
    const navigate = useNavigate();

    function handleClick()
    {
      let data = {
        emailId:emailId,
        password:password
      }
      try{
        fetch("http://localhost:3000/auth",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(data)
        })
        .then((response)=>{
          if(response.ok)
          {
            window.alert("user logged in successfully!");
            navigate("/markentry");
          }
          else
          {
             window.alert("invalid credentials");
          }
        })
      }
      catch(error)
      {
        console.log(error);
      }
    }

    return (
      <div className="bg-black h-screen flex justify-center items-center">
        <div className="flex justify-center items-center bg-amber-400 h-64 flex-col w-96 rounded-xl border-separate gap-2 border border-white">
           <input type="text" required onChange={(e)=>setemailId(e.target.value)} className="h-10 w-64 bg-black rounded-md border border-white text-yellow-400 placeholder:text-amber-400" placeholder="  Enter emailId"/>
           <input type="password" required onChange={(e)=>setpassword(e.target.value)} className="h-10 w-64 bg-black rounded-md border border-white text-yellow-400 placeholder:text-amber-400" placeholder="  Enter password"/>
           <button className="bg-black text-yellow-400 rounded-lg p-1.5 relative top-[45px]" onClick={handleClick}>Login</button>
        </div>
      </div>
    );
  };
  
  export default Login;
  