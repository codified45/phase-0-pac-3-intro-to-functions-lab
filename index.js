function shout(string){
return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {

 //   let response = "I can't hear you!";

    if (string === "Let's have dinner together!") {
      //  response = "I would love to!";
        return "I would love to!";
    }
    
    else if (string.toLowerCase() === string) {
     //   response = "I can't hear you!"
        return "I can't hear you!"
    }

    else if (string.toUpperCase() === string) {
     //   response = "YES INDEED!";
        return "YES INDEED!";
    }

    else {
     //   response = "can you say that again?";
        return "can you say that again?";
    }

    // return response;
}



      /*  const roommateResponse = "I can't hear you!";
    let roommateResponseType;

    switch (roommateResponse) {
        case roommateResponse.logWhisper()
    }

    console.log(roommateResponseType); */
