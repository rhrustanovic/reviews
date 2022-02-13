//local reviews data
const reviews = [
    {
        id: 1,
        name: "Susan Jones",
        job: "Web Devaloper",
        img: "./images/person-1.jpg",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Iure reprehenderit ducimus racarerepellendus necessitatibus nostrum cum illo velit? Sint, harum?",
    },
    {
        id: 2,
        name: "Roberto Manchini",
        job: "Web Designer",
        img: "./images/person-2.jpg",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Iure reprehenderit ducimus racarerepellendus necessitatibus nostrum cum illo velit? Sint, harum?",
    },
    {
        id: 3,
        name: "Leo Son",
        job: "Digital Marketing",
        img: "./images/person-3.jpg",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Iure reprehenderit ducimus racarerepellendus necessitatibus nostrum cum illo velit? Sint, harum?",
    },
    {
        id: 4,
        name: "Anna Sopran",
        job: "Web Devaloper",
        img: "./images/person-4.jpg",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Iure reprehenderit ducimus racarerepellendus necessitatibus nostrum cum illo velit? Sint, harum?",
    },
    {
        id: 5,
        name: "Julie Danlop",
        job: "Front-end-Developer",
        img: "./images/person-5.jpg",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Iure reprehenderit ducimus racarerepellendus necessitatibus nostrum cum illo velit? Sint, harum?",
    },
];

//select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

//set starting item
let currentItem = 0;

//load intial item
window.addEventListener('DOMContentLoaded', () => {
    showPerson();
});

//show person based on item
function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

//show next person
nextBtn.addEventListener('click', () => {
    currentItem++
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();
});

//show prev person
prevBtn.addEventListener('click', () => {
    currentItem--
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
});

//show random person
randomBtn.addEventListener('click', () => {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson();
});
