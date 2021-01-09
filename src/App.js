import React, { Component } from 'react'

const App = () => {
  // return (
  //   <React.Fragment>
  //     <User name={"Taro"} age={14}/>
  //     <User name={"Jiro"} age={11}/>
  //   </React.Fragment>
  // );
  const hogehgoe = [
    {name:"TARO", age:"24"},
    {name:"JIRO", age:"21"},
    {name:"SABURO"}
  ]
  return (
    <React.Fragment>
      {
        hogehgoe.map((h, i) => {
          return <User name={h.name} age={h.age} key={i} />
        })
      }
    </React.Fragment>
  );
}
function User(props) {
  return (
    <React.Fragment>
      <div>I am {props.name}, and {props.age} years old.</div>
    </React.Fragment>
  );
}
User.defaultProps = {
  age:3
}

export default App;
