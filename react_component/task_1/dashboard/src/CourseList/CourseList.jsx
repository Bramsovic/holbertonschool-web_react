import PropTypes from 'prop-types'
import CourseListRow from './CourseListRow.jsx'
import './CourseList.css'

function CourseList({ courses = [] }) {
  if (courses.length === 0) {
    return (
      <table id="CourseList">
        <thead>
          <CourseListRow
            isHeader
            textFirstCell="No course available yet"
          />
        </thead>
        <tbody />
      </table>
    )
  }

  return (
    <table id="CourseList">
      <thead>
        <CourseListRow isHeader textFirstCell="Available courses" />
        <CourseListRow
          isHeader
          textFirstCell="Course name"
          textSecondCell="Credit"
        />
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

export default CourseList
