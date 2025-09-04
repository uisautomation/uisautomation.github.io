Complete NavigationPanel example:

```jsx
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { NavigationPanel } from './NavigationPanel'
import { NavigationPanelLogo } from './NavigationPanelLogo'
import { NavigationPanelAvatar } from './NavigationPanelAvatar'
import { NavigationPanelSection } from './NavigationPanelSection'
import { NavigationPanelSectionAnchor } from './NavigationPanelSectionAnchor'
import { NavigationPanelSectionLink } from './NavigationPanelSectionLink'
import { NavigationPanelFooter } from './NavigationPanelFooter'
import { NavigationPanelFooterLink } from './NavigationPanelFooterLink'

const profile = {
  displayName: "Mike Bamford",
  avatarUrl: "https://via.placeholder.com/40/86a3c3/444444",
  username: "mb2174"
}

const logoImage = "https://www.hoart.cam.ac.uk/images/university-of-cambridge-logo/image_preview"

<MemoryRouter>
  <NavigationPanel>
    <NavigationPanelLogo 
      logoImage={logoImage} 
      logoImageAlt="Subject Moderation" 
      projectStatusTag="Alpha" 
    />
    <NavigationPanelAvatar profile={profile} />
    <NavigationPanelSection dataRole="example-section">
      <NavigationPanelSectionAnchor 
        dataRole="example-anchor" 
        link="#" 
        text="Example Navigation Panel Anchor"
      />
      <NavigationPanelSectionLink
        dataRole="example-link"
        to="/dashboard"
        selected={true}
        text="Dashboard"
      />
    </NavigationPanelSection>
    <NavigationPanelFooter>
      <NavigationPanelFooterLink 
        link="https://gitlab.developers.cam.ac.uk/uis/devops/uga/smi/wikis/About" 
        text="About"
      />
    </NavigationPanelFooter>
  </NavigationPanel>
</MemoryRouter>
```