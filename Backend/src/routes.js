const express = require("express");
const Router = express.Router();
const Control = require('./Controllers/control');

Router.post("/send",Control.data);
Router.get("/list",Control.receber);
Router.delete("/deletar/:id",Control.deletar);
module.exports = Router;