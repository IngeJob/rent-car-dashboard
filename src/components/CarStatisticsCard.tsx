import { useState } from 'react';
import moment from 'moment';
import { Box, Button, Card, CardContent, Typography } from '@mui/material'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
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
      fill: true,
      label: 'Car',
      data: miles,
      borderColor: '#FF764C',
      backgroundColor: 'rgba(255, 118, 76, 0.24)',
    },
  ],
};

const buttons = [
  {
    href: '/carday',
    title: 'Day'
  },
  {
    href: '/carweek',
    title: 'Week'
  },
  {
    href: '/carmonth',
    title: 'Month'
  },
]  

export const CarStatisticsCard = () => {
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
            Car
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
          <Typography
            fontSize='14px'
            fontWeight='bold'
          >
            {moment(new Date()).format('LL')}
          </Typography>
          <Box>
            {buttons.map((({title, href}, index) => 
              <Button
                key={title}
                color='warning'
                size='small'
                variant='contained'
                disableElevation
                onMouseDown={()=>{handleClickedButton(index)}}
                sx={{
                  mr: '0.5rem',
                  fontSize: '10px',
                  backgroundColor: index===clickedButton?'warning.main':'white',
                  color: index===clickedButton?'white':'black',
                  '&:hover': {
                    backgroundColor: 'warning.light'
                  },
                }}
              >
                {title}
              </Button>
            ))}           
          </Box>         
        </Box>
        <Box
          sx={{
            height: '200px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Line options={options} data={data} />
        </Box>
      </CardContent>
    </Card>
  )
}