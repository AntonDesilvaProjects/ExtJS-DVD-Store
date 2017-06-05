/*
    This model is represents the properties of each
    Accordion panel. See 'TreeNode' model class to
    see the properties of each menu item.
*/
Ext.define('Packt.model.menu.Accordion', {
    extend : 'Ext.data.Model',
    requires : [
        'Packt.model.menu.TreeNode'
    ],
    fields : [
        {
            /*
                If we want the models to be unique, we can use the 'id' property. This way each
                model must have a unique value for id. If we don't want to use the 'id' field,
                we can use any other field but add the config 'idProperty'(below extend for example)
            */
            name : 'id', 
            type : 'int'
        },
        {
            name : 'text'
        },
        {
            name : 'iconCls'
        }
    ],
    hasMany : {
        model : 'Packt.model.menu.TreeNode', //The class 
        foreignKey : 'parent_id', //Identifies for the TreeNode
        name : 'items' //we can get an array of all 'TreeNode's associated with an Accordion instance with this name
    }
});