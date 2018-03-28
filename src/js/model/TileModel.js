/**
 * @class TileModel
 * 
 * TileModel. Extends Model class
 * Appears as input with value
 * 
 * @param {string} value - Value passed to html input
 * @param {int} colIndex - Tile index
 */
function TileModel(value, htmlString)
{
    // Super constructor
    Model.call(this, htmlString);
    this.value = value;
}

/**
 * TileModel extends Model
 */
TileModel.prototype = Object.create(Model.prototype, {
    focus: {
        value: function()
        {
            this.parentNode.classList.add('active');
            this.classList.add('active');
            this.select();
        }
    },
    blur: {
        value: function()
        {
            this.parentNode.classList.remove('active');
            this.classList.remove('active');
        }
    },
    keypress: {
        value: function(e){
            e = e || window.event;
            var charCode = (typeof e.which == "undefined") ? e.keyCode : e.which;
            var charStr = String.fromCharCode(charCode);
            
            // Check if digit is letter
            if (!/[A-zĄĆĘŁŃÓŚŹŻąćęłńóśźż]/.test(charStr)) {
                // If not prevent input
                e.preventDefault();
                return false;
            }else{
                // Otherwise apply uppercased char string
                this.value = charStr.toUpperCase();
            }
            // Jump to next on tabulator
            if(e.which != 9){
                if(this.nextSibling){
                    this.nextSibling.focus();
                }
            }
        }
    },
    keyup: {
        value: function(e){
            if(e.which == 8 || e.which == 37){
                if(this.previousSibling){
                    this.previousSibling.focus();
                }
            }
            if(e.which == 39){
                if(this.nextSibling){
                    this.nextSibling.focus();
                }
            }
        }
    }
});

/**
 * @class RegularTileModel
 * 
 * @param {string} value 
 */
function RegularTileModel(value)
{
    // Super constructor
    TileModel.call(this,
        value,
        '<input class="tile input" type="text" maxlength="1" />'
    );
}

/**
 * RegularTileModel extends TileModel
 */
RegularTileModel.prototype = Object.create(TileModel.prototype, {
});

/**
 * @class RegularTileModel
 * 
 * @param {string} value 
 */
function PasswordTileModel(value)
{
    // Super constructor
    TileModel.call(this,
        value,
        '<input class="tile input pass" type="text" maxlength="1" />'
    );
}

/**
 * PasswordTileModel extends TileModel
 */
PasswordTileModel.prototype = Object.create(TileModel.prototype, {
});