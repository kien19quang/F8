import { Box, Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import * as React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CreateEditRoadmap from './CreateEditRoadmap/CreateEditRoadmap';

export interface RoadMapAdminProps {}

export default function RoadMapAdmin(props: RoadMapAdminProps) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const handleOpenDialog = (): void => {
    setIsOpen(true);
  };

  const handleCloseDialog = (): void => {
    setIsOpen(false);
  };

  return (
    <>
      <Stack
        justifyContent="space-between"
        direction="row"
        p="15px"
        color="#555"
        borderBottom="1px solid rgba(204, 204, 204, 0.35)"
        alignItems="center"
      >
        <Typography variant="body1" color="#111" fontSize="18px">
          Manage Road Map
        </Typography>
        <MoreVertIcon />
      </Stack>

      <Box p="20px">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb="40px">
          <Box>
            <Button variant="contained" color="primary" sx={{ width: '140px' }} onClick={handleOpenDialog}>
              New Road Map
            </Button>
          </Box>

          <Stack width="75%" gap="30px" direction="row" alignItems="center">
            <Box width="30%">
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label">Road Map</InputLabel>
                <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Project">
                  <MenuItem value={1}>Publish</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box width="70%">
              <TextField
                id="outlined-basic"
                size="small"
                label="Search by name road map"
                variant="outlined"
                fullWidth
              />
            </Box>
          </Stack>
        </Stack>
      </Box>

      <CreateEditRoadmap isOpen={isOpen} close={handleCloseDialog} />
    </>
  );
}
