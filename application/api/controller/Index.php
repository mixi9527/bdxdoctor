<?php
namespace app\api\controller;

use app\api\model\Department;
use app\api\model\Doctor;

class Index extends Base
{
    /**
     * 所有科室&挂号类别
     * @return \think\response\Json
     */
    public function hisapp()
    {
        $service = input('service');

        //
        if ($service == 'His.RegDeparts'){
            $le = Department::field('id AS BCK01,did AS BCK02,name AS BCK03,description AS BCK13')->select();

            $returned = ['ret' => 200,
                'data' => [
                    'code' => 1,
                    'msg' => "",
                    'result' => [
                        'BCK01' => [],
                        'BCK02' => [],
                        'BCK03' => [],
                        'BCK13' => [],
                    ],
                    'data' => [
                        'le' => $le
                    ]
                ],
                'msg' => ""
            ];

            return json($returned);
        }

        if ($service == 'His.regType'){
            if (!input('?get.currtime')){

            }


        }
    }

    /**
     * 所有医生
     * @return \think\response\Json
     */
    public function wxcrm()
    {
        if (!input('?get.bck01')){
            return json(['code' => 400, 'msg' => '缺少请求参数bck01']);
        }

        if (!input('?get.isduty')){
            return json(['code' => 400, 'msg' => '缺少请求参数isduty']);
        }

        $bck01 = input('bck01');
        $isduty = input('get.isduty');
        $le = [];

        if ($isduty == 0){
            $le = Doctor::field('id AS BCE01,number AS BCE02,name AS BCE03,description AS BAC03,job AS ABI02,sex AS ABW01,department_id AS BCK01')->where('department_id ='.$bck01)->select();
        }

        $returned = ['ret' => 200,
            'data' => [
                'code' => 1,
                'msg' => "",
                'result' => [
                    'BCE01' => [],
                    'BCE02' => [],
                    'BCE03' => [],
                    'BCK13' => [],
                    'BAC03' => [],
                    'ABI02' => [],
                    'ABW01' => [],
                    'BCK01' => [],
                ],
                'data' => [
                    'le' => $le
                ]
            ],
            'msg' => ""
        ];

        return json($returned);
    }
}
