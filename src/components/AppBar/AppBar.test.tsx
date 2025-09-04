import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { AppBar } from './AppBar'

const theme = createTheme()

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>)
}

describe('AppBar', () => {
  beforeEach(() => {
    document.title = 'Test Title'
  })

  it('renders document title by default', () => {
    renderWithTheme(<AppBar position="static" />)
    expect(screen.getByText('Test Title')).toBeInTheDocument()
  })

  it('renders custom children instead of title', () => {
    renderWithTheme(
      <AppBar position="static">
        <div>Custom Content</div>
      </AppBar>
    )
    expect(screen.getByText('Custom Content')).toBeInTheDocument()
    expect(screen.queryByText('Test Title')).not.toBeInTheDocument()
  })

  it('passes through AppBar props', () => {
    const { container } = renderWithTheme(
      <AppBar position="fixed" color="secondary" />
    )
    const appBar = container.querySelector('.MuiAppBar-root')
    expect(appBar).toHaveClass('MuiAppBar-positionFixed')
    expect(appBar).toHaveClass('MuiAppBar-colorSecondary')
  })
})