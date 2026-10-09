import WithLogging from '../HOC/WithLogging.jsx'
import PropTypes from 'prop-types'
import CourseListRow from './CourseListRow.jsx'

function CourseList({ courses = [] }) {
  return (
    <div className="mx-auto my-30 w-4/5 overflow-x-auto">
      <table id="CourseList" className="w-full border-collapse">
        <thead>
          {courses.length === 0 ? (
            <CourseListRow isHeader textFirstCell="No course available yet" />
          ) : (
            <>
              <CourseListRow isHeader textFirstCell="Available courses" />
              <CourseListRow
                isHeader
                textFirstCell="Course name"
                textSecondCell="Credit"
              />
            </>
          )}
        </thead>
        <tbody>
          {courses.map(({ id, name, credit }) => (
            <CourseListRow
              key={id}
              textFirstCell={name}
              textSecondCell={credit}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

CourseList.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      credit: PropTypes.number.isRequired,
    }),
  ),
}

const CourseListWithLogging = WithLogging(CourseList)

export default CourseListWithLogging
