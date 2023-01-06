import { AppBar, Avatar, Box, IconButton, Toolbar } from '@mui/material'
import { menuIcon, notificationIcon } from '../assets/icons'
import user1 from '../assets/users/user1.jpg'
import { Search } from './Search'

type sidebarProps = {
  handleOpenSidebar: () => void
}

export const Topbar = ( {handleOpenSidebar}: sidebarProps ) => {
  return (
      <AppBar
        elevation={0}
        sx={{
          left: {xs:0, md: 280},
          width: {xs: 'default', md: 'calc(100% - 280px)',
          backgroundColor: 'white'
          }
        }}
      >
        <Toolbar
          sx={{
            justifyContent: 'space-between'
          }}
        >
          <Box
            display='flex'
            flexDirection='row'
          >
            <IconButton
              onClick={handleOpenSidebar}
              sx={{
                display: {
                  xs: 'inline-flex',
                  md: 'none',
                  minWidth: '40px'
                }
              }}
              >  
              <img src={menuIcon} color='red' alt="menuIcon" />
            </IconButton>
            <Search />
          </Box>
          <Box
            display='flex'
            flexDirection='row'
          >
            <IconButton
              sx={{
                minWidth: '40px',
              }}
              >  
              <img src={notificationIcon} alt="menuIcon" />
            </IconButton>
            <Avatar
              src={user1}
              alt='user photo'
              sx={{
                ml: 2
              }}
            />
          </Box>
        </Toolbar>
      </AppBar>
  )
}