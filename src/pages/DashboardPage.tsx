import { Box } from "@mui/material"
import { DashboardLayout } from "../Layouts/DashboardLayout"
import { Statistics } from "../components/Statistics";
import { Status } from "../components/Status";
import { RecommendedList } from "../components/RecommendedList";

export const DashboardPage = () => {
  return (
    <DashboardLayout>
      <Box
        display='flex'
        flexDirection='column'
        py={2}
        px={1}
        sx={{
          backgroundColor: '#F5F4F6'
        }}
      >
        <Status />
        <Statistics />
        <RecommendedList />
      </Box>
    </DashboardLayout>
  )
}
