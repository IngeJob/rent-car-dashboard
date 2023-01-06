import { Grid } from "@mui/material"
import { lightIcon, goutIcon, tireIcon, vectorIcon } from "../assets/icons";
import { StatusCard } from "./StatusCard";
import { dataStatusProps } from "../features/types";

const infoCards = [
  {
    icon: lightIcon,
    title: 'Energy',
    value: 45,
    textColor: 'white',
    progressColor: 'white',
    cardColor: 'primary.main'
  },
  {
    icon: vectorIcon,
    title: 'Range',
    value: 157,
    textColor: 'black',
    progressColor: 'error.main',
    cardColor: 'white'
  },
  {
    icon: goutIcon,
    title: 'Break fluid',
    value: 45,
    textColor: 'black',
    progressColor: 'primary.main',
    cardColor: 'white'
  },
  {
    icon: tireIcon,
    title: 'Tire Wear',
    value: 25,
    textColor: 'black',
    progressColor: 'secondaryYellow.main',
    cardColor: 'white'
  }, 
];

export const Status = () => {
  return (
    <Grid
      container
      direction='row'
      justifyContent="space-around"
      alignItems="center"
      sx={{ py: 1 }}
      px={2}
      rowSpacing={2}
      columnSpacing={3}
    >
      {infoCards.map( (card: dataStatusProps) =>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          xl={2}
          key={card.title}
        >
          <StatusCard card={card} />
        </Grid>
      )}
    </Grid>
  )
}