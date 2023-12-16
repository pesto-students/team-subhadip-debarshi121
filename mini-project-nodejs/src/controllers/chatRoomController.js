const { chatRoomService } = require("../services");
const { emitSocketEvent } = require("../socket");
const { ChatRoom, User } = require("../models");

const createRoom = async (req, res) => {
	try {
		const isRoomExists = await chatRoomService.getChatRoomByRoom(req.body.room);
		if (isRoomExists) {
			return res.status(400).json({ error: "Room name already exists!" });
		}
		const chatRoom = await chatRoomService.create(req.body.room, req.user.id);
		return res.status(201).json(chatRoom);
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

const joinRoom = async (req, res) => {
	try {
		const { room } = req.body;

		const isRoomExists = await chatRoomService.getChatRoomByRoom(req.body.room);

		if (!isRoomExists) {
			return res.status(404).json({ error: "Room doesn't exists!" });
		}

		const joinedRoom = await chatRoomService.join(room, req.user.id);

		const chatRoom = await ChatRoom.findOne({ where: { room }, include: User });

		chatRoom.Users.forEach((user) => {
			if (user.id !== req.user.id) {
				const userObj = {
					id: req.user.id,
					name: req.user.name,
				};
				emitSocketEvent(req, user.id.toString(), "newUserJoined", userObj);
			}
		});

		return res.status(201).json(joinedRoom);
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

const deleteRoom = async (req, res) => {
	try {
		const { room } = req.params;

		const chatRoom = await chatRoomService.getChatRoomByRoom(room);

		if(!chatRoom){
			return res.status(404).json({ error: "Chatroom not found!" });
		}

		if (chatRoom && chatRoom.UserId === req.user.id) {
			await chatRoomService.deleteChatRoomByRoom(room);
			return res.status(200).json({ message: "Room deleted!" });
		}

		return res.status(403).json({ error: "You are not authorized to perform this!" });
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

module.exports = {
	createRoom,
	joinRoom,
	deleteRoom,
};
