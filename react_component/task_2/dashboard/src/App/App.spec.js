import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App.jsx'

describe('App', () => {
  test('renders the Login form when isLoggedIn is false', () => {
    render(<App isLoggedIn={false} />)

    expect(screen.getByLabelText(/^email:$/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/^password:$/i)).toBeInTheDocument()
    expect(screen.queryByRole('table')).not.toBeInTheDocument()
  })

  test('renders the CourseList table when isLoggedIn is true', () => {
    render(<App isLoggedIn />)

    expect(screen.getByRole('table')).toHaveAttribute('id', 'CourseList')
    expect(screen.queryByLabelText(/^email:$/i)).not.toBeInTheDocument()
  })

  test('renders the School Dashboard heading', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { level: 1, name: /school dashboard/i }),
    ).toBeInTheDocument()
  })

  test('renders the body and footer text', () => {
    render(<App />)

    expect(
      screen.getByText(/login to access the full dashboard/i),
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        new RegExp(
          `copyright ${new Date().getFullYear()} - holberton school`,
          'i',
        ),
      ),
    ).toBeInTheDocument()
  })

  test('renders the Holberton logo', () => {
    render(<App />)

    expect(screen.getByAltText(/holberton logo/i)).toBeInTheDocument()
  })

  test('renders the notifications component', () => {
    render(<App />)

    expect(screen.getByText(/your notifications/i)).toBeInTheDocument()
    expect(
      screen.queryByText(/here is the list of notifications/i),
    ).not.toBeInTheDocument()
  })

  test('focuses each input when its label is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByText(/^email:$/i))
    expect(screen.getByLabelText(/^email:$/i)).toHaveFocus()

    await user.click(screen.getByText(/^password:$/i))
    expect(screen.getByLabelText(/^password:$/i)).toHaveFocus()
  })

  test('renders two input elements', () => {
    const { container } = render(<App />)

    expect(container.querySelectorAll('input')).toHaveLength(2)
    expect(screen.getByLabelText(/^email:$/i)).toHaveAttribute('type', 'email')
    expect(screen.getByLabelText(/^password:$/i)).toHaveAttribute(
      'type',
      'password',
    )
  })

  test('renders the Email and Password labels', () => {
    const { container } = render(<App />)

    expect(container.querySelectorAll('label')).toHaveLength(2)
    expect(screen.getByText(/^email:$/i)).toBeInTheDocument()
    expect(screen.getByText(/^password:$/i)).toBeInTheDocument()
  })

  test('renders the OK button', () => {
    render(<App />)

    expect(screen.getByRole('button', { name: /^ok$/i })).toBeInTheDocument()
  })

  test('renders the empty course message for a logged-in user without courses', () => {
    render(<App isLoggedIn courses={[]} />)

    expect(screen.getByText('No course available yet')).toBeInTheDocument()
    expect(screen.getAllByRole('row')).toHaveLength(1)
  })
})

describe('App logout shortcut', () => {
  let alertMock

  beforeEach(() => {
    alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {})
  })

  afterEach(() => {
    alertMock.mockRestore()
  })

  test('calls logOut once when Control and h are pressed', () => {
    const logOut = jest.fn()
    render(<App logOut={logOut} />)

    fireEvent.keyDown(document, { key: 'h', ctrlKey: true })

    expect(logOut).toHaveBeenCalledTimes(1)
  })

  test('alerts Logging you out when Control and h are pressed', () => {
    render(<App />)

    fireEvent.keyDown(document, { key: 'h', ctrlKey: true })

    expect(alertMock).toHaveBeenCalledWith('Logging you out')
    expect(alertMock).toHaveBeenCalledTimes(1)
  })

  test('ignores other keys and h without Control', () => {
    const logOut = jest.fn()
    render(<App logOut={logOut} />)

    fireEvent.keyDown(document, { key: 'h' })
    fireEvent.keyDown(document, { key: 'a', ctrlKey: true })
    fireEvent.keyDown(document, { ctrlKey: true })

    expect(logOut).not.toHaveBeenCalled()
    expect(alertMock).not.toHaveBeenCalled()
  })

  test('removes the keyboard listener when unmounted', () => {
    const logOut = jest.fn()
    const { unmount } = render(<App logOut={logOut} />)

    unmount()
    fireEvent.keyDown(document, { key: 'h', ctrlKey: true })

    expect(logOut).not.toHaveBeenCalled()
    expect(alertMock).not.toHaveBeenCalled()
  })
})
