class Question {
    id;
    image;
    answer;
    time;
    hint;

    constructor(id,image,answer,time,hint) {
        this.id = id;
        this.image = image;
        this.answer = answer;
        this.hint = hint;
        this.time = time;
    }
    getId () {
        return this.id
    }
    showImage () {
        return this.image

    }
    showAnswer () {
        return this.answer

    }
    setTime(time) {

    }
    hint () {
        return this.hint
    }
}