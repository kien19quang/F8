import { Box, Grid } from '@mui/material';
import { CoursesDto } from '@/src/models/HomePage/Course';
import { IconItem } from './RoadMapIconStyle';
import Tooltip from '@mui/material/Tooltip';
import { CircularProgressCustom, EnumProgress } from 'src/components/Common/ProgressCustom/ProgressCustom';

export interface RoadMapIconProps {
  dataIcon: CoursesDto[];
}

const RoadMapIcon = ({ dataIcon }: RoadMapIconProps) => {
  return (
    <Grid display="flex" item xs={5} mt="22px" mb="28px">
      {dataIcon.map((item) => {
        return (
          <Grid item xs={3} key={JSON.stringify(item)}>
            <Box>
              <Tooltip title={item.title} placement="top" arrow>
                <IconItem>
                  <CircularProgressCustom
                    value={item.user_progress}
                    thickness={2}
                    type={EnumProgress.Image}
                    src={item.icon_url}
                    sx={{ height: '36px', width: '36px' }}
                  />
                </IconItem>
              </Tooltip>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default RoadMapIcon;
