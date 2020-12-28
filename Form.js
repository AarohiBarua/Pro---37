class Form{
    constructor(){
        this.input = createInput("name");
        this.button = createButton('play');
        this.greeting = createElement('h2');
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }
    display(){
        var title = createElement('h2');
        title.html("Virtual Pet");
        title.position(130,0);

        this.input.position(130,160);
        this.button.position(250,200);

        this.button.mousePressed(function(){
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();

            dogCount+=1;
            dog.index = playerCount
            dog.update();
            dog.updateCount(dogCount);
            this.greeting.html("Hello" + dog.name);
            this.greeting.position(130,160)
        })
    }
}