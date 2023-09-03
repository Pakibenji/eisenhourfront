import React from "react";

const EditTask = ({category, newCategory ,setNewCategory}) => {
  return (
    <>
      <select
      className="selectCategory"
        defaultValue={category}
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
      >
        <option value="urgent/important">Urgent/Important</option>
        <option value="urgent/not important">Urgent/Not Important</option>
        <option value="important/not urgent">Important/Not Urgent</option>
        <option value="not important/not urgent">
          Not Important/Not Urgent
        </option>
      </select>
    </>
  );
};

export default EditTask;
