module.exports = function(sequelize, DataTypes) {
    var Rating = sequelize.define("Rating", {
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1],
          isNumeric: true
        }
      }
    });
  
    // Post.associate = function(models) {
    //   // We're saying that a Post should belong to an Author
    //   // A Post can't be created without an Author due to the foreign key constraint
    //   Post.belongsTo(models.Author, {
    //     foreignKey: {
    //       allowNull: false
    //     }
    //   });
    // };
  
    return Rating;
  };
  