import React from 'react';
import './App.css';
import List from './components/list';
import AddTodo from './components/AddTodo'
import {Provider} from 'react-redux';
import {store} from './redux/store';
import Navbar from './components/Navbar';

function App() {
  return (
    <Provider store={store}>
       <div className="App">
         <Navbar/>
         <br/>
        <List/>
        <br/>
        <AddTodo/>
      </div>
    </Provider>
   
  );
}

export default App;
