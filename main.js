let jumboIndex = 0;
const jumboDescTxt = document.getElementById("jumbo-desc");

changeTextIndex()
setInterval(changeTextIndex, 10000);

// Jumbotron code using constants and an array, will change this to a button instead of a set interval later.
const currYear = "Fourth year";
const currUniversity = ["https://www.uwindsor.ca/", "The University of Windsor"];
const currProgram = ["http://future.uwindsor.ca/program/computer-science/", "Computer Science"]

const ageOfMe = parseInt(((new Date()) - (new Date("2004-11-24"))) / 3.154e+10);

const jumboBodyText = [
    `<p>Hi! My name is Kayden, I'm going through my <span class="highlight-txt">${currYear}</span> at <span class="highlight-txt"><a href="${currUniversity[0]}" target="_blank">${currUniversity[1]}</a></span> for <span class="highlight-txt"><a href="${currProgram[0]}" target="_blank">${currProgram[1]}</a></span>.</p>`,
    `<p>At <span class="highlight-txt">${ageOfMe} years old</span> I am an aspiring <span class="highlight-txt">programmer</span> and <span class="highlight-txt">creative</span> dedicated to bringing an <span class="highlight-txt">imaginative mind</span> to the field.</p>`,
    `<p>On this page, I have given you, the <span class="highlight-txt important-txt">reader</span>, a chance to glance at all of my projects, my resume, and previous jobs.</p>`,
];


function changeTextIndex() {
    jumboDescTxt.innerHTML = "";
    if (jumboIndex >= 2) {
        jumboIndex = 0;
    }

    jumboDescTxt.innerHTML = jumboBodyText[jumboIndex];
    jumboIndex++;

}


// Code for implementing job experience. Implement later
const getDateInPosition = (startDateInMs, endDateInMs) => {
    const timeDiffInMs = endDateInMs - startDateInMs;
    const timeDiffInYears = timeDiffInMs / 3.154e+10;
    const timeDiffInMonths = (timeDiffInMs / 2.628e+9) % 12;
    if (parseInt(timeDiffInYears) === 0) {
        return `${parseInt(timeDiffInMonths)} months`;
    }
    if (parseInt(timeDiffInMonths) === 0) {
        if (timeDiffInYears === 1) {
            return `${parseInt(timeDiffInYears)} year`;
        }
        return `${parseInt(timeDiffInYears)} years`;
    }
    return (parseInt(timeDiffInYears) === 1) ? `${parseInt(timeDiffInYears)} year, and ${parseInt(timeDiffInMonths)} months` : `${parseInt(timeDiffInYears)} years, and ${parseInt(timeDiffInMonths)} months`;
}

const getMonthYearDate = (startDateInMs) => {
    const monthKey = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const startMonth = startDateInMs.getMonth();
    const startYear = startDateInMs.getFullYear();
    return `${monthKey[startMonth]} ${startYear}`;
}

const jobs = [
    {
        jobTitle: "Kennel Attendent",
        companyName: "Blenheim Veterinary Hospital",
        startAndEndDates: `${getMonthYearDate(new Date("2018-11-02"))} - ${getMonthYearDate(new Date("2022-08-02"))}`,
        timeInPos: getDateInPosition(new Date("2018-11-02"), new Date("2022-08-02")),
        jobDesc: "Nightly clean of the veterinary hospital. This includes taking out the garbage, washing dishes, cleaning kennels and cages, disinfecting surfaces, vacuuming, mopping, and ensuring the building is locked up and clean for the next day.",
        skillsDeveloped: ["Time Management","Organization","Cleaning"]
    },

    {   
        jobTitle: "Clerical IT",
        companyName: "Lambton Kent District School Board",
        startAndEndDates: `${getMonthYearDate(new Date("2023-05-02"))} - ${getMonthYearDate(new Date("2023-08-02"))}, ${getMonthYearDate(new Date("2024-05-02"))} - ${getMonthYearDate(new Date("2024-08-02"))}, ${getMonthYearDate(new Date("2025-05-02"))} - ${getMonthYearDate(new Date("2025-08-02"))}`,
        timeInPos: getDateInPosition(new Date("2023-05-02"), new Date("2025-08-02")),
        jobDesc: "Work in an office to check OSR folders, their contents, and then add a scanned and filled out copy to the database.",
        skillsDeveloped: ["Office work", "Document Scanning via Laserfiche", "Data Entry"]
    },

    {
        jobTitle: "Resident Assistant",
        companyName: "University of Windsor",
        startDateAndEndDates: `${getMonthYearDate(new Date("2023-08-02"))} - ${getMonthYearDate(new Date("2024-05-02"))}`,
        timeInPos: getDateInPosition(new Date("2023-08-02"), new Date("2024-05-02")),
        jobDesc: "Within one of three residence building on the university of campus. A resident assistants job is to build a community around a given floor through attending committee meetings, planning a floor event each month, one-on-one chats with every student, collaborating with other RAs to ensure all students feel welcome, and be on call for a night to watch each building and make sure everyone is safe.",
        skillsDeveloped: ["Time Management", "Event Planning", "Community Building", "Team Building", "Problem Solving", "Communication Skills"]
    },
    
    {
        jobTitle: "Teaching Assistant",
        companyName: `University of Windsor`,
        startAndEndDates: `${getMonthYearDate(new Date("2024-09-02"))} - ${getMonthYearDate(new Date("2025-01-02"))}`,
        timeInPos: getDateInPosition(new Date("2023-09-02"), new Date("2025-01-02")),
        jobDesc: "The job of a Teaching assistant at the University of Windsor is to assist an assigned professor with teaching a specific subject. In this case, in COMP2120 'Object Oriented Programming', assisting the professor means hosting labs for students, proctoring for exams, answering emails and holding weekly office hours, and marking exams, labs, and assignments.",
        skillsDeveloped: ["Teaching", "Furthering Programming Skills", "Communication Skills", "Professionalism", "Time Management"]
    }
]



