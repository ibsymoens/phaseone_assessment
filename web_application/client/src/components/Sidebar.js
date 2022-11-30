import React from "react";
import logo from "../assets/images/logo.png";
import { theme } from "../assets/styles/muistyles";
import { List, ListSubheader, ListItemButton, ListItemIcon, ListItemText, Divider, ThemeProvider } from "@mui/material";
import { TableRows as TableRowsIcon, ListAlt as ListAltIcon } from '@mui/icons-material';
import { Link } from "react-router-dom";

const navbar = [{ to: "/", name: "Table View", icon: TableRowsIcon }, { to: "/cardview", name: "Card View", icon: ListAltIcon }];

const Sidebar = () => {
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <img src={logo} alt="Logo" style={{ width: "100%", maxWidth: "120px", marginLeft: "10px" }} />
                <List
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader className="hidden-xs" component="div" id="nested-list-subheader">
                            Note List
                        </ListSubheader>
                    }
                >
                    <Divider />
                    {navbar.map((nav, index) => 
                        <Link to={nav.to} key={index}>
                            <ListItemButton>
                                <ListItemIcon>{<nav.icon />}</ListItemIcon>
                                <ListItemText 
                                    sx={{
                                        display: {
                                            mobile: "none",
                                            tablet: "none",
                                            laptop: "block"
                                        }
                                    }} 
                                    primary={nav.name} />
                            </ListItemButton>
                        </Link>
                    )}
                </List>
            </ThemeProvider>
        </React.Fragment>
    );
}

export default Sidebar;