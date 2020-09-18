const questions = document.getElementsByClassName("questions")[0];
const pic1 = document.getElementById("pic1");
const pic2 = document.getElementById("pic2");
const pic3 = document.getElementById("pic3");
const pic4 = document.getElementById("pic4");
const caption = document.getElementById("caption");
const point = document.getElementById("point");
const start = document.getElementById("start");
const src = "animals/pic_";
//time
const dis_s = document.getElementsByClassName("s")[0];
const dis_ds = document.getElementsByClassName("ds")[0];
const dis_cs = document.getElementsByClassName("cs")[0];
let maxtime = 6;
let s = maxtime,
    ds = cs = 0;

let gameover = false;
let Point = 0,
    maxPoint = 0;
let main_idPic;
//creat info animals
let animals = [{
        id: 0,
        name: "VOI"
    },
    {
        id: 1,
        name: "NGỰA"
    },
    {
        id: 2,
        name: "GÀ"
    },
    {
        id: 3,
        name: "VỊT"
    },
    {
        id: 4,
        name: "CHÓ"
    },
    {
        id: 5,
        name: "LỢN"
    },
    {
        id: 6,
        name: "SƯ TỬ"
    },
    {
        id: 7,
        name: "MÈO"
    },
    {
        id: 8,
        name: "CHUỒN CHUỒN"
    },
    {
        id: 9,
        name: "KHỈ"
    }

]
const lengthAnimals = animals.length;
time();

function display() {
    let idPic1, idPic2, idPic3, idPic4;
    let idPicList = [];
    do {
        idPic1 = Math.floor(Math.random() * lengthAnimals);
        idPic2 = Math.floor(Math.random() * lengthAnimals);
        idPic3 = Math.floor(Math.random() * lengthAnimals);
        idPic4 = Math.floor(Math.random() * lengthAnimals);
    } while (idPic1 == idPic2 || idPic1 == idPic3 || idPic1 == idPic4 || idPic2 == idPic3 || idPic2 == idPic4 || idPic3 == idPic4);
    idPicList.push(idPic1, idPic2, idPic3, idPic4);

    function random(numbers) {
        return numbers[Math.floor(Math.random() * numbers.length)];
    }
    main_idPic = random(idPicList);
    caption.innerHTML = `CHỌN CON ${animals[main_idPic].name}`;
    pic1.src = src + idPic1.toString() + ".jpg";
    pic2.src = src + idPic2.toString() + ".jpg";
    pic3.src = src + idPic3.toString() + ".jpg";
    pic4.src = src + idPic4.toString() + ".jpg";

}
pic1.addEventListener('click', (el) => { handle(el) });
pic2.addEventListener('click', (el) => { handle(el) });
pic3.addEventListener('click', (el) => { handle(el) });
pic4.addEventListener('click', (el) => { handle(el) });

function handle(el) {
    element = el.target;
    if (element.src.indexOf(`pic_${main_idPic}`) != -1) {
        gameover = false;
        Point += 10;
        point.innerHTML = Point.toString();
        display();
    } else if (element.src.indexOf(`pic_${main_idPic}`) == -1) {
        gameover = true;
    }
    if (gameover) {
        game_over();
    }
}


function game_over() {
    maxPoint = Point > maxPoint ? Point : maxPoint;
    alert(`Your Point: ${Point}  \nMax Point: ${maxPoint}`);
    reset();
}

function reset() {
    gameover = false;
    s = maxtime;
    time();
    Point = 0;
    point.innerHTML = Point.toString();
    main();
}

function time() {
    if (cs == -1) {
        ds -= 1;
        cs = 9;
    }
    if (ds == -1) {
        s -= 1;
        ds = 9;
    }

    if (s == -1) {
        clearTimeout(timeout);
        game_over();
        return;
    }
    dis_s.innerHTML = s + ".";
    dis_ds.innerHTML = ds;
    dis_cs.innerHTML = cs;
    timeout = setTimeout(() => {
        cs--;
        time();
    }, 10)
}

function main() {
    display();
}
main();