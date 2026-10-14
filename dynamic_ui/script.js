let student = [
    {id: 0, name:'Ronalyn Alban', program: 'Bacherlor of Science in Information Techmology'},
    {id: 1, name:'Kristine Lasheras', program: 'Bacherlor of Science in Information Techmology'},
    {id: 2, name:'Gio Reyes', program: 'Bacherlor of Science in Information Techmology'},
    {id: 3, name:'Jia Ramos', program: 'Bacherlor of Science in Information Techmology'},
    {id: 4, name:'Jaya Ramos', program: 'Bacherlor of Science in Information Techmology'}, 
];

const createStudent = (name, program) =>{
    const article = document.createElement('article');
const h2 = document.createElement('h2');
const p = document.createElement('p');
const button = document.createElement('button');

h2.innerHTML = name;
p.innerHTML = program;
button.innerHTML = "Delete";

article.append(h2);
article.append(p);
article.append(button);
console.log(article);

article.classList.add("list-item");

return article;
}
 
const studentList = student.map((s) =>{
    return createStudent(s.name, s.program)
});



const listContainer = document.querySelector("#listContainer")
studentList.forEach((s) => {
    listContainer.append(s);
});