module.exports = function (sequelize, Datatypes) {
    var User = sequelize.define("User", {
        email: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                len: [1 - 40]
            }
        },
        password: {
            type: Datatypes.STRING,
            allowNull: false,
            len: [1 - 40]
        },
        profileImg: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: "https://imgur.com/xjhcWp3",
          }
    })

    return User
}