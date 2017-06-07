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
        Get access to various views throughout the application via
        refs. Generates convenience 'getX()' functions
    */
    refs : [
        {
            ref : 'mainPanel',
            selector : 'mainPanel'
        }
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
        var mainPanel = this.getMainPanel();
        var newTab = mainPanel.items.findBy( 
            function(tab)
            {
                return tab.title === record.get('text'); 
            }
        );
        if( !newTab )
        {
            newTab = mainPanel.add(
                {
                    xtype : record.get('className'),
                    closable : true,
                    glyph : record.get('glyph') + '@FontAwesome',
                    title : record.get('text')
                }
            );
            console.log('new tab');
            console.log( newTab );
        }
        mainPanel.setActiveTab( newTab );

    },
    renderDynamicMenu : function( view, options )
    {
        var dynamicMenus = [];
        //The 'view' parameters is passed to event handler by ExtJS. Here
        //it represents the menu panel(Packt.view.menu.Accordion)
        view.body.mask('Loading Menus...Please wait');

        //Load the Menu Store using the convenience function and attach an inline
        //callback
        this.getMenuStore().load(
            function( records, op, success)
            {
                console.log( records );
                //For each record in the store(which is of type Accordion)
                Ext.each( records, function( root ) {
                    //Create a menu object
                    var menu = Ext.create('Packt.view.menu.Tree', {
                        title : translations[ root.get('text') ],
                        iconCls : root.get('iconCls')
                    });

                    var treeNodeStore = root.items();
                    var nodes = [];
                    var item;

                    //Attach the menu items
                    for( var i = 0; i < treeNodeStore.getCount(); i++)
                    {
                        item = treeNodeStore.getAt( i );
                        nodes.push({
                            text : translations[ item.get('text') ],
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