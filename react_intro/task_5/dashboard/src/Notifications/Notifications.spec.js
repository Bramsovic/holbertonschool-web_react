import { fireEvent, render, screen } from '@testing-library/react'
import Notifications from './Notifications.jsx'

describe('Notifications', () => {
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
    render(<Notifications />)

    expect(screen.getAllByRole('listitem')).toHaveLength(3)
  })

  test('logs a message when the close button is clicked', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {})
    render(<Notifications />)

    fireEvent.click(screen.getByRole('button', { name: /close/i }))

    expect(consoleSpy).toHaveBeenCalledWith('Close button has been clicked')
  })
})
