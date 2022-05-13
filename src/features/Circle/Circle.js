import { useSelector } from "react-redux";
import CircleBottomNavigation from "./CircleBottomNavigation";
import CircleCalendar from "./CircleCalendar";
import CircleChat from "./CircleChat";
import { handleChange } from "./CircleSlice";

export default function Circle() {

    const menu = useSelector((state) => state.circle)

  return (
    <div>
    {menu === 'calendar' ? <CircleCalendar /> : <CircleChat /> }
        <CircleBottomNavigation />
    </div>
  );
}
