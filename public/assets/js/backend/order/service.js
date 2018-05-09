define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'order/service/index/ids/' + $('#departmentId').val(),
                    add_url: '',
                    edit_url: '',
                    del_url: '',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                columns: [
                    [
                        {field: 'id', title: __('Id'), operate: false},
                        {field: 'order_id', title: __('订单号'), operate: 'LIKE %...%'},
                        {field: 'name', title: __('购买人'), operate: 'LIKE %...%'},
                        {field: 'mobile', title: __('手机号'), operate: 'LIKE %...%'},
                        {field: 'amount', title: __('支付金额'), operate: false},
                        {field: 'create_time', title: __('创建时间'), operate: false},
                        {field: 'status', title: __('订单状态'), operate: false},
                        {
                            field: 'operate',
                            title: __('Operate'),
                            table: table,
                            events: Table.api.events.operate,
                            formatter: Controller.api.formatter.info
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
                info: function (value, row, index) {
                    return '<a href="order/service/detail/ids/' + row.id + '" class="btn btn-detail btn-info btn-xs btn-addtabs" data-title="订单详情">详情</a>';
                }
            }
        }
    };
    return Controller;
});