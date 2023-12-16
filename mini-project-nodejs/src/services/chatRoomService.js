const { ChatRoom } = require("../models");
const userService = require("../services/userService");

const getChatRoomById = async (id) => {
	try {
		const chatRoom = await ChatRoom.findByPk(id);
		return chatRoom;
	} catch (error) {
		throw error;
	}
};

const getChatRoomByRoom = async (room) => {
	try {
		const chatRoom = await ChatRoom.findOne({ where: { room } });
		return chatRoom;
	} catch (error) {
		throw error;
	}
};

const deleteChatRoomByRoom = async (room) => {
	try {
		await ChatRoom.destroy({ where: { room } });
		return true;
	} catch (error) {
		throw error;
	}
};

const create = async (room, userId) => {
	try {
		room = await ChatRoom.create({
			room,
			UserId: userId,
		});

		return room;
	} catch (error) {
		throw error;
	}
};

const join = async (room, userId) => {
	try {
		const user = await userService.getUserById(userId);
		const chatRoom = await getChatRoomByRoom(room);

		user.addChatRoom(chatRoom.id);
		return chatRoom;
	} catch (error) {
		throw error;
	}
};

module.exports = {
	getChatRoomById,
	getChatRoomByRoom,
	deleteChatRoomByRoom,
	create,
	join,
};
