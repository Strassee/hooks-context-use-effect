
import './App.css';
import { useState, useEffect } from "react";
import List from './components/List/list';
import Details from  './components/Details/details';
import Loading from  './components/Loading/loading';

function App() {
  const [users, setUsers] =useState(false);
  const [loading, setLoading] =useState(false);
  const [click, setClick] = useState(false);
  const [user, setUser] = useState(false);
  const[userInfo, setUserInfo] =useState(false);

  useEffect(() => {
    try {
    fetch(process.env.REACT_APP_USERS_URL + '/users.json')
      .then((response) => response.json())
      .then((data) => setUsers(data));
    } catch(e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    if(user) {
      setLoading(true);
      try {
      fetch(process.env.REACT_APP_USERS_URL + `/${user.id}.json`)
        .then((response) => response.json())
        .then((data) => {
          setUserInfo(data);
          setLoading(false);
        });
      } catch(e) {
        console.log(e);
      }
    }
  }, [user]);

  return (
    <div className="App">
      <div className="users">
        <List users={users} setClick={setClick} setUser={setUser}/>
        {loading && <Loading />}
        {click && !loading && userInfo && <Details info={userInfo} />}
      </div>
    </div>
  );
}

export default App;
