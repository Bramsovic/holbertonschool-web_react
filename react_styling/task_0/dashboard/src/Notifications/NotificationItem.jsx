import { PureComponent } from 'react'
import PropTypes from 'prop-types'

class NotificationItem extends PureComponent {
  render() {
    const { type = 'default', html = null, value = '', id, markAsRead } = this.props
    const style = { color: type === 'default' ? 'blue' : 'red' }

    if (html) {
      return (
        <li
          onClick={() => markAsRead(id)}
          data-notification-type={type}
          dangerouslySetInnerHTML={html}
          style={style}
        />
      )
    }

    return (
      <li
        onClick={() => markAsRead(id)}
        data-notification-type={type}
        style={style}
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
