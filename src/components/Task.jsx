import React, { useState } from "react";
import { TiInputChecked, TiEdit } from "react-icons/ti";
import EditTask from "./EditTask";

const Task = ({ item, handleDeleteTask, handleChangeCategory }) => {
  const { title, date, category, id } = item;
  const [newCategory, setNewCategory] = useState();
  const [isEditing, setIsEditing] = useState(false);

  const updateCategory = () => {
    handleChangeCategory(id, newCategory);
    handleEdit();
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="task">
      <div className="titleDate">
        <h3>{title}</h3>
        <p>{new Date(date).toLocaleDateString("fr-FR")}</p>
      </div>
      <TiInputChecked onClick={() => handleDeleteTask(id)} />
      {!isEditing && <TiEdit onClick={handleEdit} />}
      {isEditing && (
        <EditTask
          setNewCategory={setNewCategory}
          category={category}
          newCategory={newCategory}
        />
      )}
      {isEditing && <TiEdit onClick={() => updateCategory(id, newCategory)} />}
    </div>
  );
};

export default Task;
