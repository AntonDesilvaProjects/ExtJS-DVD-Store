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
        }
    ]
});