import { Grid, Box, Avatar, Typography, Button } from '@mui/material';
import { BlogDto } from '@/src/models/Blog/BlogModel';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment';


export interface BlogItemProps {
  dataItem: BlogDto;
}

export default function BlogItem( {dataItem} : BlogItemProps) {
    return (
        <Box padding="24px" >
            <Box display="flex" justifyContent = "space-between">
                <Box display="flex" alignItems="center">
                    <Avatar src="https://fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg" /> 
                    <Typography ml="8px">Đậu Hải Phong</Typography>
                </Box>
                <Box display="flex">
                  <Box padding="4px 8px">
                    <BookmarkBorderIcon/>
                  </Box>
                  <Box padding="4px 8px">
                    <MoreHorizIcon />
                  </Box>
                </Box> 
              </Box>
              <Box display="flex" alignItems="center">
                <Box pr="32px">
                    <Typography mt="8px" fontSize="20px" fontWeight="600">{ dataItem.title}</Typography>
                    <Typography color="#505050" mt="4px" mb="15px">Extension chặn đứng Sử dụng sai `CSS selector`. Nó cho phép bạn copy tất cả hoặc một phần (bạn lựa chọn) tên `id`, tên `class` từ `file HTML` sang `file CSS`</Typography>
                    <Box display="flex" alignItems="center">
              <Typography>{moment(dataItem.createAt).format("DD")} ngày </Typography>
                        <Typography marginX="8px">·</Typography>
                        <Typography>{dataItem.min_read} phút đọc</Typography>
                    </Box>
                    </Box>
                    <Box>
                        {dataItem.thumbnail_url && ( <img className="img-blog" src={dataItem.thumbnail_url} />) }
                    </Box>
              </Box>  
        </Box>);
}
