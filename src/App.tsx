import './App.css';
import { createTheme, colors, ThemeProvider } from '@mui/material';
import { MuiResponsiveness } from './components/MuiResponsiveness';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { MuiPicker } from './components/MuiPicker';
// import { MuiDateRangePicker } from './components/MuiDateRangePicker';
// import { MuiMasonry } from './components/MuiMasonry';
// import { MuiTabs } from './components/MuiTabs';
// import { MuiTimeline } from './components/MuiTimeline';
// import { MuiLoadingButton } from './components/MuiLoadingButton';
// import { MuiSkeleton } from './components/MuiSkeleton';
// import { MuiProgress } from './components/MuiProgress';
// import { MuiDialog } from './components/MuiDialog';
// import { MuiSnackbar } from './components/MuiSnackbar';
// import { MuiAlert } from './components/MuiAlert';
// import { MuiTable } from './components/MuiTable';
// import { MuiTooltip } from './components/MuiTooltip';
// import { MuiChip } from './components/MuiChip';
// import { MuiList } from './components/MuiList';
// import { MuiBadge } from './components/MuiBadge';
// // import { MuiAvatar } from './components/MuiAvatar';
// import { MuiBottomNavigation } from './components/MuiBottomNavigation';
// import { MuiSpeedDial } from './components/MuiSpeedDial';
// import { MuiBreadcrumbs } from './components/MuiBreadcrumbs';
// import { MuiDrawer } from './components/MuiDrawer';
// import { MuiLink } from './components/MuiLink';
// import { MuiNavbar } from './components/MuiNavbar';
// import { MuiImageList } from './components/MuiImageList';
// import { MuiAccordion } from './components/MuiAccordion';
// import { MuiCard } from './components/MuiCard';
// import { MuiLayout } from './components/MuiLayout';
// import { MuiAutocomplete } from './components/MuiAutocomplete';
// import { MuiRating } from './components/MuiRating';
// import { MuiSwitch } from './components/MuiSwitch';
// import { MuiCheckbox } from './components/MuiCheckbox';
// import { MuiRadioButton } from './components/MuiRadioButton';
// import { MuiSelect } from './components/MuiSelect';
// import { MuiTextField } from './components/MuiTextField';
// import { MuiButton } from './components/MuiButton';
// import { MuiTypography } from './components/MuiTypography';

const theme = createTheme({
  status: {
    danger: '#E53E3E',
  },
  palette: {
    secondary: {
      main: colors.orange[500],
    },
    neutral: {
      main: colors.grey[500],
      darker: colors.grey[700],

    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
    {/* // <LocalizationProvider dateAdapter={MuiPickersAdapterContext}> */}
      <div className="App">
        {/* <MuiTypography /> */}
        {/* <MuiButton /> */}
        {/* <MuiTextField /> */}
        {/* <MuiSelect /> */}
        {/* <MuiRadioButton /> */}
        {/* <MuiCheckbox /> */}
        {/* <MuiSwitch /> */}
        {/* <MuiRating /> */}
        {/* <MuiAutocomplete /> */}
        {/* <MuiLayout /> */}
        {/* <MuiCard /> */}
        {/* <MuiAccordion /> */}
        {/* <MuiImageList /> */}
        {/* <MuiNavbar /> */}
        {/* <MuiLink /> */}
        {/* <MuiBreadcrumbs /> */}
        {/* <MuiDrawer /> */}
        {/* <MuiSpeedDial /> */}
        {/* <MuiBottomNavigation /> */}
        {/* <MuiAvatar /> */}
        {/* <MuiBadge />*/}
        {/* <MuiList /> */}
        {/* <MuiChip /> */}
        {/* <MuiTooltip /> */}
        {/* <MuiTable /> */}
        {/* <MuiAlert /> */}
        {/* <MuiSnackbar /> */}
        {/* <MuiDialog /> */}
        {/* <MuiProgress /> */}
        {/* <MuiSkeleton /> */}
        {/* <MuiLoadingButton /> */}
        {/* <MuiPicker /> */}
        {/* <MuiDateRangePicker /> */}
        {/* <MuiTabs /> */}
        {/* <MuiTimeline /> */}
        {/* <MuiMasonry /> */}
        <MuiResponsiveness />
      </div>
    </ThemeProvider>
  )
}

export default App;
