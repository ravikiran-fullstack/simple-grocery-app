import { useState } from 'react';
import Form from './components/Form';
import ItemsList from './components/ItemsList';
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const [itemsList, setItemsList] = useState([]);

  const editItem = (id) => {
    console.log(itemsList);
    const editedItemsList = itemsList.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setItemsList([...editedItemsList]);
  };

  const deleteItem = (id) => {
    const newItemList = itemsList.filter((item) => item.id !== id);
    console.log(newItemList);
    setItemsList([...newItemList]);
    toast.success('item deleted');
  };

  return (
    <main>
      <h2>Grocery Bud</h2>
      <Form itemsList={itemsList} setItemsList={setItemsList} />
      <ItemsList
        editItem={editItem}
        deleteItem={deleteItem}
        itemsList={itemsList}
      />
      <ToastContainer position="top-center" />
    </main>
  );
};

export default App;
