Ext.define('Packt.view.login.Login', {
    requires : [
        'Packt.view.login.LoginController',
        'Packt.util.Util',
        'Packt.view.locale.Translation'
    ],
    extend : 'Ext.window.Window',
    //must be unique
    xtype : 'login-dialog', //can also use alias : 'widget.login-dialog'
    autoShow: true,
    height : 170,
    width: 360,
    layout: {
        type: 'fit' /*  This layout is for components with 1 child. That child
                        will occupy the entire space(or fit the entire space).
                      */
    },
    iconCls : 'fa fa-key fa-lg',
    title : translations.login,
    closeAction : 'hide', //Alternatives: close - remove from DOM and destroy all children 
                                        //destroy - remove object and garbage collect
    closable : false, 
    draggable : false,
    resizeable : false,

    controller : 'login',
   

    items : [
        {
            xtype : 'form',
            reference : 'form',
            bodyPadding : 15, //Adds space between window and form components
            defaults: { //These values will apply all components of the form by default unless overriden
                xtype : 'textfield',
                anchor : '100%', //Use all the available horizontal space
                labelWidth: 60,
                allowBlank : false,
                vtype : 'alphanum', //only allow a-z, A-Z, 0-9
                minLength : 3,
                msgTarget : 'under', //Where to display the error message
                                    //other options: title, under, side, none
                listeners : {
                    /*
                        Events related to special keys(HOME,END,PAGE_UP,PAGE_DOWn,ENTER,etc).
                        We will check if user pressses 'Enter' and submit the form
                    */
                    specialKey : 'onTextFieldSpecialKey' 
                }
            },
            items : [
                {
                    name : 'user',
                    fieldLabel : translations.user,
                    maxLength : 25
                },
                {
                    id : 'password', //Using id is BAD!! but we need it here to display the tooltip
                    inputType : 'password',
                    name : 'password',
                    fieldLabel : translations.password,
                    maxLength : 15,
                    vtype : 'customPass', //Override the default VType from above with our custom Vtype,
                    msgTarget : 'side',
                    enableKeyEvents : true, //Make the textbox register key related events
                    listeners : {
                        keypress : 'onTextFieldKeyPress' //We will check CAPs Lock with this handler
                    }
                }
            ],
            dockedItems : [
                {
                    xtype : 'toolbar',
                    dock : 'bottom',
                    items : [
                        {
                            xtype : 'translation'
                        },
                        {
                            xtype : 'tbfill' //This is just empty spacing move the next two button down
                        },
                        {
                            xtype : 'button',
                            iconCls : 'fa fa-times fa-lg',
                            text : translations.cancel,
                            listeners : {
                                click : 'onButtonClickCancel'
                            }
                        },
                        {
                            xtype : 'button',
                            formBind : true, //Disables form submission if the form is not valid
                            iconCls : 'fa fa-sign-in fa-lg',
                            text : translations.login,
                            listeners : {
                                click : 'onButtonClickSubmit'
                            }
                        }
                    ]
                }
            ]
        }
    ]
});