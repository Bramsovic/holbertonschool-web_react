import { fireEvent, render, screen } from '@testing-library/react'
import Notifications from './Notifications.jsx'

describe('Notifications', () => {
  const notifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    {
      id: 3,
      type: 'urgent',
      html: {
        __html: '<strong>Urgent requirement</strong> - complete by EOD',
      },
    },
  ]

  afterEach(() => {
    jest.restoreAllMocks()
  })

  test.each([
    { displayDrawer: false, notifications },
    { displayDrawer: true, notifications },
    { displayDrawer: true, notifications: [] },
  ])('always renders the notification title', (props) => {
    render(<Notifications {...props} />)

    expect(screen.getByText(/your notifications/i)).toBeInTheDocument()
  })

  test('hides the drawer content when displayDrawer is false', () => {
    render(
      <Notifications displayDrawer={false} notifications={notifications} />,
    )

    expect(
      screen.queryByRole('button', { name: /close/i }),
    ).not.toBeInTheDocument()
    expect(
      screen.queryByText(/here is the list of notifications/i),
    ).not.toBeInTheDocument()
    expect(screen.queryAllByRole('listitem')).toHaveLength(0)
  })

  test('shows the drawer content when displayDrawer is true', () => {
    render(<Notifications displayDrawer notifications={notifications} />)

    expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument()
    expect(
      screen.getByText(/here is the list of notifications/i),
    ).toBeInTheDocument()
    expect(screen.getAllByRole('listitem')).toHaveLength(3)
    expect(screen.getByText('New course available')).toBeInTheDocument()
    expect(screen.getByText('New resume available')).toBeInTheDocument()
    expect(screen.getByText('Urgent requirement')).toBeInTheDocument()
  })

  test('shows an empty state when the drawer is open without notifications', () => {
    render(<Notifications displayDrawer notifications={[]} />)

    expect(screen.getByText('No new notification for now')).toBeInTheDocument()
    expect(screen.queryAllByRole('listitem')).toHaveLength(0)
  })

  test('logs a message when the close button is clicked', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {})
    render(<Notifications displayDrawer notifications={notifications} />)

    fireEvent.click(screen.getByRole('button', { name: /close/i }))

    expect(consoleSpy).toHaveBeenCalledWith('Close button has been clicked')
  })
})
