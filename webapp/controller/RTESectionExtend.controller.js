sap.ui.define([
    "sap/ui/core/mvc/ControllerExtension",
    "sap/ui/richtexteditor/RichTextEditor"
    ], (ControllerExtension, RichTextEditor) => {
	"use strict";
    
        return ControllerExtension.extend("employeeprofilemanager.controller.RTESectionExtend", {
        _sectionPrefix: "fe::CustomSubSection::RTESection--",
        override: {   
            onInit() { 
     			var sText = '<p style="text-align: justify; background: white; font-size: 10pt; font-family: Calibri, sans-serif;"><strong><span style="font-size: 10.5pt; font-family: sans-serif; color: black;">Hier könnte ihr Text stehen</span></strong>';
    
                var RichTextEditorObject = new RichTextEditor({
                    width: "100%",
                    height: "600px",
                    showGroupFont: true,
                    showGroupLink: true,
                    showGroupInsert: true,
                    value: sText,
                    ready() {
                        this.addButtonGroup("styles").addButtonGroup("table")
                    }
                })
                this.getView().byId(this._sectionPrefix + "richTextEditorId").addItem(RichTextEditorObject);
            }
          }});
       });  
    