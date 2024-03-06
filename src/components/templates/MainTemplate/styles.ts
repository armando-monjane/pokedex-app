import styled from '@mui/material/styles/styled';
import MatContainer from '@mui/material/Container';
import MatBox from '@mui/material/Box';

export const Container = styled(MatContainer)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    [theme.breakpoints.up('xs')]: {
        padding: "0 1.5rem",
    },
}));

export const BoxInline = styled(MatBox)(() => ({
    display: "flex",
    width: "100%",
    flexDirection: "row",
    alignItems: "left",
    justifyContent: "left",
    paddingTop: "1.5rem",
    paddingBottom: "1rem",
    gap: "0.5rem",

    '& > .MuiIconButton-root': {
        padding: "0",

        '& > .MuiSvgIcon-root': {
            width: "1.5rem",
            height: "1.5rem",
            color: '#000000',
        }
    }
}));