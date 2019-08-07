const Sequelize = require("sequelize");
const bcrypt = require('bcryptjs');

module.exports = function (sequelize, DataTypes) {
    let User = sequelize.define("User", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1 - 30]
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1 - 30]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1 - 40]
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1 - 40]
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
            // defaultValue: "https://imgur.com/xjhcWp3",
        },

        bio: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [10 - 50]
            }
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
    })

    // User.associate = function (models) {
    //     // Associating Author with Posts
    //     // When an Author is deleted, also delete any associated Posts
    //     User.hasMany(models.Post, {
    //         onDelete: "cascade"
    //     });
    // };

    return User
}