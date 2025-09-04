import React from 'react'
import { Box, Typography, styled } from '@mui/material'

const LogoPanel = styled(Box)(({ theme }) => ({
  ...theme.mixins.toolbar,
  alignItems: 'center',
  display: 'flex',
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
}))

const LogoContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  justifyContent: 'center',
})

const ProjectStatusTag = styled(Typography)(({ theme }) => ({
  backgroundColor: 'rgba(11, 121, 208, 0.2)',
  borderRadius: theme.spacing(0.5),
  color: '#0B79D0',
  fontSize: '0.75rem',
  fontWeight: 500,
  paddingBottom: theme.spacing(0.5),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  paddingTop: theme.spacing(0.5),
  textTransform: 'uppercase',
}))

export interface NavigationPanelLogoProps {
  /** The logo image's source */
  logoImage: string
  /** The logo image's alt text */
  logoImageAlt: string
  /** A badge indicating the status of the project (eg. "Alpha") */
  projectStatusTag: string
}

/**
 * A component that represents the University's logo and brand.
 * It is designed to be used as a child component of the `NavigationPanel` components.
 */
export const NavigationPanelLogo: React.FC<NavigationPanelLogoProps> = ({
  logoImage,
  logoImageAlt,
  projectStatusTag,
}) => {
  return (
    <LogoPanel>
      <LogoContainer>
        <img src={logoImage} height="36" width="36" alt={logoImageAlt} />
      </LogoContainer>
      <ProjectStatusTag variant="body1" color="inherit">
        {projectStatusTag}
      </ProjectStatusTag>
    </LogoPanel>
  )
}

export default NavigationPanelLogo