import React from 'react';
import Counter from './Counter'

// This class is the root of the counter app
class CounterApp extends React.Component{
  constructor(props){
    super(props);
  }

  // Render H1 header and the Counter component
  render(){
    return(
      <div className="container center-align">
        <h1> Counter App </h1>
        <Counter />
      </div>
    );
  };
}


export default CounterApp;    