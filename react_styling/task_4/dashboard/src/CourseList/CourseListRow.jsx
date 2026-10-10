import PropTypes from 'prop-types'

function CourseListRow({
  isHeader = false,
  textFirstCell = '',
  textSecondCell = null,
}) {
  if (isHeader) {
    if (textSecondCell === null) {
      return (
        <tr className="bg-table-header/66">
          <th className="border border-gray-400 text-center" colSpan={2}>{textFirstCell}</th>
        </tr>
      )
    }

    return (
      <tr className="bg-table-header/66">
        <th className="border border-gray-400 text-center">{textFirstCell}</th>
        <th className="border border-gray-400 text-center">{textSecondCell}</th>
      </tr>
    )
  }

  return (
    <tr className="bg-table-rows/45">
      <td className="border border-gray-400 pl-2">{textFirstCell}</td>
      <td className="border border-gray-400 pl-2">{textSecondCell}</td>
    </tr>
  )
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default CourseListRow
