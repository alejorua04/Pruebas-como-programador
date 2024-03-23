const myPromise = new Promise((resolve, reject) => {
    if(5 > 4) {
        resolve("Let's rock hard");
    }
    else {
        reject("Fucking loser");
    }
})
