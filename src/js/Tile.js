/**
 * @class Crossword.Tile
 * 
 * Represents Crossword Tile
 * 
 * @param {string|bool} value - value of Tile (string - letter, true - index, false - empty)
 * @param {int} rowIndex - row index of Tile
 * @param {int} colIndex - column index of Tile
 */
Crossword.Tile = function(value, row, colIndex)
{
    var that = this;
    this.value = value;
    this.row = row;

    // Assign model dependent on value
    if(value == 0){
        this.model = new PlaceholderModel();
    }else if(value == 1){
        this.model = new RowIndexModel(that.row);
    }else if(value == 2){
        this.model = new HintModel(that);
    }else{
        if(colIndex == Crossword.passwordColumn){
            this.model = new PasswordTileModel(value);
        }else{
            this.model = new RegularTileModel(value);
        }
    }

    /**
     * Compare element value with Tile value
     */
    this.check = function()
    {
        return (that.value == that.model.element.value);
    }

    /**
     * @param {Model} model - model to append to 
     */
    this.appendTo = function(model)
    {
        that.model.appendTo(model);
    }

    this.find = function()
    {

    }

    /**
     * Clear input model element
     */
    this.clear = function()
    {
        if(that.model instanceof TileModel){
            that.model.element.value = "";
            that.model.element.classList.remove('invalid');
        }
    }
}