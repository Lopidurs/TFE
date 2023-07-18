module.exports = (sequelize, DataType) => {

    const Users = sequelize.define("Users", {
        FirstName: {
            type: DataType.STRING,
            allowNull: false
        },
        LastName: {
            type: DataType.STRING,
            allowNull: false
        },
        Email: {
            type: DataType.STRING,
            allowNull: false
        },
        PhoneNumber: {
            type: DataType.STRING,
            allowNull: false
        },
        Address: {
            type: DataType.STRING,
            allowNull: false
        },
        City: {
            type: DataType.STRING,
            allowNull: false
        },
        ZipCode: {
            type: DataType.STRING,
            allowNull: false
        },
        Street: {
            type: DataType.STRING,
            allowNull: false
        },
        Password: {
            type: DataType.STRING,
            allowNull: false
        },
        isStaff: {
            type: DataType.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        isAdmin: {
            type: DataType.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        isActive: {
            type: DataType.BOOLEAN,
            allowNull: false,
            defaultValue: true
        }
    })

    return Users;
}