import { useState } from 'react';
import './App.css';
import SiderBar from './component/Sidebar/Sidebar';
import SideBody from './component/Sidebody/Sidebody';
import Login from './container/Login/Login';
import { useSelector } from 'react-redux';


function App() {

  const { isLogin } = useSelector(state => state.loginReducer);

  const [isSidebarHidden, setIsSidebarHidden] = useState(false);

  const handleToggle = () => {
    setIsSidebarHidden(!isSidebarHidden);

  }


  if (!isLogin) {
    return (
      <Login />
    )
  }
  else {
    return (
      <>
        <SiderBar open={isSidebarHidden} />
        <SideBody click={handleToggle} />
      </>
    )
  }
}

export default App
