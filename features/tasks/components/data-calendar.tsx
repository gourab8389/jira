import { 
    format,
    getDay,
    parse,
    startOfWeek,
    addMonths,
    subMonths,
} from "date-fns";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";

import { Task } from "../types"

interface DataCalendarProps {
    data: Task[];
}

const DataCalendar = ({
    data,
}: DataCalendarProps) => {
  return (
    <div>
      Data Calender
    </div>
  )
}

export default DataCalendar
