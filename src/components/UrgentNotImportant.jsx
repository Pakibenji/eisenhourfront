import React from "react";
import Task from "./Task";
import GridTitle from "./GridTitle";

const UrgentNotImportant = ({
  data,
  handleDeleteTask,
  handleChangeCategory,
}) => {
  const urgentNotImportant =
    data && data.filter((item) => item.category === "urgent/not important");
  const title = "Urgent / Not Important";

  return (
    <div className="urgentNotImportant">
      <GridTitle title={title} />
      {urgentNotImportant &&
        urgentNotImportant.map((item) => (
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

export default UrgentNotImportant;
