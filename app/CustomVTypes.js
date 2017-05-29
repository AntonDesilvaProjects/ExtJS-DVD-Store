Ext.apply( Ext.form.field.VTypes, {
    customPass : function( val, field )
    {
        return /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/.test(val);
    },
    customPassText : 'Not a valid password. Length must be between 6 and 20 characters. Password must contain one digit, one lowercase letter,one uppercase letter, one special character(@#$%).'
});