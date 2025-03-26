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

        public function editTask(){
            $task_info = json_decode(file_get_contents('php://input'), true);

            $task = Tasks::updateTask($task_info);

            echo json_encode($task);
        }

        public function checkTask(){
            $task_info = json_decode(file_get_contents('php://input'), true);

            $task = Tasks::checkTask($task_info);

            echo json_encode($task);
        }

        public function deleteTask(){
            $task_info = json_decode(file_get_contents('php://input'), true);

            $task = Tasks::deleteTask($task_info);

            echo json_encode($task);
        }
    }