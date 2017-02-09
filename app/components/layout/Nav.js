import React from 'react';
import { Link } from 'react-router'
class Nav extends React.Component{
  constructor(props){
    super(props);
    // Set initial state
    this.state={todo:false,counter:false}

    // Bind functions to this
    this.todoClicked = this.todoClicked.bind(this)
    this.counterClicked = this.counterClicked.bind(this)
    this.logoClicked = this.logoClicked.bind(this)
  }

  // Maked Todo link active if clicked
  todoClicked(){
    this.setState({todo:true, counter:false})
  }

  // Maked Todo counter active if clicked
  counterClicked(){
    this.setState({todo:false, counter:true})
  }

  // Maked both links non active
  logoClicked(){
    this.setState({todo:false, counter:false})
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
              <li className={this.state.todo?'active':''}><Link to="todo" onClick={this.todoClicked}>TodoApp</Link></li>
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