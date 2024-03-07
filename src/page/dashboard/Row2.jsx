import { Stack ,Paper ,Box, Typography ,useTheme} from '@mui/material';
import Task from '../task/Task';
import React from 'react';

const Row2 = () => {
  const theme = useTheme();

  return (
    <Stack direction={"row"}  flexWrap={"wrap"} gap={5} mt={2}>
<Paper
sx={{ maxWidth:900 , flexGrow:1}}>

<Task isDahboard={true} />
</Paper>



      <Box sx={{  height: 350 }}>
      <Paper>
          <Typography
            color={theme.palette.secondary.main}
            fontWeight={"bold"}
            p={1.2}
            variant="h4"
            height={123}
          >
            Reports
          </Typography>
          <Typography
            p={1.9}
            variant="h6"
          ><hr/>
Weekly report files
<hr/>
Tips for writing weekly reports professionally
<hr/>
Final report files
<hr/>
Tips for writing the final report professionally




          </Typography>
        </Paper>

      </Box>
    </Stack>
  );
}

export default Row2;
