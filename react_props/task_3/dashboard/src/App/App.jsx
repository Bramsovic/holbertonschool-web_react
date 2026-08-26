import { Fragment } from 'react'
import Footer from '../Footer/Footer.jsx'
import Header from '../Header/Header.jsx'
import Login from '../Login/Login.jsx'
import Notifications from '../Notifications/Notifications.jsx'
import { getLatestNotification } from '../utils/utils.js'
import './App.css'

function App() {
  const notificationsList = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    {
      id: 3,
      type: 'urgent',
      value: { __html: getLatestNotification() },
    },
  ]

  return (
    <Fragment>
      <div className="root-notifications">
        <Notifications notifications={notificationsList} />
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
