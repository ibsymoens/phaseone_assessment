import React, { useState } from "react";
import { Card, CardContent, Typography, CardHeader, IconButton, Menu, MenuItem, ListItemIcon, ListItemText, Collapse } from "@mui/material";
import { MoreVert as MoreVertIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { TransitionGroup } from 'react-transition-group';
import moment from "moment";

const CardViewContainer = ({ title, desc, dateAndTime, taskId, handleDeleteTask }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);
    
    return (
        <React.Fragment>
            <TransitionGroup>
                <Collapse>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardHeader 
                            action={
                                <IconButton aria-label="settings" onClick={handleClick}>
                                    <MoreVertIcon />
                                </IconButton>
                            } 
                            subheader={title}
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">{desc}</Typography>
                            <Typography variant="body2" color="text.secondary" mt={2}>{`${moment(dateAndTime).format("MMMM d, YYYY - HH:mm:ss")}`}</Typography>
                        </CardContent>
                    </Card>
                    <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        PaperProps={{
                            elevation: 0,
                            sx: {
                            overflow: "visible",
                            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                            mt: 1.5,
                            "& .MuiAvatar-root": {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            "&:before": {
                                content: "''",
                                display: "block",
                                position: "absolute",
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: "background.paper",
                                transform: "translateY(-50%) rotate(45deg)",
                                zIndex: 0,
                            },
                            },
                        }}
                        transformOrigin={{ horizontal: "right", vertical: "top" }}
                        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                    >
                        <MenuItem onClick={() => handleDeleteTask(taskId)} >
                            <ListItemIcon><DeleteIcon /></ListItemIcon>
                            <ListItemText>Delete</ListItemText>
                        </MenuItem>
                    </Menu>
                </Collapse>
            </TransitionGroup>
        </React.Fragment>
    );
}

export default CardViewContainer;