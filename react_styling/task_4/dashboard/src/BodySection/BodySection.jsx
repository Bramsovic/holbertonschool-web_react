import PropTypes from 'prop-types'

function BodySection({ title, children }) {
  return (
    <div className="bodySection text-base">
      <h2 className="text-xl font-bold">{title}</h2>
      {children}
    </div>
  )
}

BodySection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}

export default BodySection
