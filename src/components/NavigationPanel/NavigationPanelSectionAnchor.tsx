import React from 'react'
import { ListItem, ListItemText } from '@mui/material'

export interface NavigationPanelSectionAnchorProps {
  /** Renders as data-role on the component */
  dataRole: string
  /** The href for the anchor */
  link: string
  /** The anchor's text */
  text: string
}

/**
 * A component that renders a clickable link for navigation to another URL.
 * It is designed to be used as a child component of the `NavigationPanelSection` component.
 */
export const NavigationPanelSectionAnchor: React.FC<NavigationPanelSectionAnchorProps> = ({
  dataRole,
  link,
  text,
}) => {
  return (
    <ListItem button component="a" href={link} data-role={dataRole}>
      <ListItemText primary={text} />
    </ListItem>
  )
}

export default NavigationPanelSectionAnchor