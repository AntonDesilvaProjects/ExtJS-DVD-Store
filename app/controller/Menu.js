/*
    Note that this is a MVC controller not tied to a particular 
    view.
 */
Ext.define('Packt.controller.Menu', {
    extend : 'Ext.app.Controller',
    /*
        ExtJS knows to look for a store by the name 'Menu.js' within
        the 'Packt.store'. Also, it generates the following convenience
        method: 'this.getMenuStore()' which returns this store.
    */
    stores : [
        'Menu'
    ],
    /*
        This init function is called during the init of the Application.js before
        the main Viewport is created. So it gets executed before any view is rendered.
    */
    init : function()
    {
        //For the selectors, we are using xtypes of our custom views
        //but if need be, we can select anything from entire application
        this.control({
            "menutree" : {
                itemclick : this.onTreePanelItemClick
            },
            "mainmenu" : {
                render : this.renderDynamicMenu
            }
        });
    },
    onTreePanelItemClick : function( view, record, item, index, event, options )
    {

    },
    renderDynamicMenu : function( view, options )
    {
        var dynamicMenus = [];
        view.body.mask('Loading Menus...Please wait');
        this.getMenuStore().load(
            function( records, op, success)
            {
                console.log( records );

                Ext.each( records, function( root ) {
                    var menu = Ext.create('Packt.view.menu.Tree', {
                        title : root.get('text')/*translations[ root.get('text') ]*/,
                        iconCls : root.get('iconCls')
                    });

                    var treeNodeStore = root.items();
                    var nodes = [];
                    var item;

                    for( var i = 0; i < treeNodeStore.getCount(); i++)
                    {
                        item = treeNodeStore.getAt( i );
                        nodes.push({
                            text : root.get('text')/*translations[ item.get('text') ]*/,
                            leaf : true,
                            glyph : item.get('iconCls'),
                            id : item.get('id'),
                            className : item.get('className')
                        });
                    }

                    menu.getRootNode().appendChild( nodes );
                    dynamicMenus.push( menu );
                });
                view.add(dynamicMenus);
                view.body.unmask();
            }
        );
    }
});