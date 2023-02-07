import * as React from 'react';
import { Grid } from '@mui/material';
import { BlogDto } from '@/src/models/Blog/BlogModel';
import BlogItem from '../BlogItem/BlogItem';
import { Box } from '@mui/system';

export interface BlogListProps {
  data: BlogDto[];
}

export default function BlogList({ data }: BlogListProps) {
  return (
    <Grid container rowSpacing={2} mb="30px">
      {data?.map((item) => {
        return (
          <Grid key={JSON.stringify(item)} item border="2px solid #e8e8e8" borderRadius="16px" width="915px" mb="30px">
            <BlogItem dataItem={item} />
          </Grid>
        );
      })}
    </Grid>
  );
}
