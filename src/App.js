import React, { useState, useEffect, useContext} from "react";
import axios from "axios";
import NewTask from "./components/NewTask";
import Header from "./components/Header";
import UrgentImportant from "./components/UrgentImportant";
import UrgentNotImportant from "./components/UrgentNotImportant";
import ImportantNotUrgent from "./components/ImportantNotUrgent";
import NotImportantNotUrgent from "./components/NotImportantNotUrgent";
import { TaskContext } from "./context/TaskContextProvider";

const App = () => {
  const [data, setData] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("urgent/important");
  const [status, setStatus] = useState(0);
  const [isCreateTask, setIsCreateTask] = useState(false);
  const { tasks, refreshTasksState } = useContext(TaskContext);

  const fetchData = async () => {
    const result = await axios.get("http://localhost:3000");
    await setData(result.data);
    await refreshTasksState(result.data);
    console.log("tasks:", tasks);
  };

  const handleCreateTask = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3000", {
      title,
      description,
      date: Date.now(),
      category,
      status,
    });
    fetchData();
    setTitle("");
    setDescription("");
    setCategory("urgent/important");
    setStatus(0);
    setIsCreateTask(false);
  };

  const handleDeleteTask = async (id) => {
    await axios.delete(`http://localhost:3000/${id}`);
    fetchData();
  };

  const handleChangeCategory = async (id, newCategory) => {
    try {
      await axios.put(`http://localhost:3000/${id}`, { category: newCategory });
      
      fetchData();
    } catch (error) {
      console.error("Erreur lors de la mise à jour de la catégorie :", error);
    }
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
        setDescription={setDescription}
        setCategory={setCategory}
        setStatus={setStatus}
        isCreateTask={isCreateTask}
      />
      <section className="gridContainer">
        <UrgentImportant data={data} handleDeleteTask={handleDeleteTask} handleChangeCategory={handleChangeCategory} />
        <UrgentNotImportant data={data} handleDeleteTask={handleDeleteTask} handleChangeCategory={handleChangeCategory} />
        <ImportantNotUrgent data={data} handleDeleteTask={handleDeleteTask} handleChangeCategory={handleChangeCategory}/>
        <NotImportantNotUrgent
          data={data}
          handleDeleteTask={handleDeleteTask}
          handleChangeCategory={handleChangeCategory}
        />
      </section>
    </>
  );
};

export default App;
