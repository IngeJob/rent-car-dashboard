import { useGlobalContext } from '../context/AppContext';
import { Box, Drawer, List, ListItem, ListItemButton, Link, Typography, ListItemIcon, useMediaQuery } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom';
import logo from '../assets/logo/logo.svg'
import logoName from '../assets/logo/Motiv..svg'
import slideBarItems from '../db/slideBarItems.json'
import authItems from '../db/authItems.json'

interface sidebarProps {
  onClose: () => void,
  open: boolean
}
  
export const SideBar = ({onClose, open}: sidebarProps) => {
  const { clickedLink, setClickedLink } = useGlobalContext()
  const handleClickedLink = (index: number) => {
    setClickedLink(index)
  }

  const smUp = useMediaQuery('(min-width:900px)');
  const content = 
    <>
      <Box
        sx={{
          display: 'flex',
        }}
      >
        <Box
          sx={{
            mr: '0.5rem'
          }}
        >
        <img 
          src={logo} 
          alt='logo' 
          />
        </Box>
        <img 
          src={logoName} 
          alt='logoName' 
        />
      </Box>
      <Box
        display='flex'
        height='100%'
        flexDirection='column'
        justifyContent='space-between'
      >   
        <List>
          {slideBarItems.map( ({title, href, icon}, index) =>   
            <Link
              component={RouterLink}
              to={href}
              underline='none' 
              color='grayDark2.main' 
              sx={{
                display: 'flex',
                alignItems: 'center',
                px: '6px'
              }}               
            >         
              <ListItem 
                key={title}
                disablePadding
                onClick={()=>{handleClickedLink(index)}}
                sx={{
                  mb: '10px',
                  backgroundColor: index===clickedLink?'primaryWhite.main':'grayWhite.main'
                }}
              >
                <ListItemButton
                  color='primary.main'
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    px: '6px'
                  }}
                >                                         
                  <ListItemIcon
                    sx={{
                      minWidth: '32px'
                    }}
                  >
                    <img src={icon} alt={title} />
                  </ListItemIcon>
                  <Typography
                    color='grayDark2.main'
                    fontSize='14px'
                    lineHeight='18px'
                  >
                    {title}
                  </Typography>
                </ListItemButton>
              </ListItem>
            </Link> 
          )} 
        </List>       
        <List>
          {authItems.map( ({title, href, icon}) =>           
            <ListItem 
              key={title}
              disablePadding
              sx={{
                mb: '2px',
              }}
            >
              <ListItemButton
                color='primary.main'
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  px: '6px'
                }}
              > 
                <Link
                  component={RouterLink}
                  to={href}
                  underline='none' 
                  color='grayDark2.main' 
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    px: '6px'
                  }}               
                >                          
                  <ListItemIcon
                    sx={{
                      minWidth: '32px'
                    }}
                  >
                    <img src={icon} alt={title} />
                  </ListItemIcon>
                  <Typography
                    color='grayDark2.main'
                    fontSize='14px'
                  >
                    {title}
                  </Typography>
                </Link> 
              </ListItemButton>
            </ListItem>
          )} 
        </List>
      </Box>
    </>

  if (smUp) {
    return (
      <Drawer
        anchor="left"
        open
        variant="permanent"
        PaperProps={{
          sx: {
            width: 280,
            backgroundColor: 'grayWhite.main',
            py: '30px',
            px: '24px', 
            display: 'flex',
            flexDirection: 'column'
          }
        }}
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor='left'
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: 280,
          backgroundColor: 'grayWhite.main',
          py: '30px',
          px: '24px', 
          display: 'flex',
          flexDirection: 'column'
        }
      }}
    >
      {content}
    </Drawer>
  )
}
