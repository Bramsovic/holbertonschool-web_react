import { render, screen } from '@testing-library/react'
import CourseList from './CourseList.jsx'

describe('CourseList', () => {
  const courses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ]

  test('renders five rows when courses are provided', () => {
    render(<CourseList courses={courses} />)

    expect(screen.getAllByRole('row')).toHaveLength(5)
  })

  test('renders one row when the courses array is empty', () => {
    render(<CourseList courses={[]} />)

    expect(screen.getAllByRole('row')).toHaveLength(1)
    expect(screen.getByText('No course available yet')).toBeInTheDocument()
  })
})
