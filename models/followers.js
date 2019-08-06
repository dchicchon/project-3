const Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
    var Followers = sequelize.define("Followers", {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        follower_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    });

    // Followers.associate = function (models) {
    //     Followers.belongsTo(models.User, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     })
    // }

    // Post.associate = function (models) {
    //   Post.belongsTo(models.User, {
    //     foreignKey: {
    //       allowNull: false
    //     }
    //   });
    // };
    return Followers;
};

