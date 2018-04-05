/**
 * @class Row
 * 
 * Represents Crossword Row.
 * 
 * @param {int} index - row index of Row
 */
Crossword.Row = function(index)
{
    var that = this;
    this.tiles = [];
    this.index = index;
    this.model = new RowModel();

    /**
     * Adds tile to tiles[]
     * 
     * @param {Tile} tile 
     */
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

    /**
     * Clear all tiles within row
     */
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
     * Append model element to crossword model element
     * 
     * @param {CrosswordModel} crosswordModel - crossword model to append to 
     */
    this.appendTo = function(crosswordModel)
    {
        that.model.appendTo(crosswordModel);

        // Append tiles to row
        that.tiles.forEach(function(tile, index){
            tile.appendTo(that.model);
        });
    }

    /**
     * Solve random row
     */
    this.solveRandom = function()
    {
        var tiles = [];

        this.tiles.forEach(function(tile){
            if(tile.model instanceof TileModel && tile.model.element.value == ''){
                tiles.push(tile);
            }
        });

        // If there is no TileModel tiles
        if(!tiles.length){
            return;
        }

        do{
            var randomIndex = Math.floor(Math.random() * tiles.length);
            random = tiles[randomIndex];
            tiles.splice(randomIndex, 1);

            if(random.model.element.value == ''){
                random.model.element.value = random.model.value;
                random.model.blur();
                break;
            }
        }
        while(random.model.element.value != '');
    }
}