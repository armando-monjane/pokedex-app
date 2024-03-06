import styled from '@mui/material/styles/styled';
import MatBox from '@mui/material/Box';


export const ContainerBox = styled(MatBox)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column-reverse',
    width: '100%',
    gap: '0.5rem',
    marginTop: theme.spacing(3),
    '& > .MuiBox-root': {
        flex: 1,
    },
    [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
        gap: 0,
        marginTop: 0,
    },
}));


export const SpritesBox = styled(MatBox)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
    gap: '1rem',
    '& > img': {
        width: '7rem',
    },
    [theme.breakpoints.up('sm')]: {
        flexDirection: 'column',
    },
}));

export const StatsBox = styled(MatBox)(() => ({
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    gap: '0.25rem',
    '& > .MuiTypography-root': {
        textTransform: 'capitalize',
    }
}));

export const TypesBox = styled(MatBox)(() => ({
    display: 'flex',
    flexDirection: 'row',
    gap: '0.5rem',
    '& > .MuiChip-root': {
        textTransform: 'capitalize',
        color: '#FFFFFF',
    }
}));