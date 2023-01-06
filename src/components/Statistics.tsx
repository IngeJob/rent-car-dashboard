import { Grid } from "@mui/material"
import { MilesStatisticsCard } from "./MilesStatisticsCard";
import { CarStatisticsCard } from "./CarStatisticsCard";

export const Statistics = () => {
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
      <Grid
        item
        xs={12}
        md={6}
      >
        <MilesStatisticsCard />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
      >
        <CarStatisticsCard />
      </Grid>
    </Grid>
  )
}
