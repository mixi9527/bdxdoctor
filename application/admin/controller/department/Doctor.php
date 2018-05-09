<?php
/**
 * Created by PhpStorm.
 * User: mixi9527
 * Date: 2018/4/29
 * Time: 13:26
 */

namespace app\admin\controller\department;


use app\common\controller\Backend;

class Doctor extends Backend
{
    // 关联查询
    protected $relationSearch = true;
    protected $model = null;
    protected $ruleList = [];

    public function _initialize()
    {
        parent::_initialize();
        $this->model = model('Doctor');

        $departments = db('department')->select();
        $this->view->assign('departments', $departments);
    }


    public function index()
    {
        $ids = $this->request->param('ids');
        // 搜索条件
        $commonSearchWhere = '';
        if (!empty($ids)) {
            $this->assign('ids', $ids);
            $commonSearchWhere = 'doctor.department_id = ' . $ids;
        }
        // 设置过滤方法
        $this->request->filter(['strip_tags']);
        if ($this->request->isAjax()) {
            list($where, $sort, $order, $offset, $limit) = $this->buildparams();
            $total = $this->model
                ->with('department')
                ->where($where)
                ->where($commonSearchWhere)
                ->order($sort, $order)
                ->count();

            $list = $this->model
                ->with('department')
                ->where($where)
                ->where($commonSearchWhere)
                ->order($sort, $order)
                ->limit($offset, $limit)
                ->select();

            $list = collection($list)->toArray();
            $result = array("total" => $total, "rows" => $list);

            return json($result);
        }
        return $this->view->fetch();
    }


    /**
     * 启用/禁用医生
     * @param string $ids
     * @throws \think\Exception
     * @throws \think\exception\PDOException
     */
    public function change($ids = '')
    {
        $aIds = explode('-', $ids);
        $status = $aIds[1] == 'hidden' ? 'normal' : 'hidden';
        db('doctor')->where('id', $aIds[0])->update(['status' => $status]);
        $this->success("操作成功");
    }

}