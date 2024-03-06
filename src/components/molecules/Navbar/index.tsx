import * as React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import HomeIcon from "@mui/icons-material/Home";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import * as S from "./styles";
import { useCustomNavigate } from "@hooks/useCustomNavigate";

interface NavItem {
    label: string;
    link: string;
    icon: React.ReactNode;
}

const navitems: NavItem[] = [
    {
        label: "Home",
        link: "/",
        icon: <HomeIcon />,
    },
];

const Navbar = () => {
    const [open, setOpen] = React.useState<boolean>();

    const { goToPage } = useCustomNavigate();

    const toggleDrawer =
        (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event &&
                event.type === "keydown" &&
                ((event as React.KeyboardEvent).key === "Tab" ||
                    (event as React.KeyboardEvent).key === "Shift")
            ) {
                return;
            }

            setOpen(open);
        };

    const list = () => (
        <S.Box
            className="container"
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                <S.Box className="closeContainer">
                    <IconButton onClick={toggleDrawer(false)}>
                        <CloseIcon />
                    </IconButton>
                </S.Box>
                {navitems.map((item, index) =>
                (
                        <React.Fragment key={index}>
                            <Divider />
                            <ListItem
                                disablePadding
                                secondaryAction={
                                    <IconButton onClick={() => goToPage(item.link)} edge="end">
                                        <KeyboardArrowRightIcon />
                                    </IconButton>
                                }
                            >
                                <ListItemButton onClick={() => goToPage(item.link)}>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.label} />
                                </ListItemButton>
                            </ListItem>
                            <Divider />
                        </React.Fragment>
                    )
                )}

            </List>
        </S.Box>
    );

    return (
        <S.ToggleContainer className="toggleIcon">
            <IconButton onClick={toggleDrawer(true)}>
                <MenuIcon />
            </IconButton>
            <SwipeableDrawer
                anchor="right"
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                {list()}
            </SwipeableDrawer>
        </S.ToggleContainer>
    );
};

export default Navbar;
