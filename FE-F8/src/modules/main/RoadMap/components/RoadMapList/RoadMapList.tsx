import * as React from 'react';
import { Grid } from '@mui/material';
import { RoadMapModel } from '@/src/models/RoadMap/RoadMapModels';
import RoadMapItem from '../RoadMapItem/RoadMapItem';

export interface RoadMapListrops {
  data: RoadMapModel[];
}

export default function RoadMapList({ data }: RoadMapListrops) {
  return (
    <Grid container spacing={65}>
      {data.map((item) => {
        return (
          <Grid item xs={3} key={JSON.stringify(item)}>
            <RoadMapItem dataItem={item} />
          </Grid>
        );
      })}
    </Grid>
  );
}
