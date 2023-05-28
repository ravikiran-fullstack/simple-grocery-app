import React, { useState } from 'react';
import { nanoid } from 'nanoid';

const Form = ({ itemsList, setItemsList }) => {
  const [item, setItem] = useState('');

  const addItemToList = (e) => {
    e.preventDefault();
    if (!item) {
      return;
    }

    const newItem = {
      name: item,
      id: nanoid(),
      completed: false,
    };
    const newItemsList = [...itemsList, newItem];
    setItemsList(newItemsList);
    console.log(newItemsList);
    setItem('');
  };
  return (
    <form onSubmit={addItemToList}>
      <input
        type="text"
        name="item"
        id="item"
        placeholder="add item"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        className="item-input"
      />
      <input type="submit" value="Add Item" className="btn" />
    </form>
  );
};

export default Form;
