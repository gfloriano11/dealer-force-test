<?php
    class Tasks{


        public static function getTasks(){

            $conn = Connection::getConn();

            $query = "SELECT * FROM tasks";

            $statement = $conn->prepare($query);

            $statement->execute();

            $result = $statement->get_result();

            while($row = $result->fetch_assoc()){
                $data[] = $row; 
            }

            if(!$data){
                throw new Error('Não há tarefas');
            }

            return $data;
        }

        public static function createTask($task_info){

            foreach($task_info as $key => $value){
                $$key = $value;
            }

            $conn = Connection::getConn();

            $query = "INSERT INTO tasks
            (task_name, task_desc, final_date)
            VALUES
            (?, ?, ?)";

            $statement = $conn->prepare($query);

            $statement->bind_param('sss', $taskName, $taskDesc, $taskDate);

            $statement->execute();

            return true;
        }

        public static function updateTask($task_info){

            foreach($task_info as $key => $value){
                $$key = $value;
            }

            $conn = Connection::getConn();

            $query = "UPDATE tasks
            SET task_name = ?,
            task_desc = ?,
            task_status = ?,
            final_date = ?
            WHERE id = ?";

            $statement = $conn->prepare($query);

            $statement->bind_param('ssssi', $task_name, $task_desc, $task_status, $task_date, $id);

            $statement->execute();

            return true;
        }
    }

?>