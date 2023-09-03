import React from "react";
import Task from "./Task";
import GridTitle from "./GridTitle";

const ImportantNotUrgent = ({
  data,
  handleDeleteTask,
  handleChangeCategory,
}) => {
  const title = "Important / Not Urgent"
  const importantNotUrgent =
    data && data.filter((item) => item.category === "important/not urgent");
  return (
      <div className="importantNotUrgent">
        <GridTitle title={title} />
        {importantNotUrgent &&
          importantNotUrgent.map((item) => (
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

export default ImportantNotUrgent;
