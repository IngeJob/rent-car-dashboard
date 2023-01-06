import { useState } from 'react'
import { Box, Card, CardContent, CardMedia, Icon, IconButton, Typography } from '@mui/material'
import { heartIcon, personIcon, redHeartIcon, squareArrowIcon } from '../../public/assets/icons'
import { dataBookingProps } from "../features/types"

type dataProps = {
  dataCar: dataBookingProps
}

export const BookingCard = ({dataCar}: dataProps) => {
  const [ heart, setHeart ] = useState(false)
  const handleClickedHeart = () => setHeart(!heart)

  return (
    <Card
    sx={{
      minWidth: '160px',
      height: '300px',
      backgroundColor: 'white',
      borderRadius: '5%'
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
          justifyContent='space-between'
        >
          <Typography
          fontSize='20px'
          fontWeight='bold'
        >
          {dataCar.name}
        </Typography>
          <IconButton
            onClick={handleClickedHeart}
            sx={{
              width: '30px',
              height: '30px',
              mr: '0.5rem',
            }}
          >
            <img src={ heart? redHeartIcon : heartIcon} alt="heartIcon" />
          </IconButton>
        </Box>
        <Typography
          fontSize='16px'
          color='grayDark3.main'
        >
          {dataCar.kind}
        </Typography>
        <CardMedia
          component='img'
          alt='sd'
          height='140px'
          image={dataCar.image}
          sx={{objectFit: 'scale-down'}}
        />        
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
                width: '30px',
                height: '30px',
              }}
            >
              <img src={personIcon} alt="personIcon" />
            </Icon>
            <Typography
              fontSize='16px'
              color='grayDark3.main'
              mr= '0.6rem'
              alignSelf='center'
            >
              {dataCar.passengers}
            </Typography>
            <Icon
              sx={{
                width: '35px',
                height: '35px',
              }}
            >
              <img src={squareArrowIcon} alt="squareArrowIcon" />
            </Icon>
            <Typography
              fontSize='16px'
              color='grayDark3.main'
              mr= '0.2rem'
              alignSelf='center'
            >
              Manual
            </Typography>
          </Box>
          <Typography
            fontSize='18px'
            fontWeight='bold'
            color='black'
            alignSelf='center'
          >
            ${dataCar.price}
            <Typography
              component='span'
              color='grayDark2.main'
              mr= '0.2rem'
              alignSelf='center'
            >
              /d
            </Typography>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}