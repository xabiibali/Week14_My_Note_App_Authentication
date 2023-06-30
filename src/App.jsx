
import Login from './components/users/Login'
import Register from './components/users/Register'
import Profile from './components/users/Profile'
import AddNote from './components/AddNote'
import EditNote from './components/EditNote'
import Notes from './components/Notes'
import { Link, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import PrivateRoute from './PrivateRoute'



function App() {
 const [auth, setAuth] = useState(null)
  const token = Cookies.get("token")
 useEffect(() => {
  if(token) {
    setAuth(token)
  }
 }, [auth])

const handleLogOut = () =>{
  try {
    Cookies.remove('token');
    setAuth(null);
    window.location.reload();
    navigate('/user/login');
  } catch (error) {
    console.log('Logout error:', error);
    
  }
}


  return (
    <div className="bg-white ">
      <header className="bg-blue-900 py-10">
        <nav className="h-full">
          <div className="container mx-auto flex justify-between items-center">
            <h3 className="text-2xl font-bold text-white">May Notes</h3>
            <ul className="hidden md:flex space-x-6">
              <li>
                <Link
                  to="/"
                  className="bg-orange-400 px-4 py-2 rounded-3xl hover:bg-red-500 text-white"
                >
                  Home
                </Link>
              </li>
              {auth && (

             
                <>
                  <li>
                    <Link
                      to="/addNote"
                      className="bg-orange-400 px-4 py-2 rounded-3xl hover:bg-red-500 text-white"
                    >
                      Add Note
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/profile"
                      className="bg-orange-400 px-4 py-2 rounded-3xl hover:bg-red-500 text-white"
                    >
                      Profile
                    </Link>
                  </li>
            
                 
                  <li>
                    <Link
                    onClick={handleLogOut}
                    className="bg-orange-400 px-4 py-2 rounded-3xl hover:bg-red-500 text-white"
                    >
                      Logout
                    </Link>
                  </li>

                  </>
                  )}

                  {!auth &&(
                      <>
            
                  <li>
                    <Link
                      to="/user/login"
                      className="bg-orange-400 px-4 py-2 rounded-3xl hover:bg-red-500 text-white"
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/user/register"
                      className="bg-orange-400 px-4 py-2 rounded-3xl hover:bg-red-500 text-white"
                    >
                      Register
                    </Link>
                  </li>

                 
                </>
          )}
            </ul>
          </div>
        </nav>
      </header>

      <Routes>
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/register" element={<Register/>} />


        <Route path="/addNote" element={<PrivateRoute />}>
        <Route path="/addNote" element={<AddNote />} />
       </Route>

       <Route path="/profile" element={<PrivateRoute />}>
           <Route path="/profile" element={<Profile />} />
        </Route>


       <Route path="/edit/:id" element={<PrivateRoute />}>
        <Route path="/edit/:id" element={<EditNote />} />
        </Route>
    
          
        <Route path="/" element={<Notes />} />
      </Routes>
    </div>
  );
}

export default App;







