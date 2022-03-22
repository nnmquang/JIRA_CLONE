import React from 'react'
import { Switch,BrowserRouter } from 'react-router-dom';
import Loading from './components/Loading/Loading';
import LoginCyberBugs from './pages/LoginCyberBugs/LoginCyberBugs';
import { UserLoginTemplate } from './template/HomeTemplate/UserLoginTemplate';

function App() {
  return (
    <BrowserRouter>
    <Loading/>
    <Switch>
    <UserLoginTemplate exact path='/login' Component={LoginCyberBugs} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
