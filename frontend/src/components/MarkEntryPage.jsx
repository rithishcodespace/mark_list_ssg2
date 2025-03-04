import {useState} from "react";
import {useNavigate} from "react-router-dom"

let MarkEntryPage = () =>{

    const navigate = useNavigate();
    const[english,setenglish] = useState(0); 
    const[tamil,settamil] = useState(0); 
    const[maths,setmaths] = useState(0); 
    const[physics,setphysics] = useState(0); 
    const[chemistry,setchemistry] = useState(0); 

    function handleSubmit()
    {
        let data = {
            english:english,
            tamil:tamil,
            maths:maths,
            physics:physics,
            chemistry:chemistry
        }
        fetch("http://localhost:3000/updatemarks",{
            method:"POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(data)
        })
        .then((response)=>{
            if(response.ok)
            {
                window.alert("Marks added successfully");
                navigate("/getmarks");
            }
            else
            {
                window.alert("There is an error in adding marks")
            }
        })
    }

    return(
        <div className="bg-black h-screen flex justify-center items-center">
            <div className="flex justify-center items-center bg-yellow-400 flex-col h-[480px] w-[500px] rounded-2xl border border-white">
                <table>
                    <thead>
                        <tr>
                          <th><p className="mb-2 text-3xl">Enter your marks</p></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td className="w-2.5"> <label>English: <input type="number" onChange={(e)=>{
                            let temp = parseInt(e.target.value);
                            setenglish((isNaN(temp))? 0 : temp);      
                    }
                        } required className=" border-black border-2 w-72 rounded-sm mb-2 h-10" placeholder="English Mark"/></label></td></tr>
                        <tr><td><label>Tamil: <input type="number" required onChange={(e)=>{
                            let temp = parseInt(e.target.value);
                            settamil((isNaN(temp))? 0 : temp);      
                        }}
                         className=" border-black border-2 w-72 rounded-sm mb-2 h-10" placeholder="Tamil Mark"/></label></td></tr>
                        <tr><td><label>Maths: <input type="number" required onChange={(e)=>{
                            let temp = parseInt(e.target.value);
                            setmaths((isNaN(temp))? 0 : temp);      
                        }} 
                        className=" border-black border-2 w-72 rounded-sm mb-2 h-10" placeholder="Maths Mark"/></label></td></tr>
                        <tr><td><label>Physics: <input type="number" required onChange={(e)=>{
                            let temp = parseInt(e.target.value);
                            setphysics((isNaN(temp))? 0 : temp);      
                        }} 
                        className=" border-black border-2 w-72 rounded-sm mb-2 h-10" placeholder="Physics Mark"/></label></td></tr>
                        <tr><td><label>Chemistry: <input type="number" required onChange={(e)=>{
                            let temp = parseInt(e.target.value);
                            setchemistry((isNaN(temp))? 0 : temp);      
                        }} className=" border-black border-2 w-72 rounded-sm mb-2 h-10" placeholder="Chemistry Mark"/></label></td></tr>
                    </tbody>
                </table>   
                        <button className="bg-black text-yellow-400 p-1.5 rounded-lg mt-2 cursor-pointer" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default MarkEntryPage;