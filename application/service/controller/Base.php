<?php

namespace app\service\controller;

use think\Controller;

class Base extends Controller
{
    public function _initialize()
    {
        if (empty(cookie('l_user_name'))) {
            $this->redirect(url('login/index'));
        }
        $this->assign([
            'socket' => config('socket')
        ]);

    }
}