// To handle lowercase letter:

const alphabet = "abcdefghijklmnopqrstuvwxyz";

// To handle uppercase letter:

const alphabet1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// DECRYPTION

function decryptLowerLetter (mysteryMessage, deShiftValue)
{
    let deindex = alphabet.indexOf(mysteryMessage);
    let originalIndex = (deindex - deShiftValue + alphabet.length) % alphabet.length;
    while (originalIndex < 0) {originalIndex += alphabet.length};
    return alphabet[originalIndex];
}

function decryptUpperLetter (mysteryMessage, deShiftValue)
{
    let deindex = alphabet1.indexOf(mysteryMessage);
    let originalIndex = deindex - deShiftValue;
    while (originalIndex < 0) {originalIndex += alphabet1.length};
    return alphabet1[originalIndex];
}

function decryptMessage (mysteryMessage, deShiftValue)
{
    let decryptedMessage = "";
    let count = 0;
    for (let i = 0; i < mysteryMessage.length; i++)  
    {
              
      if (count == 2)
      {
        count = 0;
        continue;
      }
       
      if (alphabet1.includes(mysteryMessage[i]))
      {
        decryptedMessage += decryptUpperLetter (mysteryMessage[i], deShiftValue);
        count++;
      }

      else if (alphabet.includes(mysteryMessage[i]))
      {
        decryptedMessage += decryptLowerLetter (mysteryMessage[i], deShiftValue);
        count++;
      }

      else 
      {
        decryptedMessage += mysteryMessage[i];
        count++;
      }
      
    }

    console.log(decryptedMessage);
    return decryptedMessage;
    
}    

decryptMessage ("Xuobbie jRhdkjrkib, qcudujd cwu rqjj 1n00l Qacqwbyyu cQhbudvq.f", 42);
decryptMessage ("Iueuan jrxuq cjythdykwxaj mixkqtaeml ebv wHenckvbkei rqdmt fHukckvi.r Jbxuihus, tmxayiwfuxh sjxau amenhtv 'zQkhhuubyjkit' yjew jhxux mxydatij. zJxmu hvymhihj ajel kldlsuyjb dyju yid uekdh qIbkqsxa xsxqqdvduzb wuqzhdoi qjxwu waueo xjem jfxuy dpuntj dgkvuiwj.", 42);

// Attribution to borrowed or inspired code:

  // https://stackoverflow.com/questions/68158413/how-can-i-remove-every-nth-character-from-a-string-in-javascript

  // https://stackoverflow.com/questions/32030727/replace-every-nth-character-from-a-string

  // https://stackoverflow.com/questions/15533759/javascript-how-to-remove-every-3rd-element-from-an-array

  // https://medium.com/@ryan_forrester_/javascript-character-count-how-to-guide-5c60f61c82f3

  // https://stackoverflow.com/questions/44232645/caesar-cipher-in-javascript

  // decryptedMessage = mysteryMessage.slice(0, i) + mysteryMessage.slice(i+1, mysteryMessage.length);

  // https://stackoverflow.com/questions/77951897/how-to-decrypt-after-adding-random-letter-after-every-two-letters-javascript

  // https://stackoverflow.com/questions/78416647/caesars-cipher-with-a-twist-how-to-remove-random-letters-from-a-string

  // ChatGPT