Ext.define('Packt.view.main.Footer', {
    extend : 'Ext.container.Container', //The most basic type of container
    xtype : 'appFooter',
    cls : 'app-footer',
    height : 30,
    layout : 'center', //Inherits from the fit layout so can have only one child
    items : [
        {
            xtype : 'component', //The most basic type of component
            width : 350, //Required for the 'center' layout
            componentCls : 'app-footer-title', //The CSS can be found in the corresponding folder
            bind : {
                html : '{footer}' //The components html will be bound to the ViewModel
            }
        }
    ]
});