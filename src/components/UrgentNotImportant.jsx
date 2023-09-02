import React from 'react';
import Task from './Task';

const UrgentNotImportant = ({data}) => {

  const urgentNotImportant = data && data.filter(
    (item) => item.category === "urgent/not important"
  );
  return (
    <div className="urgentNotImportant">
      {urgentNotImportant && urgentNotImportant.map((item) => (
        <Task item={item} key={item.id} />
      ))}
    </div>
  );
};

export default UrgentNotImportant;