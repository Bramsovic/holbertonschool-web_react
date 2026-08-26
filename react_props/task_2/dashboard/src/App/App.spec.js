import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App.jsx'

describe('App', () => {
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

    expect(
      screen.getByText(/here is the list of notifications/i),
    ).toBeInTheDocument()
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
})
