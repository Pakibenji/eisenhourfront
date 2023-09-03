import React from 'react';
import Task from './Task';

const UrgentNotImportant = ({data, handleDeleteTask, handleChangeCategory}) => {

  const urgentNotImportant = data && data.filter(
    (item) => item.category === "urgent/not important"
  );
  return (
    <div className="urgentNotImportant">
      {urgentNotImportant && urgentNotImportant.map((item) => (
        <Task item={item} key={item.id} handleDeleteTask={handleDeleteTask} handleChangeCategory={handleChangeCategory}/>
      ))}
    </div>
  );
};

export default UrgentNotImportant;