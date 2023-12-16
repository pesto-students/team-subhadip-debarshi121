const User = require("./userModel");
const ChatRoom = require("./chatRoomModel");
const Message = require("./messageModel");

User.belongsToMany(ChatRoom, { through: 'RoomUser' });
ChatRoom.belongsToMany(User, { through: 'RoomUser' });
ChatRoom.belongsTo(User);
User.hasMany(Message);
Message.belongsTo(User);

module.exports = {
    User,
    ChatRoom,
    Message
}