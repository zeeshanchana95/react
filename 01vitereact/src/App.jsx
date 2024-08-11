import Chai from "./chai";

function App() {
  const username = "chai aur code";

  // {username} is called expression (evaluated expression -> which is produced by evaluating the expression and just put the final result here); try to evaluate js expressions outside like if-else, operations etc and just put the final result here

  return (
    <>
      <Chai />
      {/* <h1>chai or rect {if(username) username;}</h1>  */}
      <h1>chai or rect {username}</h1>
      <p>test para</p>
    </>
  );
}

export default App;
