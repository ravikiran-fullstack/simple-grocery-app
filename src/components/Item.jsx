import React from 'react';

const Item = ({ item, editItem, deleteItem }) => {
  console.log(item);
  return (
    <div className="singleItem">
      <input
        type="checkbox"
        name="completed"
        id="completed"
        onChange={() => editItem(item.id)}
      />
      <span className={item.completed ? 'completed' : ''}>{item.name}</span>
      <input type="button" value="Delete" onClick={() => deleteItem(item.id)} />
    </div>
  );
};

export default Item;
