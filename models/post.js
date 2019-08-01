module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
      info: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [5-50],
        }
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "https://imgur.com/xjhcWp3",
      },
      tag: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: [3-10],
          }
      },      
    },
    {
  });
  
  
  
    Post.associate = function (models) {
      Post.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Post;
  };
  
  
  
  