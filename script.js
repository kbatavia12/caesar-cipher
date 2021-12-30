function cipherText(plainText, shift) {
    let result = "";

    for (ch of plainText) {

        let code = ch.charCodeAt(0);
        // console.log(code);
        if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
            console.log('done')
            if (ch == ch.toUpperCase()) {
                result += String.fromCharCode((ch.charCodeAt(0) + shift - 65) % 26 + 65);
            } else if (ch == ch.toLowerCase()) {
                result += String.fromCharCode((ch.charCodeAt(0) + shift - 97) % 26 + 97);
            }
        } else {
            if (code == 32) {
                result += ' ';
            }
        }

    }

    return result;
}

function getData() {
    const textDataElement = document.querySelector('.main__input-container-text');
    const textData = textDataElement.value;
    const shiftDataElement = document.querySelector('.main__input-container-number');
    let shiftData = shiftDataElement.value;
    const mainOutput = document.querySelector('.main__output-container-text.encoded');

    shiftData = parseInt(shiftData) % 26;
    // shiftData %= 26;

    let cipheredText = cipherText(textData, shiftData);
    // let decipheredText = cipherText(textData, 26 - shiftData);

    mainOutput.innerHTML = cipheredText;
    // mainOutput.addEventListener('click', function() {
    //     const mainDecodedOutput = document.querySelector('.main__output-container-text.decoded');
    //     mainDecodedOutput.innerHTML = decipheredText;
    // })
    console.log(cipheredText);
    console.log(textData);
    console.log(shiftData);
    console.log(cipheredText);


}

document.querySelector('.main__input-container-submit').addEventListener('click', getData);



