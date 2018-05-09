<?php
/**
 * Created by PhpStorm.
 * User: momo
 * Date: 2018/5/2
 * Time: 16:42
 */

namespace app\admin\model;


use think\Model;

class ServiceOrder extends Model
{

    protected $autoWriteTimestamp = 'timestamp';
    // 关闭自动写入update_time字段
    // protected $updateTime = false;
    // 关闭自动写入create_time字段
    // protected $createTime = false;
    // 定义时间戳字段名
    // protected $createTime = 'ctime';
    // protected $updateTime = 'utime';

}