<?php
namespace app\common\controller;

use think\Validate;

class CommonValidate extends Validate
{
    protected $rule =   [
        'name'  => 'require|length:6,16',
        'name'   => 'unique:admin',
        'password'=>'require|confirm',

    ];
    
    protected $message  =   [
        'name.require'         => '名称不能为空',
        'name.length'          => '用户名长度为6-16位',
        'name.unique'          => '用户名已存在',
        'password.require'     => '密码不能为空',
        'password.confirm'     => '两次密码输入不一致',
    ];
    
    protected $scene = [
        'admin_register'  =>  ['name',''],
    ];


    public function goCheck($scene)
    {
        $data = input('param.');
        $result = $this->scene($scene)->check($data);
        var_dump($result);


    }





}