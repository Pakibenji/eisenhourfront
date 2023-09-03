import React from "react";
import Task from "./Task";

const NotImportantNotUrgent = ({ data, handleDeleteTask, handleChangeCategory}) => {

  const notImportantNotUrgent =
    data && data.filter((item) => item.category === "not important/not urgent");
  return (
    <div className="notImportantNotUrgent ">
      {notImportantNotUrgent  &&
        notImportantNotUrgent.map((item) => <Task item={item} key={item.id} handleDeleteTask={handleDeleteTask} handleChangeCategory={handleChangeCategory} />)}
    </div>
  );
};

export default NotImportantNotUrgent;
