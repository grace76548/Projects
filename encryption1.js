// To handle lowercase letter:

const alphabet = "abcdefghijklmnopqrstuvwxyz";

// To handle uppercase letter:

const alphabet1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// ENCRYPTION

function encryptLowerLetter (message, shiftValue)
{
    const index = alphabet.indexOf(message);
    let newIndex = (index + shiftValue) % alphabet.length;
    if (newIndex < 0) {
      newIndex += alphabet.length;
    }  
    return alphabet[newIndex];
}

function encryptUpperLetter (message, shiftValue)
{
    const index = alphabet1.indexOf(message);
    let newIndex = (index + shiftValue) % alphabet1.length;
    if (newIndex < 0) {
      newIndex += alphabet.length;
    }  
    return alphabet1[newIndex];
}

function encryptMessage (message, shiftValue)
{
    let encryptedMessage = "";
    let count = 0;
    for (let i = 0; i < message.length; i++)
    {
      
      if (alphabet.includes(message[i]))
      {
        encryptedMessage += encryptLowerLetter (message[i], shiftValue);
        count++;
      }

      if (alphabet1.includes(message[i]))
      {
        encryptedMessage += encryptUpperLetter (message[i], shiftValue);
        count++;
      }

      if (!alphabet.includes(message[i]) && !alphabet1.includes(message[i]))
      {
        encryptedMessage += message[i];
        count++;
      }

      // To insert random characters after every 2 characters:

      if (count === 2)
      {
        const charIndex = Math.floor(Math.random() * alphabet.length);
        encryptedMessage += alphabet[charIndex];
        count = 0;
      }
    }    
 
console.log(encryptedMessage);
return encryptedMessage;

}

encryptMessage ("Hello Brutus, meet me at 100 Amalie Arena.", 42);

// Attribution to borrowed or inspired code:

  // https://stackoverflow.com/questions/1349404/generate-a-string-of-random-characters

  // https://stackoverflow.com/questions/1772941/how-can-i-insert-a-character-after-every-n-characters-in-javascript

  // https://bobbyhadz.com/blog/javascript-insert-character-every-n-characters

  // https://stackoverflow.com/questions/44232645/caesar-cipher-in-javascript

  // https://stackoverflow.com/questions/77951897/how-to-decrypt-after-adding-random-letter-after-every-two-letters-javascript

  