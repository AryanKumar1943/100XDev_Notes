const express = require("express");
const app = express();

let Todos = [];  // Initialize an empty array

app.use(express.json());

app.get("/", function (req, res) {
    const numberOfTasks = Todos.length;
    res.json({
        message: `Number of tasks: ${numberOfTasks}`,
        tasks: Todos
    });
});

app.post("/", function (req, res) {
    const { todo } = req.body;
    
    if (!todo) {
        return res.status(400).json({ msg: "Task cannot be empty!" });
    }

    Todos.push({ Task: todo });  // Add new task to Todos array

    res.json({
        msg: "Task added successfully!",
        Todos
    });
});

app.put("/", function (req, res) {
    // Update logic (To be implemented)
    res.json({ msg: "Update functionality coming soon!" });
});

app.delete("/", function (req, res) {
    // Delete logic (To be implemented)
    res.json({ msg: "Delete functionality coming soon!" });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
