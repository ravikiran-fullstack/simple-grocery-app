import React from 'react';
import Item from './Item';

const ItemsList = ({ itemsList, editItem, deleteItem }) => {
  return (
    <div>
      ItemsList
      <div>
        {itemsList &&
          itemsList.map((item) => (
            <Item
              key={item.id}
              item={item}
              editItem={editItem}
              deleteItem={deleteItem}
            />
          ))}
      </div>
    </div>
  );
};

export default ItemsList;
