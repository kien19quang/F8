import { RoadMapModel } from '@/src/models/RoadMap/RoadMapModels';
import { Avatar, Box, Button, Stack, Typography } from '@mui/material';
import RoadMapIcon from '../RoadMapIcon/RoadMapIcon';

export interface RoadMapItemProps {
  dataItem: RoadMapModel;
}
export default function RoadmapItem({ dataItem }: RoadMapItemProps) {
  return (
    <Stack gap="12px" sx={{ userSelect: 'none' }} component="section">
      <Box border="2px solid #e8e8e8" borderRadius="16px" width="500px">
        <Box padding="24px">
          <Box display="flex">
            <Box width="300px" paddingBottom="20px">
              <Typography fontSize="20px" fontWeight="700" padding="0 0 14px 0">
                {dataItem.title}
              </Typography>
              <Typography fontSize="14px" lineHeight="1.6">
                {dataItem.description}
              </Typography>
            </Box>
            <Box paddingLeft="24px">
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="127px"
                height="127px"
                borderRadius="50%"
                border="5px solid #f05123"
              >
                <Avatar
                  sx={{
                    width: '97px',
                    height: '97px',
                    borderRadius: '50%',
                    objectFit: 'cover'
                  }}
                  alt="avatar"
                  src={dataItem.image_url}
                ></Avatar>
              </Box>
            </Box>
          </Box>

          <RoadMapIcon dataIcon={dataItem.courses} />

          <Box>
            <Button
              variant="contained"
              size="large"
              sx={{
                borderRadius: '16px',
                fontSize: '14px',
                '&:hover': {
                  opacity: '0.9'
                }
              }}
            >
              Xem chi tiết
            </Button>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
}
