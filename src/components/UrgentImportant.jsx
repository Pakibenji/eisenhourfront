import React from "react";
import Task from "./Task";
import GridTitle from "./GridTitle";

const UrgentImportant = ({ data, handleDeleteTask, handleChangeCategory }) => {
  const urgentImportant =
    data && data.filter((item) => item.category === "urgent/important");

  const title = "Urgent / Important";

  return (
    <div className="urgentImportant">
      <GridTitle title={title} />
      {urgentImportant &&
        urgentImportant.map((item) => (
          <Task
            item={item}
            key={item.id}
            handleDeleteTask={handleDeleteTask}
            handleChangeCategory={handleChangeCategory}
          />
        ))}
    </div>
  );
};

export default UrgentImportant;
