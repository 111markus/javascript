// ALGANDEMD
const scores = [45, 88, 32, 99, 74, 50, 61, 92, 39];
let currentScores = [...scores]; // koopia

// viited DOM-ile

const scoreList = document.getElementById("scoreList");
const result = document.getElementById("result");

const kpiCount = document.getElementById("kpi-count");
const kpiAvg = document.getElementById("kpi-avg");
const kpiTh = document.getElementById("kpi-th");

const countInput = document.getElementById("count");

// funktsioon tulemuste kuvamiseks

function renderScores() {
  scoreList.innerHTML = "";
  currentScores.forEach((score) => {
    const item = document.createElement("p");
    item.textContent = score;
    scoreList.appendChild(item);
  });
  kpiCount.textContent = currentScores.length;
}

// punktide lisamine

function addBonus() {
  const newScores = currentScores.map((score) => score + 5);
  currentScores = newScores;
  renderScores();
}

// filtreeri 60 või suurem

function filterByThreshold() {
  const filtered = currentScores.filter((score) => score >= 60);
  currentScores = filtered;
  renderScores();
}

// arvuta keskmine

function showAverage() {
  if (currentScores.length === 0) {
    kpiAvg.textContent = "–";
    return;
  }

  const sum = currentScores.reduce((acc, score) => acc + score, 0);
  const average = sum / currentScores.length;

  kpiAvg.textContent = average.toFixed(2);
}

// taasta algseis

function resetAll() {
  currentScores = [...scores];
  renderScores(currentScores);
  kpiAvg.textContent = "–";
}

// genereeri uued skoorid ja kuva

function makeRandom() {
  const count = Number(countInput.value);

  const makeRandomScores = Array.from(
    { length: count },
    () => Math.floor(Math.random() * 100) + 1
  );

  currentScores = makeRandomScores;

  renderScores();
  kpiAvg.textContent = "–";
}
