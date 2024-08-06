sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'employeeprofilemanager/test/integration/FirstJourney',
		'employeeprofilemanager/test/integration/pages/ZM_C_EmployeeProfile_ManagerList',
		'employeeprofilemanager/test/integration/pages/ZM_C_EmployeeProfile_ManagerObjectPage',
		'employeeprofilemanager/test/integration/pages/ZM_C_ProfileEntry_ManagerObjectPage'
    ],
    function(JourneyRunner, opaJourney, ZM_C_EmployeeProfile_ManagerList, ZM_C_EmployeeProfile_ManagerObjectPage, ZM_C_ProfileEntry_ManagerObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('employeeprofilemanager') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheZM_C_EmployeeProfile_ManagerList: ZM_C_EmployeeProfile_ManagerList,
					onTheZM_C_EmployeeProfile_ManagerObjectPage: ZM_C_EmployeeProfile_ManagerObjectPage,
					onTheZM_C_ProfileEntry_ManagerObjectPage: ZM_C_ProfileEntry_ManagerObjectPage
                }
            },
            opaJourney.run
        );
    }
);