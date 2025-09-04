import React from 'react'
import { Box, Typography, Grid, Link, styled } from '@mui/material'

const BottomPanel = styled(Box)(({ theme }) => ({
  color: theme.palette.text.secondary,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'left',
  paddingBottom: theme.spacing(2),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  paddingTop: theme.spacing(2),
}))

export interface NavigationPanelFooterProps {
  /** Optional child components like footer links */
  children?: React.ReactNode
}

/**
 * A component that is used at the bottom of the navigation panel to display who it was made by.
 * It can contain additional `NavigationPanelFooterLink` components.
 * It is designed to be used as a child component of the `NavigationPanel` component.
 */
export const NavigationPanelFooter: React.FC<NavigationPanelFooterProps> = ({
  children,
}) => {
  const currentYear = new Date().getFullYear()

  return (
    <BottomPanel>
      <Typography variant="caption">
        Made by{' '}
        <Link href="https://guidebook.devops.uis.cam.ac.uk/en/latest/">
          UIS DevOps
        </Link>
      </Typography>
      <Typography variant="caption">
        © {currentYear} University of Cambridge
      </Typography>
      <Typography variant="caption">
        <Grid container justifyContent="space-between">
          {children}
        </Grid>
      </Typography>
    </BottomPanel>
  )
}

export default NavigationPanelFooter