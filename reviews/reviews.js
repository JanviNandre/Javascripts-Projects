const reviews = [{
        id: 1,
        name: "Gojo Satoru",
        job: "web developer",
        img: "https://static0.cbrimages.com/wordpress/wp-content/uploads/2021/05/gojo-satoru-featured.jpg",
        text: "Gojo's power, combined with his hilarious antics, makes him the most entertaining character to watch in Jujutsu Kaisen.Gojo has a unique duality that no other character in Jujutsu Kaisen shares with him. ",
    },
    {
        id: 2,
        name: "Bokuto Fam",
        job: "web designer",
        img: "https://pbs.twimg.com/profile_images/1265743781464174592/o6wro6_1_400x400.jpg",
        text: "Haikyuu chapter 392 is all about Bokuto, and I love that crazy owl so much that I couldn’t not review it. One thing “Just a Star” goes to show is just how much every single character has grown and matured.",
    },
    {
        id: 3,
        name: "Jimin Fam",
        job: "intern",
        img: "https://tecake.com/wp-content/uploads/2020/11/cc1158e81e4b35d8c5adc1eca6a41667.jpg",
        text: "Jimin is a kind of person you can’t hate off cam. This is based on other members’ comments (especially Suga). I also see that most members are relaxed around him. Almost no awkward interactions. ",
    },
    {
        id: 4,
        name: "Hua Cheng",
        job: "The boss",
        img: "https://64.media.tumblr.com/91563029744efdbd16b6ce05b789341b/467673d60e12b00b-f2/s640x960/8faf3dd927c240a58bcd318ba7dc86c960a695cf.jpg",
        text: "We have Hua Cheng, also known as ‘Crimson Rain Sought Flower,’ who is the titular character of the episode. An important thing to note is that‘ Hua’ means‘ flower,’so this sound is in his name twice."
    },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
    getPerson(currentItem);
});

function getPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// next person

nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    getPerson(currentItem);
});

// previous person

prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    getPerson(currentItem);
});

randomBtn.addEventListener("click", function () {
    currentItem = Math.floor(Math.random() * reviews.length);
    getPerson(currentItem);
});