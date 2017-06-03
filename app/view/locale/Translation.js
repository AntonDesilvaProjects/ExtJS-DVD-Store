Ext.define('Packt.view.locale.Translation', {
    extend : 'Ext.button.Split',
    requires : [
        'Packt.view.locale.TranslationController'
    ],
    xtype : 'translation',
    text : 'Language',
    controller : 'translation',
    menu : {
        xtype : 'menu',
        defaults : {
            listeners : {
                click : 'onMenuItemClick'
            }
        },
        items : [
            {
                xtype : 'menuitem',
                iconCls : 'en',
                text : 'English'
            },
            {
                xtype : 'menuitem',
                iconCls : 'es',
                text : 'Spanish'
            },
            {
                xtype : 'menuitem',
                iconCls : 'lk',
                text : 'Sinhala'
            }
        ]
    },
    listeners : {
        afterrender : 'afterTranslationBtnRender'
    }
});