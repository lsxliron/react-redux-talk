import React from 'react';
// ------> Import your counter component here  <-------


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
        {/* Render your Counter component here */}
      </div>
    );
  };
}


export default CounterApp;    