import styled from '@mui/material/styles/styled';
import MatBox from '@mui/material/Box';

export const ToggleContainer = styled('div')(() => ({
    marginLeft: 'auto',
    '& > .MuiButtonBase-root': {
        paddingRight: 0,
    },
}));

export const Box = styled(MatBox)(({ theme }) => ({
    '&.container': {
        display: 'flex',
        flexDirection: 'column',
        width: '15rem',
        padding: '5rem 1rem 0 0.5rem',

        '& > .MuiList-root > .MuiListItem-root > .MuiListItemSecondaryAction-root > .MuiIconButton-root': {
            paddingRight: 0,
        }
    },
    '&.closeContainer': {
        display: 'flex',
        justifyContent: 'flex-end',
        marginBottom: '1.5rem',
    },
    [theme.breakpoints.up('sm')]: {
        '&.container': {
            width: '24.5rem',
        }
    },
    [theme.breakpoints.up('lg')]: {
        '&.container': {
            width: '42rem',
            padding: '2rem 7.5rem 0 0.5rem',
        }
    }
}));
