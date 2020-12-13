//Return the name of the item that shows up the most in the input array
//If clothing items show up the same amount of time return the item that comes first alphabetically

//input = [greenPants, yellowShirt, redHat, redHat, yellowShirt] -> redHat
//input= [greenPants, yellowShirt, redHat, redHat, yellowShirt, yellowShirt] -> yellowShirt


countClothes=(clotheArray)=>{
    const clotheHash={};
    let max=0;
    let mostFrequentItems=[];

    for (let i=0; i<clotheArray.length; i++){
        if (clotheHash[clotheArray[i]]){
            clotheHash[clotheArray[i]]++
        } 
        else clotheHash[clotheArray[i]]=1

        if (clotheHash[clotheArray[i]]>max) {
            mostFrequentItems=[clotheArray[i]]
            max=clotheHash[clotheArray[i]]
        } else if (clotheHash[clotheArray[i]]===max) mostFrequentItems.push(clotheArray[i])
    }

    mostFrequentItems.sort()
    return mostFrequentItems[0]
}

const array=['greenPants', "yellowShirt", "redHat", "redHat", "yellowShirt", "yellowShirt"];
const array2=["greenPants", "yellowShirt", "redHat", "redHat", "yellowShirt"]
console.log(countClothes(array))
console.log(countClothes(array2))