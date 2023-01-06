import { Box, Card, CardContent, CardMedia, Icon, Typography } from '@mui/material'
import { circleArrowIcon, lightCarIcon, nutIcon, squareArrowIcon } from '../assets/icons'
import { dataCarProps } from '../features/types'

type dataProps = {
  dataCar: dataCarProps
}

export const RecommendedCard = ({dataCar}: dataProps) => {
  return (
    <Card
      sx={{
        minWidth: '160px',
        height: '300px',
        backgroundColor: dataCar.colorBg,
        borderRadius: '5%',
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Box
          display= 'flex'
          alignItems='center'
        >
          <Icon
            sx={{
              width: '30px',
              height: '30px',
              mr: '0.5rem',
            }}
          >
            <img src={circleArrowIcon} alt="circleArrowIcon" />
          </Icon>
          <Typography
            fontSize='16px'
            fontWeight='bold'
          >
            {dataCar.recommended}% Recomended
          </Typography>
        </Box>
        <CardMedia
          component='img'
          alt={dataCar.title}
          height='145px'
          image={dataCar.image}
          sx={{objectFit: 'scale-down'}}
        />
        <Typography
          fontSize='20px'
          fontWeight='bold'
        >
          {dataCar.title}
        </Typography>
        <Box
          display='flex'
          justifyContent='space-between'
        >
          <Box
            display='flex'
            flexDirection='row'
          >
            <Icon
              sx={{
                width: '35px',
                height: '35px',
                mr: '0.5rem',
              }}
            >
              <img src={squareArrowIcon} alt="squareArrowIcon" />
            </Icon>
            <Typography
              fontSize='16px'
              fontWeight='bold'
              color='grayDark3.main'
              mr= '0.2rem'
              alignSelf='center'
            >
              {dataCar.value}K
            </Typography>
            <Icon
              sx={{
                width: '30px',
                height: '30px',
              }}
            >
              <img src={nutIcon} alt="nutIcon" />
            </Icon>
            <Icon
              sx={{
                width: '30px',
                height: '30px',
              }}
            >
              <img src={lightCarIcon} alt="lightCarIcon" />
            </Icon>
          </Box>
          <Typography
            fontSize='16px'
            fontWeight='bold'
            color='grayDark3.main'
            alignSelf='center'
          >
            ${dataCar.price}/h
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}