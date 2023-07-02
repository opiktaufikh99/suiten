function pilihanComputer() {
    const comp = Math.random();
    if (comp < 0.34) return "gajah";
    if (comp >= 0.34 && comp < 0.67) return "orang";
    return "semut";
}

function hasil(comp, player) {
    if (player == comp) return "sama";
    if (player == "gajah") return comp == "orang" ? "menang" : "kalah";
    if (player == "orang") return comp == "gajah" ? "kalah" : "menang";
    if (player == "semut") return comp == "orang" ? "kalah" : "menang";
}

function putar() {
    const imgKomputer = document.querySelector(".img-komputer");
    const gambar = ["gajah", "semut", "orang"];
    let i = 0;
    waktuMulai = new Date().getTime();
    setInterval(function() {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }
        imgKomputer.setAttribute("src", "img/" + gambar[i++] + ".png");
        if (i == gambar.length) {
            i = 0;
        }
    }, 100);
}

const pgajah = document.querySelector(".gajah");
pgajah.addEventListener("click", function() {
    const pilihan = pilihanComputer();
    const pilihanPlayer = pgajah.className;
    const hasil1 = hasil(pilihan, pilihanPlayer);
    const imgComputer = document.querySelector(".img-komputer");
    putar();
    setTimeout(function() {
        imgComputer.setAttribute("src", "img/" + pilihan + ".png");
        const info = document.querySelector(".info");
        info.innerHTML = hasil1;
    }, 1000);
});
const porang = document.querySelector(".orang");
porang.addEventListener("click", function() {
    const pilihan = pilihanComputer();
    const pilihanPlayer = porang.className;
    const hasil1 = hasil(pilihan, pilihanPlayer);
    const imgComputer = document.querySelector(".img-komputer");
    putar();
    setTimeout(function() {
        imgComputer.setAttribute("src", "img/" + pilihan + ".png");
        const info = document.querySelector(".info");
        info.innerHTML = hasil1;
    }, 1000);
});
const psemut = document.querySelector(".semut");
psemut.addEventListener("click", function() {
    const pilihan = pilihanComputer();
    const pilihanPlayer = porang.className;
    const hasil1 = hasil(pilihan, pilihanPlayer);
    const imgComputer = document.querySelector(".img-komputer");
    putar();
    setTimeout(function() {
        imgComputer.setAttribute("src", "img/" + pilihan + ".png");
        const info = document.querySelector(".info");
        info.innerHTML = hasil1;
    }, 1000);
});