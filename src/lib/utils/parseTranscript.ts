const VERB = ["add", "create", "put", "insert"];
const NOUN = ["button", "text", "box", "image"];
const COLOR = ["blue", "red", "green", "black", "white", "gray"];
const PREPOSITION = ["under", "above", "below", "inside", "next to"];
const ARTICLE = ["the", "a", "an"];

export function parseTranscipt(transcript: string) {
  const words = transcript.toLowerCase().split(" ");

  const verb = words.find((word) => VERB.includes(word));
  const noun = words.find((word) => NOUN.includes(word));
  const color = words.find((word) => COLOR.includes(word));
  const preposition = words.find((word) => PREPOSITION.includes(word));

  const target = findTarget(words, preposition);

  return { verb, noun, color, preposition, target };
}

function findTarget(words: string[], preposition?: string) {}
