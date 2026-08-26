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

  test('renders the notifications title', () => {
    render(<Notifications />)

    expect(
      screen.getByText(/here is the list of notifications/i),
    ).toBeInTheDocument()
  })

  test('renders the close button', () => {
    render(<Notifications />)

    expect(
      screen.getByRole('button', { name: /close/i }),
    ).toBeInTheDocument()
  })

  test('renders three notification list items', () => {
    render(<Notifications notifications={notifications} />)

    expect(screen.getAllByRole('listitem')).toHaveLength(3)
    expect(screen.getByText('New course available')).toBeInTheDocument()
    expect(screen.getByText('New resume available')).toBeInTheDocument()
    expect(screen.getByText('Urgent requirement')).toBeInTheDocument()
  })

  test('renders no notification items when the prop is omitted', () => {
    render(<Notifications />)

    expect(screen.queryAllByRole('listitem')).toHaveLength(0)
  })

  test('logs a message when the close button is clicked', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {})
    render(<Notifications />)

    fireEvent.click(screen.getByRole('button', { name: /close/i }))

    expect(consoleSpy).toHaveBeenCalledWith('Close button has been clicked')
  })
})
