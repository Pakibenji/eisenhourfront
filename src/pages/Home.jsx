import React, { useState, useEffect} from "react";
import axios from "axios";
import Header from "../components/Header";
import NewTask from "../components/NewTask";
import UrgentImportant from "../components/UrgentImportant";
import UrgentNotImportant from "../components/UrgentNotImportant";
import ImportantNotUrgent from "../components/ImportantNotUrgent";
import NotImportantNotUrgent from "../components/NotImportantNotUrgent";

const Home = () => {
  const [data, setData] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("urgent/important");
  const [status, setStatus] = useState(0);
  const [isCreateTask, setIsCreateTask] = useState(false);

  const fetchData = async () => {
    const result = await axios.get("http://localhost:3000");
    setData(result.data);
  };

  const verificateBeforeCreateTask = () => {
    if (title === "") {
      alert("Please, write a title");
      return false;
    }
    return true;
  };

  const handleCreateTask = async (e) => {
    e.preventDefault();
    if (verificateBeforeCreateTask()) {
      await axios.post("http://localhost:3000", {
        title,
        date: Date.now(),
        category,
        status,
      });
      fetchData();
      setTitle("");
      setCategory("urgent/important");
      setStatus(0);
      setIsCreateTask(false);
    }
  };

  const handleDeleteTask = async (id) => {
    await axios.delete(`http://localhost:3000/${id}`);
    fetchData();
  };

  const handleChangeCategory = async (id, newCategory) => {
    await axios.put(`http://localhost:3000/${id}`, { category: newCategory });
    fetchData();
  };

  const wantToCreateTask = () => {
    setIsCreateTask(!isCreateTask);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Header />
      <NewTask
        handleCreateTask={handleCreateTask}
        wantToCreateTask={wantToCreateTask}
        setTitle={setTitle}
        setCategory={setCategory}
        setStatus={setStatus}
        isCreateTask={isCreateTask}
      />
      <section className="gridContainer">
        <UrgentImportant
          data={data}
          handleDeleteTask={handleDeleteTask}
          handleChangeCategory={handleChangeCategory}
        />
        <UrgentNotImportant
          data={data}
          handleDeleteTask={handleDeleteTask}
          handleChangeCategory={handleChangeCategory}
        />
        <ImportantNotUrgent
          data={data}
          handleDeleteTask={handleDeleteTask}
          handleChangeCategory={handleChangeCategory}
        />
        <NotImportantNotUrgent
          data={data}
          handleDeleteTask={handleDeleteTask}
          handleChangeCategory={handleChangeCategory}
        />
      </section>
    </>
  );
};

export default Home;
