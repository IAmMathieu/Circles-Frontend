import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import CircleBottomNavigation from "./CircleBottomNavigation";
import CircleCalendar from "./CircleCalendar";
import CircleChat from "./CircleChat";
import CircleHeader from "./CircleHeader";

export default function Circle() {

    const {menu} = useSelector((state) => state.circle)

  return (
    <Box className="relative flex flex-col items-center p-5 h-full custom-bk:pr-[10vh] pt-20 custom-bk:pt-40 overflow-hidden h-screen">
        <CircleHeader />
    {menu === 'calendar' ? <CircleCalendar /> : <CircleChat /> }
        <CircleBottomNavigation />
    </Box>
  );
}
