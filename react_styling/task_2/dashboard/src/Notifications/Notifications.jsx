import { Component } from 'react'
import PropTypes from 'prop-types'
import closeButton from '../assets/close-button.png'
import NotificationItem from './NotificationItem.jsx'

class Notifications extends Component {
  shouldComponentUpdate(nextProps) {
    const { notifications = [] } = this.props
    const { notifications: nextNotifications = [] } = nextProps

    return notifications.length !== nextNotifications.length
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`)
  }

  render() {
    const { displayDrawer = false, notifications = [] } = this.props

    return (
      <div className="relative mx-3 mt-2 md:absolute md:top-2 md:right-3 md:z-10 md:m-0 md:w-1/4">
        <div className="notification-title text-right">Your Notifications</div>

        {displayDrawer && (
          <div className="notification-items border-3 border-dashed border-[color:var(--main-color)] p-1.5">
            {notifications.length === 0 ? (
              <p>No new notification for now</p>
            ) : (
              <>
                <button
                  type="button"
                  aria-label="Close"
                  onClick={() => console.log('Close button has been clicked')}
                  className="float-right cursor-pointer border-0 bg-transparent p-0"
                >
                  <img className="block h-4 w-4" src={closeButton} alt="Close" />
                </button>

                <p>Here is the list of notifications</p>

                <ul className="list-[square] pl-6">
                  {notifications.map(({ id, type, value, html }) => {
                    const valueIsHtml =
                      typeof value === 'object' && value !== null
                    const htmlContent = html ?? (valueIsHtml ? value : null)

                    return (
                      <NotificationItem
                        key={id}
                        id={id}
                        markAsRead={this.markAsRead}
                        type={type}
                        html={htmlContent}
                        value={htmlContent ? '' : value}
                      />
                    )
                  })}
                </ul>
              </>
            )}
          </div>
        )}
      </div>
    )
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.oneOf(['default', 'urgent']).isRequired,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({ __html: PropTypes.string.isRequired }),
      ]),
      html: PropTypes.shape({ __html: PropTypes.string.isRequired }),
    }),
  ),
}

export default Notifications
