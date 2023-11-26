import { useEffect, useState } from "react";

export default function index({task}) {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const response = await fetch("http://localhost:8000/tasks");
      const data = await response.json();
      setData(data.rows);
    } catch (error) {
      console.log("::Error in the TASKS component::", error);
    }
  };
  console.log("::Testing the fetch request in TASKS",data)
  useEffect(()=>{
    getData()
  }, [task])
  console.log(data)
  return (
    <>
    <h1>Your Tasks</h1>
    {data.map(entry=>(
      <p key={data.id}>{entry.title} description:{entry.description} priority: {entry.priority} Status: {entry.status}</p>
    ))}
    </>
    
  );
}
