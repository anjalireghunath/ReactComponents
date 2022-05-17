import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Addstudent from './components/Addstudent';
import Search_student from './components/Search_student';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      
<BrowserRouter>
<Routes>
  <Route path="/" exact element={<Addstudent/>}/>
  <Route path="/search" exact element={<Search_student/>}/>
</Routes>
</BrowserRouter>

    </div>
  );
}

export default App;
