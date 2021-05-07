import { Router } from "express";

import Todo from "../models/Todos.js";

const router = Router();

router.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).send("Something went wrong and an error occured:", error);
  }
});

router.post("/todo/add", async (req, res) => {
  const { todo } = req.body;

  try {
    const newTodo = new Todo({ name: todo });
    const createdTodo = await newTodo.save();
    res.status(201).json(createdTodo);
  } catch (error) {
    res.status(500).send("Something went wrong and an error occured:", error);
  }
});

router.patch("/todo/update/:id", async (req, res) => {
  const { todo } = req.body;
  try {
    const updatedTodo = await Todo.findOneAndUpdate(
      { _id: req.params.id },
      { name: todo },
      { new: true, useFindAndModify: false }
    );
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(500).send("Something went wrong and an error occured:", error);
  }
});

router.delete("/todo/delete/:id", async (req, res) => {
  try {
    const deletedTodo = await Todo.findOneAndDelete({ _id: req.params.id });
    res.status(200).json(deletedTodo);
  } catch (error) {
    res.status(500).send("Something went wrong and an error occured:", error);
  }
});

export default router;
