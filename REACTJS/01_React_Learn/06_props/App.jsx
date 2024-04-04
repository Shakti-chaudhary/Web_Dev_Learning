// Tailwind installed in local machine
import Card from "./Card";

function App() {
  let name = "Mohan";
  let myobj = {
    name: "Rohan",
    age: 22,
  };
  return (
    <>
      <h1 className="bg-green-400">Tailwind test</h1>
      <Card name="Rahul" />
      <Card name={name} />
      <Card obj={myobj} />
    </>
  );
}

export default App;
