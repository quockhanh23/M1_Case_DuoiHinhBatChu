class Player {
    name;
    score;

    constructor(name, score) {
        this.name = name;
        this.score = score;

    }
    setScore (score) {
        this.score = 0;

    }
    setName (name) {
        this.name = document.getElementById("input1").innerHTML = name;
    }

    startGame() {
        document.getElementById("but2");
    }

    typeAnswer() {

    }

    increaseScore() {
        let check = false
        if (check==true) {
            this.score +=1
        }

    }

    nextQuestion() {
        document.getElementById('but5');

    }

    getHint() {
        document.getElementById('but4');
    }

    getScore() {

    }

    getTimeDuration() {

    }

    saveGame() {

    }
}