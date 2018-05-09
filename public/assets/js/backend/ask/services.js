define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'ask/services/index',
                    add_url: 'ask/services/add',
                    edit_url: 'ask/services/edit',
                    del_url: 'ask/services/del',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                columns: [
                    [
                        {field: 'id', title: __('ID'), operate: false},
                        {field: 'user_name', title: __('姓名'), operate: 'LIKE %...%'},
                        {field: 'user_avatar', title: __('头像'), operate: false, formatter: Table.api.formatter.image, operate: false},
                        {field: 'status', title: __('用户状态'), operate: false, formatter: Controller.api.formatter.status},
                        {field: 'online', title: __('是否在线'), operate: false, formatter: Controller.api.formatter.online},
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
                status: function (value, row) {
                    return row.status === 1 ? '启用' : '禁用';
                },
                online: function (value, row) {
                    return row.online === 1 ? '在线' : '离线';
                }
            }

        }
    };
    return Controller;
});