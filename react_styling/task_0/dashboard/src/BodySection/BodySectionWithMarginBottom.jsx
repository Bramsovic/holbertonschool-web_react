import BodySection from './BodySection.jsx'
import './BodySectionWithMarginBottom.css'

function BodySectionWithMarginBottom(props) {
  return (
    <div className="bodySectionWithMargin">
      <BodySection {...props} />
    </div>
  )
}

export default BodySectionWithMarginBottom
