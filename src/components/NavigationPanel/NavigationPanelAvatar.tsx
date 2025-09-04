import React from 'react'
import { Box, Avatar, Typography, styled } from '@mui/material'
import { IProfile } from '@/types'

const ProfileBar = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(3),
  },
}))

const ProfileUsernameContainer = styled(Box)({
  display: 'flex',
})

const ProfileUsername = styled(Typography)({
  flexGrow: 1,
})

export interface NavigationPanelAvatarProps {
  /** An object representing the user's profile */
  profile: IProfile
}

/**
 * A component that represents a given user's profile. It is designed to be used as a child
 * component of the `NavigationPanel` component.
 */
export const NavigationPanelAvatar: React.FC<NavigationPanelAvatarProps> = ({
  profile,
}) => {
  return (
    <ProfileBar>
      <Avatar alt={profile.displayName} src={profile.avatarUrl}>
        {!profile.avatarUrl && profile.displayName[0]}
      </Avatar>
      <Typography variant="h6">{profile.displayName}</Typography>
      <ProfileUsernameContainer>
        <ProfileUsername variant="caption">{profile.username}</ProfileUsername>
      </ProfileUsernameContainer>
    </ProfileBar>
  )
}

export default NavigationPanelAvatar