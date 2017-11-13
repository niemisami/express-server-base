import constants from '../shared/socketConstants';
import _ from 'lodash';

const setupSocket = io => {
    const {
        CONNECTION,
        DISCONNECT,
        LOGIN,
        LOGOUT,
        USER_JOINED,
        USER_LEFT,
        SELECT_ROOM,
        ADD_USER,
        CURSOR_LOCATION } = constants;

    let users = [];
    let sockets = {};

    let connectedUsers = 0;

    // you can add additional middleware
    // io.use((socket, next) => {
    //     console.log("Query: ", socket.handshake.query);
    //     next();
    // })

    io.sockets.on(CONNECTION, function (socket) {
        console.log(CONNECTION);
        let userLogged = false;

        socket.on(ADD_USER, function (data) {
            if (userLogged) return;
            connectedUsers++;
            console.log("add user ", data, connectedUsers);
            userLogged = true;
            socket.user = data.user;
            socket.playerID = socket;

            socket.broadcast.emit(USER_JOINED, { user: socket.user, numUsers: connectedUsers })
            socket.emit(LOGIN, { numUsers: connectedUsers });
        });

        socket.on(CURSOR_LOCATION, function (data) {
            // console.log("Location: ", data, userLogged);
            if (!userLogged) return;
            socket.broadcast.emit(CURSOR_LOCATION, { playerID: socket.playerID, coords: data.client });
        });

        socket.on(SELECT_ROOM, function (data) {
            console.log("select room " + data.room);
            socket.join(data.room);
            socket.room = data.room;
        });

        socket.on(DISCONNECT, function () {
            console.log("disconnect");
            if (userLogged) {
                connectedUsers--;
                socket.broadcast.emit(USER_LEFT, {
                    user: socket.user,
                    numUsers: connectedUsers
                });
            }
        });
    });
}

export default setupSocket;