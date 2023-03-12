import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import ExpenseTrackerForm from './components/ExpenseTrackerForm';
import ShowList from './components/ShowList';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* //Add routes for home tp showList and "/" ExpenseTrackerForm  */}
      <Router>
           <Routes>
                 <Route path='/' element={< ExpenseTrackerForm onClose={()=>{}}/>}></Route>
                 <Route path='/home' element={< ShowList />}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;