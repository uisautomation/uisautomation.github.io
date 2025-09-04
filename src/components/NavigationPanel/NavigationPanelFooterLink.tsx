import React from 'react'
import { Grid, Link } from '@mui/material'

export interface NavigationPanelFooterLinkProps {
  /** The href for the anchor */
  link: string
  /** The anchor's text */
  text: string
}

/**
 * A component that represents a footer link (eg, linking T&Cs).
 * It is designed to be used as a child component of the `NavigationPanelFooter` component.
 */
export const NavigationPanelFooterLink: React.FC<NavigationPanelFooterLinkProps> = ({
  link,
  text,
}) => {
  return (
    <Grid item>
      <Link href={link}>{text}</Link>
    </Grid>
  )
}

export default NavigationPanelFooterLink