const express = require("express");
const {getAllTodos ,getTodoById, createTodo ,deleteTodo,updateTodo}= require ("../Controllers/todoControllers");
const { Todo } = require("../models/todo");

//define router features from  express
const router = express.Router(); 


router.get('/getAllTodos', getAllTodos);

router.get("/getTodoById/:id" , getTodoById);

router.post("/createTodo" , createTodo);

router.delete("/deleteTodo/:id" , deleteTodo);

router.put("/updateTodo/:id" , updateTodo);





module.exports=router;
