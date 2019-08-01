module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
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
        profileImg: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: "https://imgur.com/xjhcWp3",
          }
    })

    User.associate = function(models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        User.hasMany(models.Post, {
          onDelete: "cascade"
        });
      };


    return User
}