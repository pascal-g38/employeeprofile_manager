sap.ui.define([
    "sap/ui/core/mvc/ControllerExtension"
    ], (ControllerExtension) => {
	"use strict";
    
        return ControllerExtension.extend("employeeprofilemanager.controller.EmployeeSkillsExtend", {
        _sectionPrefix: "fe::CustomSubSection::EmployeeSkillsSection--",
        override: {   
            onInit() { 
              this.getView().byId(this._sectionPrefix + "textId")
            }
          }      
        });
       });  
    