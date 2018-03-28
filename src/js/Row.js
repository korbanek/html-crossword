/**
 * @class Crossword.Row
 * 
 * Represents Crossword Row
 */
Crossword.Row = function()
{
    var that = this;
    this.tiles = [];
    this.model = new RowModel();

    this.add = function(tile)
    {
        this.tiles.push(tile);
    }

    /**
     * Get only input tiles count
     */
    this.inputTilesCount = function()
    {
        var count = 0;

        that.tiles.forEach(function(tile){
            if(tile.model instanceof TileModel){
                count++;
            }
        });

        return count;
    }

    this.clear = function()
    {
        that.tiles.forEach(function(tile){
            tile.clear();
        });
    }

    /**
     * Check all values within row
     */
    this.check = function()
    {
        var successCount = 0;

        that.tiles.forEach(function(tile){
            if(tile.check()){
                successCount++;
            }
        });

        if(successCount == that.inputTilesCount()){
            return true;
        }

        return false;
    }

    /**
     * @param {CrosswordModel} crosswordModel - crossword model to append to 
     */
    this.appendTo = function(crosswordModel)
    {
        that.model.appendTo(crosswordModel);

        that.tiles.forEach(function(tile, index){
            tile.appendTo(that.model);
        });
    }
}