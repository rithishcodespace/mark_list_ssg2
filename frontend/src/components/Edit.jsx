import {useState,useEffect} from "react";
import {useParams,useNavigate} from "react-router-dom";

let Edit = () =>{

    const navigate = useNavigate();
    const[english,setenglish] = useState(0); 
    const[tamil,settamil] = useState(0); 
    const[maths,setmaths] = useState(0); 
    const[physics,setphysics] = useState(0); 
    const[chemistry,setchemistry] = useState(0); 
    const[currentmarks,setcurrentmarks] = useState("");

    const {id} = useParams();

    useEffect(()=>{
        async function fetchMarks()
        {
            let data = await fetch(`http://localhost:3000/getmarksbyid/${id}`);
            const json = await data.json();
            setcurrentmarks(json[0]);
        }
        fetchMarks();
    },[])

    function handleClick()
    {

      let data = {
        "english":english,
        "tamil":tamil,
        "maths":maths,
        "physics":physics,
        "chemistry":chemistry
      }  
      fetch(`http://localhost:3000/editmarks/${id}`,{
        method:"PATCH",
        headers:{
          "Content-type":"application/json"
        },
        body:JSON.stringify(data)
      })
      .then((response)=>{
        if(response.ok)
        {
            window.alert("marks updated successfully!");
            navigate("/getmarks");
        }
        else
        {
            window.alert("An error occured while updating marks",response)
        }
      })
    }

    return(
        <div className="bg-black h-screen flex justify-center items-center">
            {currentmarks!="" && <div className="flex justify-center items-center flex-col p-2 rounded-2xl bg-yellow-400 w-96">
                <h1 className="text-white text-3xl mb-2.5 mt-2">Enter the updated marks</h1>
                <input type="text" placeholder={currentmarks.english} className="bg-white placeholder:text-slate-500 border border-lime-400 rounded-md h-10 w-56 m-1" onChange={(e)=>{
                    let temp = parseInt(e.target.value);
                    setenglish((isNaN(temp)?0:temp));
                }}/>
                <input type="text" placeholder={currentmarks.tamil} className="bg-white placeholder:text-slate-500 border border-lime-400 rounded-md h-10 w-56 m-1" onChange={(e)=>{
                     let temp = parseInt(e.target.value);
                     settamil((isNaN(temp)?0:temp));
                }}/>
                <input type="text" placeholder={currentmarks.maths} className="bg-white placeholder:text-slate-500 border border-lime-400 rounded-md h-10 w-56 m-1" onChange={(e)=>{
                     let temp = parseInt(e.target.value);
                     setmaths((isNaN(temp)?0:temp));
                }}/>
                <input type="text" placeholder={currentmarks.physics} className="bg-white placeholder:text-slate-500 border border-lime-400 rounded-md h-10 w-56 m-1" onChange={(e)=>{
                     let temp = parseInt(e.target.value);
                     setphysics((isNaN(temp)?0:temp));
                }}/>
                <input type="text" placeholder={currentmarks.chemistry} className="bg-white placeholder:text-slate-500 border border-lime-400 rounded-md h-10 w-56 m-1" onChange={(e)=>{
                     let temp = parseInt(e.target.value);
                     setchemistry((isNaN(temp)?0:temp));
                }}/>
                <button className="p-2 bg-black text-yellow-400 rounded-md mt-2 cursor-pointer" onClick={handleClick}>Update</button>
            </div>}
        </div>
    )
}

export default Edit;