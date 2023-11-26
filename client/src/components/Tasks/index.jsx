import { useEffect, useState } from "react";

export default function index() {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const response = await fetch("http://localhost:8000/tasks");
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log("::Error in the TASKS component::", error);
    }
  };
  console.log("::Testing the fetch request in TASKS",data)
  useEffect(()=>{
    getData()
  }, [])
  console.log(data)
  return <div>Hello From Tasks</div>;
}
