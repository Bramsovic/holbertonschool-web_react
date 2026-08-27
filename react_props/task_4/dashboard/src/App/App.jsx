import { Fragment } from 'react'
import PropTypes from 'prop-types'
import CourseList from '../CourseList/CourseList.jsx'
import Footer from '../Footer/Footer.jsx'
import Header from '../Header/Header.jsx'
import Login from '../Login/Login.jsx'
import Notifications from '../Notifications/Notifications.jsx'
import { getLatestNotification } from '../utils/utils.js'
import './App.css'

const coursesList = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
]

function App({ isLoggedIn = false, courses = coursesList }) {
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
        {isLoggedIn ? <CourseList courses={courses} /> : <Login />}
        <Footer />
      </div>
    </Fragment>
  )
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      credit: PropTypes.number.isRequired,
    }),
  ),
}

export default App
