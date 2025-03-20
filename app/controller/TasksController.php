<?php

    class TasksController{
        
        public function tasks(){

            $tasks = Tasks::getTasks();

            echo json_encode($tasks);

        }
    }