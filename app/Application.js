//Following code needs to be run before the ExtJS application is loaded
function loadLocale() {
    /*
        If local storage is avaiable get the item 'user-lang' which will specify
        the language of the user. If that value is not available or local storage is
        is not defined, set English as default value.
    */
    var lang = localStorage ? ( localStorage.getItem('user-lang') || 'en') : 'en';
    //Load the appropriate language dictionary
    var file = Ext.util.Format.format("resources/locale/{0}.js", lang);
    Ext.Loader.loadScript( {
        url : file,
        onError : function() {
            alert('Error loading locale file. Please contact system adminstrator');
        }
    });
}

loadLocale();

/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('Packt.Application', {
    extend: 'Ext.app.Application',
    
    name: 'Packt',
    enableQuickTips : true,
    stores: [
        // TODO: add global / shared stores here
    ],
    views : [
        'Packt.view.login.Login'
    ],
    controllers : [
        'Menu'
    ],
    init : function()
    {
        var me = this;
        me.splashscreen = Ext.getBody().mask(
            translations.loadApplication , 'splashscreen'
        );
        me.splashscreen.addCls('splashscreen');
        //DomHelper can manupilate the DOM directly 
        Ext.DomHelper.insertFirst( Ext.query('.x-mask-msg')[0], {
            cls: 'x-splash-icon'
        });
    },
    /*
     *  This function is called after everything(stores, controllers) 
     *  have fully initialized.
     */
    launch: function () {
        var me = this;
        var task = new Ext.util.DelayedTask( function(){

            //Fade out the ExtJS mask
            me.splashscreen.fadeOut({
                duration: 1000,
                remove: true
            });
            //Also fade out our custom-css based mask
            me.splashscreen.next().fadeOut({
                duration: 1000,
                remove: true,
                listeners : {
                    afteranimate : function(el, startTime, eOpts )
                    {
                       //After the splash screen disappears, show the login window
                        Ext.widget('login-dialog');
                    }
                }
            });
       });
       task.delay( 2000 ); //Wait 2 seconds and execute the above passed in function(unmask).
    }
});
