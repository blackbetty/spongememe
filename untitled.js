var currentCaps = 0;
var outputMessage = this.input.split(' ');
if (outputMessage.length > 0) {
    for (i = 0; i < outputMessage.length; i++) {
        var wordLength = outputMessage[i].length;
        var maxCaps = Math.ceil(wordLength / 2);
        currentCaps = 0;
        for (j = 0; j < wordLength; j++) {
            var randNum = Math.random() >= 0.5;
            if (randNum && currentCaps < maxCaps) {
                outputMessage[i][j] = outputMessage[i][j].toUpperCase();
            }
        }
    }
}
this.message = outputMessage.join(' ');
