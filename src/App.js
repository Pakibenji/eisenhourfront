import React, { useState, useEffect } from "react";
import axios from "axios";
import NewTask from "./components/NewTask";
import Header from "./components/Header";
import Task from "./components/Task";

const App = () => {
  const [data, setData] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("urgent/important");
  const [status, setStatus] = useState(0);

  const fetchData = async () => {
    const result = await axios.get("http://localhost:3000");
    setData(result.data);
  };

  const handleCreateTask = async (e) => {
    e.preventDefault();
    const result = await axios.post("http://localhost:3000", {
      title,
      description,
      date: Date.now(),
      category,
      status,

    });
    const data = await result.data;
    console.log(data);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <NewTask handleCreateTask={handleCreateTask} setTitle={setTitle} setDescription={setDescription} setCategory={setCategory} setStatus={setStatus}/>
      <section className="gridContainer">
        {data &&
          data.map((item) => (
            <Task key={item.id} item={item}/>
          ))}
      </section>
    </>
  );
};

export default App;
