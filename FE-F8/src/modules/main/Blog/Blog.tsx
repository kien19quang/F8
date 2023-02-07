import * as React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { getAllBlog } from 'src/service/Blog/BlogService';
import { BlogDto, BlogApiResponse } from '@/src/models/Blog/BlogModel';
import { styled } from '@mui/material/styles';
import BlogList from './components/BlogList/BlogList';
export interface BlogProps {}

const GridStyle = styled(Grid)(() => ({
  paddingY: '14px',
  backgroundColor: '#f2f2f2',
  borderRadius: '30px',
  color: '#333',
  margin: '0 8px 8px 0',
  padding: '6px 16px',
  fontWeight: '600',
  fontSize: '14px'
}));

export default function Blog(props: BlogProps) {
  const [listBlog, setListBlog] = React.useState<BlogApiResponse>();

  React.useEffect(() => {
    const getBlog = async () => {
      const res = await getAllBlog(1);
      setListBlog(res);
    };
    getBlog();
  }, []);

  return (
    <Box ml="20px" mr="40px">
      <Box color="#292929" mb="80px">
        <Typography fontWeight="700" fontSize="30px" mt="19px" mb="19px">
          Bài viết nổi bật
        </Typography>
        <Typography mt="15px" mb="15px">
          Tổng hợp các bài viết chia sẻ về kinh nghiệm tự học lập trình online và các kỹ thuật lập trình web.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={8} padding="0 64px 44px 0">
          <BlogList data={listBlog?.data as BlogDto[]} />
        </Grid>
        <Grid item xs={4}>
          <Typography paddingY="14px" color="#757575" fontSize="20px">
            CÁC CHỦ ĐỀ ĐƯỢC ĐỀ XUẤT
          </Typography>
          <Grid container spacing={1}>
            <GridStyle item xs="auto">
              Front-end / Mobile apps
            </GridStyle>
            <GridStyle item xs="auto">
              Back-end / Devops
            </GridStyle>
            <GridStyle item xs="auto">
              UI / UX / Design
            </GridStyle>
            <GridStyle item xs="auto">
              Other
            </GridStyle>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
