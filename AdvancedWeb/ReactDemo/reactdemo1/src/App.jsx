import React from "react"
import Child from "./components/Child";


const App = () => {
  let children = ["Billy", "Jean", "!"];
  let newArray = children.map((kid, index) => {
    return <Child key={index} fname={kid}/>
  })

  return (
    <div >
      <h1>My first React Component!</h1>
      {newArray}
    </div>
  );
};

export default App;