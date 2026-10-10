import { PureComponent } from 'react'
import PropTypes from 'prop-types'

class NotificationItem extends PureComponent {
  render() {
    const { type = 'default', html = null, value = '', id, markAsRead } = this.props
    const colorClass = type === 'default'
      ? 'text-[color:var(--default-notification-item)]'
      : 'text-[color:var(--urgent-notification-item)]'
    const className = `${colorClass} border-b border-gray-600 px-2 py-3 text-lg min-[912px]:border-0 min-[912px]:p-0 min-[912px]:text-base`

    if (html) {
      return (
        <li
          onClick={() => markAsRead(id)}
          data-notification-type={type}
          dangerouslySetInnerHTML={html}
          className={className}
        />
      )
    }

    return (
      <li
        onClick={() => markAsRead(id)}
        data-notification-type={type}
        className={className}
      >
        {value}
      </li>
    )
  }
}

NotificationItem.defaultProps = {
  markAsRead: () => {},
}

NotificationItem.propTypes = {
  id: PropTypes.number,
  markAsRead: PropTypes.func,
  type: PropTypes.oneOf(['default', 'urgent']),
  html: PropTypes.shape({ __html: PropTypes.string }),
  value: PropTypes.string,
}

export default NotificationItem
