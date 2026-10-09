import { render, screen, within } from '@testing-library/react'
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom.jsx'

describe('BodySectionWithMarginBottom', () => {
  test('renders a div with the bodySectionWithMargin class', () => {
    const { container } = render(<BodySectionWithMarginBottom title="test" />)

    expect(container.firstChild.tagName).toBe('DIV')
    expect(container.firstChild).toHaveClass('bodySectionWithMargin')
  })

  test('renders BodySection and forwards its title and children', () => {
    const { container } = render(
      <BodySectionWithMarginBottom title="test">
        <p>First child</p>
        <p>Second child</p>
      </BodySectionWithMarginBottom>,
    )

    const section = container.querySelector('.bodySectionWithMargin > .bodySection')
    expect(section).toBeInTheDocument()
    expect(within(section).getByRole('heading', { level: 2, name: 'test' })).toBeInTheDocument()
    expect(section).toContainElement(screen.getByText('First child'))
    expect(section).toContainElement(screen.getByText('Second child'))
  })
})
