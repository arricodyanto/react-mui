import { Box, FormControl, FormControlLabel, FormGroup, FormLabel, Switch } from "@mui/material"
import React, { useState } from "react"

export const MuiSwitch = () => {
    const [checked, setChecked] = useState(false)
    const [settings, setSettings] = useState<string[]>([])
    // console.log({checked})
    console.log({settings})
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked)
    }
    const handleSettingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const index = settings.indexOf(event.target.value)
        if (index === -1) {
            setSettings([...settings, event.target.value])
        } else{
            setSettings(settings.filter((setting) => setting !== event.target.value))
        }
    }
  return (
    <Box>
        <Box>
            <FormControlLabel label="Dark mode" control={<Switch size="small" color="success" checked={checked} onChange={handleChange} />} />
        </Box>
        <Box>
            <FormControl>
                <FormLabel>Settings</FormLabel>
                <FormGroup row>
                    <FormControlLabel label="Dark mode" control={<Switch value="dark-mode" checked={settings.includes('dark-mode')} onChange={handleSettingChange} />} />
                    <FormControlLabel label="Notification" control={<Switch value="notification" checked={settings.includes('notification')} onChange={handleSettingChange} />} />
                </FormGroup>
            </FormControl>
        </Box>
    </Box>
  )
}
