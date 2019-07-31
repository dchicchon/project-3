module.exports = function(sequelize, Datatypes) {
    var User = sequelize.define("User", {
        email: {
            type: Datatypes.STRING,
            allowNull: false,   
        },
        password: {
            type: Datatypes.STRING,
            allowNull: false
        },
        profileImg: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: "https://imgur.com/xjhcWp3",
          }
    })

    return User
}