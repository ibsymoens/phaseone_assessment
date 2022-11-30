import React, { useEffect } from "react";
import ApiRequests from "./api";
import { fetch_tasks } from "./redux/actions/task";
import { Sidebar, TableView, CardView } from "./components";
import { Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        ApiRequests.fetchTasks()
                   .then(res => dispatch(fetch_tasks(res)))
                   .catch(err => console.log(err.message));
    }, []);

    return (
        <React.Fragment>
            <Router>
                <Grid container>
                    <Grid item xs={3} sm={2}>
                        <Sidebar />
                    </Grid>
                    <Grid item xs={9} sm={10} sx={{ mt: 3 }}>
                        <Routes>
                            <Route path="/" element={<TableView />} exact />
                            <Route path="/cardview" element={<CardView />} exact />
                        </Routes>
                    </Grid>
                </Grid>
            </Router>
        </React.Fragment>
    );
}

export default App;