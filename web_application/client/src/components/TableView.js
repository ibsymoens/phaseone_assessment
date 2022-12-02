import React, { useState } from "react";
import ApiRequests from "../api";
import TableViewContainer from "./TableViewContainer";
import { create_task } from "../redux/actions/task";
import { useSelector, useDispatch } from "react-redux";
import { Box, Grid, TextField, Button } from "@mui/material";

const initialState = { title: "", description: "" }

const TableView = () => {
    const [task, setTask] = useState(initialState);
    const rdxTasks = useSelector(state => state.task.task);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        ApiRequests.createTask(task)
                   .then(res => dispatch(create_task(res)))
                   .catch(err => console.log(err.message));    
        setTask(initialState);
    }

    return (
        <React.Fragment>
            <Box>
                <Grid container>
                    <Grid item xs={12} sm={12} md={5} style={{ display: "flex", justifyContent: "center", marginBottom: "40px" }}>
                        <form onSubmit={handleSubmit} style={{ width: "100%", padding: "0 20px" }}>
                            <TextField type="text" name="title" value={task.title} className="mb-3" variant="standard" placeholder="Title" onChange={(e) => setTask({...task, [e.target.name]: e.target.value})} required fullWidth/>
                            <TextField type="text" name="description" value={task.description} className="mb-3" variant="outlined" placeholder="Description" onChange={(e) => setTask({...task, [e.target.name]: e.target.value})} multiline rows={4} required fullWidth/>
                            <Button type="submit" style={{ background: "#EB7822", color: "#FFF" }} fullWidth>Add Task</Button>
                        </form>
                    </Grid>
                    <Grid item xs={12} sm={12} md={7} style={{ padding: "0 20px" }}>
                        <TableViewContainer tasks={rdxTasks} />
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    );
}

export default TableView;