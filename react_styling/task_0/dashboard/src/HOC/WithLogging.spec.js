import { Component } from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import WithLogging from './WithLogging.jsx'
import App from '../App/App.jsx'

class MockApp extends Component {
  render() {
    return <h1>Hello from Mock App Component</h1>
  }
}

const LoggedMockApp = WithLogging(MockApp)

describe('WithLogging', () => {
  let consoleSpy

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {})
  })

  afterEach(() => {
    cleanup()
    consoleSpy.mockRestore()
  })

  test('renders the wrapped component heading', () => {
    render(<LoggedMockApp />)

    expect(screen.getByRole('heading', {
      name: 'Hello from Mock App Component',
    })).toBeInTheDocument()
  })

  test('logs the component name on mount and before unmount', () => {
    const { unmount } = render(<LoggedMockApp />)

    expect(consoleSpy).toHaveBeenCalledTimes(1)
    expect(consoleSpy).toHaveBeenNthCalledWith(1, 'Component MockApp is mounted')

    unmount()

    expect(consoleSpy).toHaveBeenCalledTimes(2)
    expect(consoleSpy).toHaveBeenNthCalledWith(2, 'Component MockApp is going to unmount')
  })

  test('sets a descriptive displayName', () => {
    expect(LoggedMockApp.displayName).toBe('WithLogging(MockApp)')
  })

  test('uses Component as the fallback for an anonymous component', () => {
    const Anonymous = WithLogging(() => <p>Anonymous</p>)
    const { unmount } = render(<Anonymous />)

    expect(Anonymous.displayName).toBe('WithLogging(Component)')
    expect(consoleSpy).toHaveBeenCalledWith('Component Component is mounted')

    unmount()
    expect(consoleSpy).toHaveBeenCalledWith('Component Component is going to unmount')
  })

  test('forwards props to the wrapped component', () => {
    const LoggedHeading = WithLogging('h1')
    render(<LoggedHeading title="Forwarded title">Forwarded child</LoggedHeading>)

    expect(screen.getByRole('heading', { name: 'Forwarded child' })).toHaveAttribute(
      'title', 'Forwarded title',
    )
  })

  test('logs Login and CourseList lifecycles when isLoggedIn changes', () => {
    const { rerender } = render(<App isLoggedIn={false} />)
    expect(consoleSpy).toHaveBeenCalledWith('Component Login is mounted')
    consoleSpy.mockClear()

    rerender(<App isLoggedIn />)
    expect(consoleSpy.mock.calls).toEqual([
      ['Component Login is going to unmount'],
      ['Component CourseList is mounted'],
    ])
    consoleSpy.mockClear()

    rerender(<App isLoggedIn={false} />)
    expect(consoleSpy.mock.calls).toEqual([
      ['Component CourseList is going to unmount'],
      ['Component Login is mounted'],
    ])
  })
})
