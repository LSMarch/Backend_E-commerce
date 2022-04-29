// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'cascade'
})

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'cascade'
  
})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {    
  through: {
    model: 'ProductTag',
    unique: false
  },
  as: 'products_tagged',
  foreignKey: 'product_id',
  onDelete: 'cascade',
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {  
  through: {
    model: 'ProductTag',
    unique: false
  },
  as: 'tagged_products',
  foreignKey: 'tag_id',
  onDelete: 'cascade',
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
