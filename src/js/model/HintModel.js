/**
 * @class HintModel
 * 
 * @param {Tile} tile - Tile object
 */
function HintModel(tile)
{
    this.tile = tile;
    // Super constructor
    Model.call(this, '<div class="tile hint"></div>');

    this.element.innerHTML = '<span>?</span>';
}
/**
 * HintModel extends Model
 */
HintModel.prototype = Object.create(Model.prototype, {
    click: {
        value: function(e)
        {
            e.preventDefault();
            e.stopPropagation();
            this.tile.row.solveRandom();

            return;
        }
    }
});