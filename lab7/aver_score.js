
alert("Счёт среднего балла у студентов.");

function rand_mas_el(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};

students = [
    { name: "Вася", age: 19, scores: rand_mas_el(37, 100) },
    { name: "Женя", age: 18, scores: rand_mas_el(37, 100) },
    { name: "Никита", age: 19, scores: rand_mas_el(37, 100) },
    { name: "Егор", age: 18, scores: rand_mas_el(37, 100) },
    { name: "Стасик", age: 21, scores: rand_mas_el(37, 100) },
    { name: "Руслан", age: 20, scores: rand_mas_el(37, 100) },
    { name: "Алексей", age: 18, scores: rand_mas_el(37, 100) },
    { name: "Лиза", age: 19, scores: rand_mas_el(37, 100) },
    { name: "Юля", age: 20, scores: rand_mas_el(37, 100) },
    { name: "Паша)", age: 22, scores: rand_mas_el(37, 100) },
    { name: "Даша", age: 19, scores: rand_mas_el(37, 100) }
];

stud_names = students.map(item => item.name);
stud_ages = students.map(item => item.age);
stud_scores = students.map(item => item.scores);

alert("Данные о студентах: \n имена - (" + stud_names + "), \n возраст - (" + stud_ages + "), \n баллы - (" + stud_scores + ").");

const aver_score_stud = (stud_scores.reduce((acc, current_score) => acc + current_score, 0)) / stud_scores.length;

alert("Средний балл у студентов - \n" + aver_score_stud);
