const dis_s = document.getElementsByClassName("s")[0];
const dis_ds = document.getElementsByClassName("ds")[0];
const dis_cs = document.getElementsByClassName("cs")[0];
let s = 10;
let ds = cs = 0;

function start() {
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
        return alert(1);
    }
    dis_s.innerHTML = s;
    dis_ds.innerHTML = ds;
    dis_cs.innerHTML = cs;
    timeout = setTimeout(() => {
        cs--;
        start();
    }, 10)
}