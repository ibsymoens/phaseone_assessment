import React from "react";
import CardViewContainer from "./CardViewContainer";
import ApiRequests from "../api";
import { delete_task } from "../redux/actions/task";
import { useSelector, useDispatch } from "react-redux";
import { Grid } from "@mui/material";

const CardView = () => {
    const rdxTasks = useSelector(state => state.task.task);
    const dispatch = useDispatch();

    const handleDeleteTask = async (id) => {
        ApiRequests.deleteTask(id)
                    .then(() => dispatch(delete_task(id)))
                    .catch(err => console.log(err.response.data.message));     
    }

    return (
        <React.Fragment>
            <Grid container className="mt-2 mb-2" xs={12} spacing={2}>
                {rdxTasks.map((task, index) => 
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <CardViewContainer 
                            title={task.title} 
                            desc={task.description} 
                            taskId={task.id}
                            handleDeleteTask={handleDeleteTask}
                        />
                    </Grid>
                )}
            </Grid>
        </React.Fragment>
    );
}

export default CardView;