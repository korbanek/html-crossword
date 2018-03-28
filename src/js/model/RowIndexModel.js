/**
 * @class RowIndexModel
 * 
 * @param {int} index - index of row
 */
function RowIndexModel(index)
{
    // Super constructor
    Model.call(this, '<div class="tile number"></div>');

    this.element.innerHTML = '<span>' + (index + 1) + '</span>';
}
/**
 * RowIndexModel extends Model
 */
RowIndexModel.prototype = Object.create(Model.prototype, {
});