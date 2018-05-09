<?php
/**
 * Created by PhpStorm.
 * User: mixi9527
 * Date: 2018/4/29
 * Time: 14:31
 */

namespace app\admin\model;


use think\Model;

class Doctor extends Model
{

    /**
     * 关联查询医生对应科室的信息
     */
    public function department()
    {
        return $this->belongsTo('Department', 'department_id', 'id', [], 'LEFT')->setEagerlyType(0);
    }
}