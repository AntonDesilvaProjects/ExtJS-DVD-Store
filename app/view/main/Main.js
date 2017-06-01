/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Packt.view.main.Main', {
    extend: 'Ext.container.Container',
    // extend: 'Ext.container.Viewport', //Make this container a viewport 
    requires: [
        'Packt.view.main.Header',
        'Packt.view.main.Footer',
        'Packt.view.main.Panel',
        'Packt.view.main.MainController',
        'Packt.view.main.MainModel'
    ],
    plugins : 'viewport',
    xtype: 'app-main',
    controller: 'main',

    //Connect the 'main' viewModel to this main page. This way we can access all its
    //defined fields
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    items: [
        {
            region : 'center',
            xtype : 'mainPanel'
        },
        {
            region : 'north',
            xtype : 'appHeader'
        },
        {
            region : 'south',
            xtype : 'appFooter'
        },
        {
            region : 'west',
            xtype : 'container',
            width : 200,
            split : true
        }
    ]
});
