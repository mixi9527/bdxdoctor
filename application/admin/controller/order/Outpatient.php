<?php
/**
 * Created by PhpStorm.
 * User: momo
 * Date: 2018/5/2
 * Time: 17:07
 */

namespace app\admin\controller\order;


use app\common\controller\Backend;

class Outpatient extends Backend
{

    protected $model = null;

    public function _initialize()
    {
        parent::_initialize();
        $this->model = model('OutpatientOrder');
    }

}