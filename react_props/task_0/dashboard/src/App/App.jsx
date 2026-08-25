import { Fragment } from 'react'
import Footer from '../Footer/Footer.jsx'
import Header from '../Header/Header.jsx'
import Login from '../Login/Login.jsx'
import Notifications from '../Notifications/Notifications.jsx'
import './App.css'

function App() {
  return (
    <Fragment>
      <div className="root-notifications">
        <Notifications />
      </div>

      <div className="App">
        <Header />
        <Login />
        <Footer />
      </div>
    </Fragment>
  )
}

export default App
