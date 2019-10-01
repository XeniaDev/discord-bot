exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const combinedString = args.join(" ");
  const weirds = {
    A: "∀", a: "ɐ",
    B: "ꓭ", b: "q",
    C: "Ɔ", c: "ɔ",
    D: "ᗡ", d: "p",
    E: "Ǝ", e: "ǝ",
    F: "Ⅎ", f: "ɟ",
    G: "⅁", g: "ɓ",
    H: "H", h: "ɥ",
    I: "I", i: "ı",
    J: "ᒋ", j: "ɾ",
    K: "ꓘ", k: "ʞ",
    L: "⅂", l: "l",
    M: "W", m: "ɯ",
    N: "N", n: "u",
    O: "O", o: "o",
    P: "Ԁ", p: "d",
    Q: "Ό", q: "b",
    R: "ꓤ", r: "ɹ",
    S: "S", s: "s",
    T: "ꓕ", t: "ʇ",
    U: "∩", u: "n",
    V: "Λ", v: "ʌ",
    W: "M", w: "ʍ",
    X: "X", x: "x",
    Y: "⅄", y: "ʎ",
    Z: "Z", z: "z"};
  let splitMessage = combinedString.split("");
  for (let i = 0; i < splitMessage.length; i++) {
    if (weirds[splitMessage[i]] !== undefined) {
      splitMessage[i] = weirds[splitMessage[i]];
    }
  }
  const reverseArray = splitMessage.reverse();
  const joinArray = reverseArray.join("");
  message.channel.send(joinArray);
};

exports.conf = {
  enabled: true, // Whether this command is enabled
  guildOnly: false, // If the command can only be run in servers (No PM's)
  aliases: [], // Other ways to call the command
  permLevel: "User" // The minimum permission needed to run the command
};

exports.help = {
  name: "reverse", // The name of the command used to call it
  category: "Fun", // The category the command fits in
  description: "Super reverse the message that you typed", // Short description of what the command does
  usage: "reverse <...message>" // An example of how to use the command
};
