<?php
namespace app\admin\controller;
use app\admin\controller\Base;
use app\common\controller\CommonValidate;


class Admin extends Base
{

    public function index()
    {
        return $this->fetch();
    }


    public function create()
    {
    	if ($_POST) {

            (new CommonValidate())->goCheck('admin_register');

    		exit;
    	}



        return $this->fetch();
    }






}
