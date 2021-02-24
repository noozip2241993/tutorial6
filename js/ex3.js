const studentList = [
    {
        firstName: "Allan",
        lastName: "Able",
        scores: [95, 85, 92, 98]
    },
    {
        firstName: "Amy",
        lastName: "Alexander",
        scores: [80, 88, 100]
    },
    {
        firstName: "Betty",
        lastName: "Barns",
        scores: [70, 80, 90, 100]
    },
    {
        firstName: "Bob",
        lastName: "Bones",
        scores: [75, 85, 95, 85]
    },
    {
        firstName: "Cindy",
        lastName: "Chase",
        scores: [95, 90, 92, 98]
    },
    {
        firstName: "Charles",
        lastName: "Chips",
        scores: [88, 99, 90]
    },
    
];
const classNameResults = [];
const gradeList =[];
for (const student of studentList){
    let gradeSum = 0;
    for (const score of student.scores){
        gradeSum += score;
        gradeList.push(score);
        
    }
    
    const averageScore = gradeSum/ student.scores.length;
    const minimumScore = Math.min(gradeList);
    const maximumScore = Math.max(gradeList);
  
    classNameResults.push({
        firstName: student.firstName,
        lastName: student.lastName,
        minScore: minimumScore,
        maxScore: maximumScore,
        avgScore : averageScore
    });
}

console.log(classNameResults);
