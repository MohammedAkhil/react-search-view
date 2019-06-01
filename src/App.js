import React, { useState, createRef, useRef } from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import SearchResultList from "./SearchResultList/";
import useInputState from "./useInputState";
import data from "./data";

function App() {
  const { value, onChange: onChangeValue } = useInputState("");
  const [items, setItems] = useState(data);
  const [cursor, setCursor] = useState(0);
  const ref = useRef([...Array(items.length)].map(() => createRef()));

  const handleKeyDown = e => {
    console.log(ref.current[cursor].current);
    console.log(cursor);

    if (e.keyCode === 38 && cursor > 0) {
      setCursor(cursor - 1);

      if(ref.current[cursor - 1].current){                //when keyDown is handled before any inputs is given by the user it throws  
        ref.current[cursor - 1].current.scrollIntoView({  //TypeError: Cannot read property 'scrollIntoView' of null
        behavior: "smooth",
        inline: "nearest"
      });
      }
      
    } else if (e.keyCode === 40 && cursor < items.length - 1) {
      
      if(ref.current[cursor].current){
        ref.current[cursor].current.scrollIntoView({
        behavior: "smooth",
        inline: "nearest"
      });
      }
      
      setCursor(cursor + 1);
    }
  };

  const handleMouseHover = index => {
    console.log("object");
    setCursor(index);
  };

  const onChangeSearchText = event => {
    const query = value;

    const results = data.filter(item => {
      return querySearch(item, query);
    });
    setItems(results);
    onChangeValue(event);
    setCursor(0);
  };

  return (
    <div className="App">
      <SearchBar
        onChange={onChangeSearchText}
        value={value}
        onKeyDown={handleKeyDown}
      />
      {value.length > 0 ? (
        <SearchResultList
          ref={ref.current}
          data={items}
          cursor={cursor}
          onMouseOver={handleMouseHover}
        />
      ) : null}
    </div>
  );
}

function querySearch(item, query) {
  return (
    item.name.toLowerCase().includes(query.toLowerCase()) ||
    item.address.toLowerCase().includes(query.toLowerCase()) ||
    item.pincode.includes(query) ||
    item.id.includes(query)
  );
}

export default App;
