sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/richtexteditor/RichTextEditor"
 //   "sap/fe/macros/RichTextEditor"
    ], (Controller, RichTextEditor) => {
    //	"use strict";
    
        return Controller.extend("employeeprofilemanager.controller.RTESection", {
            onInit() {
    //			var sText = '<p style="text-align: justify; background: white; font-size: 10pt; font-family: Calibri, sans-serif;"><strong><span style="font-size: 10.5pt; font-family: sans-serif; color: black;">Hier könnte ihr Text stehen</span></strong>';
                var sText = 'Hier koennte ihr Text stehen';
    
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
                this.getView().byId("richTextEditorId").addItem(RichTextEditorObject);
            }
          });
       });  
    