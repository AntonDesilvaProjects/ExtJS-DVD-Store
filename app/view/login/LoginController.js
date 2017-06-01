Ext.define('Packt.view.login.LoginController', {
    extend : 'Ext.app.ViewController',
    requires : [
        'Packt.view.login.CapsLockTooltip',
        'Packt.util.SessionMonitor'
    ],
    alias : 'controller.login',

    onTextFieldSpecialKey : function( field, e, options)
    {

    },
    onTextFieldKeyPress : function( field, e, options )
    {

    },
    onButtonClickCancel : function( button, e, options )
    {
        this.lookupReference('form').reset();
    },
    onButtonClickSubmit : function( button, e, options )
    {
        if( this.lookupReference('form').isValid() )
            this.doLogin();
    },
    doLogin : function()
    {
        var me = this;
        var form = me.lookupReference('form');
        //Mask the form while authentication is taking place
        form.mask('Authenticating...Please wait.');

        form.submit({
            clientValidation : true,
            url : 'php/security/login.php',
            scope : me,
            success : 'onLoginSuccess', //The server must explicitly send 'success' : true
            failure : 'onLoginFailure'
        });
    },
    onLoginFailure : function(form, action) //These two parameters are always passed.
    {
        //Unmask the login form
        this.getView().unmask();
        /* 
            action object looks as follows:
            {
                failureType : "server",
                response : {
                    responseText : "{"success" : false, "message" : "Bad password!"}",
                    status : 200,
                    statusText : "OK"
                },
                result : {
                    message : "Bad password!",
                    success : false
                }
            }
        */
        var result = Packt.util.Util.decodeJson( action.response.responseText );

        switch(action.failureType)
        {
            case Ext.form.Action.CLIENT_INVALID :
                Packt.util.Util.showErrorMsg("Please enter all the required fields!");
                break;
            case Ext.form.Action.CONNECT_FAILURE :
                Packt.util.Util.showErrorMsg(action.response.responseText);
                break;
            case Ext.form.Action.SERVER_INVALID :
                Packt.util.Util.showErrorMsg(result.msg);
                break;
        }

    },
    onLoginSuccess : function(form, action )
    {
        //Unmask the login form
        this.getView().unmask();
        this.getView().close();
        Ext.create('Packt.view.main.Main');
        Packt.util.SessionMonitor.start();
    },
    onTextFieldSpecialKey : function( textField , e, options )
    {
        if( e.getKey() == e.ENTER )
        {
            this.doLogin();
        }
    },
    onTextFieldKeyPress : function( textField, e, options )
    {
        var me = this;
        var charChode = e.getCharCode();
        if(  ( e.shiftKey && charChode >= 97 && charChode <= 122 ) || //Shift Key is pressed but pressed key is lower case
             ( !e.shiftKey && charChode >= 65 && charChode <= 90 ) ) //Shift Key is not pressed but pressed key is upper case
        {
            //CAPs LOCK is on. Display tool tip
            if( me.capslocktooltip != null )
                me.capslocktooltip.show();
            else
                me.capslocktooltip = Ext.widget('capslocktooltip');
        }
        else
        {
            if( me.capslocktooltip != undefined )
                me.capslocktooltip.hide();
        }
    }
})