import React, { useState } from 'react'
import PropTypes from 'prop-types'

import {
  AppBar,
  Tabs,
  Tab,
  Slide,
  Typography,
  useScrollTrigger,
} from '@material-ui/core'

const tabs = [
  { id: 'myProfile', name: 'My Profile' },
  { id: 'startGame', name: 'Start Game' },
  { id: 'stats', name: 'Stats' },
]

const HideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger()
  console.log(trigger)
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
}

const Navbar = ({ onSelectedTab }) => {
  const [selectedTab, setSelectedTab] = useState(0)
  const handleChange = (_, tab) => {
    setSelectedTab(tab)
    onSelectedTab(tabs[tab].id)
  }
  return (
    <div>
      <HideOnScroll>
        <AppBar position="fixed">
          <Tabs value={selectedTab} centered onChange={handleChange}>
            {tabs.map(({ id, name }) => (
              <Tab key={id} label={name}></Tab>
            ))}
          </Tabs>
        </AppBar>
      </HideOnScroll>
      <HideOnScroll>
        <AppBar position="fixed">
          <Tabs value={selectedTab} centered onChange={handleChange}>
            {tabs.map(({ id, name }) => (
              <Tab key={id} label={name}></Tab>
            ))}
          </Tabs>
        </AppBar>
      </HideOnScroll>
    </div>
  )
}

Navbar.propTypes = {
  onSelectedTab: PropTypes.func,
}

export default Navbar
