import React from "react";
import Task from "./Task";

const UrgentImportant = ({ data }) => {

  const urgentImportant = data && data.filter(
    (item) => item.category === "urgent/important"
  );
  
  return (
    <div className="urgentImportant">
      {urgentImportant && urgentImportant.map((item) => (
        <Task item={item} key={item.id} />
      ))}
    </div>
  );
};

export default UrgentImportant;
