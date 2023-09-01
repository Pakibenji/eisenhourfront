import React from "react";

const Task = ({ item }) => {
  const { title, description, date, category, status } = item;

  return (
    <>
      <div className="task">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{new Date(date).toLocaleDateString("fr-FR")}</p>
        <p>{category}</p>
        <p>{status}</p>
      </div>
    </>
  );
};

export default Task;
