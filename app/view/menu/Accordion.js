/* 
    This panel will host all the Tree panels with the actual
    menus. Each Tree panel will be contained in an Accordion.
*/
Ext.define('Packt.view.menu.Accordion', {
    extend : 'Ext.panel.Panel',
    xtype : 'mainmenu',
    width : 250,
    layout : {
        type : 'accordion',
        multi : true
    },
    collapsible : true,
    split : true, //Allows multiple accordion panels to be visible at a time
    iconCls : 'fa fa-sitemap fa-lg',
    title : translations.menu
});