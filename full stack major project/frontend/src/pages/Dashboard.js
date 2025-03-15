import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

const Dashboard = () => {
  const { user, token, setUser, setToken } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) navigate("/login");
    else fetchTasks();
  }, [token, navigate]);

  const fetchTasks = async () => {
    const { data } = await axios.get("http://localhost:5000/api/tasks", {
      headers: { Authorization: token },
    });
    setTasks(data);
  };

  const handleLogout = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <h1>Welcome, {user?.name}</h1>
      <button onClick={handleLogout}>Logout</button>
      <TaskForm token={token} fetchTasks={fetchTasks} />
      <TaskList tasks={tasks} fetchTasks={fetchTasks} token={token} />
    </div>
  );
};

export default Dashboard;
