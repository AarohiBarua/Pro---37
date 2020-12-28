class Dog{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
    }
    getCount(){
        var dogCountRef = database.ref('dogCount');
        dogCountRef.on("value",function(data){
            dogCount = data,val();
        })
    }
    updateCount(){
        database.ref('ref').update({
            dogCount:count
        })
    }
    update(){
        var dogIndex = "dogs/dog" + playerCount;
        database.ref(dogIndex).set({
            name:this.name
        })
    }
    static getDogInfo(){
        var dogInfoRef = database.ref('players');
        dogInfoRef.on("value",(data) => {
            allPlayers = data.val();
        })
    }
}