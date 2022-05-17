import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Addstudent from './components/Addstudent';
import Search_student from './components/Search_student';

function App() {
  return (
    <div>
      <Addstudent/>
      <Search_student/>
    </div>
  );
}

export default App;
