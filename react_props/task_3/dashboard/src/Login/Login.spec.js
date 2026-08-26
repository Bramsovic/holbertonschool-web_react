import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from './Login.jsx'

describe('Login', () => {
  test('renders two labels, two inputs, and one button', () => {
    const { container } = render(<Login />)

    expect(container.querySelectorAll('label')).toHaveLength(2)
    expect(container.querySelectorAll('input')).toHaveLength(2)
    expect(container.querySelectorAll('button')).toHaveLength(1)
  })

  test('focuses each input when its related label is clicked', async () => {
    const user = userEvent.setup()
    render(<Login />)

    await user.click(screen.getByText('Email:'))
    expect(screen.getByLabelText('Email:')).toHaveFocus()

    await user.click(screen.getByText('Password:'))
    expect(screen.getByLabelText('Password:')).toHaveFocus()
  })
})
