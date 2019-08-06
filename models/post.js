const Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    user_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    info: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5 - 50],
      }
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5 - 50],
      }
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [5 - 50],
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
      // defaultValue: "https://imgur.com/xjhcWp3",
    },
    tag: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [3 - 10],
      }
    },
    lat: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    lng: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
  },
    {
    });


  // Post.associate = function (models) {
  //   Post.belongsTo(models.User, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };
  // console.log(Post)
  return Post;
};



