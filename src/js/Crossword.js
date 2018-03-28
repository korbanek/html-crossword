/**
 * @class Crossword
 * 
 * Crossword constructor
 * 
 * @param {Array} fields - array mapped fields
 * @param {int} passwordColumn - column of password
 * @param {DOMElement} container - container of crossword. Default body
 */
function Crossword(fields, passwordColumn, container)
{
    container = container || document.body;
    var that = this;
    this.model = new CrosswordModel();

    this.rows = [];

    Crossword.passwordColumn = passwordColumn;

    // For all fields extract rows
    fields.forEach(function(row, rowIndex){
        // Add Row to Crossword.rows
        that.rows.push(new Crossword.Row());
        // For each columns in Row extract column
        row.forEach(function(col, colIndex){
            // Add Tile into Row
            that.rows[rowIndex].add(new Crossword.Tile(col, rowIndex, colIndex));
        });
    });

    /**
     * Draw method
     */
    this.draw = function()
    {
        that.rows.forEach(function(row, index){
            row.appendTo(that.model);
        });

        that.model.draw(container);
    }

    /**
     * Clear method
     */
    this.clear = function()
    {
        that.rows.forEach(function(row, index){
            row.clear();
        });
    }

    /**
     * Check whole crossword
     */
    this.check = function()
    {
        var successCount = 0;

        that.rows.forEach(function(row, index){
            if(row.check()){
                successCount++;
            }
        });

        if(successCount == that.rows.length)
        {
            console.log('Win');
        }else{
            console.log('Lose');
        }
    }

    /**
     * Solve crossword
     */
    this.solve = function()
    {
        that.rows.forEach(function(row, index){
            row.tiles.forEach(function(tile, index){
                if(tile.model instanceof TileModel){
                    tile.model.element.value = tile.model.value;
                }
            });
        });
    }
};

// Default password column
Crossword.passwordColumn = 0;
// Unique id generator
Crossword.uid = 0;
// Unique id prefix
Crossword.prefix = 'cs-';