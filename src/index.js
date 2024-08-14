const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
  "**********": " ",
};
function decode(expr) {
  let newArray = expr.match(/.{1,10}/g);
  newArray = newArray.map((element) => {
    let morse2 = element.replaceAll("10", ".");
    morse2 = morse2.replaceAll("11", "-");
    return morse2.replaceAll("0", "");
  });
  newArray = newArray.map((element) => {
    return MORSE_TABLE[element];
  });
  return newArray.join("");
}

module.exports = {
  decode,
};
