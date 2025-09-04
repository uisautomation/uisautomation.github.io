import React from 'react'
import { List } from '@mui/material'

export interface NavigationPanelSectionProps {
  /** Renders as data-role on the component */
  dataRole?: string
  /** Child navigation components */
  children?: React.ReactNode
}

/**
 * A component that groups a set of navigation links in the navigation panel.
 * It is designed to be used as a child component of the `NavigationPanel` component.
 */
export const NavigationPanelSection: React.FC<NavigationPanelSectionProps> = ({
  dataRole,
  children,
}) => {
  return (
    <List component="nav" data-role={dataRole}>
      {children}
    </List>
  )
}

export default NavigationPanelSection