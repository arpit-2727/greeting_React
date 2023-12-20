import React from "react";

function App() {
  let newDate = new Date();
  newDate = newDate.getHours();
  let greeting = "";
  const styleCss = {};
  if (newDate >= 1 && newDate < 12) {
    greeting = "Good Morning";
    styleCss.color = "green";
  } else if (newDate >= 12 && newDate < 19) {
    greeting = "Good Afternoon";
    styleCss.color = "orange";
  } else {
    greeting = "Good Night";
    styleCss.color = "black";
  }
  return (
    <>
      <div>
        <h1>
          Hello , <span style={styleCss}> {greeting}</span>
        </h1>
      </div>
    </>
  );
}
export default App;
