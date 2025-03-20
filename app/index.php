<?php

    require_once 'connection/Connection.php';

    require_once 'controller/TasksController.php'; // Ajuste o caminho conforme necessário
    
    require_once 'model/Tasks.php';

    if($_GET['method'] === 'tasks'){
        $controller = new TasksController;
        $controller->tasks();
    }