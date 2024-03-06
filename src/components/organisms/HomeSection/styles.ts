import styled from '@mui/material/styles/styled';
import Box from '@mui/material/Box';

export const ListBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    gap: '2.5rem',
    '& > .MuiAutocomplete-root': {
        width: '100%',
    },
    [theme.breakpoints.up('sm')]: {
        '& > .MuiAutocomplete-root': {
            width: '24rem',
        },
    },
    [theme.breakpoints.up('lg')]: {
        '& > .MuiAutocomplete-root': {
            width: '42rem',
        },
    },
}));