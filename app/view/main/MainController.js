Ext.define('Packt.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    requires: [
        'Packt.util.Util'
    ],

    alias: 'controller.main',
    onLogout : function( button, e, options )
    {
        var me = this;
        Ext.Ajax.request({
            url : 'php/security/logout.php',
            success : 'onLogoutSuccess',
            failure : 'onLogoutFailure',
            scope : me
        });
    },
    /*
        As per usual Ajax call, success handler is called if the connection
        was successful. Inside, we have to check if the requested operation
        was successful.
    */
    onLogoutSuccess : function( connection, response, options, eOpts )
    {
       var response = Packt.util.Util.decodeJson( connection.responseText );
       if( response.success )
       {
           //Destroy the main viewport - destroying all components in it.
            this.getView().destroy();
            //Reload the page
            window.location.reload();
       }
       else
       {
            Packt.util.Util.showErrorMsg( response.msg );
       }
    },
    onLogoutFailure : function( connection, response, options, eOpts )
    {
        Packt.util.Util.showErrorMsg( connection.responseText );
    }
});
