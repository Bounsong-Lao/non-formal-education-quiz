document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Quiz Logic
    const questions = [
        {
            question: "ການສຶກສານອກໂຮງຮຽນແມ່ນຫຍັງ?",
            options: [
                "ການສຶກສາທີ່ຈັດຂຶ້ນໃນໂຮງຮຽນຕາມຫຼັກສູດມາດຕະຖານ",
                "ກິດຈະກຳການຮຽນຮູ້ທີ່ຈັດຂຶ້ນຢູ່ນອກລະບົບການສຶກສາແບບທາງການ",
                "ການສຶກສາສຳລັບເດັກນ້ອຍອາຍຸຕໍ່າກວ່າ 6 ປີເທົ່ານັ້ນ",
                "ການຮຽນຮູ້ແບບບັງຄັບເພື່ອໃຫ້ໄດ້ໃບປະກາດສະນີຍະບັດ"
            ],
            answer: "ກິດຈະກຳການຮຽນຮູ້ທີ່ຈັດຂຶ້ນຢູ່ນອກລະບົບການສຶກສາແບບທາງການ",
            explanation: "ການສຶກສານອກໂຮງຮຽນມີຄວາມຢືດຢຸ່ນ ແລະ ບໍ່ຈຳກັດຢູ່ພຽງແຕ່ໃນໂຮງຮຽນ."
        },
        {
            question: "ຂໍ້ໃດຕໍ່ໄປນີ້ແມ່ນລັກສະນະສຳຄັນຂອງການສຶກສານອກໂຮງຮຽນ?",
            options: [
                "ມີລະບົບຊັ້ນຮຽນທີ່ເຂັ້ມງວດ",
                "ເນັ້ນການສອບເສັງເພື່ອເລື່ອນຊັ້ນ",
                "ມີຄວາມຢືດຢຸ່ນ ແລະ ເໝາະສົມກັບຄວາມຕ້ອງການຂອງຜູ້ຮຽນ",
                "ຈຳກັດອາຍຸຜູ້ຮຽນ"
            ],
            answer: "ມີຄວາມຢືດຢຸ່ນ ແລະ ເໝາະສົມກັບຄວາມຕ້ອງການຂອງຜູ້ຮຽນ",
            explanation: "ການສຶກສານອກໂຮງຮຽນຖືກອອກແບບໃຫ້ຢືດຢຸ່ນຕາມຄວາມຕ້ອງການຂອງກຸ່ມເປົ້າໝາຍ."
        },
        {
            question: "ກຸ່ມເປົ້າໝາຍຫຼັກຂອງການສຶກສານອກໂຮງຮຽນມັກຈະແມ່ນໃຜ?",
            options: [
                "ນັກຮຽນທີ່ກຳລັງຮຽນຢູ່ໂຮງຮຽນສາມັນ",
                "ຜູ້ບໍລິຫານລະດັບສູງ",
                "ກຸ່ມຄົນທີ່ບໍ່ສາມາດເຂົ້າເຖິງການສຶກສາໃນລະບົບໄດ້",
                "ຄູອາຈານເທົ່ານັ້ນ"
            ],
            answer: "ກຸ່ມຄົນທີ່ບໍ່ສາມາດເຂົ້າເຖິງການສຶກສາໃນລະບົບໄດ້",
            explanation: "ການສຶກສານອກໂຮງຮຽນມີຈຸດປະສົງເພື່ອໃຫ້ໂອກາດຜູ້ທີ່ພາດໂອກາດການສຶກສາໃນລະບົບ."
        },
        {
            question: "ຂໍ້ໃດຕໍ່ໄປນີ້ແມ່ນປະໂຫຍດຂອງການສຶກສານອກໂຮງຮຽນ?",
            options: [
                "ຊ່ວຍຫຼຸດຜ່ອນຄວາມບໍ່ຮູ້ໜັງສື",
                "ຮັບປະກັນວຽກເຮັດງານທຳທີ່ມີລາຍໄດ້ສູງ",
                "ເປັນທາງຜ່ານດຽວເພື່ອເຂົ້າຮຽນມະຫາວິທະຍາໄລ",
                "ສອນສະເພາະວິຊາພື້ນຖານ"
            ],
            answer: "ຊ່ວຍຫຼຸດຜ່ອນຄວາມບໍ່ຮູ້ໜັງສື",
            explanation: "ການສຶກສານອກໂຮງຮຽນມີບົດບາດສຳຄັນໃນການໃຫ້ການສຶກສາພື້ນຖານແກ່ຜູ້ໃຫຍ່."
        },
        {
            question: "ການສຶກສານອກໂຮງຮຽນມີບົດບາດສຳຄັນຕໍ່ການພັດທະນາປະເທດຊາດແນວໃດ?",
            options: [
                "ສຸມໃສ່ສະເພາະການຮຽນວິຊາການລະດັບສູງ",
                "ຊ່ວຍພັດທະນາທັກສະອາຊີບໃຫ້ແກ່ແຮງງານ",
                "ຫຼຸດຜ່ອນການມີສ່ວນຮ່ວມຂອງຊຸມຊົນ",
                "ເຮັດໃຫ້ການສຶກສາໃນລະບົບບໍ່ຈຳເປັນ"
            ],
            answer: "ຊ່ວຍພັດທະນາທັກສະອາຊີບໃຫ້ແກ່ແຮງງານ",
            explanation: "ການສຶກສານອກໂຮງຮຽນມັກຈະເນັ້ນການຝຶກອົບຮົມວິຊາຊີບເພື່ອພັດທະນາແຮງງານ."
        },
        {
            question: "ການຮຽນຮູ້ຕະຫຼອດຊີວິດໝາຍເຖິງຫຍັງໃນການສຶກສານອກໂຮງຮຽນ?",
            options: [
                "ການຮຽນຮູ້ຢ່າງຕໍ່ເນື່ອງຕັ້ງແຕ່ເກີດຈົນຕາຍ",
                "ການຮຽນຮູ້ສະເພາະໃນຊ່ວງໄວເດັກເທົ່ານັ້ນ",
                "ການຮຽນຮູ້ເພື່ອໃຫ້ໄດ້ໃບປະກາດສະນີຍະບັດສູງສຸດ",
                "ການຮຽນຮູ້ທີ່ຈຳກັດເວລາ ແລະ ສະຖານທີ່"
            ],
            answer: "ການຮຽນຮູ້ຢ່າງຕໍ່ເນື່ອງຕັ້ງແຕ່ເກີດຈົນຕາຍ",
            explanation: "ການສຶກສານອກໂຮງຮຽນສົ່ງເສີມແນວຄິດການຮຽນຮູ້ທີ່ບໍ່ມີທີ່ສິ້ນສຸດ."
        },
        {
            question: "ຂໍ້ໃດບໍ່ແມ່ນລັກສະນະຂອງການສຶກສານອກໂຮງຮຽນ?",
            options: [
                "ຫຼັກສູດຖືກກຳນົດໂດຍກະຊວງສຶກສາທິການເທົ່ານັ້ນ",
                "ມີຄວາມຢືດຢຸ່ນໃນການຈັດຕັ້ງ",
                "ເນັ້ນການຕອບສະໜອງຄວາມຕ້ອງການສະເພາະຂອງຜູ້ຮຽນ",
                "ສາມາດຈັດຕັ້ງໄດ້ໃນຫຼາຍຮູບແບບ"
            ],
            answer: "ຫຼັກສູດຖືກກຳນົດໂດຍກະຊວງສຶກສາທິການເທົ່ານັ້ນ",
            explanation: "ຫຼັກສູດການສຶກສານອກໂຮງຮຽນມັກຈະຖືກພັດທະນາໃຫ້ເໝາະສົມກັບຄວາມຕ້ອງການຂອງຊຸມຊົນ ຫຼື ກຸ່ມເປົ້າໝາຍສະເພາະ."
        },
        {
            question: "ຕົວຢ່າງຂອງການສຶກສານອກໂຮງຮຽນແມ່ນຫຍັງ?",
            options: [
                "ການຮຽນປະຖົມສຶກສາຢູ່ໃນໂຮງຮຽນລັດ",
                "ການຝຶກອົບຮົມວິຊາຊີບສັ້ນໆເຊັ່ນ: ການຕັດຜົມ, ຫຍິບປັກຖັກແສ່ວ",
                "ການຮຽນຕໍ່ປະລິນຍາຕີຢູ່ມະຫາວິທະຍາໄລ",
                "ການສອນພິເສດກຽມສອບເສັງເຂົ້າໂຮງຮຽນ"
            ],
            answer: "ການຝຶກອົບຮົມວິຊາຊີບສັ້ນໆເຊັ່ນ: ການຕັດຜົມ, ຫຍິບປັກຖັກແສ່ວ",
            explanation: "ການຝຶກອົບຮົມວິຊາຊີບແມ່ນຮູບແບບໜຶ່ງທີ່ນິຍົມຂອງການສຶກສານອກໂຮງຮຽນ."
        },
        {
            question: "ຄວາມແຕກຕ່າງຫຼັກລະຫວ່າງການສຶກສາໃນລະບົບ ແລະ ນອກໂຮງຮຽນແມ່ນຫຍັງ?",
            options: [
                "ການສຶກສາໃນລະບົບບໍ່ມີໃບປະກາດ, ນອກໂຮງຮຽນມີ",
                "ການສຶກສາໃນລະບົບມີໂຄງສ້າງທີ່ເຂັ້ມງວດ, ນອກໂຮງຮຽນມີຄວາມຢືດຢຸ່ນ",
                "ການສຶກສາໃນລະບົບສອນແຕ່ຜູ້ໃຫຍ່, ນອກໂຮງຮຽນສອນແຕ່ເດັກນ້ອຍ",
                "ການສຶກສາໃນລະບົບບໍ່ມີຄູ, ນອກໂຮງຮຽນມີຄູ"
            ],
            answer: "ການສຶກສາໃນລະບົບມີໂຄງສ້າງທີ່ເຂັ້ມງວດ, ນອກໂຮງຮຽນມີຄວາມຢືດຢຸ່ນ",
            explanation: "ຄວາມຢືດຢຸ່ນແມ່ນລັກສະນະເດັ່ນຂອງການສຶກສານອກໂຮງຮຽນ."
        },
        {
            question: "ການສຶກສານອກໂຮງຮຽນສາມາດຊ່ວຍແກ້ໄຂບັນຫາສັງຄົມໄດ້ແນວໃດ?",
            options: [
                "ໂດຍການຈັດການແຂ່ງຂັນກິລາເທົ່ານັ້ນ",
                "ໂດຍການເຜີຍແຜ່ຄວາມຮູ້ກ່ຽວກັບສຸຂະພາບ ຫຼື ສິ່ງແວດລ້ອມ",
                "ໂດຍການສ້າງຕຶກອາຄານໃໝ່",
                "ໂດຍການຫຼຸດຄ່າຮຽນໃນໂຮງຮຽນ"
            ],
            answer: "ໂດຍການເຜີຍແຜ່ຄວາມຮູ້ກ່ຽວກັບສຸຂະພາບ ຫຼື ສິ່ງແວດລ້ອມ",
            explanation: "ການສຶກສານອກໂຮງຮຽນສາມາດເປັນເຄື່ອງມືໃນການໃຫ້ຄວາມຮູ້ກ່ຽວກັບບັນຫາສັງຄົມຕ່າງໆ."
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    const quizContainer = document.getElementById('quiz-container');
    const quizResults = document.getElementById('quiz-results');
    const startQuizBtn = document.getElementById('start-quiz-btn');
    const restartQuizBtn = document.getElementById('restart-quiz-btn');
    const scoreSpan = document.getElementById('score');
    const totalQuestionsSpan = document.getElementById('total-questions');

    startQuizBtn.addEventListener('click', startQuiz);
    restartQuizBtn.addEventListener('click', startQuiz);

    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        quizResults.style.display = 'none';
        quizContainer.style.display = 'block';
        totalQuestionsSpan.textContent = questions.length; // Set total questions display
        displayQuestion();
    }

    function displayQuestion() {
        if (currentQuestionIndex < questions.length) {
            const q = questions[currentQuestionIndex];
            quizContainer.innerHTML = `
                <div class="quiz-question">
                    <h3>${q.question}</h3>
                    <ul class="quiz-options">
                        ${q.options.map(option => `<button>${option}</button>`).join('')}
                    </ul>
                    <div class="feedback"></div>
                    <button id="next-question-btn" style="display:none;">ຄຳຖາມຕໍ່ໄປ</button>
                </div>
            `;
            const optionButtons = quizContainer.querySelectorAll('.quiz-options button');
            optionButtons.forEach(button => {
                button.addEventListener('click', selectAnswer);
            });
        } else {
            showResults();
        }
    }

    function selectAnswer(event) {
        const selectedButton = event.target;
        const userAnswer = selectedButton.textContent;
        const currentQuestion = questions[currentQuestionIndex];
        const feedbackDiv = quizContainer.querySelector('.feedback');
        const nextBtn = document.getElementById('next-question-btn');
        const optionButtons = quizContainer.querySelectorAll('.quiz-options button');

        // Disable all option buttons after an answer is selected
        optionButtons.forEach(button => {
            button.disabled = true;
            if (button.textContent === currentQuestion.answer) {
                button.classList.add('correct'); // Highlight correct answer
            } else {
                button.classList.add('wrong'); // Highlight wrong answers
            }
        });

        if (userAnswer === currentQuestion.answer) {
            score++;
            feedbackDiv.textContent = "ຖືກຕ້ອງ! 👍";
            feedbackDiv.classList.remove('wrong');
            feedbackDiv.classList.add('correct');
        } else {
            feedbackDiv.textContent = `ຜິດ! ຄຳຕອບທີ່ຖືກຕ້ອງແມ່ນ: "${currentQuestion.answer}". ${currentQuestion.explanation}`;
            feedbackDiv.classList.remove('correct');
            feedbackDiv.classList.add('wrong');
        }
        nextBtn.style.display = 'block'; // Show next question button
        nextBtn.addEventListener('click', nextQuestion);
    }

    function nextQuestion() {
        currentQuestionIndex++;
        displayQuestion();
    }

    function showResults() {
        quizContainer.style.display = 'none';
        quizResults.style.display = 'block';
        scoreSpan.textContent = score;
    }

    // Initial load: show start button
    quizContainer.innerHTML = `
        <p>ກົດປຸ່ມ "ເລີ່ມທົດສອບ" ເພື່ອເລີ່ມຕົ້ນ!</p>
        <button id="start-quiz-btn">ເລີ່ມທົດສອບ</button>
    `;
    document.getElementById('start-quiz-btn').addEventListener('click', startQuiz);
});
