import React from 'react'
import { ListItem, ListItemText } from '@mui/material'
import { Link } from 'react-router-dom'

export interface NavigationPanelSectionLinkProps {
  /** Renders as data-role on the component */
  dataRole: string
  /** The route to the new location */
  to: string
  /** Whether or not the link is in selected mode */
  selected: boolean
  /** The link's text */
  text: string
}

/**
 * A component that renders a clickable link for internal navigation to another page in the application.
 * Wraps the `Link` component from the `react-router-dom` library.
 * It is designed to be used as a child component of the `NavigationPanelSection` component.
 */
export const NavigationPanelSectionLink: React.FC<NavigationPanelSectionLinkProps> = ({
  dataRole,
  to,
  selected,
  text,
}) => {
  return (
    <ListItem
      button
      component={Link}
      to={to}
      selected={selected}
      data-role={dataRole}
      data-to={to}
      data-selected={selected.toString()}
    >
      <ListItemText primary={text} />
    </ListItem>
  )
}

export default NavigationPanelSectionLink