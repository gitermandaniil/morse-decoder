const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0'
}

function decode (expr) {
  const result = []

  for (let i = 0; i < expr.length; i += 10) {
    const cut = expr.slice(i, i + 10)

    if (/\*{10}/.test(cut)) {
      result.push(' ')
      continue
    }

    const convert = cut.replace(/00/g, '').replace(/10/g, '.').replace(/11/g, '-')

    result.push(MORSE_TABLE[convert])
  }

  return result.join('')
}

module.exports = {
  decode
}
