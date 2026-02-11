import './App.css'
import UserContextProvider from './context/UserContextProvider.jsx'
import Login from './components/login.jsx';
import Pagin from './components/Pagin.jsx';
function App() {

  return (
   <>
    <UserContextProvider>
      <h1>Context API</h1>
      <Login />
      <Pagin />
    </UserContextProvider>
   </>
  )
}

export default App
