const { Message } = require("../models");

const create = async (room, userId, message) => {
	try {
		const newMessage = await Message.create({
			room,
			message,
			UserId: userId,
		});

		return newMessage;
	} catch (error) {
		throw error;
	}
};

const getMessagesByRoom = async (room, page, limit) => {
	try {
		const offset = (page - 1) * limit;
		const messages = await Message.findAndCountAll({ where: { room }, offset, limit, order: [["createdAt", "DESC"]] });

		return {
			messages: messages.rows,
			currentPage: page,
			totalRecords: messages.count,
			totalPages: Math.ceil(messages.count / limit),
		};
	} catch (error) {
		throw error;
	}
};

module.exports = {
	create,
	getMessagesByRoom,
};
