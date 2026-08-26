import PropTypes from 'prop-types'
import closeButton from '../assets/close-button.png'
import NotificationItem from './NotificationItem.jsx'
import './Notifications.css'

function Notifications({ notifications = [] }) {
  return (
    <div className="notification-items">
      <button
        type="button"
        aria-label="Close"
        onClick={() => console.log('Close button has been clicked')}
        style={{
          float: 'right',
          padding: 0,
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
        }}
      >
        <img src={closeButton} alt="Close" />
      </button>

      <p>Here is the list of notifications</p>

      <ul>
        {notifications.map(({ id, type, value, html }) => {
          const valueIsHtml = typeof value === 'object' && value !== null
          const htmlContent = html ?? (valueIsHtml ? value : null)

          return (
            <NotificationItem
              key={id}
              type={type}
              html={htmlContent}
              value={htmlContent ? '' : value}
            />
          )
        })}
      </ul>
    </div>
  )
}

Notifications.propTypes = {
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
