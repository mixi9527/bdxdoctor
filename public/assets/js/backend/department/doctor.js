define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'department/doctor/index/ids/' + $('#departmentId').val(),
                    add_url: 'department/doctor/add',
                    edit_url: 'department/doctor/edit',
                    del_url: 'department/doctor/del',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                columns: [
                    [
                        {field: 'id', title: __('Id')},
                        {field: 'sort', title: __('排序'), operate: false},
                        {field: 'image', title: __('头像'), formatter: Table.api.formatter.image, operate: false},
                        {field: 'name', title: __('姓名'), operate: 'LIKE %...%'},
                        {field: 'practice', title: __('职务'), operate: false},
                        {field: 'practice', title: __('职称'), operate: false},
                        {field: 'unit', title: __('所在单位'), operate: false},
                        {field: 'department.name', title: __('所在科室'), operate: false},
                        {field: 'status', title: __('状态'), operate: false, formatter: Table.api.formatter.status},
                        {
                            field: 'custom',
                            title: __('操作'),
                            operate: false,
                            formatter: Controller.api.formatter.custom,
                            searchList: JSON.stringify({ "normal": "张三", "hidden": "李四" })
                        },
                        {
                            field: 'operate',
                            title: __('Operate'),
                            table: table,
                            events: Table.api.events.operate,
                            formatter: Table.api.formatter.operate
                        }
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        add: function () {
            Controller.api.bindevent();
        },
        edit: function () {
            Controller.api.bindevent();
        },
        api: {
            bindevent: function () {
                Form.api.bindevent($("form[role=form]"));
            },
            formatter: {
                custom: function (value, row, index) {
                    //添加上btn-change可以自定义请求的URL进行数据处理
                    return '<a class="btn-change text-success" data-url="department/doctor/change" data-id="' + row.id + '-' + row.status + '"><i class="fa ' + (row.status == 'hidden' ? 'fa-toggle-off' : 'fa-toggle-on') + ' fa-2x"></i></a>';
                },
            }

        }
    };
    return Controller;
});