//import logo from './logo.svg';
import { useState, useEffect } from 'react'
import './App.css';
import Main from './UI/Layout'
import Navbar from './UI/partial/Navbar'
import Home from './component/Home'
import Dashboard from './component/dashboard/Dashboard'
import Login from './component/auth/Login'

function App() {
  const [Homepage, setHomepage] = useState(false)
  const [LoginPage, setLoginPage] = useState(false)
  const [userDashboard, setuserDashboard] = useState(false)
  const [isAuthenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    const getAuth = localStorage.getItem('isAuth')
    if (getAuth === '1') {
      loginHandler()
    }
    console.log('well');
    
    return () => {
      console.log('....');
    };
  }, [])

const onLoginView = (data) => {
  setLoginPage(data)
  console.log(data);
  setHomepage(data)
}

const onlogOut = (data) => {
  setLoginPage(data)
  console.log(data);
  setAuthenticated(data)
  setuserDashboard(data)
  setHomepage(data)
  localStorage.removeItem('isAuth')
  localStorage.removeItem('auth_user')
}
const onHomeView = (data) => {
  setLoginPage(data)
  setHomepage(data)
  setuserDashboard(data)
}

const  onProfileView = (data) => {
  setuserDashboard(data)
  setHomepage(data)
}

const loginHandler = () => {
  setAuthenticated(true)
  setuserDashboard(true)
  setLoginPage(false)
  setHomepage(true)
}
const onActive = false
  return (
    <Main>
  <Navbar loginView={onLoginView} homeView={onHomeView} navActive={onActive} profileView={onProfileView} logOUt={onlogOut} isAuth={isAuthenticated} />
  { !Homepage && (<Home isActive={!Homepage} />) }
  { LoginPage && (<Login onLogin={loginHandler} />) }
 {userDashboard && <Dashboard/>}
    </Main>
  );
}


export default App;