import React from 'react'
import {
  AppBar as MuiAppBar,
  AppBarProps as MuiAppBarProps,
  Toolbar,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

export interface AppBarProps extends Omit<MuiAppBarProps, 'children'> {
  /** Event handler for click on menu "hamburger" button. */
  onMenuClick?: React.MouseEventHandler
  /** Optional children to render in place of document title */
  children?: React.ReactNode
}

/**
 * An application bar which shows the current document's title. For small screens, there is a
 * "hamburger" menu button displayed. If the component has any children, they are rendered within
 * the central Toolbar component in place of the document title.
 */
export const AppBar: React.FC<AppBarProps> = ({
  children,
  onMenuClick,
  ...appBarProps
}) => {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('lg'))

  return (
    <MuiAppBar {...appBarProps}>
      <Toolbar>
        {isSmallScreen && (
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={onMenuClick}
            edge="start"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}
        {children || (
          <Typography variant="h6" color="inherit">
            {document.title}
          </Typography>
        )}
      </Toolbar>
    </MuiAppBar>
  )
}

export default AppBar