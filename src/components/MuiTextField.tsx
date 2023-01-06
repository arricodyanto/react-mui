import { Stack, TextField, InputAdornment, IconButton } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";

export const MuiTextField = () => {
  const [value, setValue] = useState('')
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined"/>
        <TextField label="Name" variant="filled"/>
        <TextField label="Name" variant="standard"/>
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="Small secondary" size="small" color="secondary"/>
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="Form input" value={value} onChange={(e) => setValue(e.target.value)} required error={!value} helperText={!value? "Required" : "Do not share your password to anyone"} />
        <TextField label="Password" type="password" helperText="Do not share your password to anyone" disabled />
        <TextField label="Readonly" InputProps={{ readOnly: true }}/>
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="Amount" InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment>, }}/>
        <TextField label="Weight" InputProps={{ endAdornment: <InputAdornment position="end">kg</InputAdornment>, }}/>
        <TextField label="Send Message" InputProps={{ endAdornment: <InputAdornment position="end"><IconButton><SendIcon /></IconButton></InputAdornment>, }}/>
      </Stack>
    </Stack>
  )
}
