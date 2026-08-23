import { render, screen } from '@testing-library/react'
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
})
