
import './App.css';
import AddUser from './components/AddUser';
import UserList from './components/UserList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
 
  return (
    <div className="App">
      <AddUser />
      <UserList/>
    </div>
  );
}

export default App;
