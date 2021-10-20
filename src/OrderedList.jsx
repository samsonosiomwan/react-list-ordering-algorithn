import React, { useState } from "react";

const OrderedList = () => {
  const [addItem, setAddItem] = useState([]);
  const [item, setItem] = useState("");
  const [direction, setDirection] = useState(true);
  const handleChange = (e) => {
    e.preventDefault();
    setItem(e.target.value);
  };
  const handleDecending = (e) => {
    let newArray = [...addItem];
    if (direction === true) {
      setAddItem(newArray.reverse());
      setDirection(false);
    } else {
      setAddItem(newArray.reverse());
      setDirection(true);
    }
  };
  const handleClear = (e) => {
    setAddItem([]);
    setItem("");
  };
  const handleKeyDown = (event) => {
    let newItems = event.target.value;
    if (event.key === "Enter" && newItems !== "") {
      let result = [newItems, ...addItem];
      if (direction) {
        console.log(result, "aaaa");
        setAddItem(result.sort());
        setItem("");
      } else {
        console.log(result, "kkk");
        let updatedResult = result.sort();
        setAddItem(updatedResult.reverse());
        setItem("");
      }
    }
  };
  return (
    <>
      <h4>How to use this application</h4>
      <ul>
        <li>enter an item and press enter to diplay the item</li>

        <li>to sort click on the arrows</li>
        <li>to clear items click on cl</li>
      </ul>

      <input
        className="add-item"
        value={item}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button className="sort-direction" onClick={handleDecending}>
        {direction === true ? "⬇️" : "⬆️"}
      </button>
      <button className="clear-list" onClick={handleClear}>
        ️🆑
      </button>
      <ul className="items-list">
        {addItem.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default OrderedList;
