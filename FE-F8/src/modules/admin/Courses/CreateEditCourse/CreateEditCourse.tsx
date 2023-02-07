import DialogComponent from 'src/components/Common/Dialog/Dialog';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Slide, Tab } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { Box } from '@mui/system';
import * as React from 'react';
import FormCourse from './components/FormCourse';
import FormTrack from './components/FormTrack';
import FormTrackStep from './components/FormTrackStep';

export interface CreateEditCourseProps {
  close: () => void;
  isOpen: boolean;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CreateEditCourse({ close, isOpen }: CreateEditCourseProps) {
  const [value, setValue] = React.useState<string>('course');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <DialogComponent
      open={isOpen}
      close={close}
      title={'Create Course'}
      TransitionComponent={Transition}
      maxWidth="md"
      fullWidth
      keepMounted
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab value="course" label="Course" />
            <Tab value="track" label="Track" />
            <Tab value="track_step" label="Track Step" />
          </TabList>
        </Box>
        <TabPanel value="course" sx={{ padding: '24px 0' }}>
          <FormCourse />
        </TabPanel>

        <TabPanel value="track" sx={{ padding: '24px 0' }}>
          <FormTrack />
        </TabPanel>

        <TabPanel value="track_step" sx={{ padding: '24px 0' }}>
          <FormTrackStep />
        </TabPanel>
      </TabContext>
    </DialogComponent>
  );
}
