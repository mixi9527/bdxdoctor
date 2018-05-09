<?php
/**
 * Created by PhpStorm.
 * User: momo
 * Date: 2018/5/6
 * Time: 14:15
 */

namespace app\admin\controller\ask;

use app\common\controller\Backend;

class Services extends Backend
{
    protected $model = null;

    public function _initialize()
    {
        parent::_initialize();
        $this->model = model('Service');
    }

}