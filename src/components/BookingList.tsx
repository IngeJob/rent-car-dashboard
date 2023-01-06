import { Grid } from "@mui/material"
import { BookingCard } from "./BookingCard"
import { dataBookingProps } from "../features/types"
import carsBooking from '../db/carsBooking.json'

export const BookingList = () => {
  return (
    <Grid
      container
      direction='row'
      justifyContent="space-around"
      alignItems="center"
      sx={{ py: 1 }}
      rowSpacing={2}
      columnSpacing={3}
    >
      {carsBooking.map( (dataCar: dataBookingProps) =>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          key={dataCar.name}
        >
          <BookingCard dataCar={dataCar}  />
        </Grid>
      )}

    </Grid>
  )
}