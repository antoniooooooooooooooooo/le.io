let phrase = "Thirteen Ways of Looking at a Typeface";
let words;
let numLayers = 5;

function setup() {
    createCanvas(800, 600).parent('background2');
  frameRate(60);

  words = split(phrase, ' ');
}

function draw() {
  background(255);

  let lineHeight = height / words.length;

  for (let layer = 0; layer < numLayers; layer++) {
    for (let i = 0; i < words.length; i++) {
      let y = i * lineHeight + layer * 20;

      let xNoise = map(noise(frameCount * 0.01, i * 0.1, layer * 0.1), 0, 1, -100, width + 100);
      let textSizeNoise = map(noise(frameCount * 0.02, i * 0.1, layer * 0.1), 0, 1, 16, 32);
      let textAlphaNoise = map(noise(frameCount * 0.03, i * 0.1, layer * 0.1), 0, 1, 100, 255);

      fill(255,0,0, textAlphaNoise);
      textSize(textSizeNoise);
      text(words[i], xNoise, y);
    }
  }
}
