const subjectButtons = document.querySelectorAll(".subject-pill");
const levelButtons = document.querySelectorAll(".level");
const startButton = document.getElementById("startButton");
const scoreValue = document.getElementById("scoreValue");
const scoreMessage = document.getElementById("scoreMessage");

const subjectScores = {
  "ภาษาไทย": 10,
  "คณิตศาสตร์": 20,
  "วิทยาศาสตร์": 30,
  "สังคมศึกษา": 40,
  "ภาษาอังกฤษ": 50,
};

const encouragementMap = {
  "ภาษาไทย": "เริ่มจากภาษาไทย อ่านโจทย์ให้ครบแล้วเก็บดาวดวงแรกกัน",
  "คณิตศาสตร์": "คณิตศาสตร์พร้อมท้าทาย ลองคิดเร็วและตอบให้แม่น",
  "วิทยาศาสตร์": "วิทยาศาสตร์กำลังรออยู่ มาสำรวจและทดลองความรู้กัน",
  "สังคมศึกษา": "สังคมศึกษาพร้อมแล้ว ทบทวนเรื่องรอบตัวและวัฒนธรรมไทย",
  "ภาษาอังกฤษ": "ภาษาอังกฤษมาแล้ว ฝึกคำศัพท์และประโยคง่ายๆ ได้เลย",
};

subjectButtons.forEach((button) => {
  button.addEventListener("click", () => {
    subjectButtons.forEach((item) => item.classList.remove("selected"));
    button.classList.add("selected");

    const subjectName = button.dataset.subject;
    scoreValue.textContent = subjectScores[subjectName];
    scoreMessage.textContent = encouragementMap[subjectName];
    startButton.textContent = `เริ่มเล่น ${subjectName}`;
    startButton.classList.remove("pulse");
    void startButton.offsetWidth;
    startButton.classList.add("pulse");
  });
});

levelButtons.forEach((button) => {
  button.addEventListener("click", () => {
    levelButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    const level = button.dataset.level;
    scoreMessage.textContent = `เลือกด่าน ${level} แล้ว กดเริ่มเล่นเพื่อเข้าสู่แบบทดสอบ`;
  });
});

startButton.addEventListener("click", () => {
  const selectedSubject = document.querySelector(".subject-pill.selected")?.dataset.subject ?? "ภาษาไทย";
  const selectedLevel = document.querySelector(".level.active")?.dataset.level ?? "1";
  scoreMessage.textContent = `พร้อมลุย ${selectedSubject} ด่าน ${selectedLevel} แล้ว ไปเก็บคะแนนกันเลย!`;
  startButton.classList.remove("pulse");
  void startButton.offsetWidth;
  startButton.classList.add("pulse");
});
