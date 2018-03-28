/**
 * @class CrosswordModel
 * 
 * CrosswordModel. Extends Model class
 * Appears as input with value
 * 
 * @param {string} value - Value passed to html input
 * @param {int} colIndex - Tile index
 */
function CrosswordModel()
{
    // Super constructor
    Model.call(this, '<div class="crossword"></div>');
}
/**
 * CrosswordModel extends Model
 */
CrosswordModel.prototype = Object.create(Model.prototype, {
    keyup: {
        value: function(){
            
        }
    }
});