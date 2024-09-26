import Greeting from "./components/Greeting"
import UserCard from "./components/UserCard"
import CardContainer from "./components/CardContainer"
import { sortByAge } from "./helper";

const App = () => {
  let users = [{name: "Bob", age: 30}, {name: "Charlie", age: 35}, {name: "Alice", age: 25}];
  users = sortByAge(users);

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
