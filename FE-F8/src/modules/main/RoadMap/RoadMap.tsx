import * as React from 'react';
import { Avatar, Box, Button, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import RoadMapList from './components/RoadMapList/RoadMapList';
import { getAllRoadMap } from 'src/service/RoadMap/RoadMapService';
import { RoadMapModel } from '@/src/models/RoadMap/RoadMapModels';

export interface RoadMapProps {}

const MyButton = styled(Button)(() => ({
  textAlign: 'center',
  transition: '0.5s ease',
  width: '124px',
  marginTop: '8px',
  padding: '10px 16px',
  borderRadius: '16px',
  height: '40px',
  fontWeight: '700',
  color: '#000',
  fontSize: '13px',
  backgroundColor: 'white',
  border: '2px solid black',

  '&:hover': {
    backgroundColor: 'black',
    color: '#fff',
    border: '2px solid black'
  }
}));

export default function RoadMap(props: RoadMapProps) {

  const [listRoadMap, setListRoadMap] = React.useState<RoadMapModel[]>([]);

  React.useEffect(() => {
    const getListRoadMap = async () => {
      const res = await getAllRoadMap();
      setListRoadMap(res);
    };
    getListRoadMap();
  }, []);

  return (
    <Box padding="0 40px 0 20px">
      <Stack margin="0 0 80px 0">
        <Typography component="h2" margin="19px 0" fontWeight="600" fontSize="2.8rem" color="#242424">
          Lộ trình học
        </Typography>
        <Typography fontSize="16px" color="#292929">
          Để bắt đầu một cách thuận lợi, bạn nên tập trung vào một lộ trình học. Ví dụ: Để đi làm với vị trí “Lập trình
          viên Front-end” bạn nên tập trung vào lộ trình “Front-end”.
        </Typography>
      </Stack>

      <RoadMapList data={ listRoadMap } />

      <Stack
        direction="row"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginTop="50px"
        overflow="hidden"
      >
        <Box width="400px">
          <Typography variant="body1" component="h3" fontWeight="600" fontSize="26px" padding="20px 0" margin="8px 0">
            Tham gia cộng đồng học viên F8 trên Facebook
          </Typography>
          <Typography margin="14px 0" lineHeight="1.6" fontSize="14px">
            Hàng nghìn người khác đang học lộ trình giống như bạn. Hãy tham gia hỏi đáp, chia sẻ và hỗ trợ nhau trong
            quá trình học nhé.
          </Typography>
          <MyButton variant="outlined" size="small">
            Tìm hiểu ngay
          </MyButton>
        </Box>
        <Box>
          <Avatar
            sx={{
              width: '420px',
              height: '420px',
              position: 'relative',
              right: '-44px'
            }}
            src="https://fullstack.edu.vn/static/media/fb-group-cards.4bd525b1b8baf7b1e5a2.png"
          ></Avatar>
        </Box>
      </Stack>
    </Box>
  );
}
