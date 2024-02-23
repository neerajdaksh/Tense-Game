const data = [
  {
    tenseType: "Simple Present",
    rule: "Subject + V1+s/es + Object",
    hint: "She plays tennis.",
  },
  {
    tenseType: "Present Continuous",
    rule: "Subject + is/am/are + V1 + ing + Object",
    hint: "She is playing tennis.",
  },
  {
    tenseType: "Present Perfect",
    rule: "Subject + has/have + V3 + Object",
    hint: "She has played tennis.",
  },
  {
    tenseType: "Present Perfect Continuous",
    rule: "Subject + has/have been + V1 + ing + Object",
    hint: "She has been playing tennis.",
  },
  {
    tenseType: "Simple Past",
    rule: "Subject + V2 + Object",
    hint: "She played tennis.",
  },
  {
    tenseType: "Past Continuous",
    rule: "Subject + was/were + V1 + ing + Object",
    hint: "She was playing tennis.",
  },
  {
    tenseType: "Past Perfect",
    rule: "Subject + had + V3 + Object",
    hint: "She had played tennis.",
  },
  {
    tenseType: "Past Perfect Continuous",
    rule: "Subject + had been + V1 + ing + Object",
    hint: "She had been playing tennis.",
  },
  {
    tenseType: "Simple Future",
    rule: "Subject + will/shall + V1 + Object",
    hint: "She will play tennis.",
  },
  {
    tenseType: "Future Continuous",
    rule: "Subject + will/shall be + V1 + ing + Object",
    hint: "She will be playing tennis.",
  },
  {
    tenseType: "Future Perfect",
    rule: "Subject + will/shall have + V3 + Object",
    hint: "She will have played tennis.",
  },
  {
    tenseType: "Future Perfect Continuous",
    rule: "Subject + will/shall have been + V1 + ing + Object",
    hint: "She will have been playing tennis.",
  },
];

const playBtn = document.querySelector(".play-btn");
const content = document.querySelector(".content");

function randomTenseGenerator() {
  const tense = data[Math.floor(Math.random() * data.length)];
  content.innerHTML = `     
    <h2>${tense.tenseType}</h2>
    <p>${tense.rule}</p>
    <div class="hint-item">      
    <div class="hint-title">
    <h4>Hint</h4><i class="ri-eye-close-line"></i>
    </div >
        <div class="hint"><p>${tense.hint}</p></div>      
    </div>
    
    `;

  toggleHint(document.querySelector("i"));
}

function toggleHint(eyeBtn) {
  eyeBtn.addEventListener("click", () => {
    const hintTitle = document.querySelector(".hint-title");
    if (hintTitle.classList.contains("active")) {
      hintTitle.classList.remove("active");
      eyeBtn.setAttribute("class", "ri-eye-close-line");
    } else {
      hintTitle.classList.add("active");
      eyeBtn.setAttribute("class", "ri-eye-fill");
    }
  });
}

playBtn.addEventListener("click", () => {
  randomTenseGenerator();
});

window.addEventListener("load", () => {
  randomTenseGenerator();
});
