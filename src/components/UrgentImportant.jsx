import React from "react";
import Task from "./Task";

const UrgentImportant = ({ data, handleDeleteTask, handleChangeCategory}) => {

  const urgentImportant = data && data.filter(
    (item) => item.category === "urgent/important"
  );
  
  return (
    <div className="urgentImportant">
      {urgentImportant && urgentImportant.map((item) => (
        <Task item={item} key={item.id} handleDeleteTask={handleDeleteTask} handleChangeCategory={handleChangeCategory}/>
      ))}
    </div>
  );
};

export default UrgentImportant;
