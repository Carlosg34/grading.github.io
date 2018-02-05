    var grade = document.getElementById('input').value;
    var gradeDisplay = document.getElementById('displayGrade1');

    function calculateGrade() {
        var grade = document.getElementById('input').value;
        var gradeDisplay = document.getElementById('displayGrade1');
        if (grade >= 90) {
            gradeDisplay.textContent = 'A';
            gradeDisplay.classList.remove('failGradeColor');
            gradeDisplay.classList.add('passGradeColor');
        } else if (grade >= 80) {
            gradeDisplay.textContent = 'B';
            gradeDisplay.classList.remove('failGradeColor');
            gradeDisplay.classList.add('passGradeColor');
        } else if (grade >= 70) {
            gradeDisplay.textContent = 'C';
            gradeDisplay.classList.remove('failGradeColor');
            gradeDisplay.classList.add('passGradeColor');
        } else if (grade >= 60) {
            gradeDisplay.textContent = 'D';
            gradeDisplay.classList.remove('failGradeColor');
            gradeDisplay.classList.add('passGradeColor');
        } else {
            gradeDisplay.textContent = 'F';
            gradeDisplay.classList.remove('passGradeColor');
            gradeDisplay.classList.add('failGradeColor');
        }
    };

    // for (let i = 0; i < grade.length; i++) {
    //     if (grade >= 90) {
    //         gradeDisplay.textContent = 'A';
    //         gradeDisplay.classList.remove('failGradeColor');
    //         gradeDisplay.classList.add('passGradeColor');
    //     } else if (grade >= 80) {
    //         gradeDisplay.textContent = 'B';
    //         gradeDisplay.classList.remove('failGradeColor');
    //         gradeDisplay.classList.add('passGradeColor');
    //     } else if (grade >= 70) {
    //         gradeDisplay.textContent = 'C';
    //         gradeDisplay.classList.remove('failGradeColor');
    //         gradeDisplay.classList.add('passGradeColor');
    //     } else if (grade >= 60) {
    //         gradeDisplay.textContent = 'D';
    //         gradeDisplay.classList.remove('failGradeColor');
    //         gradeDisplay.classList.add('passGradeColor');
    //     } else {
    //         gradeDisplay.textContent = 'F';
    //         gradeDisplay.classList.remove('passGradeColor');
    //         gradeDisplay.classList.add('failGradeColor');
    //     }
    // };
    // };