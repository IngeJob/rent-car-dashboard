import { RecommendedCard } from './RecommendedCard'
import { Grid } from "@mui/material"
import { dataCarProps } from '../features/types'
import carsRecomended from '../db/carsRecomended.json'

export const RecommendedList = () => {
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
    {carsRecomended.map( (dataCar: dataCarProps) =>
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        key={dataCar.title}
      >
        <RecommendedCard dataCar={dataCar} />
      </Grid>
    )}
  </Grid>
  )
}