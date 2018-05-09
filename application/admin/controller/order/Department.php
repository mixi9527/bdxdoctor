<?php
/**
 * Created by PhpStorm.
 * User: momo
 * Date: 2018/5/2
 * Time: 12:49
 */

namespace app\admin\controller\order;


use app\common\controller\Backend;

class Department extends Backend
{
    protected $model = null;

    public function _initialize()
    {
        parent::_initialize();
        $this->model = model('ReservationOrder');
    }

}