export function gradeStudent(studentAnswers, correct) {
    let correctAnswer = 0;
    for (let i = 0; i < correct.length; i++) {
        if (correct[i] === studentAnswers[i]) {
            correctAnswer++;
        }
    }
    return correctAnswer;
}
export function gradeQuiz(student, score) {
    let correctAnswers = [];
    let count = 0;
    for (let i = 0; i < student.length; i++) {
        count = 0;
        for (let j = 0; j < score.length; j++) {
            if (student[i].quizAnswers[j] === score[j]) {
                count++;
            }
        }
        correctAnswers.push(count);
    }
    return correctAnswers;
}
export function gradeQuizLabeled(student, score) {
    let correctAnswers = [];
    let count = 0;
    for (let i = 0; i < student.length; i++) {
        count = 0;
        for (let j = 0; j < score.length; j++) {
            if (student[i].quizAnswers[j] === score[j]) {
                count++;
            }
        }
        let studentScores = { id: student[i].studentId, score: count };
        correctAnswers.push(studentScores);
    }
    return correctAnswers;
}
