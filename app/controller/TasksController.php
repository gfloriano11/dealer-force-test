<?php

    class TasksController{
        
        public function getTasks(){

            $tasks = Tasks::getTasks();

            echo json_encode($tasks);

        }

        public function createTask(){

            $task_info = json_decode(file_get_contents('php://input'), true);

            $task = Tasks::createTask($task_info);

            echo json_encode($task);
        }
    }