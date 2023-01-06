import { Box, CircularProgress, Typography } from '@mui/material'
import { perCircularProps } from '../features/types'

type dataPerCircularProps = {
  dataPerCircular: perCircularProps
}

export const PercentageCircular = ({ dataPerCircular }: dataPerCircularProps) => {
  return (
    <Box
      position='relative'
      display='inline-flex'
    >
      <CircularProgress 
        variant="determinate"
        size="120px"
        thickness={5}
        value={80}
        style={{
          transform: "rotate(124deg)",
          position: 'absolute',
          color: dataPerCircular.progressColor==='white'? '#B37EFC': '#F4F5F9'    
        }}
      />  
      <CircularProgress 
        variant="determinate"
        size="120px"
        thickness={5}
        value={dataPerCircular.value<100?dataPerCircular.value*0.8:dataPerCircular.value*4/15}
        style={{    
          transform: "rotate(124deg)",
        }}
        sx={{
          color: dataPerCircular.progressColor
        }}
      />
      <Box
        sx={{
          display: 'flex',
          position: 'absolute',
          alignItems: 'center',
          justifyContent: 'center',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color={dataPerCircular.textColor}
          fontSize='30px'
          fontWeight='bold'
        >
          {dataPerCircular.value<100?`${Math.round(dataPerCircular.value)}%`:`${Math.round(dataPerCircular.value)}k%`}
        </Typography>
      </Box>
    </Box>
     
  )
}