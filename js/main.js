let cover = document.querySelector(".cover"),
msgBox = document.querySelector(".message"),
contBtn = document.querySelector(".form button"),
msgBtn = document.querySelector(".message button"),
inputName = document.querySelector(".name"),
dataBirth = document.querySelector(".data"),
name = document.querySelector("h2");

nameOfUser = "";
inputName.oninput = () => {
    nameOfUser = inputName.value;
};

contBtn.addEventListener("click", () => {
    cover.classList.add("open");
    msgBox.classList.add("open");
    name.textContent = `Hi ${nameOfUser} your age is:`;
    if (nameOfUser === "") {
        name.textContent = `Hi ??? your age is:`;
    };
    const update = function () {
        let bdt = dataBirth.value,
        bday = new Date(bdt),
        bday_val = bday.getTime(),
        today = new Date(),
        now = today.getTime(),
        value = now - bday_val,
        var_sec = Math.floor(value / 1000),
        var_min = Math.floor(value / (1000 * 60)),
        var_hour = Math.floor(value / (1000 * 60 * 60)),
        var_day = Math.floor(value / (1000 * 60 * 60 * 24)),
        var_week = Math.floor(value / (1000 * 60 * 60 * 24 * 7)),
        var_month = Math.floor(value / (1000 * 60 * 60 * 24 * 7 * 30.4375)),
        var_year = Math.floor(value / (1000 * 60 * 60 * 24 * 365.25));
        let insert = function (x, y) {
            document.querySelector(x).innerHTML = y;
        }
        insert("#year", `${var_year} years`);
        insert("#month", `${var_month} months`);
        insert("#week", `${var_week} weeks`);
        insert("#day", `${var_day} days`);
        insert("#hour", `${var_hour} hours`);
        insert("#minute", `${var_min} minutes`);
        insert("#second", `${var_sec} seconds`);
    };
    setInterval(update, 1000);
});
cover.addEventListener("click", () => {
    cover.classList.remove("open");
    msgBox.classList.remove("open");
});
msgBtn.addEventListener("click", () => {
    cover.classList.remove("open");
    msgBox.classList.remove("open");
});