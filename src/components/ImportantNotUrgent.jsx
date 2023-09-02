import React from "react";
import Task from "./Task";

const ImportantNotUrgent = ({ data }) => {
  const importantNotUrgent =
    data && data.filter((item) => item.category === "important/not urgent");
  return (
    <div className="importantNotUrgent">
      {importantNotUrgent &&
        importantNotUrgent.map((item) => <Task item={item} key={item.id} />)}
    </div>
  );
};

export default ImportantNotUrgent;
