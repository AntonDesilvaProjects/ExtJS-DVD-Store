/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Packt.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'Packt',
        appName : 'DVD Rental Store',
        appHeaderIcon : '<span class="fa fa-desktop fa-lg app-header-logo">',
        footer : '©2017 All Rights Reserved.'
    }
});