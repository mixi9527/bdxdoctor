<?php
/**
 * Created by PhpStorm.
 * User: mixi9527
 * Date: 2018/4/29
 * Time: 14:30
 */

namespace app\admin\model;


use think\model\Merge;

class Department extends Merge
{
    // /** 关联删除  */
    // // 定义关联模型列表
    // protected $relationModel = ['Doctor'];
    // // 定义关联外键
    // protected $fk = 'department_id';
    // protected $mapFields = [
    //     // 为混淆字段定义映射
    //     'id' => 'Doctor.id',
    //     'department_id' => 'Department.id',
    //     'name' => 'Doctor.name',
    //     'department_name' => 'Department.name',
    //     'status' => 'Doctor.status',
    //     'department_status' => 'Department.status',
    // ];


    protected $autoWriteTimestamp = true;

}