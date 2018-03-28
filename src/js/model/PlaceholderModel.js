/**
 * PasswordTileModel extends TileModel
 */
PasswordTileModel.prototype = Object.create(TileModel.prototype, {
});

/**
 * @class PlaceholderModel
 */
function PlaceholderModel()
{
    // Super constrcutor
    Model.call(this, '<div class="tile placeholder"></div>');
}
/**
 * PlaceholderModel extends Model
 */
PlaceholderModel.prototype = Object.create(Model.prototype, {
});