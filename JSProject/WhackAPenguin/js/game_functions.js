//Get game data from local storage if available or else return a new gameData object
const getGameData = () => {
    const gameDataJSON = localStorage.getItem('GameData');
    try{
        // return gameDataJSON ? JSON.parse(gameDataJSON) : new GameData([], 0, 0);
        if(gameDataJSON){
            console.log("retrieving from local storage...");
            return JSON.parse(gameDataJSON);
        }else{
            console.log("initializing...");
            return new GameData();
        }
    }catch(e){
        console.log("reinitializing");
        return new GameData();
    }
};

//Save and updata game values in gameData to local storage
const saveGameData = (gameData) => {
    localStorage.setItem('GameData', JSON.stringify(gameData));
};

//generate random position
const pos = (size) => {
    let sum = 0;
    let flag = false;
    let ctr = 0;
    //Generating digit for PIN
    while(size > 0){
        let num = Math.floor(Math.random() * (9));
        //Checking for uniqueness
        for(let i = sum; i > 0; i = parseInt(i/10)){
            //zero fix... sometimes it generates 8 digit pin instead of 9
            if(ctr === 8 && !(""+sum).includes("0")){
                num = 0;
                break;
            }
            if(i%10 === num || (ctr === 0 && num === 1)){
                flag = true;
                break;
            }
        }
        if(!flag){
            sum = (sum*10) + num;
            flag = false;
            ctr++;
        }else{
            flag = false;
            continue;
        }
        size--;
    }
    return sum;
};

//assign random positions to penguins
const seeder = (gameData) => {
    const pin = pos(gameData.initial.length);
    const pin_arr = ""+pin;
    // console.log()
    let dispense = pin_arr.split("").map((elem) => {
       return gameData.seed[elem];
    });
    return dispense;
};

//penguins are put into boxes
const dispenser = (data) => {
    // console.log("Dispensed data: "+data);
    //Get boxes
    const box = document.getElementsByClassName("box");
    const box_arr = [...box];
    // console.log(box_arr);
    //supply seeds to boxes
    box_arr.forEach((cloud, idx) => {
        // console.log(cloud.firstChild.nextSibling.nextSibling.nextSibling);
        cloud.firstChild.nextSibling.nextSibling.nextSibling.innerHTML = data[idx];
        //controls (adding click event listener to get clicked cloud)
        //when box is clicked, assigned penguin should be called and saved
        cloud.addEventListener('mouseup',(event) => {
            // console.log(event.target.className === "box");
            const gameData = getGameData();
            let clickedValue = "";
            //find target
            if(event.target.className === "box"){
                const selected_box = event.target;
                // console.log(selected_box);
                // console.log(selected_box.firstChild.nextSibling.nextSibling.nextSibling.innerHTML);
                //get target's value (seed)
                clickedValue = selected_box.firstChild.nextSibling.nextSibling.nextSibling.innerHTML;
            }
            // console.log(event.target.className === "image");
            if(event.target.className === "image"){
                const selected_box = event.target;
                // console.log(selected_box.nextSibling.nextSibling.innerHTML);
                //get target's value (seed)
                clickedValue = selected_box.nextSibling.nextSibling.innerHTML;
            }
            selected(clickedValue, gameData);
        });
    });

};

const selected = (input, gameData) => {
    const p = "penguin";
    const pattern = /^penguin+[1-8]$/;
    console.log("Selected: "+input);

    console.log("Update data: "+pattern.test(input));
    if(pattern.test(input)){
        gameData.seed.splice(gameData.seed.indexOf(input),1,"yeti");
        gameData.points.push(input);
        console.log("seed: "+gameData.seed);
        console.log("points: "+gameData.points);
        console.log("Saving Game data...");
        scoreCalc(gameData);
        saveGameData(gameData);
        gameMaker();
    }else if(/yeti/.test(input) || !gameData.seed.find((e) => pattern.test(e))){
        gameData.points.push(input);
        console.log("game over");
        gameOver();
    }else{
        console.log("invalid choice");
    }
    //Calling game maker to re-render box values and continuing game
};

//Keeps game running
const gameMaker = () => {
    const gameData = getGameData();
    // saveGameData(gameData);
    console.log(pos(gameData.initial.length));
    dispenser(seeder(gameData));
};

//On game over
const gameOver = () => {
    // localStorage.removeItem("GameData");
    const main_game = document.querySelector("#main_game");
    main_game.style.display = "none";
    document.querySelector(".game_over").style.display = "block";
    const game_runtime = [...document.querySelectorAll(".game_runtime")];
    game_runtime.forEach((elem) => elem.style.display = "none");
    document.querySelector(".score_board .score_value").innerHTML = gameData.score;
};

const scoreCalc = (gameData) => {
    const score_value = document.querySelector(".score_value");
    const probability = ((gameData.seed.length - gameData.points.length - 1)/gameData.seed.length)*100;
    // console.log("Probability: "+probability);
    gameData.probability.push(probability);
    let score = 100 - probability;
    gameData.score += parseInt(score);
    score_value.innerHTML = gameData.score;
    // console.log("Score: "+gameData.score);
    saveGameData(gameData);
};