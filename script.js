let studentName = "Dhruvi";
let marks = 85;
const passingMarks = 40;

let isPassed = true;  


function checkResult(marks) {
    if (marks >= passingMarks) {
        return "Pass";
    } else {
        return "Fail";
    }
}


function showStudent(name, marks, result) {
    const resultList = document.getElementById("resultList");

    const card = document.createElement("div");
    card.className = "student-card";

    const resultClass = result === "Pass" ? "pass" : "fail";

    card.innerHTML = `
        <strong>Name:</strong> ${name}<br>
        <strong>Marks:</strong> ${marks}<br>
        <strong>Result:</strong>
        <span class="${resultClass}">${result}</span>
    `;

    resultList.appendChild(card);
}


let students = [
    { name: "KJ", marks: 75 },
    { name: "Preet", marks: 35 },
    { name: "Vraj", marks: 60 }
];

for (let i = 0; i < students.length; i++) {
    let result = checkResult(students[i].marks);

    showStudent(
        students[i].name,
        students[i].marks,
        result
    );
}


function addStudent() {
    let name = document.getElementById("studentName").value.trim();
    let marks = Number(document.getElementById("studentMarks").value);

    if (name === "") {
        alert("Please enter student name.");
        return;
    }

    if (document.getElementById("studentMarks").value === "" ||
        marks < 0 || marks > 100) {
        alert("Please enter marks between 0 and 100.");
        return;
    }

    let result = checkResult(marks);

    showStudent(name, marks, result);

    document.getElementById("studentName").value = "";
    document.getElementById("studentMarks").value = "";
}
