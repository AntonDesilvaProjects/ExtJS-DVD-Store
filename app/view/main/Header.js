Ext.define('Packt.view.main.Header', {
    extend : 'Ext.toolbar.Toolbar', 
    requires : [
        'Packt.view.locale.Translation'
    ],
    xtype : 'appHeader',
    ui : 'footer',
    items : [
        {
            xtype : 'component',
            bind : {
                html : '{appHeaderIcon}'
            }
        },
        {
            xtype : 'component',
            componentCls : 'app-header-title',
            bind : {
                html : '{appName}'
            }
        },
        {
            xtype : 'tbfill'
        },
        {
            xtype : 'translation'
        },
        {
            xtype : 'tbseparator' //This is the "|" sepearator icon
        },
        {
            xtype : 'button',
            itemId : 'logout',
            text : translations.logout,
            reference : 'logout',
            iconCls : 'fa fa-sign-out fa-lg buttonIcon',
            listeners : {
                click : 'onLogout'
            }
        }
    ]
});