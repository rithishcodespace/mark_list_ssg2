import { useEffect,useState } from "react"

let View = () =>{
    
    const [marks,setmarks] = useState([]);
    useEffect(()=>{
        async function getData()
        {
          let data = await fetch("http://localhost:3000/getmarks");
          let json = await data.json();
          setmarks(json);
        }
        getData();
    },[])

    return(
        <div className="bg-black h-screen">
            <div className="flex justify-center items-center">
                <table className="border-separate border-2 border-yellow-400 gap-1 overflow-y-scroll">
                    <thead>
                        <tr>
                            <th className="border border-yellow-400 p-2 text-lime-400">Student Id</th>
                            <th className="border border-yellow-400 p-2 text-lime-400">English</th>
                            <th className="border border-yellow-400 p-2 text-lime-400">Tamil</th>
                            <th className="border border-yellow-400 p-2 text-lime-400">Maths</th>
                            <th className="border border-yellow-400 p-2 text-lime-400">Physics</th>
                            <th className="border border-yellow-400 p-2 text-lime-400">Chemistry</th>
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
                            </tr>)
                         })

                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}


export default View;