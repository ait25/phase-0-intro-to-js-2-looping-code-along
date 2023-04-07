function writeCards(names) {
    let thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
        thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return thankYouMessages;
}

function countDown(number) {
    let count = number;
    while (count >= 0) {
        console.log(count);
        count--;
    }
}

