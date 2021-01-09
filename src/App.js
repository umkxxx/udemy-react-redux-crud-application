import React, { Component } from 'react'
import PropTypes from 'prop-types'

const App = () => {
  // return (
  //   <React.Fragment>
  //     <User name={"Taro"} age={14}/>
  //     <User name={"Jiro"} age={11}/>
  //   </React.Fragment>
  // );
  const hogehgoe = [
    {name:"TARO", age:24},
    {name:"JIRO", age:21},
    {name:"SABURO", age:3}
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
User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
