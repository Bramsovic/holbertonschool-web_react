import { render, screen } from '@testing-library/react'
import CourseListRow from './CourseListRow.jsx'

describe('CourseListRow', () => {
  test('renders one header cell spanning two columns', () => {
    render(
      <table>
        <thead>
          <CourseListRow isHeader textFirstCell="Available courses" />
        </thead>
      </table>,
    )

    const headers = screen.getAllByRole('columnheader')
    expect(headers).toHaveLength(1)
    expect(headers[0]).toHaveAttribute('colspan', '2')
  })

  test('renders two header cells when both texts are provided', () => {
    render(
      <table>
        <thead>
          <CourseListRow
            isHeader
            textFirstCell="Course name"
            textSecondCell="Credit"
          />
        </thead>
      </table>,
    )

    expect(screen.getAllByRole('columnheader')).toHaveLength(2)
  })

  test('renders two data cells inside a row', () => {
    const { container } = render(
      <table>
        <tbody>
          <CourseListRow textFirstCell="ES6" textSecondCell={60} />
        </tbody>
      </table>,
    )

    const row = container.querySelector('tr')
    expect(row).toBeInTheDocument()
    expect(row.querySelectorAll('td')).toHaveLength(2)
  })
})
