const start_game = document.querySelector(".start_game");
const begin_game = document.querySelector("#begin_game");
const main_game = document.querySelector("#main_game");
const restart_game = document.querySelector(".restart_game");
const game_runtime = [...document.querySelectorAll(".game_runtime")];
start_game.addEventListener('click', () => {
    begin_game.style.display = "none";
    main_game.style.display = "grid";
    game_runtime.forEach((elem) => elem.style.display = "inline-block");
});
restart_game.addEventListener('click', () => {
    localStorage.removeItem("GameData");
    location.reload();
    main_game.style.display = "grid";
    game_runtime.forEach((elem) => elem.style.display = "inline-block");
});