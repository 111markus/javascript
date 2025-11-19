// -------------------------------------------------------------
// Andmed: kangelased (objektid massiivis) ja boss
// -------------------------------------------------------------
const originalHeroes = [
  { name: "Tugev Tom", role: "tank", hp: 120, power: 25 },
  { name: "Kaitsev Kai", role: "tank", hp: 110, power: 20 },
  { name: "Ravi-Riina", role: "raviarst", hp: 80, power: 10 },
  { name: "Sära-Siim", role: "raviarst", hp: 75, power: 12 },
  { name: "Noole-Naima", role: "ründaja", hp: 90, power: 30 },
  { name: "Mõõga-Mari", role: "ründaja", hp: 95, power: 35 },
];

const originalBoss = {
  name: "Varju-Kuningas",
  hp: 200,
  maxHp: 200,
};

// Mängu jooksul muutuvad andmed:
let heroes = []; // täidetakse resetTeam() sees
let boss = { ...originalBoss }; // koopia bossist

// -------------------------------------------------------------
// Viited DOM elementidele
// -------------------------------------------------------------
const heroListEl = document.getElementById("heroList");
const heroCountEl = document.getElementById("heroCount");
const teamPowerEl = document.getElementById("teamPower");
const logEl = document.getElementById("log");
const roleSelect = document.getElementById("roleSelect");
const bossNameEl = document.getElementById("bossName");
const bossHpEl = document.getElementById("bossHp");
const bossBarInner = document.getElementById("bossBarInner");

// -------------------------------------------------------------
// ÕPILANE: kirjuta allolevate funktsioonide sisu
// -------------------------------------------------------------

// appendLog(message)
//  - lisa logEl lõppu uus rida (message + "\n")
//  - võid pärast lisamist kerida logi alla: logEl.scrollTop = logEl.scrollHeight;
function appendLog(message) {
  logEl.textContent += message + "\n";
  logEl.scrollTop = logEl.scrollHeight;
}

// renderHeroes(list)
//  - tühjenda heroListEl (innerHTML = "")
//  - kasuta list.forEach(hero => { ... });
//    - loo iga kangelase jaoks div.hero-card nt  const card = document.createElement("div");
//    - lisa sinna nimi, roll, hp ja power nt  card.className = "hero-card";
// - kui kõik osad on loodud tuleb need lisada üksteise sisse
// nt        statsEl.appendChild(hpSpan);
//   statsEl.appendChild(powerSpan);
//   card.appendChild(nameEl);
//   card.appendChild(roleEl);
//   card.appendChild(statsEl);
//  - heroCountEl.textContent = list.length;
function renderHeroes(list) {
  heroListEl.innerHTML = "";
  list.forEach((hero) => {
    const card = document.createElement("div");
    card.className = "hero-card";

    const nameEl = document.createElement("div");
    nameEl.className = "hero-name";
    nameEl.textContent = hero.name;

    const roleEl = document.createElement("div");
    roleEl.className = "hero-role";
    roleEl.textContent = "Roll: " + hero.role;

    const statsEl = document.createElement("div");
    statsEl.className = "hero-stats";

    const hpSpan = document.createElement("span");
    hpSpan.textContent = "HP: " + hero.hp;

    const powerSpan = document.createElement("span");
    powerSpan.textContent = "Power: " + hero.power;

    statsEl.appendChild(hpSpan);
    statsEl.appendChild(powerSpan);

    card.appendChild(nameEl);
    card.appendChild(roleEl);
    card.appendChild(statsEl);

    heroListEl.appendChild(card);
  });

  heroCountEl.textContent = list.length;
}

// renderBoss()
//  - uuenda bossNameEl.textContent = boss.name;
//  - uuenda bossHpEl.textContent = "HP: " + boss.hp;
//  - arvuta protsent: (boss.hp / boss.maxHp) * 100
//  - sea  bossBarInner.style.width = Math.max(0, Math.min(100, percent)) + "%";
//  - kui boss.hp <= 0 → võid lisada logisse „Boss on alistatud!”
function renderBoss() {
  if (boss.hp < 0) boss.hp = 0;
  bossNameEl.textContent = boss.name;
  bossHpEl.textContent = "HP: " + boss.hp;

  const percent = (boss.hp / boss.maxHp) * 100;
  bossBarInner.style.width = Math.max(0, Math.min(100, percent)) + "%";

  if (boss.hp <= 0) {
    appendLog("Boss on alistatud! 🎉");
  }
}

// showAllHeroes()
//  - heroes = koopia originalHeroes-st (näiteks originalHeroes.map(hero => ({...hero})))
//  - renderHeroes(heroes)
//  - renderBoss()
//  - appendLog("Kuvame kõik kangelased")
function showAllHeroes() {
  heroes = originalHeroes.map((hero) => ({ ...hero }));
  renderHeroes(heroes);
  renderBoss();
  appendLog("Kuvame kõik kangelased");
}

// filterByRole()
//  - const value = roleSelect.value;
//  - kui value === "all" → kutsu showAllHeroes()
//  - muidu:
//      const filtered = heroes.filter(hero => hero.role === value);
//      renderHeroes(filtered);
//      appendLog("Filtreerime rolli järgi: " + value);
function filterByRole() {
  const value = roleSelect.value;
  if (value === "all") {
    showAllHeroes();
    appendLog("Filtreerimine tühistatud – näitame kõiki kangelasi");
    return;
  }
  const filtered = heroes.filter((hero) => hero.role === value);
  renderHeroes(filtered);
  appendLog("Filtreerime rolli järgi: " + value);
}

// boostTeam()
//  - suurenda iga heroes elemendi hp väärtust 10 võrra (forEach)
//  - seejärel renderHeroes(heroes)
//  - appendLog("Lisatud +10 HP kõigile kangelastele");
function boostTeam() {
  heroes.forEach((hero) => {
    hero.hp += 10;
  });
  renderHeroes(heroes);
  appendLog("Lisatud +10 HP kõigile kangelastele");
}

// calcTeamPower(list)
//  - kasuta reduce, et liita kokku list[] power väärtused
//  - kui list on tühi, tagasta 0
function calcTeamPower(list) {
  if (!list.length) return 0;
  return list.reduce((sum, hero) => sum + hero.power, 0);
}

// showTeamPower()
//  - arvuta kogujõud heroes massiivist kasutades calcTeamPower(heroes)
//  - kuva teamPowerEl elemendis
//  - appendLog("Meeskonna kogujõud: " + power);
function showTeamPower() {
  const power = calcTeamPower(heroes);
  teamPowerEl.textContent = power;
  appendLog("Meeskonna kogujõud: " + power);
}

// resetTeam()
//  - taasta heroes koopia originalHeroes-st
//  - taasta boss = koopia originalBoss-st
//  - teamPowerEl.textContent = "0";
//  - logEl.textContent = "";
//  - renderHeroes(heroes);
//  - renderBoss();
//  - appendLog("Taastasime algse meeskonna ja bossi");
function resetTeam() {
  heroes = originalHeroes.map((hero) => ({ ...hero }));
  boss = { ...originalBoss };
  teamPowerEl.textContent = "0";
  logEl.textContent = "";
  renderHeroes(heroes);
  renderBoss();
  appendLog("Taastasime algse meeskonna ja bossi");
}

// attackBoss()
//  - leia ründajad: const attackers = heroes.filter(h => h.role === "ründaja");
//  - leia nende kogujõud: kasuta calcTeamPower(attackers)
//  - vähenda boss.hp väärtust selle kogujõu võrra (mitte alla 0)
//  - kutsu renderBoss()
//  - appendLog("Ründajad tegid bossile " + dmg + " kahju");
function attackBoss() {
  const attackers = heroes.filter((h) => h.role === "ründaja");
  const dmg = calcTeamPower(attackers);

  if (dmg === 0) {
    appendLog("Ründajat ei ole – keegi ei tee kahju.");
    return;
  }

  boss.hp -= dmg;
  if (boss.hp < 0) boss.hp = 0;

  renderBoss();
  appendLog("Ründajad tegid bossile " + dmg + " kahju");
}

// healTanks()
//  - käi heroes läbi forEach-iga
//  - kui hero.role === "tank" → hero.hp = hero.hp + 15;
//  - renderHeroes(heroes);
//  - appendLog("Raviarstid ravisid tanke (+15 HP)");
function healTanks() {
  let healed = 0;
  heroes.forEach((hero) => {
    if (hero.role === "tank") {
      hero.hp += 15;
      healed++;
    }
  });
  renderHeroes(heroes);
  appendLog(
    "Raviarstid ravisid tanke (+15 HP igale tankile, kokku " + healed + ")"
  );
}

// -------------------------------------------------------------
// Soovi korral: automaatne algseis
// -------------------------------------------------------------
// Õpetaja võib jätta lahti, et õpilane kutsub ise resetTeam(),
// või kohe mängu alguses aktiveerida:
//
// resetTeam();
