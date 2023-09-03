import React, {useState} from "react";

const Task = ({ item, handleDeleteTask, handleChangeCategory }) => {
  const { title, description, date, category, status, id } = item;
  const [newCategory, setNewCategory] = useState(category);

  const updateCategory = () => {
    handleChangeCategory(id, newCategory);
  };

  return (
    <div className="task">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{new Date(date).toLocaleDateString("fr-FR")}</p>
      <p>{category}</p>
      <p>{status}</p>
      <button onClick={() => handleDeleteTask(id)}>Complete?</button>
      <button onClick={updateCategory}>Changer Catégorie</button>

      <select
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
      >
        <option value="urgent/important">Urgent/Important</option>
        <option value="urgent/not-important">Urgent/Not Important</option>
        <option value="important/not-urgent">Important/Not Urgent</option>
        <option value="not-important/not-urgent">
          Not Important/Not Urgent
        </option>
      </select>
    </div>
  );
};

export default Task;
