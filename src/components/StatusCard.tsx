import { Card, CardContent, Icon, Typography } from '@mui/material'
import { PercentageCircular } from './PercentageCircular'
import { dataStatusProps } from "../features/types";

type cardProps ={
  card: dataStatusProps
}

export const StatusCard = ({card}: cardProps) => {
  const sendData = {
    value: card.value, 
    textColor: card.textColor, 
    progressColor: card.progressColor
  }

  return (
    <Card>
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: '350px',
          height: '240px',
          backgroundColor: card.cardColor
        }}
      >
        <Icon
          sx={{
            width: '40px',
            height: '40px',
            backgroundColor: card.cardColor==='primary.main'?'#A66FF0':'#F5F4F6',
            borderRadius: '50%',
            mb: 1
          }}
        >
          <img src={card.icon} alt='ab' />
        </Icon>

        <Typography
          fontSize='24px'
          fontWeight= 'bold'
          color={card.textColor}
          mb={1}
        >
          {card.title}
        </Typography>
        <PercentageCircular 
          dataPerCircular={ sendData }
        />
      </CardContent>
    </Card>
  )
}