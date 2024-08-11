import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";

// normal react component, converted into js object by transpiler
function MyApp() {
  return (
    <div>
      <h1>custom app!</h1>
    </div>
  );
}

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Visit Google",
// };

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);

// variable
const anotherUser = "chaie or react";

const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click me to visit google ",
  anotherUser
);

//invalid
// const reactElement = React.createElement(
//   "a",
//   { href: "https://google.com", target: "_blank" },
//   "click me to visit google ",
//   if()
// );

// ReactDOM.createRoot(document.getElementById("root")).render(<MyApp />);

// ReactDOM.createRoot(document.getElementById("root")).render(MyApp());

// ReactDOM.createRoot(document.getElementById("root")).render(anotherElement);

// use react syntax to create and render element element created using react syntax
// ReactDOM.createRoot(document.getElementById("root")).render(reactElement);

ReactDOM.createRoot(document.getElementById("root")).render(<MyApp />);
