const customname = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."

let insertX = [
    "Willy the Goblin",
    "Big Daddy",
   "Father Christmas"
]

let insertY = [
    "the soup kitchen",
    "Disneyland",
    "the White House"
]

let insertZ = [
    "spontaneously combusted",
    "melted into a puddle on the sidewalk",
    "turned into a slug and crawled away"
]

randomize.addEventListener('click', result);

function result(){
    let newStory = storyText;
    if(customname.value !== ""){
        const name = customname.value;
        newStory = newStory.replace("Bob", name);
    }
    if(document.getElementById("uk").checked){
        const weight = Math.round(136.078);
        const temperature =  Math.round(34.444);
        newStory = newStory.replace("94 fahrenheit", temperature + " celsius");
        newStory = newStory.replace("300 pounds", weight +" kgs");
    }

    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

    newStory= newStory.replaceAll(":insertx:", xItem);
    newStory = newStory.replace(":inserty:", yItem);
    newStory = newStory.replace(":insertz:", zItem);


    story.textContent = newStory;
    story.style.visibility = "visible";

}