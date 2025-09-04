import React from 'react'
import { Box, styled } from '@mui/material'

const NavigationPanelRoot = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
}))

export interface NavigationPanelProps {
  /** Child components to render within the navigation panel */
  children?: React.ReactNode
}

/**
 * Content of the side navigation drawer.
 */
export const NavigationPanel: React.FC<NavigationPanelProps> = ({ children }) => {
  return <NavigationPanelRoot>{children}</NavigationPanelRoot>
}

export default NavigationPanel