const MENU = [{
        "name": "首页",
        "title": "首页",
        "icon": "icon-daohang-shouye",
        "state": "dashboard.home",
        "son": []
    }, {
        "name": "baseInfo",
        "title": "日志中心",
        "icon": "icon-rizhi11",
        "state": "dashboard.baseBranchInfo",
        "son": [{
            "name": "登入日志",
            "icon": "icon-kehu",
            "state": "dashboard.baseBranchInfo"
        }, {
            "name": "操作日志",
            "icon": "icon-kehu",
            "state": "dashboard.baseBranchInfo"
        }]
    }, {
        "name": "数据通道",
        "icon": "icon-shuju",
        "state": "dashboard.baseBranchInfo",
        "son": [{
            "name": "接口监控",
            "icon": "icon-kehu",
            "state": "dashboard.gallery"
        }, {
            "name": "数据监控",
            "icon": "icon-kehu",
            "state": "dashboard.baseBranchInfo"
        }, {
            "name": "告警监控",
            "icon": "icon-kehu",
            "state": "dashboard.baseBranchInfo"
        }, {
            "name": "路由配置",
            "icon": "icon-kehu",
            "state": "dashboard.baseBranchInfo"
        }]
    }, {
        "name": "消息中心",
        "icon": "icon-xiaoxi1",
        "state": "dashboard.baseBranchInfo",
        "son": [{
            "name": "发送记录",
            "icon": "icon-kehu",
            "state": "dashboard.baseBranchInfo"
        }, {
            "name": "消息模板",
            "icon": "icon-kehu",
            "state": "dashboard.baseBranchInfo"
        }]
    }, {
        "name": "短信中心",
        "icon": "icon-caidan-cangkushezhi",
        "state": "dashboard.baseBranchInfo",
        "son": [{
            "name": "发送记录",
            "icon": "icon-kehu",
            "state": "dashboard.baseBranchInfo"
        }, {
            "name": "短信模板",
            "icon": "icon-kehu",
            "state": "dashboard.baseBranchInfo"
        }]
    }, {
        "name": "邮件中心",
        "icon": "icon-xiaoxi",
        "state": "dashboard.baseBranchInfo",
        "son": [{
            "name": "发送记录",
            "icon": "icon-kehu",
            "state": "dashboard.baseBranchInfo"
        }, {
            "name": "邮件模板",
            "icon": "icon-kehu",
            "state": "dashboard.baseBranchInfo"
        }]
    }, {
        "name": "Redis管理",
        "icon": "icon-caidan-cangkushezhi",
        "state": "dashboard.baseBranchInfo"
    }, {
        "name": "岗位管理",
        "icon": "icon-caidan-cangkushezhi",
        "state": "dashboard.baseBranchInfo"
    }];
export default MENU;