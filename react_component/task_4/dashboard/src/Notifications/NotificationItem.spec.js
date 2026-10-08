import { fireEvent, render, screen } from '@testing-library/react'
import NotificationItem from './NotificationItem.jsx'

describe('NotificationItem', () => {
  test('renders a default notification in blue', () => {
    const { container } = render(
      <NotificationItem type="default" value="New course available" />,
    )
    const item = container.querySelector('li')

    expect(item).toHaveStyle({ color: 'blue' })
    expect(item).toHaveAttribute('data-notification-type', 'default')
  })

  test('renders an urgent notification in red', () => {
    const { container } = render(
      <NotificationItem type="urgent" value="New resume available" />,
    )
    const item = container.querySelector('li')

    expect(item).toHaveStyle({ color: 'red' })
    expect(item).toHaveAttribute('data-notification-type', 'urgent')
  })

  test('renders notification HTML when the html prop is provided', () => {
    const { container } = render(
      <NotificationItem
        type="urgent"
        html={{ __html: '<strong>Urgent requirement</strong> - complete by EOD' }}
      />,
    )

    expect(container.querySelector('strong')).toHaveTextContent(
      'Urgent requirement',
    )
  })

  test.each([
    { value: 'New course available' },
    { html: { __html: '<strong>Urgent requirement</strong>' } },
  ])('calls markAsRead with its id on click (%j)', (content) => {
    const markAsRead = jest.fn()
    render(<NotificationItem id={42} markAsRead={markAsRead} {...content} />)

    fireEvent.click(screen.getByRole('listitem'))

    expect(markAsRead).toHaveBeenCalledTimes(1)
    expect(markAsRead).toHaveBeenCalledWith(42)
  })

})
