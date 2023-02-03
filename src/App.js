import { Navigate, NavLink, Outlet, useParams, useRoutes } from "react-router-dom";
function App() {

  const routes = [
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "/users",
      element: <UsersLayout />,
      children: [
        {
          path: "",
          element: <UsersList />,
      },
      {
          path: ":userId",
          element: <Navigate to='profile' />,
      },
      {
          path: ":userId/profile",
          element: <UserProfile />,
      },
      {
        path: ":userId/edit",
        element: <EditUserPage />,
      },
      ]
    },
  ]
  const elements = useRoutes(routes)
    
  return  <div className="container">{elements}</div>
};

// const AppWithRouter = <BrowserRouter>{App}</BrowserRouter>

const MainPage = () => {
  return (
    <>
    <h2>Main</h2>
    <NavLink to="/users" >UsersList</NavLink>
    </>
  )
};

const UsersLayout = () => {
  return (
    <div>
  <Outlet />
  </div>)
}

const UsersList = () => {
  return (
    <>
      <h2>UsersList</h2>
      <NavLink to="/">Main Page</NavLink>
      <ul>
      <li><NavLink to="/users/1" >User 1</NavLink></li>
      <li><NavLink to="/users/2" >User 2</NavLink></li>
      <li><NavLink to="/users/3" >User 3</NavLink></li>
      <li><NavLink to="/users/4" >User 4</NavLink></li>
      <li><NavLink to="/users/5" >User 5</NavLink></li>
      </ul>
    </>
  )
}

const UserProfile = () => {
  const {userId} = useParams();
  return (<>
    <h2>User Profile</h2>
    <h3>User id: {userId}</h3>
    <h3><NavLink to="/users">Users List</NavLink></h3>
    <h3><NavLink to={"/users/"+userId+"/edit"}>Edit user</NavLink></h3>
    </>
  )
}

const EditUserPage = () => {
  const {userId} = useParams();
  const anotherUserId = +userId+1
  return (<>
    <h2>Edit User Profile</h2>
    <h3>Edit User: {userId}</h3>
    <h3><NavLink to="/users">Users List</NavLink></h3>
    <h3><NavLink to={"/users/"+userId+"/profile"}>Profile</NavLink></h3>
    <h3><NavLink to={"/users/"+anotherUserId}>Another User Page</NavLink></h3>
    </>
  )
}

export default App;