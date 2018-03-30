/**
 * @class Crossword.Row
 * 
 * Represents Crossword Row
 */
Crossword.Row = function(index)
{
    var that = this;
    this.tiles = [];
    this.index = index;
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

    this.solveRandom = function()
    {
        var tiles = [];

        this.tiles.forEach(function(tile){
            if(tile.model instanceof TileModel && tile.model.element.value == ''){
                tiles.push(tile);
            }
        });

        if(!tiles.length){
            return;
        }

        var randomIndex = Math.floor(Math.random() * tiles.length);
        var random = tiles[randomIndex];

        tiles.splice(randomIndex, 1);

        if(random.model instanceof TileModel){
            do{
                if(random.model.element.value == ''){
                    random.model.element.value = random.model.value;
                    random.model.blur();
                    break;
                }

                var randomIndex = Math.floor(Math.random() * tiles.length);
                random = tiles[randomIndex];
            }
            while(random.model.element.value != '');
        }
    }
}