import React from "react";
import ApiRequests from "../api";
import { delete_task } from "../redux/actions/task";
import { useDispatch } from "react-redux";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from "@mui/material";
import moment from "moment";
import DeleteIcon from '@mui/icons-material/Delete';

const TableViewContainer = ({ tasks }) => {
    const dispatch = useDispatch();

    const handleDeleteTask = async (id) => {
        ApiRequests.deleteTask(id)
                    .then(() => dispatch(delete_task(id)))
                    .catch(err => console.log(err.response.data.message));     
    }

    return (
        <React.Fragment>
            <TableContainer component={Paper} style={{ margin: "auto" }}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Time</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        
                            {tasks.map((task, index) => 
                                <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell style={{ width: "15%", minWidth: "120px" }} component="th" scope="row">{task.title}</TableCell>
                                    <TableCell style={{ width: "50%", minWidth: "120px" }}>{task.description}</TableCell>
                                    <TableCell style={{ width: "20%", minWidth: "120px" }}>{moment(task.dateAndTime).format("MMMM d, YYYY")}</TableCell>
                                    <TableCell style={{ width: "10%", minWidth: "120px" }}>{moment(task.dateAndTime).format("HH:mm:ss")}</TableCell>
                                    <TableCell style={{ width: "5%" }}><IconButton onClick={() => handleDeleteTask(task.id)}><DeleteIcon /></IconButton></TableCell>
                                </TableRow>
                            )}
                        
                    </TableBody>
                </Table>
            </TableContainer>
        </React.Fragment>
    );
}

export default TableViewContainer;