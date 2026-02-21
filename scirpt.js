const quizData = [
    {
        q: "ดวงอาทิตย์ผลิตพลังงานด้วยปฏิกิริยาชนิดใด?",
        a: ["Fission", "Fusion", "Combustion", "Electrolysis"],
        correct: 1
    },
    {
        q: "ธาตุใดนิยมใช้เป็นเชื้อเพลิงในโรงไฟฟ้านิวเคลียร์ปัจจุบัน?",
        a: ["ไฮโดรเจน", "คาร์บอน", "ยูเรเนียม-235", "ทองแดง"],
        correct: 2
    }
];

let currentQuiz = 0;
let score = 0;

function loadQuiz() {
    const q = quizData[currentQuiz];
    document.getElementById('question').innerText = q.q;
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    q.a.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        btn.className = "w-full py-3 px-6 text-left border-2 border-gray-200 rounded-xl hover:bg-blue-50 hover:border-blue-500 transition font-medium";
        btn.onclick = () => checkAnswer(idx);
        optionsDiv.appendChild(btn);
    });
}

function checkAnswer(idx) {
    if (idx === quizData[currentQuiz].correct) score++;
    currentQuiz++;
    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        document.getElementById('quiz-container').innerHTML = `
            <div class="text-center">
                <h4 class="text-4xl font-bold mb-4 text-blue-600">${score}/${quizData.length}</h4>
                <p class="text-lg">ยอดเยี่ยม! คุณมีความเข้าใจในพลังงานนิวเคลียร์เบื้องต้นแล้ว</p>
                <button onclick="location.reload()" class="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg">ทำใหม่อีกครั้ง</button>
            </div>
        `;
    }
}

document.addEventListener('DOMContentLoaded', loadQuiz);
