import { useState } from 'react'
import { Box, Button, Card, CardContent, Typography } from '@mui/material'
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
};

const labels = ['1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];
const miles = [150, 130, 157, 120, 148, 100, 125];

export const data = {
  labels,
  datasets: [
    {
      data: miles,
      label: 'K Miles',
      backgroundColor: '#F4F5F9',
      hoverBackgroundColor: '#2884FF',
    },
  ],
};

const buttons = [
  {
    href: '/milesday',
    title: 'Day'
  },
  {
    href: '/milesweek',
    title: 'Week'
  },
  {
    href: '/milesmonth',
    title: 'Month'
  },
]  

export const MilesStatisticsCard = () => {
  const [ clickedButton, setClickedButton] = useState(0);
  const handleClickedButton = (index: number) => {
    setClickedButton(index)
  }
  
  return (
    <Card>
      <CardContent>
        <Box
          display='flex'
          mb={2}
        >
          <Typography
            fontSize='20px'
            fontWeight='bold'
            >
            Miles
            <Typography component='span' > </Typography>
            <Typography
              component='span'
              fontWeight='default'
            >
              Statistics
            </Typography>
          </Typography>
        </Box>
        <Box
          display='flex'
          justifyContent='space-between'
          mb={3}
        >
          <Box>
            {buttons.map((({title, href}, index) => 
              <Button
                key={title}
                color='info'
                size='small'
                variant='contained'
                disableElevation
                onMouseDown={()=>{handleClickedButton(index)}}
                sx={{
                  mr: '0.5rem',
                  fontSize: '10px',
                  backgroundColor: index===clickedButton?'info.main':'white',
                  color: index===clickedButton?'white':'black',
                  '&:hover': {
                    backgroundColor: 'info.light'
                  },
                }}
              >
                {title}
              </Button>
            ))}           
          </Box>
          <Typography
            fontSize='14px'
            fontWeight='bold'
          >
            256 Miles
          </Typography>
        </Box>
        <Box
          sx={{
            height: '200px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Bar options={options} data={data} />
        </Box>
      </CardContent>
    </Card>
  )
}