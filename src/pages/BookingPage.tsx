import { useState } from "react"
import { Box, IconButton, Typography } from "@mui/material"
import { BookingList } from "../components/BookingList"
import { DashboardLayout } from "../Layouts/DashboardLayout"
import { dashboardIcon, dashboardWhiteIcon, filterIcon, filterWhiteIcon } from "../assets/icons"
import DropDown from "../components/DropDown"

export const BookingPage = () => {
  const [ menu, setMenu ] = useState(false)
  const handleMenu = () => setMenu(true)
  const handleFilter = () => setMenu(false)

  return (
    <DashboardLayout>
      <Box
        display='flex'
        p={3}
        flexDirection='column'
        sx={{
          backgroundColor: '#F5F4F6'
        }}
      >
        <Typography
          fontSize='30px'
          fontWeight='bold'
          mb={2}
        >
          Booking
        </Typography>
        <Box
          display='flex'
          justifyContent='space-between'
          mb={1}
        >
          <Box
            display='flex'
            sx={{
              visibility: menu?'hidden':'visible'
            }}
          >
            <DropDown name='Open' />            
            <DropDown name={'Toyota'} />
          </Box>
          <Box>
            <IconButton
              onClick={handleMenu}
              sx={{
                width: '40px',
                height: '40px',
                mr: '0.5rem',
                backgroundColor: menu?'primary.main':'white'
              }}
            >
              <img src={menu?dashboardWhiteIcon:dashboardIcon} alt="heartIcon" />
            </IconButton>
            <IconButton
              onClick={handleFilter}
              sx={{
                width: '40px',
                height: '40px',
                mr: '0.5rem',
                backgroundColor: menu?'white':'primary.main'
              }}
            >
              <img src={menu?filterIcon:filterWhiteIcon} alt="heartIcon" />
            </IconButton>
          </Box>
        </Box>
        <BookingList />
      </Box>
    </DashboardLayout>
  )
}
