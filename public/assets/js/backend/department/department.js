define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'department/department/index',
                    add_url: 'department/department/add',
                    edit_url: 'department/department/edit',
                    del_url: 'department/department/del',
                    multi_url: '',
                    synchronize_url: 'department/department/synchronize'
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                commonSearch: false,
                search: false,
                pagination: true,
                columns: [
                    [
                        {field: 'id', title: 'ID', operate: false},
                        {field: 'image', title: '图片', operate: false, formatter: Table.api.formatter.image},
                        {field: 'name', title: __('科室名称'), operate: false},
                        {field: 'phone', title: __('科室电话'), operate: false},
                        {field: 'description', title: __('科室简介'), operate: false},
                        {field: 'status', title: __('状态'), formatter: Table.api.formatter.status, operate: false},
                        {field: 'create_time', title: __('添加时间'), formatter: Table.api.formatter.datetime, operate: false},
                        {field: 'update_time', title: __('最后修改时间'), formatter: Table.api.formatter.datetime, operate: false},
                        {
                            field: 'custom',
                            title: __('操作'),
                            operate: false,
                            formatter: Controller.api.formatter.custom
                        },
                        {
                            field: 'operate',
                            title: __('Operate'),
                            table: table,
                            events: Table.api.events.operate,
                            formatter: Table.api.formatter.operate,
                            buttons: [
                                {
                                    name: 'applist',
                                    text: '医生列表',
                                    title: '科室医生',
                                    icon: 'fa fa-list',
                                    classname: 'btn btn-xs btn-success btn-addtabs',
                                    url: 'department/doctor/index'
                                }]
                        }
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        add: function () {
            Form.api.bindevent($("form[role=form]"));
        },
        edit: function () {
            Form.api.bindevent($("form[role=form]"));
        },
        api: {
            formatter: {
                custom: function (value, row, index) {
                    //添加上btn-change可以自定义请求的URL进行数据处理
                    return '<a class="btn-change text-success" data-url="department/department/change" data-id="' + row.id + '-' + row.status + '"><i class="fa ' + (row.status == 'hidden' ? 'fa-toggle-off' : 'fa-toggle-on') + ' fa-2x"></i></a>';
                },
            }

        }
    };
    return Controller;
});