import React from 'react';
import { Link } from 'react-router'
class Nav extends React.Component{
  constructor(props){
    super(props);
    // Set initial state
    this.state={counter:false}

    // Bind functions to this
    this.counterClicked = this.counterClicked.bind(this)
    this.logoClicked = this.logoClicked.bind(this)
  }

  // Maked Todo counter active if clicked
  counterClicked(){
    this.setState({counter:true})
  }

  // Maked both links non active
  logoClicked(){
    this.setState({counter:false})
  }

  render(){
    return(
      <div>
        {/*Render the navigation bar*/}
        <nav>
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo" onClick={this.logoClicked}>React Demo</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li className={this.state.counter?'active':''}><Link to="counter" onClick={this.counterClicked}>CounterApp</Link></li>
            </ul>
          </div>
        </nav>

        {/*Render the components in the view*/}
        
        {this.props.children}
        
      </div>
    );
  };
}


export default Nav;    