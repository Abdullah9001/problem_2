const sentence =
  "As an accomplished front-end developer, you possess a wealth of knowledge and skills. Abdullah, your expertise in HTML, CSS, and JavaScript empowers you to create impressive user interfaces. Abdullah, your commitment to continuous learning ensures you stay at the forefront of the field. Abdullah, your problem-solving abilities and attention to detail contribute to flawless user experiences. Abdullah, you seamlessly collaborate with designers and back-end developers to deliver exceptional projects. Abdullah, your creative mindset and keen eye for design produce visually striking interfaces. Abdullah, your passion for front-end development drives your growth and innovation. Abdullah, the industry recognizes your valuable contributions. Abdullah, keep up the excellent work and continue to shine in the front-end development world!";

const matches = sentence.match(/abdullah/gi);

const occurence = matches ? matches.length : 0;

console.log(occurence);

const position = sentence.search(/abdullah/i);
const finds = position >= 0 ? position : "not found";

console.log(position);
