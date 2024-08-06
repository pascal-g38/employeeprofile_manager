sap.ui.define([
    "sap/ui/test/opaQunit"
], function (opaTest) {
    "use strict";

    var Journey = {
        run: function() {
            QUnit.module("First journey");

            opaTest("Start application", function (Given, When, Then) {
                Given.iStartMyApp();

                Then.onTheZM_C_EmployeeProfile_ManagerList.iSeeThisPage();

            });


            opaTest("Navigate to ObjectPage", function (Given, When, Then) {
                // Note: this test will fail if the ListReport page doesn't show any data
                
                When.onTheZM_C_EmployeeProfile_ManagerList.onFilterBar().iExecuteSearch();
                
                Then.onTheZM_C_EmployeeProfile_ManagerList.onTable().iCheckRows();

                When.onTheZM_C_EmployeeProfile_ManagerList.onTable().iPressRow(0);
                Then.onTheZM_C_EmployeeProfile_ManagerObjectPage.iSeeThisPage();

            });

            opaTest("Teardown", function (Given, When, Then) { 
                // Cleanup
                Given.iTearDownMyApp();
            });
        }
    }

    return Journey;
});