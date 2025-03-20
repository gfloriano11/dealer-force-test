<?php
    class Tasks{


        public static function getTasks(){

            $conn = Connection::getConn();

            $query = "SELECT * FROM tasks";

            $statement = $conn->prepare($query);

            $statement->execute();

            $result = $statement->get_result();

            while($row = $result->fetch_assoc()){
                $data = $row; 
            }

            if(!$data){
                $data = 'Não há tarefas';
            }

            var_dump($data);

            return $data;
        }
    }

?>