import { render, screen } from '@testing-library/react'
import BodySection from './BodySection.jsx'

describe('BodySection', () => {
  test('renders the title prop as a level two heading', () => {
    render(<BodySection title="test" />)

    expect(screen.getByRole('heading', { level: 2, name: 'test' })).toBeInTheDocument()
  })

  test.each([0, 1, 3])('renders %i children inside the section', (count) => {
    const { container } = render(
      <BodySection title="test">
        {Array.from({ length: count }, (_, index) => (
          <p key={index}>Child {index + 1}</p>
        ))}
      </BodySection>,
    )

    const section = container.querySelector('.bodySection')
    expect(section).toBeInTheDocument()
    expect(section.querySelectorAll('p')).toHaveLength(count)
    for (let index = 0; index < count; index += 1) {
      expect(section).toContainElement(screen.getByText(`Child ${index + 1}`))
    }
  })
})
