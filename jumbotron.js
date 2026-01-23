const currYear = "Fourth year";
const currUniversity = ["https://www.uwindsor.ca/", "The University of Windsor"];
const currProgram = ["http://future.uwindsor.ca/program/computer-science/", "Computer Science"]

const ageOfMe = parseInt(((new Date()) - (new Date("2004-11-24"))) / 3.154e+10);

const jumboBodyText = [
    `<p>Hi! My name is Kayden, I'm going through my <span class="highlight-txt">${currYear}</span> at <span class="highlight-txt"><a href="${currUniversity[0]}" target="_blank">${currUniversity[1]}</a></span> for <span class="highlight-txt"><a href="${currProgram[0]}" target="_blank">${currProgram[1]}</a></span>.</p>`,
    `<p>At <span class="highlight-txt">${ageOfMe} years old</span> I am an aspiring <span class="highlight-txt">programmer</span> and <span class="highlight-txt">creative</span> dedicated to bringing an <span class="highlight-txt">imaginative mind</span> to the field.</p>`,
    `<p>On this page, I have given you, the <span class="highlight-txt important-txt">reader</span>, a chance to glance at all of my projects, my resume, and previous jobs.</p>`,
];

console.log(jumboBodyText[0]);