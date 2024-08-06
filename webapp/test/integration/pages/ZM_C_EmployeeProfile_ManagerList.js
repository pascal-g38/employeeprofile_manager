sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'employeeprofilemanager',
            componentId: 'ZM_C_EmployeeProfile_ManagerList',
            contextPath: '/ZM_C_EmployeeProfile_Manager'
        },
        CustomPageDefinitions
    );
});