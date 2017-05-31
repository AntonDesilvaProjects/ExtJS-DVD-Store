Ext.define('Packt.view.main.Panel', {
    extend : 'Ext.tab.Panel',
    xtype : 'mainPanel',
    activeTab : 0,
    items : [
        {
            xtype : 'panel',
            closable : false, //This tab cannot be closed.
            iconCls : 'fa fa-home fa-lg tabIcon',
            title : 'Home'
        }
    ]
})