import React from "react";
import Task from "./Task";
import GridTitle from "./GridTitle";

const NotImportantNotUrgent = ({ data, handleDeleteTask, handleChangeCategory}) => {
  const title = "Not Important / Not Urgent"
  const notImportantNotUrgent =
    data && data.filter((item) => item.category === "not important/not urgent");
  return (
    <div className="notImportantNotUrgent ">
      <GridTitle title={title} />
      {notImportantNotUrgent  &&
        notImportantNotUrgent.map((item) => <Task item={item} key={item.id} handleDeleteTask={handleDeleteTask} handleChangeCategory={handleChangeCategory} />)}
    </div>
  );
};

export default NotImportantNotUrgent;
