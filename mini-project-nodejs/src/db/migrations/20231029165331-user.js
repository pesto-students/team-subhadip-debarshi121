"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("users", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.DataTypes.INTEGER,
			},
			name: {
				type: Sequelize.DataTypes.STRING,
				allowNull: false,
			},
			email: {
				type: Sequelize.DataTypes.STRING,
				allowNull: false,
			},
			password: {
				type: Sequelize.DataTypes.STRING,
				allowNull: false,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DataTypes.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DataTypes.DATE,
			},
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("users");
	},
};
