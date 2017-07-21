var app6 = new Vue({
    el: '#app-spongememe',
    data: {
        input: '',
        message: "dON't Use thAt WEIrD SPoNGeBob MoCKing meme."
    },
    methods: {
        randomlyCapitalizeText: function() {
            var currentCaps = 0;
            var outputMessage = this.input.toLowerCase().split(' ');
            if (outputMessage.length > 0) {
                for (i = 0; i < outputMessage.length; i++) {
                	outputMessage[i] = outputMessage[i].split('');
                    var wordLength = outputMessage[i].length;
                    var maxCapsInWord = Math.ceil(wordLength / 2);
                    currentCapsInWord = 0;
                    for (j = 0; j < wordLength; j++) {
                        var randNum = Math.random() >= 0.5;
                        if (randNum && currentCapsInWord < maxCapsInWord) {
                        	console.log('hot');
                            outputMessage[i][j] = outputMessage[i][j].toUpperCase();
                            console.log(outputMessage);
                        }
                    }
                    outputMessage[i] = outputMessage[i].join('');
                }
            }
            this.message = outputMessage.join(' ');
        },
        copyText: function() {
            //Before we copy, we are going to select the text.
            window.getSelection().selectAllChildren(document.getElementById("generatedText"));
            //add to clipboard.
            document.execCommand('copy');

            if (window.getSelection) {
                if (window.getSelection().empty) { // Chrome
                    window.getSelection().empty();
                } else if (window.getSelection().removeAllRanges) { // Firefox
                    window.getSelection().removeAllRanges();
                }
            } else if (document.selection) { // IE?
                document.selection.empty();
            }

        }
    }
})
