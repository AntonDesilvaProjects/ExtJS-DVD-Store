/*
    This is the base model from which all the security
    model will be extended.
*/
Ext.define('Packt.model.security.Base', {
    extend : 'Ext.data.Model',
    requires : [
        'Packt.util.Util'
    ],
    idProperty : 'id',
    fields : [
        {
            name : 'id',
            type : 'int'
        }
    ],
    schema : {
        namespace : 'Packt.model.Security',
        urlPrefix : 'php',
        proxy : {

        }
    }
});