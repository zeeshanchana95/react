function customRender(reactElement, container) {
  /*  
  //problem: works only for a tag with two attributes

  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("target", reactElement.props.target);
  container.appendChild(domElement);
  */

  // works for any element with any number of attributes
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, props[prop]);
  }
  container.appendChild(domElement);
}

//created our own react element
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Visit Google",
};

// accessing the dom root element
const mainContainer = document.getElementById("root");

// rendering the element by passing reference of element and its root.
customRender(reactElement, mainContainer);
