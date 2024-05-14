

function setup(){
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
}

function preload() {


classifier = ml5.imageClassifier('DoodleNet')
}



function clearCanvas() {

    background("white");
}

function draw() {

    // (mensaje)
    strokeWeight(13);
    //(otro mensaje)
    stroke(0);
    //(un tercer mensaje)
    if (mouseIsPressed){
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

function classifyCanvas() {
    classifier.classify(canvas, gotResult)
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
console.log(results);
document.getElementById('label').innerHTML = 'Etiqueta: ' + results[0].label;

document.getElementById('label').innerHTML = 'Precisión: ' + Math,round(results[0].confidence * 100) + '%';

utterThis = new SpeechSynthesisUtterance(results[0].label);
synth.speak(utterThis);
}