import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { AppProvider } from '@toolpad/core/AppProvider';

import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import AccountSlotsAccountSwitcher from './AccountSlotsAccountSwitcher';
import { Avatar, Container, Grid, Grid2, IconButton, ListItemIcon, MenuItem, Paper, Skeleton, Stack, TextField, Tooltip } from '@mui/material';

import { PageContainer, PageContainerToolbar } from '@toolpad/core/PageContainer';
import { orange } from '@mui/material/colors';
import ProfilePage from './Profile'
import { useLocation } from 'react-router-dom';

const NAVIGATION = [
    {
        segment: 'dashboard',
        title: 'Dashboard',
        icon: <DashboardIcon />,
    },
    
];

const demoTheme = createTheme({
    cssVariables: {
        colorSchemeSelector: 'data-toolpad-color-scheme',
    },
    colorSchemes: { light: true, dark: true },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 600,
            lg: 1200,
            xl: 1536,
        },
    },
});

function Friendlists() {
    return (

        <Stack direction="column" spacing={1}>
            <MenuItem sx={{ p: 1, borderRadius: 1, '&:hover': { bgcolor: '#e0e0e0' } }}>
                <ListItemIcon>
                    <Avatar fontSize="small" />
                </ListItemIcon>
                <Typography variant="body1" color='primary' sx={{ fontWeight: 'bold' }}> Diya</Typography>
            </MenuItem>

            <MenuItem sx={{ p: 1, borderRadius: 1, '&:hover': { bgcolor: '#e0e0e0' } }}>
                <ListItemIcon>
                    <Avatar fontSize="small" />
                </ListItemIcon>
                <Typography variant="body1" color='primary' sx={{ fontWeight: 'bold' }}> Lucky</Typography>
            </MenuItem>
        </Stack>

    );
}

function DashboardPageContent({ pathname }) {
    console.log(pathname)
    switch (pathname) {
        case '/profile':
            console.log('matched')
            return(<ProfilePage />)
             
            
    
        default:
            break;
    }
    
}


export default function DashboardLayoutAccount(props) {
    const { window, children,} = props;
    

    const [session, setSession] = React.useState({
        user: {
            name: 'Dibya Kanti Dhir',
            email: 'dibya8572@gmail.com',
            image: 'https://i.ibb.co/rGVS7C3/Diya-profile.jpg',
        },
    });

    const authentication = React.useMemo(() => {
        return {
            signIn: () => {
                setSession({
                    user: {
                        name: 'Dibya Kanti Dhir',
                        email: 'dibya8572@gmail.com',
                        image: 'https://i.ibb.co/rGVS7C3/Diya-profile.jpg',
                    },
                });
            },
            signOut: () => {
                setSession(null);
            },
        };
    }, []);

    //const router = useDemoRouter()
   

 

    return (
        // preview-start

        <AppProvider
            navigation={NAVIGATION}
            bgcolor = {"#59C7F3"}
            branding={{
                logo: (
                    <img
                        src="https://i.ibb.co/T0hBTPr/Untitled-design-removebg-preview-1.png"
                        alt="Wexa Talk"
                        style={{ width: '70px', height: '150px' }} // Adjust width as needed
                    />
                ),
                title: 'WexaTalk',
            }}
            //router={router}
            window={window}
            theme={demoTheme}
           
        
            
        >
            <DashboardLayout  slots={{toolbarAccount: AccountSlotsAccountSwitcher }}>
                {children}
               
            </DashboardLayout>
        </AppProvider>
        // preview-end
    );
}
