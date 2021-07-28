const snippets = {
    homeHTML: '<button class="btn btn-info home-btn" onclick="loadBedroom()">Bedroom</button><button class="btn btn-info home-btn" onclick="loadLiving()">Living Room</button><button class="btn btn-info home-btn" onclick="loadFruits()">Fruits</button><button class="btn btn-info home-btn" onclick="loadBottles()">Bottles</button><button class="btn btn-info home-btn" onclick="loadDesk()">Desk</button>',
    fruitsHTMLJS: '<h2 class="btn btn-info">Fruits</h2><br><br><h3 id="status" class="btn btn-danger"></h3><script>let status = ""; function preload() {img = loadImage("fruits.jpg");}; function setup() {const canvas = createCanvas(640, 420); canvas.center(); let objectDetector = ml5.objectDetector("cocossd", modelLoaded); document.getElementById("status").innerHTML = "Status: Detecting Objects";}; function modelLoaded() {console.log("Model Loaded!"); status = true; objectDetector.detect(img, gotResults); }; function gotResults(error, results) {if(error) {console.error(error);}; console.log(results);};</script>'
}

function loadHome() {
    document.getElementById('dynamically-add').innerHTML = ''
    document.getElementById('dynamically-add').innerHTML = snippets.homeHTML
}

function loadBedroom() {

}

function loadLiving() {

}

function loadFruits() {
    document.getElementById('dynamically-add').innerHTML = ''
    document.getElementById('dynamically-add').innerHTML = snippets.fruitsHTMLJS
}

function loadBottles() {

}

function loadDesk() {
    
}