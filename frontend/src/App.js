import Feed from "./components/Feed";
import RightBar from "./components/RightBar";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

import { Stack } from '@mui/material'
import { Box } from "@mui/system";

function App() {
  return (
    <Box>
      <NavBar />

      <Stack direction={'row'} spacing={2} justifyContent='space-between'>
        <SideBar />
        <Feed />
        <RightBar />
      </Stack>
    </Box>

  );
}

export default App;
