// ================= TYPE EFFECT =================

const text = "What You Will Learn 🚀";
let i = 0;

function typing() {

    const el = document.getElementById("typeText");

    if (!el) return;

    if (i < text.length) {

        el.innerHTML += text.charAt(i);

        i++;

        setTimeout(typing, 60);
    }
}

// ================= PAGE LOAD =================

window.onload = function () {

    typing();

    setTimeout(() => {

        const loader = document.getElementById("loader");

        if (loader) {
            loader.style.display = "none";
        }

    }, 1000);

    // PARTICLES
    createParticles();
};

// ================= SECTION OPEN =================

function showBox(id){

    let all = document.querySelectorAll(".detail-section");

    all.forEach(section=>{
        section.style.display = "none";
    });

    document.getElementById(id).style.display = "block";

    document.getElementById(id).scrollIntoView({
        behavior:"smooth"
    });
}

// ================= COMPONENT CHAPTER =================

function showChapter(name){

    let all = document.querySelectorAll(".detail-section");

    all.forEach(section=>{
        section.style.display = "none";
    });

    document.getElementById("componentChapters").style.display = "block";

    document.getElementById("chapterTitle").innerText =
    name + " Chapters 📘";

    document.getElementById("componentChapters")
    .scrollIntoView({
        behavior:"smooth"
    });
}

// ================= SENSOR CHAPTER =================

function showSensorChapter(name){

    let all = document.querySelectorAll(".detail-section");

    all.forEach(section=>{
        section.style.display = "none";
    });

    document.getElementById("sensorChapters").style.display = "block";

    document.getElementById("sensorTitle").innerText =
    name + " Chapters 📘";

    document.getElementById("sensorChapters")
    .scrollIntoView({
        behavior:"smooth"
    });
}

// ================= OUTPUT CHAPTER =================

function showOutputChapter(name){

    let all = document.querySelectorAll(".detail-section");

    all.forEach(section=>{
        section.style.display = "none";
    });

    document.getElementById("outputChapters").style.display = "block";

    document.getElementById("outputTitle").innerText =
    name + " Chapters 📘";

    document.getElementById("outputChapters")
    .scrollIntoView({
        behavior:"smooth"
    });
}

// ================= COMMUNICATION CHAPTER =================

function showCommunicationChapter(name){

    let all = document.querySelectorAll(".detail-section");

    all.forEach(section=>{
        section.style.display = "none";
    });

    document.getElementById("communicationChapters").style.display = "block";

    document.getElementById("communicationTitle").innerText =
    name + " Chapters 📘";

    document.getElementById("communicationChapters")
    .scrollIntoView({
        behavior:"smooth"
    });
}

// ================= PARTICLES =================

function createParticles(){

const particles = document.getElementById("particles");

if(!particles) return;

for(let i=0;i<40;i++){

    let p = document.createElement("div");

    p.classList.add("particle");

    p.style.left = Math.random()*100 + "vw";

    p.style.animationDuration =
    (Math.random()*5+5)+"s";

    p.style.opacity = Math.random();

    particles.appendChild(p);
}

}

// ================= POPUP SYSTEM =================

let current = "";

function openPopup(type){

current = type;

document.getElementById("popup").style.display = "flex";

// ================= C++ =================

if(type==="cpp"){

popupTitle.innerHTML = "C++ Full Course 🚀";

document.getElementById("chapterBoxes").innerHTML = `

<div class="chapter-card cyan">

<div class="chapter-icon">🌱</div>

<h3>Beginner</h3>

<ul>
<li>Variables</li>
<li>Data Types</li>
<li>Input / Output</li>
<li>Conditions</li>
</ul>

<button onclick="showContent('basic')">
Open
</button>

</div>

<div class="chapter-card green">

<div class="chapter-icon">⚡</div>

<h3>Intermediate</h3>

<ul>
<li>Loops</li>
<li>Functions</li>
<li>Arrays</li>
<li>Strings</li>
</ul>

<button onclick="showContent('intermediate')">
Open
</button>

</div>

<div class="chapter-card red">

<div class="chapter-icon">🔥</div>

<h3>Advanced</h3>

<ul>
<li>Pointers</li>
<li>Classes</li>
<li>Objects</li>
<li>Inheritance</li>
</ul>

<button onclick="showContent('advanced')">
Open
</button>

</div>

<div class="chapter-card purple">

<div class="chapter-icon">🚀</div>

<h3>Pro</h3>

<ul>
<li>STL</li>
<li>DSA</li>
<li>Projects</li>
<li>File Handling</li>
</ul>

<button onclick="showContent('pro')">
Open
</button>

</div>

`;

}

// ================= IDE =================

if(type==="ide"){

popupTitle.innerHTML = "Arduino IDE ⚙️";

document.getElementById("chapterBoxes").innerHTML = `

<div class="chapter-card cyan">

<div class="chapter-icon">💻</div>

<h3>Setup</h3>

<ul>
<li>Install IDE</li>
<li>Select Board</li>
<li>Select Port</li>
<li>Drivers</li>
</ul>

<button onclick="showContent('basic')">
Open
</button>

</div>

<div class="chapter-card green">

<div class="chapter-icon">🛠️</div>

<h3>Coding</h3>

<ul>
<li>setup()</li>
<li>loop()</li>
<li>Serial Monitor</li>
<li>Upload Code</li>
</ul>

<button onclick="showContent('intermediate')">
Open
</button>

</div>

<div class="chapter-card red">

<div class="chapter-icon">📡</div>

<h3>Debugging</h3>

<ul>
<li>Errors</li>
<li>Fix Upload</li>
<li>Baud Rate</li>
<li>Library Fix</li>
</ul>

<button onclick="showContent('advanced')">
Open
</button>

</div>

<div class="chapter-card purple">

<div class="chapter-icon">🚀</div>

<h3>Pro IDE</h3>

<ul>
<li>ESP32</li>
<li>Libraries</li>
<li>OTA Upload</li>
<li>Optimization</li>
</ul>

<button onclick="showContent('pro')">
Open
</button>

</div>

`;

}

// ================= SENSOR =================

if(type==="sensor"){

popupTitle.innerHTML = "Sensor Coding 📡";

document.getElementById("chapterBoxes").innerHTML = `

<div class="chapter-card cyan">

<div class="chapter-icon">🌡️</div>

<h3>Basic Sensors</h3>

<ul>
<li>IR Sensor</li>
<li>LDR</li>
<li>Ultrasonic</li>
<li>PIR Sensor</li>
</ul>

<button onclick="showContent('basic')">
Open
</button>

</div>

<div class="chapter-card green">

<div class="chapter-icon">📶</div>

<h3>Input Reading</h3>

<ul>
<li>digitalRead()</li>
<li>analogRead()</li>
<li>Threshold</li>
<li>Monitor</li>
</ul>

<button onclick="showContent('intermediate')">
Open
</button>

</div>

<div class="chapter-card red">

<div class="chapter-icon">🔥</div>

<h3>Advanced</h3>

<ul>
<li>DHT11</li>
<li>MQ Sensor</li>
<li>Calibration</li>
<li>Filtering</li>
</ul>

<button onclick="showContent('advanced')">
Open
</button>

</div>

<div class="chapter-card purple">

<div class="chapter-icon">🤖</div>

<h3>AI Sensors</h3>

<ul>
<li>IoT</li>
<li>ESP8266</li>
<li>Cloud Data</li>
<li>Automation</li>
</ul>

<button onclick="showContent('pro')">
Open
</button>

</div>

`;

}

// ================= MINI PROJECT =================

if(type==="mini"){

popupTitle.innerHTML = "Mini Projects 🚀";

document.getElementById("chapterBoxes").innerHTML = `

<div class="chapter-card cyan">

<div class="chapter-icon">💡</div>

<h3>LED Projects</h3>

<ul>
<li>Blink LED</li>
<li>RGB LED</li>
<li>Traffic Light</li>
<li>Fade Effect</li>
</ul>

<button onclick="showContent('basic')">
Open
</button>

</div>

<div class="chapter-card green">

<div class="chapter-icon">🚨</div>

<h3>Security</h3>

<ul>
<li>PIR Alarm</li>
<li>RFID Lock</li>
<li>Password Lock</li>
<li>Buzzer Alert</li>
</ul>

<button onclick="showContent('intermediate')">
Open
</button>

</div>

<div class="chapter-card red">

<div class="chapter-icon">🌡️</div>

<h3>Smart Systems</h3>

<ul>
<li>Weather Station</li>
<li>Smart Fan</li>
<li>Temperature</li>
<li>Automation</li>
</ul>

<button onclick="showContent('advanced')">
Open
</button>

</div>

<div class="chapter-card purple">

<div class="chapter-icon">🤖</div>

<h3>AI + IoT</h3>

<ul>
<li>ESP32</li>
<li>WiFi Control</li>
<li>App Control</li>
<li>Cloud System</li>
</ul>

<button onclick="showContent('pro')">
Open
</button>

</div>

`;

}

}

// ================= CLOSE POPUP =================

function closePopup(){

document.getElementById("popup").style.display = "none";

}

// ================= SHOW CODE =================

function showContent(level){

const codeArea = document.getElementById("codeArea");

if(level==="basic"){

codeArea.innerHTML =
`<span style="color:#00ffee;">int x = 5;</span>`;

}

if(level==="intermediate"){

codeArea.innerHTML =
`<span style="color:#00ffee;">for(int i=0;i&lt;5;i++)</span>`;

}

if(level==="advanced"){

codeArea.innerHTML =
`<span style="color:#00ffee;">class Arduino{ };</span>`;

}

if(level==="pro"){

codeArea.innerHTML =
`<span style="color:#00ffee;">WiFi.begin("SSID","PASS");</span>`;

}

}
const projectData={

"LED Blink":{

title:"LED Blink",

image:"https://images.unsplash.com/photo-1518770660439-4636190af475",

introduction:`
LED Blink Arduino ka sabse basic beginner project hai.
Is project me LED automatically ON aur OFF hoti hai.
`,

components:`
• Arduino UNO
• LED
• 220 Ohm Resistor
• Breadboard
• Jumper Wires
`,

level:"Beginner",

diagram:`
LED (+) → Pin 13

LED (-) → GND
`,

working:`
Arduino HIGH signal deta hai.

LED ON hoti hai.

1 second baad LOW signal deta hai.

LED OFF hoti hai.
`,

code:`int led = 13;

void setup(){

 pinMode(led, OUTPUT);

}

void loop(){

 digitalWrite(led, HIGH);

 delay(1000);

 digitalWrite(led, LOW);

 delay(1000);

}`

}

};

function openProject(name){

let project = projectData[name];

if(!project) return;

document.getElementById("pTitle")
.innerText = project.title;

document.getElementById("pImage")
.src = project.image;

document.getElementById("pIntro")
.innerText = project.introduction;

document.getElementById("pComp")
.innerText = project.components;

document.getElementById("pLevel")
.innerText = project.level;

document.getElementById("pDiagram")
.innerText = project.diagram;

document.getElementById("pWorking")
.innerText = project.working;

document.getElementById("pCode")
.innerText = project.code;

document.getElementById("popup")
.style.display = "flex";

}

function closePopup(){

document.getElementById("popup")
.style.display = "none";

}