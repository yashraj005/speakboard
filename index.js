var alpha = document.querySelectorAll(".key").length

for ( var i = 0 ; i < alpha ; i ++){
    document.querySelectorAll(".key")[i].addEventListener("click" , function(){
        var inner = this.innerHTML;
        makeSound(inner);
    });
};
document.addEventListener("keypress" , function(e){
    makeSound(e);
    
});
function makeSound(e){
    switch (e.key) {
        case "a":
            console.log("a");
            
            break;
        case "b":
            console.log("b");
            
            break;
        case "c":
            console.log("c");
            
            break;
        case "d":
            console.log("d");
            
            break;
        case "e":
            console.log("e");
            
            break;
        case "f":
            console.log("f");
            
            break;
        case "g":
            console.log("g");
            
            break;
        case "h":
            console.log("h");
            
            break;
        case "i":
            console.log("i");
            
            break;
        case "j":
            console.log("j");
            
            break;
        case "k":
            console.log("k");
            
            break;
        case "l":
            console.log("l");
            
            break;
        case "m":
            console.log("m");
            
            break;
        case "n":
            console.log("n");
            
            break;
        case "o":
            console.log("o");
            
            break;
        case "p":
            console.log("p");
            
            break;
        case "q":
            console.log("q");
            
            break;
        case "r":
            console.log("r");
            
            break;
        case "s":
            console.log("s");
            
            break;
        case "t":
            console.log("t");
            
            break;
        case "u":
            console.log("u");
            
            break;
        case "v":
            console.log("v");
            
            break;
        case "w":
            console.log("w");
            
            break;
        case "x":
            console.log("x");
            
            break;
        case "y":
            console.log("y");
            
            break;
        case "z":
            console.log("z");
            
            break;
     
    
        default:
            console.log("This is not in directory");
            
            break;
    }
};


document.querySelector("#backspace").addEventListener("click" , function(){
    // audio here 
    console.log("backspace");
    
})