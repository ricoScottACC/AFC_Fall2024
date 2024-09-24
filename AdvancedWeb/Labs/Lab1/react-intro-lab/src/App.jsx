import Greeting from "./components/Greeting"
import UserCard from "./components/UserCard"
import CardContainer from "./components/CardContainer"

const App = () => {
  let users = [{name: "Bob", age: 30}, {name: "Charlie", age: 35}, {name: "Alice", age: 25}];
  users = users.sort((a,b) => a.age - b.age);

  let userCards = users.map((user, i) => {
    return <UserCard key={i} name={user.name} age={user.age}/> 
  });

  return (
    <div>
      <Greeting name="Rico"/>
      <CardContainer children={userCards}/>
    </div>
  );
};

export default App
