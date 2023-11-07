export interface StudentQuiz {
  studentId: number;
  quizAnswers: number[];
}

export function gradeStudent(studentAnswers: number[],correct: number[]): number {
  let correctAnswer = 0;
  for (let i = 0; i < correct.length; i++) {
    if (correct[i] === studentAnswers[i]) {
      correctAnswer++;
    }
  }
  return correctAnswer;
}

export function gradeQuiz(student: StudentQuiz[], score: number[]): number[] {
  let correctAnswers: number[] = [];
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
//IMPLEMENT THIS
export interface ScoresId{
    id?:number,
    score?:number
}
export function gradeQuizLabeled(student: StudentQuiz[],score: number[]
): ScoresId[] {
  let correctAnswers: ScoresId[] = [];
  let count = 0;
 

  for (let i = 0; i < student.length; i++) {
    count = 0;
    for (let j = 0; j < score.length; j++) {
      if (student[i].quizAnswers[j] === score[j]) {
        count++;
      }
    } 
    let studentScores: ScoresId = {id:student[i].studentId, score:count};
    correctAnswers.push(studentScores);
  }
  return correctAnswers;
}
