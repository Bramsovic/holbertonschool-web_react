import { render, screen } from '@testing-library/react'
import Header from './Header.jsx'

describe('Header', () => {
  test('renders the Holberton logo', () => {
    render(<Header />)

    expect(
      screen.getByRole('img', { name: /holberton logo/i }),
    ).toBeInTheDocument()
  })

  test('renders the School dashboard heading', () => {
    render(<Header />)

    expect(
      screen.getByRole('heading', { level: 1, name: 'School dashboard' }),
    ).toBeInTheDocument()
  })
})
