import { Box } from '@mui/material';
import { useState } from 'react'
import { SideBar } from '../components/Sidebar';
import { Topbar } from '../components/Topbar';

type Props = {
    children: JSX.Element,
};

export const DashboardLayout = ({children}: Props) => {
  const [ sidebarOpen, setSidebarOpen] = useState(false);
  const handleOpenSidebar = () => setSidebarOpen(true);
  const handleCloseSidebar = () => setSidebarOpen(false);
  
  return (
    <Box
      sx={{
        display: 'flex',
        flex: '1 1 auto',
        maxWidth: '100%',
        pt: '64px',
        pl: {xs: 0, md:'280px'},
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flex: '1 1 auto',
          width: '100%',
        }}
      >
        {children}
      </Box>
      <Topbar handleOpenSidebar={handleOpenSidebar} />
      <SideBar  onClose={handleCloseSidebar} open={sidebarOpen} />
    </Box>
  )
}