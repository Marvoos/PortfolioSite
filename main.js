// Beginning of Jumbotron button programming

const jumboDescTxt = document.getElementById("jumbo-desc");
const jumboRoundBtnDiv = document.querySelector(".round-btn-div");
let roundBtnSelected = 0;
const currYear = "Fourth year";
const currUniversity = ["https://www.uwindsor.ca/", "the University of Windsor"];
const currProgram = ["https://www.future.uwindsor.ca/program/computer-science-general/", "Computer Science"];
const ageOfMe = parseInt(((new Date()) - (new Date("2004-11-24"))) / 3.154e+10);
const jumboBodyText = [
    `<p>I'm Kayden! Of course, you already know that. So let's get into it...</p>`,
    `<p>At <span class="highlight-txt">${ageOfMe} years old</span> I am an aspiring <span class="highlight-txt">programmer</span> and <span class="highlight-txt">creative</span> dedicated to bringing an <span class="highlight-txt">imaginative mind</span> to the field.</p>`,
    `<p>I am a <span class="highlight-txt">lifelong learner</span> who will attempt to learn anything when given the right resources and time.</p>`,
    `<p>On this page, I have given you the chance to view my projects, my resume, and my skills development experience.</p>`
];

function changeTextIndex(newIndex) {
    jumboDescTxt.innerHTML = "";
    jumboDescTxt.innerHTML = jumboBodyText[newIndex];
    roundBtnSelected = newIndex;
}

changeTextIndex(roundBtnSelected);

jumboBodyText.forEach(() => {
    const jumboRoundBtn = document.createElement('button');
    jumboRoundBtn.classList.add('round-btn');
    jumboRoundBtnDiv.appendChild(jumboRoundBtn);
    
});

const jumboRoundBtns = document.querySelectorAll('.round-btn');

jumboRoundBtns.forEach((val, i) => {
    jumboRoundBtns[roundBtnSelected].classList.add('selected');
    jumboRoundBtns[i].addEventListener('click', () => {
        
        jumboRoundBtns[roundBtnSelected].classList.remove('selected');

        roundBtnSelected = i;
        changeTextIndex(i);
        jumboRoundBtns[i].classList.add('selected');
    });
});

// End of jumbotron button programming


// Beginning of jobs section

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
    const monthKey = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const startMonth = startDateInMs.getMonth();
    const startYear = startDateInMs.getFullYear();
    return `${monthKey[startMonth]} ${startYear}`;
}

const jobs = [
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
    },

    {
        jobTitle: "Kennel Attendent",
        companyName: "Blenheim Veterinary Hospital",
        startAndEndDates: `${getMonthYearDate(new Date("2018-11-02"))} - ${getMonthYearDate(new Date("2022-08-02"))}`,
        timeInPos: getDateInPosition(new Date("2018-11-02"), new Date("2022-08-02")),
        jobDesc: "Nightly clean of the veterinary hospital. This includes taking out the garbage, washing dishes, cleaning kennels and cages, disinfecting surfaces, vacuuming, mopping, and ensuring the building is locked up and clean for the next day.",
        skillsDeveloped: ["Time Management","Organization","Cleaning"]
    },
]

// End of jobs section

const canvas = document.getElementById("mycanvas");
const ctx = canvas.getContext("2d");

// End of canvas section

// Beginning of experiences section
const courseContainer = document.getElementById("courses");


const courses = [
    {
        commonName: "Computer Networks",
        courseCode: "COMP3670",
        department: "Computer Science",
        description: "",
        learningGoals: "",
        projects: ""
    },
    {
        commonName: "World Wide Web Information Systems Development",
        courseCode: "COMP3340",
        department: "Computer Science",
        description: "",
        learningGoals: "",
        projects: ""
    },
    {
        commonName: "Advanced Website Design",
        courseCode: "COMP2707",
        department: "Computer Science",
        description: "",
        learningGoals: "",
        projects: ""
    },
    {
        commonName: "Web Based Data Management",
        courseCode: "COMP3077",
        department: "Computer Science",
        description: "",
        learningGoals: "",
        projects: ""
    },
    {
        commonName: "Database Management Systems",
        courseCode: "COMP3150",
        department: "Computer Science",
        description: "",
        learningGoals: "",
        projects: ""

    },
    {
        commonName: "Intro to Multimedia Systems",
        courseCode: "COMP3500",
        department: "Computer Science",
        description: "",
        learningGoals: "",
        projects: ""
    },
    {
        commonName: "Intro to Computer Graphics",
        courseCode: "COMP3520",
        department: "Computer Science",
        description: "",
        learningGoals: "",
        projects: ""
    },
    {
        commonName: "Language, Grammar Translators",
        courseCode: "COMP2140",
        department: "Computer Science",
        description: "",
        learningGoals: "",
        projects: ""
    },
];

const columnClasses = ["third-col", "fourth-col"];

const randomColClasses = () => {
    const randomVal = Math.floor(Math.random() * columnClasses.length);
    return columnClasses[randomVal];
}

courses.forEach((course) => {
    const courseName = course.commonName;
    const department = course.department;
    //const description = course.description;

    const courseCardDiv = document.createElement("div");
    const courseNameh3 = document.createElement("h3");
    const departmentP = document.createElement("p");
    const chevron = 1;

    courseCardDiv.classList.add("course-card", randomColClasses());


    courseNameh3.innerText = courseName;
    departmentP.innerText = department;

    courseCardDiv.appendChild(courseNameh3);
    courseCardDiv.appendChild(departmentP);
    courseContainer.appendChild(courseCardDiv);


})