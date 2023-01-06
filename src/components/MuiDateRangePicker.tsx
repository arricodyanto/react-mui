import React from 'react'
import { Box, Stack, TextField } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { Dayjs } from 'dayjs';
import { DateRangePicker, DateRange } from '@mui/x-date-pickers-pro/DateRangePicker'

export const MuiDateRangePicker = () => {
    const [value, setValue] = React.useState<DateRange<Dayjs>>([null, null]);
    const handleChange = (newValue:any) => {
        setValue(newValue);
    }
    console.log({value})
  return (
    <>
        {/* <Box width='500px'>
            <DateRangePicker startText='Check-in' endText='Check-out' value={value} onChange={(newValue:any) => {
                setValue(newValue)
            }} renderInput={(startProps:any, endProps:any) => (
                <>
                    <TextField {...startProps}/>
                    <Box sx={{mx:2}}>to</Box>
                    <TextField {...endProps}/>
                </>
            )} />
        </Box> */}
        <Stack width='500px'>
            <LocalizationProvider
                dateAdapter={AdapterDayjs}
                localeText={{ start: 'Check-in', end: 'Check-out' }}
                >
                <DateRangePicker
                value={value}
                onChange={handleChange}
                renderInput={(startProps:any, endProps:any) => (
                    <React.Fragment>
                        <TextField {...startProps} />
                        <Box sx={{ mx: 2 }}> to </Box>
                        <TextField {...endProps} />
                    </React.Fragment>
                )}
                />
            </LocalizationProvider>
        </Stack>
    </>
  )
}
