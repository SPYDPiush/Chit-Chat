import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home'; 
import { BrowserRouter,Link,Navigate,Route,Routes } from "react-router-dom";
import React,{ useContext } from 'react';
import { AuthContext } from './Context/Authcontext';



function App() {

  const {currentuser} = useContext(AuthContext)

  const ProtectRoute = ({children})=>{
    if(!currentuser){
      return(
        <Navigate to="/login" />
      )
    }
    return (
      children
    )

  }



  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<ProtectRoute ><Home /> </ProtectRoute>} />
          <Route path='login' element={<Login /> } />
          <Route path='Register' element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
