<?php
/**
 * Created by PhpStorm.
 * User: mixi9527
 * Date: 2018/4/29
 * Time: 13:15
 */

namespace app\admin\controller\department;


use app\common\controller\Backend;

class Department extends Backend
{

    protected $model = null;

    public function _initialize()
    {
        parent::_initialize();
        $this->model = model('Department');
    }


    /**
     * 启用/禁用科室
     * @param string $ids
     * @throws \think\Exception
     * @throws \think\exception\PDOException
     */
    public function change($ids = '')
    {
        $aIds = explode('-', $ids);
        $status = $aIds[1] == 'hidden' ? 'normal' : 'hidden';
        db('department')->where('id', $aIds[0])->update(['status' => $status]);
        $this->success("操作成功");
    }

    /**
     * 手动同步科室数据
     */
    public function synchronize()
    {
        if (false) {
            $result = [
                'code' => 1,
                'msg'  => '同步成功',
            ];
            return json($result);
        }
        $result = [
            'code' => 0,
            'msg'  => '同步失败',
        ];
        return json($result);
    }

}