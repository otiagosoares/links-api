module.exports = (sequelize, DataTypes) => {

    const Account = sequelize.define('Account', {
        email: {
            type: DataTypes.STRING,
            allowNull: false
            
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    Account.prototype.toJason = function() {
        const values = { ...this.get() };
        delete values.password;
        return values;
    };

    return Account;
}