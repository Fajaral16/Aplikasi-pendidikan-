// Jawaban benar
const correctAnswers = {
  q1: "b", // 
  q2: "b", //
  q3: "a", // 
  q4: "c",
  q5: "b",
};

// Fungsi untuk mengecek jawaban
function checkAnswers() {
  const quizForm = document.getElementById("quizForm");
  const formData = new FormData(quizForm);
  let score = 0;

  // Periksa setiap jawaban
  for (let question in correctAnswers) {
    if (formData.get(question) === correctAnswers[question]) {
      score++;
    }
  }

  // Tampilkan hasil
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `Skor Anda: ${score} dari ${Object.keys(correctAnswers).length}`;
}
