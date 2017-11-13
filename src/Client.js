// Example omitted from riebel's GitHub https://github.com/riebel/socketio-es6-starter
import Game from './Game';

class Client {
    constructor() {
        let btn = document.getElementById('startButton'),
            userNameInput = document.getElementById('userNameInput');

        btn.onclick = () => {
            this.startGame(userNameInput.value);
        };

        userNameInput.addEventListener('keypress', (e) => {
            let key = e.which || e.keyCode;

            if (key === 13) {
                this.startGame(userNameInput.value);
            }
        });
    }

    startGame(nick) {
        let nickErrorText = document.querySelector('#startMenu .input-error');

        if (nick && nick.length >= 3) {
            nickErrorText.style.opacity = 0;
            this.nick = nick;
        } else {
            nickErrorText.style.opacity = 1;
            return false;
        }

        this.game = new Game(this.nick);

        document.getElementById('startMenu').style.display = 'none';
        document.getElementById('chatbox').style.display = 'block';
    }
}

window.onload = () => {
    new Client();
};