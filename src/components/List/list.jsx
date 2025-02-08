import './list.css';

function List( {users, setClick, setUser} ) {

  const handleClick = (user) => {
    setClick(true);
    setUser(user);
  }

  return (
    <div className="users-list">
      <h3>Users List</h3>
      {Array.from(users).map((user) => {
        return (
          <div className='users-user' key={user.id} onClick={() => handleClick(user)}>{user.name}</div>
        )
      })}
    </div>
  )
}

export default List;