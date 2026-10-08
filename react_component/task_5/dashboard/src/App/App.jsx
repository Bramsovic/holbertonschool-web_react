import { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import BodySection from '../BodySection/BodySection.jsx'
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom.jsx'
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

class App extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown = (event) => {
    if (
      event.ctrlKey &&
      typeof event.key === 'string' &&
      event.key.toLowerCase() === 'h'
    ) {
      event.preventDefault()
      window.alert('Logging you out')
      this.props.logOut()
    }
  }

  render() {
    const { isLoggedIn = false, courses = coursesList } = this.props
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
          {isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList courses={courses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the School">
            <p>Holberton School News goes here</p>
          </BodySection>
          <Footer />
        </div>
      </Fragment>
    )
  }
}

App.defaultProps = {
  logOut: () => {},
}

App.propTypes = {
  logOut: PropTypes.func,
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
