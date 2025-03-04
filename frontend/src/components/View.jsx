import { useEffect,useState } from "react"
import {useNavigate} from "react-router-dom";

let View = () =>{  

    const navigate = useNavigate();
    const [marks,setmarks] = useState([]);
    const [flag,setflag] = useState(0);
    useEffect(()=>{
        async function getData()
        {
          let data = await fetch("http://localhost:3000/getmarks");
          let json = await data.json();
          setmarks(json);
        }
        getData();
    },[navigate,flag])

    function handleDelete(id)
    {
      fetch(`http://localhost:3000/deletemarks/${id}`,{
        method:"DELETE",
        headers:{
            "Content-type":"application/json"
        }
      })
      .then((response)=>{
        if(response.ok)
        {
            window.alert("are you sure!");
            setflag(1)
        }
        else
        {
            window.alert("An error occured while deleting marks")
        }
      })
    }

    return(
        <div className="bg-black h-screen flex justify-center items-center flex-col">
            <div className="flex justify-center items-center relative">
                <table className="border-separate border-2 border-yellow-400 gap-1 overflow-y-scroll mb-2">
                    <thead>
                        <tr>
                            <th className="border border-yellow-400 p-2 text-lime-400">Student Id</th>
                            <th className="border border-yellow-400 p-2 text-lime-400">English</th>
                            <th className="border border-yellow-400 p-2 text-lime-400">Tamil</th>
                            <th className="border border-yellow-400 p-2 text-lime-400">Maths</th>
                            <th className="border border-yellow-400 p-2 text-lime-400">Physics</th>
                            <th className="border border-yellow-400 p-2 text-lime-400">Chemistry</th>
                            <th className="border border-yellow-400 p-2 text-lime-400">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {marks &&
                         
                         marks.map((marks,index)=>{
                            return(
                            <tr key={index}>
                                <td className="border border-yellow-400 p-2 text-lime-400">{marks.student_id}</td>
                                <td className="border border-yellow-400 p-2 text-lime-400">{marks.english}</td>
                                <td className="border border-yellow-400 p-2 text-lime-400">{marks.tamil}</td>
                                <td className="border border-yellow-400 p-2 text-lime-400">{marks.maths}</td>
                                <td className="border border-yellow-400 p-2 text-lime-400">{marks.physics}</td>
                                <td className="border border-yellow-400 p-2 text-lime-400">{marks.chemistry}</td>
                                <td>
                                <button className="p-2 bg-yellow-400 text-black border border-lime-400 m-0.5 w-16 cursor-pointer" onClick={()=>navigate(`/edit/${marks.student_id}`)}>Edit</button>
                                <button className="p-2 bg-yellow-400 text-black border border-lime-400 m-0.5 cursor-pointer" onClick={()=>handleDelete(marks.student_id)}>Delete</button>
                                </td>
                                
                            </tr>)
                         })

                        }
                    </tbody>
                </table>
            </div>
                <button className="bg-yellow-400 text-black rounded-md p-2 cursor-pointer " onClick={()=>navigate("/markentry")}>back</button>
        </div>
    )
}


export default View;