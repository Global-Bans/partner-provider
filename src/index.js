require('dotenv').config();

const { io } = require('socket.io-client');

const API = 'https://globalbansapi.xyz';

const socket = io(API, {
	auth: { license: process.env.LICENSE },
	query: { provider: process.env.PROVIDER },
});

socket.on('error', (err) => console.log(err));

socket.on('log', (log) => console.log(log));

socket.on('connected', () => {
	socket.emit('addBan', {
		type: 'user',
		identifier: '2123123123',
		reason: 'asdasd',
	});

	socket.emit('removeBan', {
		type: 'user',
		identifier: '2123123123',
		reason: 'asdasd',
	});
});
