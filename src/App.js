import React, { Component } from 'react'

// function App() {
//   return (
//     <React.Fragment>
//       <h1 className="hoge1">className</h1>
//       <h1 class="hoge2">class</h1>
//       <label htmlFor="bar1">htmlFor</label>
//       <label for="bar2">for</label>
//       <input type="text" onClick={() => {console.log("onClick-1")}}/>
//       <input type="text" onClick={() => {console.log("onClick-2")}}/>
//       <input type="text" onChange={() => {console.log("onChange-3")}}/>
//     </React.Fragment>
//   );
// }
// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <h1>Component</h1>
//         <h3 className="hoge1">className</h3>
//         <h3 class="hoge2">class</h3>
//         <label htmlFor="bar1">htmlFor</label>
//         <label for="bar2">for</label>
//         <input type="text" onClick={() => {console.log("onClick-1")}}/>
//         <input type="text" onClick={() => {console.log("onClick-2")}}/>
//         <input type="text" onChange={() => {console.log("onChange-3")}}/>
//       </React.Fragment>
//     );
//   }
// }
const App = () => {
  return (
    <React.Fragment>
      <h1 className="hoge1">const App</h1>
      <h1 class="hoge2">class</h1>
      <label htmlFor="bar1">htmlFor</label>
      <label for="bar2">for</label>
      <input type="text" onClick={() => {console.log("onClick-1")}}/>
      <input type="text" onClick={() => {console.log("onClick-2")}}/>
      <input type="text" onChange={() => {console.log("onChange-3")}}/>
      <Cat />
      <Cat />
      <Cat />
    </React.Fragment>
  );
}
function Cat() {
  return (
    <React.Fragment>
      <div>Meow!</div>
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
