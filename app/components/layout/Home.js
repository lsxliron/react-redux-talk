import React from 'react';

class Home extends React.Component{
  constructor(props){
    super(props);
  }

  // Renders the homepage
  render(){
    return(
      <div className="container center-align">
        <h3> Welcome to React Demo </h3>
        <h4> Choose one of the apps in the Navbar</h4>
      </div>
    );
  };
}


export default Home;    