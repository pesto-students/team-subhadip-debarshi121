const { messageService } = require("../services");
const { emitSocketEvent } = require("../socket");
const { User, ChatRoom, Message } = require("../models");

const sendMessage = async (req, res) => {
	try {
		const { room, message } = req.body;
		const newMessage = await messageService.create(room, req.user.id, message);

		const messageWithUser = await Message.findOne({
			where: { id: newMessage.id },
			include: {
				model: User,
				attributes: { exclude: ["password"] },
			},
		});

		const chatRoom = await ChatRoom.findOne({ where: { room }, include: User });

		chatRoom.Users.forEach((user) => {
			if (user.id !== req.user.id) {
				emitSocketEvent(req, user.id.toString(), "newRoomMessage", messageWithUser);
			}
		});

		return res.status(201).json(messageWithUser);
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

const getHistory = async (req, res) => {
	try {
		const { room } = req.params;
		const page = parseInt(req.query.page) || 1;
		const limit = parseInt(req.query.limit) || 10;

		const messages = await messageService.getMessagesByRoom(room, page, limit);
		return res.status(200).json(messages);
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

module.exports = {
	sendMessage,
	getHistory,
};
