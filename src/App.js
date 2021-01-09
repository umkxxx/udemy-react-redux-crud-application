import React from 'react'

function App() {
  return (
    <React.Fragment>
      <h1 className="hoge1">className</h1>
      <h1 class="hoge2">class</h1>
      <label htmlFor="bar1">htmlFor</label>
      <label for="bar2">for</label>
      <input type="text" onClick={() => {console.log("onClick-1")}}/>
      <input type="text" onClick={() => {console.log("onClick-2")}}/>
      <input type="text" onChange={() => {console.log("onChange-3")}}/>
    </React.Fragment>
  );
}
// function App() {
//   return React.createElement(
//     "div",
//     null,
//     "hoge"
//   );
// }

export default App;
