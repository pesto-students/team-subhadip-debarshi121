const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");
const { userService } = require("../services")

const initializeSocketIO = (io) => {
	return io.on("connection", async (socket) => {
		try {
			const token = socket.handshake.headers.token;

			if (!token) {
				socket.emit("error", "Un-authorized handshake. Token is missing");
				return socket.disconnect();
			}

			const decoded = jwt.verify(token, JWT_SECRET);

			const user = await userService.getUserById(decoded?.id);

			if (!user) {
				socket.emit("error", "Un-authorized handshake. Token is invalid");
				return socket.disconnect();
			}

			socket.user = user;
			console.log("User connected -> userId:", user.id);
			socket.join(user.id.toString());

			socket.on("disconnect", () => {
				console.log("User disconnected -> userId:", socket.user?.id);
				socket.leave(socket.user?.id);
			});
		} catch (error) {
			console.error("Socket initialization error:", error.message);
		}
	});
};

const emitSocketEvent = (req, room, event, payload) => {
	req.app.get("io").in(room).emit(event, payload);
};

module.exports = { initializeSocketIO, emitSocketEvent };
