import React from "react";
import Task from "./Task";

const ImportantNotUrgent = ({ data, handleDeleteTask, handleChangeCategory }) => {
  const importantNotUrgent =
    data && data.filter((item) => item.category === "important/not urgent");
  return (
    <div className="importantNotUrgent">
      {importantNotUrgent &&
        importantNotUrgent.map((item) => <Task item={item} key={item.id} handleDeleteTask={handleDeleteTask} handleChangeCategory={handleChangeCategory}/>)}
    </div>
  );
};

export default ImportantNotUrgent;
