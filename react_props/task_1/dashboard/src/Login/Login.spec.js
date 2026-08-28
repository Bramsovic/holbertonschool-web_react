import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from './Login'

describe('Login', () => {
  test('renders two labels, two inputs, and one button', () => {
    const { container } = render(<Login />)

    expect(container.querySelectorAll('label')).toHaveLength(2)
    expect(container.querySelectorAll('input')).toHaveLength(2)
    expect(container.querySelectorAll('button')).toHaveLength(1)
  })

  test('focuses each input when its related label is clicked', async () => {
    render(<Login />)

    const emailInput = screen.getByLabelText(/email/i)
    const passwordInput = screen.getByLabelText(/password/i)
    const emailLabel = screen.getByText(/^email:$/i)
    const passwordLabel = screen.getByText(/^password:$/i)

    await userEvent.click(emailLabel)
    expect(emailInput).toHaveFocus()

    await userEvent.click(passwordLabel)
    expect(passwordInput).toHaveFocus()
  })
})
