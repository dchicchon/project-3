module.exports = function(sequelize, Datatypes) {
    var User = sequelize.define("User", {
        email: {
            type: Datatypes.STRING,
            allowNull: false,   
        },
        password: {
            type: Datatypes.STRING,
            allowNull: false
        }
    })

    return User
}