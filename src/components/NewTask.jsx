import React from "react";

const NewTask = ({handleCreateTask, setTitle, setDescription, setCategory}) => {
    
  return (
    <>
      <form onSubmit={handleCreateTask}>
        <input
          type="text"
          placeholder="title"
          onInput={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="description"
          onInput={(e) => setDescription(e.target.value)}
        />
        <select
          name="category"
          id="category"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="urgent/important">Urgent / Important</option>
          <option value="urgent/not important">Urgent / Not Important</option>
          <option value="important/not urgent">Important / Not Urgent</option>
          <option value="not important/not urgent">
            Not Important / Not Urgent
          </option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default NewTask;
