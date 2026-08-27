import PropTypes from 'prop-types'

function NotificationItem({ type = 'default', html = null, value = '' }) {
  const style = { color: type === 'default' ? 'blue' : 'red' }

  if (html) {
    return (
      <li
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
        style={style}
      />
    )
  }

  return (
    <li data-notification-type={type} style={style}>
      {value}
    </li>
  )
}

NotificationItem.propTypes = {
  type: PropTypes.oneOf(['default', 'urgent']),
  html: PropTypes.shape({ __html: PropTypes.string }),
  value: PropTypes.string,
}

export default NotificationItem
