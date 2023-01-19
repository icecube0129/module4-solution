(function(){
    var helloSpeaker ={};
    helloSpeaker.name ="Speaker";
    var speakWord = "Hello";
    helloSpeaker.speak = function() {
      console.log(speakWord + "" + helloSpeaker.name)
}

})();

