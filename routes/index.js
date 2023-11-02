var express = require('express');
const toDoController = require("../controllers/todo_controller")
const {markItemAsComplete} = require("../controllers/todo_controller");
var router = express.Router();

/* GET home page. */
router.get('/', toDoController.homeRoute);

router.get('/add', toDoController.renderAddForm);

router.post('/add', toDoController.addNewItem);

router.get('/complete/:id', markItemAsComplete)

router.get('/incomplete/:id', toDoController.markItemAsIncomplete);

router.get('/delete/:id', toDoController.deleteItem);

router.get('/edit/:id', toDoController.renderEditForm);

router.post('/edit/:id', toDoController.updateItem);

module.exports = router;
