import React, {useState} from "react";
import Nav from "./Nav";
import HogList from "./HogList";

import hogs from "../porkers_data";

function App() {
  const [clicked, setClicked] = useState(false)
  const [sort, setSort] = useState(null)

  const hogList = hogs

  const greasedHogs = clicked ? hogList.filter((hog) => hog.greased === true) : hogList;
  
  let sortedList = greasedHogs
  if(sort === 'name'){
    sortedList = greasedHogs.sort((a, b) => (a.name > b.name) ? 1 : -1)
  }else if(sort === 'weight'){
    sortedList = greasedHogs.sort((a, b) => (a.weight > b.weight) ? 1 : -1)
  }

  function handleFilter(){
    setClicked(!clicked)
  }

  function sortClick(event){
    if(event.target.value === sort){
      setSort(null);
    }else {
      setSort(event.target.value);
    }
  }

  return (
    <div className="App">
      <Nav onHandleFilter={handleFilter} onSortClick={sortClick} clicked={clicked}/>
      <HogList hogs={sortedList} />
    </div>
  );
}

export default App;

/* HIERARCHY
App
  -Nav (filter/sort/searches here)
  -HogList (all display here)
    -HogTile
*/