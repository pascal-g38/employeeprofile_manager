sap.ui.define([
    "sap/ui/core/mvc/ControllerExtension",
    "sap/ui/richtexteditor/RichTextEditor"
    ], (ControllerExtension, RichTextEditor) => {
	"use strict";
    
        return ControllerExtension.extend("employeeprofilemanager.controller.RTESectionExtend", {
        _sectionPrefix: "fe::CustomSubSection::RTESection--",
        override: {   
            onInit() { 
                this.getView().byId(this._sectionPrefix + "richTextEditorId").attachReady(onRTEready)
 


                // var RichTextEditorObject = new RichTextEditor({
                //     width: "100%",
                //     height: "600px",
                //     showGroupFont: true,
                //     showGroupLink: true,
                //     showGroupInsert: true,
                //     value: sText,
//                    ready() {
//                        this.addButtonGroup("styles").addButtonGroup("table")
//                    }
                // })
 //               this.getView().byId(this._sectionPrefix + "richTextEditorId").addItem(RichTextEditorObject);
            }

          },
            onRTEready:function(){
                console.log("Hello World")
                this.getView().byId(this._sectionPrefix + "richTextEditorId").addButtonGroup("styles").addButtonGroup("table")
            }        
        });
       });  
    