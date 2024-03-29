
## Setup
Clone the repository
```bash
git clone https://github.com/lsxliron/react-redux-talk.git
```

## Running The App
Open `index.html` in your favorite browser. Notice that in order to run the app you do not need to have any of the dependencies installed.


# Development

## Prerequisites
Make sure you have [NodeJS](https://nodejs.org/en/download/) and [NPM](http://blog.npmjs.org/post/85484771375/how-to-install-npm) installed. If not, please install them before moving forward.


## Install dependencies
Navigate to the repository you cloned and run 
```bash
npm install
```
This will install all the packages that are listed in `package.json`

## Run the Development Server
```bash
npm start
```

Now open your browser and navigate to  `localhost:8080`

## Organization
This repository has a few braches:
- **master** - has both the Todo and Counter app fully working
- **counter-app** - contains the full code for the *Counter App*
- **counter-app-ex1** - contains some code for the *Counter App* where some parts of the code were omitted and you need to fill in the blanks. 
- **todo-app** - contains the full code for the *Todo App*
- **todo-app-ex1** - contains some code for the *Todo App* where some parts of the code were omitted and you need to fill in the blanks. 

To navigate between different branches:
```bash
git checkout <branch_name>
```

## Counter Exercise
In this exercise you need to complete the following files:
- Counter.js
    + Add initial state to the component
    + Implement the add function
    + Implement the subtract function
    + Add onClick events to the -/+ buttons
    + Display the counter value to the user
+ CounterApp.js
    * Import you Counter component
    * Render the Counter component in the app


## Todo App Exercise
In this exercise you will need to complete the following files:
- **TodoReducer.js**
    + Complete the `ADD_TODO` part in the `switch-case` statement
    + Complete the `CHANGE_STATUS` part in the `switch-case` statement
+ **TodoItem.js**
    * Complete the `mapDispatchToProps` function
* **TodoList.js**
    * Create an array of `TodoItem` with data from the store and render it
    * Complete the `mapPropsToState` function
