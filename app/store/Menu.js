Ext.define('Packt.store.Menu', {
    extend : 'Ext.data.Store',
    requires : [
        'Packt.util.Util'
    ],
    model : 'Packt.model.menu.Accordion',
    //This proxy can be declared inside the Model also
    proxy : {
        type : 'ajax',
        url : 'php/menu/list.php',
        reader : {
            type : 'json',
            rootProperty : 'data' //In ExtJs 4, this was called 'root'
        },
        listeners : {
            /*
                Fires when the server returns an exception. This event 
                may also be listened to in the event that a request has 
                timed out or has been aborted.
            */
            exception : function( proxy, response, operation ) {
                Packt.util.Util.showErrorMsg( response.responseText );
            }
        }
    }
});