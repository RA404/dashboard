import { Box, IconButton, useTheme } from '@mui/material';
import { useContext } from 'react';
import InputBase from '@mui/material/InputBase';
import { ColorModeContext, tokens } from '../../theme';
import LighModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchIcon from '@mui/icons-material/Search';


const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const ColorMode = useContext(ColorModeContext);


    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            {/* search bar */}
            <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="2px">
                <InputBase sx={{ml: 2, flex: 1 }} placeholder="Search" />
                <IconButton type="button" sx={{ p: 1 }}>
                    <SearchIcon />
                </IconButton>
            </Box>
            {/* icons */}
            <Box display="flex">
                <IconButton onClick={ColorMode.toggleColorMode}>
                    {theme.palette.mode === 'dark' ? (
                        <DarkModeOutlinedIcon />
                    ) : (
                        <LighModeOutlinedIcon />
                    )}
                </IconButton>
                <IconButton>
                    <NotificationOutlinedIcon />   
                </IconButton>
                <IconButton>
                    <SettingsOutlinedIcon />   
                </IconButton>
                <IconButton>
                    <PersonOutlinedIcon />
                </IconButton>
            </Box>
        </Box>
    )
}

export default Topbar;