<?php
/**
 * Created by PhpStorm.
 * User: momo
 * Date: 2018/5/2
 * Time: 12:47
 */

namespace app\admin\controller\order;


use app\common\controller\Backend;

class Service extends Backend
{
    protected $model = null;

    public function _initialize()
    {
        parent::_initialize();
        $this->model = model('ServiceOrder');
    }

    public function detail($ids)
    {
        $row = $this->model->where(['id' => $ids])->find();
        if (!$row) $this->error(__('No Results were found'));
        switch ($row['status']) {
            case 1:
                $row['status'] = '待支付';
                break;
            case 2:
                $row['status'] = '待就诊';
                break;
            case 3:
                $row['status'] = '待评价';
                break;
            case 4:
                $row['status'] = '已评价';
                break;
            case 5:
                $row['status'] = '已取消';
                break;
        }
        $this->assign('row', $row);
        return $this->view->fetch();
    }
}