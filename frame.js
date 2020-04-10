function frame(strings){
    longest = strings[0];
    lgth = longest.length;
    border = "****";
    for(y =0; y<lgth; y++){
        border = border + "*";
    }
    console.log(border);
    for ( let x =  0; x < lgth; x++){
        console.log("*" + " " + strings[x]+ "\t" + "*")
    }
    console.log(border)
}
    
frame(["Write", "good", "code", "every", "day"]);

