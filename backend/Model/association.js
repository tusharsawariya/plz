import User from './user.model.js';
import Item from './item.model.js';

// Define the one-to-many relationship
User.hasMany(Item, { foreignKey: 'userId', onDelete: 'CASCADE', constraints: true });
Item.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE', constraints: true });

export { User, Item };
