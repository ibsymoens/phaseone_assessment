import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8080/note" });

class ApiRequests {
    static async createTask(obj) {
        const { data } = await API.post("/add", obj);
        return data;
    }

    static async deleteTask(obj) {
        const { data } = await API.delete(`/${obj}`);
        return data;
    }

    static async fetchTasks() {
        const { data } = await API.get("/getAll");
        return data;
    }
}

export default ApiRequests;