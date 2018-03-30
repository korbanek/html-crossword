/**
 * @class RowIndexModel
 * 
 * @param {Row} row - Row object
 */
function RowIndexModel(row)
{
    // Super constructor
    Model.call(this, '<div class="tile number"></div>');

    this.element.innerHTML = '<span>' + (row.index + 1) + '</span>';
}
/**
 * RowIndexModel extends Model
 */
RowIndexModel.prototype = Object.create(Model.prototype, {
});