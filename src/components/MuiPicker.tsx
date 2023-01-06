import React from "react"
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from "dayjs"
import { Stack, TextField } from "@mui/material"
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


export const MuiPicker = () => {
  //   const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  //   console.log({selectedDate})
  // return (
  //   <Stack spacing={4} sx={{ width: '250px' }}>
  //           <DatePicker label='Date Picker' renderInput={(params:any) => <TextField {...params} />} value={selectedDate} onChange={(newValue:any) => {
  //               setSelectedDate(newValue)
  //           }} />
  //   </Stack>
    const [value, setValue] = React.useState<Dayjs | null>(
      // dayjs('2014-08-18T21:11:54'),
      null
    );
    console.log({value})
  
    const handleChange = (newValue: Dayjs | null) => {
      setValue(newValue);
    };

    return(
      <Stack spacing={4} sx={{ width: '250px' }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
            label="Date desktop"
            inputFormat="MM/DD/YYYY"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
          <MobileDatePicker
            label="Date mobile"
            inputFormat="MM/DD/YYYY"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
          <TimePicker
            label="Time"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
          <DateTimePicker
            label="Date&Time picker"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
          <DatePicker
            disableFuture
            label="Responsive Picker"
            openTo="year"
            views={['year', 'month', 'day']}
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
          <DatePicker label='Basic Date Picker' renderInput={(params) => <TextField {...params} />} value={value} onChange={(newValue) => {
                setValue(newValue)
            }} />
        </LocalizationProvider>
      </Stack>
    )
  // )
}
