Ext.define('Packt.view.locale.TranslationController', {
    extend : 'Ext.app.ViewController',
    alias : 'controller.translation',
    onMenuItemClick : function(item, e, options)
    {
        var menu = this.getView();
        menu.setIconCls( item.iconCls );
        menu.setText( item.text );

        localStorage.setItem('user-lang', item.iconCls );

        window.location.reload();
    },
    afterTranslationBtnRender : function( button, eOpts )
    {
        var currentLang = localStorage.getItem('user-lang');
        if( currentLang )
        {
            button.setIconCls( translations.langId  );
            button.setText( translations.fullLangName );
        }
    }
});