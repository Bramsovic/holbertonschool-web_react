import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  test('renders the Holberton logo', () => {
    render(<Header />)

    const logo = screen.getByAltText('holberton logo')

    expect(logo).toBeInTheDocument()
    expect(logo.tagName).toBe('IMG')
  })

  test('renders an h1 with the correct text', () => {
    const { container } = render(<Header />)

    const heading = container.querySelector('h1')

    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent(/^School dashboard$/)
  })
})
