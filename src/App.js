import logo from './logo.svg';
import {useState} from "react";
import List from './List';
import './App.css';

function App() {
  const[currentItem,setCurrentItem] = useState(null);
  const[itemList,updateItemList] = useState([]);

  const onChangeHandler = e => {
    console.log("current value",e.target.value);
    setCurrentItem(e.target.value);
  };

  const addItemToList =()=> {
    updateItemList([...itemList, {item: currentItem, key:Date.now()}]);
    setCurrentItem("");
    console.log("list items", itemList);
  };

  return (
    <div className="App">
      <header className="App-header">
       <div className="Wrapper">
        <div className="Input-wrapper">
        <input value={currentItem} onChange={onChangeHandler} />
        <button onClick={addItemToList}>+</button>
        </div>
        <List itemList={itemList} updateItemList={updateItemList} />
       </div>
      </header>
    </div>
  );
}

export default App;
