Ext.define('Packt.view.login.CapsLockTooltip', {
    extend : 'Ext.tip.QuickTip',
    xtype : 'capslocktooltip',
    target : 'password', //This is the 'id' of the component to which the tool tip will be attached. It must be an id, not an itemId
    anchor : 'top', //Where to attach the tip ?
    anchorOffset : 0,
    width : 200,
    dismissDelay : 0, //After how long should the tooltip disappear ? 0 means it shouldn't disappear
    autoHide : false, //Autohide the tooltip when the mouse moves away from the target ?
    title : '<div class="fa fa-exclamation-triangle">' +  translations.capsLockTitle + '</div>',
    html : '' //We can attach a body to the tip if needed.
});