import { Stack ,Paper ,Box, Typography ,useTheme} from '@mui/material';
import Calendar from '../../page/calendar/Calendar';
import Network from '../responsiveNetwork/Network';

import React from 'react';

const Row3 = () => {
  const theme = useTheme();

  return (
    <Stack direction={"row"}  flexWrap={"wrap"} gap={5} mt={2}>
<Paper
sx={{ maxWidth:900 , flexGrow:1}}>

<Calendar  isDahboard={true}/>
</Paper>



<Box sx={{  height: 350 }}>
      <Paper>
          <Network isDahboard={true}/>
          
        </Paper>

      </Box>
    </Stack>
  );
}

export default Row3;
