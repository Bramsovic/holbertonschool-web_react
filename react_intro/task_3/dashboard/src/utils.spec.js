import {
  getCurrentYear,
  getFooterCopy,
  getLatestNotification,
} from './utils.js'

describe('utils', () => {
  test('getCurrentYear returns the current year', () => {
    expect(getCurrentYear()).toBe(new Date().getFullYear())
  })

  test('getFooterCopy returns the correct copy for the index page', () => {
    expect(getFooterCopy(true)).toBe('Holberton School')
  })

  test('getFooterCopy returns the correct copy for the main dashboard', () => {
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard')
  })

  test('getLatestNotification returns the latest notification', () => {
    expect(getLatestNotification()).toBe(
      '<strong>Urgent requirement</strong> - complete by EOD',
    )
  })
})
