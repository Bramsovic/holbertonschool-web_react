import { render } from '@testing-library/react'
import Footer from './Footer.jsx'

test('renders the current year and Holberton School copyright', () => {
  const { container } = render(<Footer />)

  expect(container.querySelector('p')).toHaveTextContent(
    `Copyright ${new Date().getFullYear()} - Holberton School`,
  )
})
