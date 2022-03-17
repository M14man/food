<?php
$_POST = json_decode(file_get_contents("php://input"), true); //Якщо ми не перетворюємо в JSON формат тоді для FormData цей рядок не потрібно 
echo var_dump($_POST);
