"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("chatrooms", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.DataTypes.INTEGER,
			},
			room: {
				type: Sequelize.DataTypes.STRING,
				allowNull: false,
			},
			UserId: {
				type: Sequelize.DataTypes.INTEGER,
				references: {
					model: {
						tableName: "users",
					},
					key: "id",
				},
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
		await queryInterface.dropTable("chatrooms");
	},
};
