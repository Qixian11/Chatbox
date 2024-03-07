$(document).ready(function () {
    // Initial greeting from Jamie
    setTimeout(function () {
        appendMessage('jamie', 'Hello ! Nice to meet you',);

    }, 500);
});

function sendMessage() {
    var userInput = $('#user-input',).val();

    if (userInput.trim() !== '') {
        appendMessage('user', userInput,);


        if (isQuestion(userInput)) {
            setTimeout(function () {
                appendMessage('jamie', 'yes',);
            }, 500);
        }

        else if (userInput.toUpperCase() === 'JAMIE') {
            setTimeout(function () {
                appendMessage('jamie', 'Can I help you?',);
            }, 500);
        }

        else if (isSpamming()) {
            setTimeout(function () {
                appendMessage('jamie', 'Please give me some time to resolve the issue.',);
            }, 500);

        }
        else if (isYelling(userInput)) {
            setTimeout(function () {
                appendMessage('jamie', 'Please remain calm.',);
            }, 500);

        }
        else if (mentionsJamie(userInput) && !containsMessage(userInput)) {
            setTimeout(function () {
                appendMessage('jamie', 'Can I help you?',);
            }, 500);
        }
        else {
            setTimeout(function () {
                appendMessage('jamie', "Sorry, I don't understand",);
            }, 500);
        }
        $('#user-input').val('');
    }
}

function appendMessage(sender, message,) {
    var chatBox = $('#chat-box');
    var newMessage = $('<div>').addClass('chat-message ' + sender).text(message);
    chatBox.append(newMessage);
    chatBox.scrollTop(chatBox[0].scrollHeight);
}

function isQuestion(message) {
    return message.trim().endsWith('?');
}

function isYelling(message) {
    const impoliteKeywords = ['oi', 'wah', 'lo', 'ei'];
    if (impoliteKeywords.some(keyword => message.includes(keyword))) {
        return true;
    }
    return false;
}

function mentionsJamie(message) {
    return message.toLowerCase().includes('jamie');
}

function containsMessage(message) {
    return message.trim().toLowerCase() !== 'jamie';
}

var lastMessageTime = 0;

function isSpamming() {
    var currentTime = new Date().getTime();
    var timeDifference = currentTime - lastMessageTime;
    lastMessageTime = currentTime;
    return timeDifference < 4000;
}