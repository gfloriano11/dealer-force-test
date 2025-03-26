<?php

    require_once 'connection/Connection.php';

    require_once 'controller/TasksController.php'; // Ajuste o caminho conforme necessário
    
    require_once 'model/Tasks.php';

    if($_GET['method'] === 'tasks' && $_GET['action'] === 'get'){
        $controller = new TasksController;
        $controller->getTasks();
    }

    if($_GET['method'] === 'tasks' && $_GET['action'] === 'create'){
        $controller = new TasksController;
        $controller->createTask();
    }

    if($_GET['method'] === 'tasks' && $_GET['action'] === 'edit'){
        $controller = new TasksController;
        $controller->editTask();
    }

    if($_GET['method'] === 'tasks' && $_GET['action'] === 'check'){
        $controller = new TasksController;
        $controller->checkTask();
    }

    if($_GET['method'] === 'tasks' && $_GET['action'] === 'delete'){
        $controller = new TasksController;
        $controller->deleteTask();
    }