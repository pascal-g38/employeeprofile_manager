sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'employeeprofilemanager',
            componentId: 'ZM_C_EmployeeProfile_ManagerObjectPage',
            contextPath: '/ZM_C_EmployeeProfile_Manager'
        },
        CustomPageDefinitions
    );
});