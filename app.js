// CPRE Exam Application Logic

let currentExam = null;
let currentQuestionIndex = 0;
let userAnswers = {};
let timerInterval = null;
let timeRemaining = 75 * 60; // 75 minutes in seconds
let examStartTime = null;

// Screen Management
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// Start Exam
function startExam(examNumber) {
    currentExam = allExams[examNumber];
    if (!currentExam) {
        alert('Exam data not available. Please ensure all questions are loaded.');
        return;
    }

    currentQuestionIndex = 0;
    userAnswers = {};
    timeRemaining = 75 * 60;
    examStartTime = Date.now();

    document.getElementById('exam-title').textContent = currentExam.title;

    renderQuestionGrid();
    loadQuestion(0);
    startTimer();
    showScreen('exam-screen');
}

// Timer Functions
function startTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
    }

    updateTimerDisplay();

    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            alert('Time is up! Submitting your exam...');
            submitExam();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    const display = `${minutes}:${seconds.toString().padStart(2, '0')}`;

    const timerElement = document.getElementById('timer');
    timerElement.textContent = display;

    // Add warning classes
    timerElement.classList.remove('warning', 'critical');
    if (timeRemaining <= 300) { // 5 minutes
        timerElement.classList.add('critical');
    } else if (timeRemaining <= 900) { // 15 minutes
        timerElement.classList.add('warning');
    }
}

// Question Navigation
function loadQuestion(index) {
    if (!currentExam || !currentExam.questions[index]) {
        return;
    }

    currentQuestionIndex = index;
    const question = currentExam.questions[index];

    // Update question header
    document.getElementById('question-number').textContent = `Question ${index + 1} of ${currentExam.questions.length}`;
    document.getElementById('question-points').textContent = `${question.points} ${question.points === 1 ? 'Point' : 'Points'}`;
    document.getElementById('question-text').textContent = question.question;

    // Update progress
    const answered = Object.keys(userAnswers).length;
    document.getElementById('progress').textContent = `${answered} / ${currentExam.questions.length}`;

    // Render options
    renderOptions(question);

    // Update navigation buttons
    document.getElementById('prev-btn').disabled = index === 0;

    const isLastQuestion = index === currentExam.questions.length - 1;
    document.getElementById('next-btn').style.display = isLastQuestion ? 'none' : 'inline-block';
    document.getElementById('submit-btn').style.display = isLastQuestion ? 'inline-block' : 'none';

    // Update question grid
    updateQuestionGrid();
}

function renderOptions(question) {
    const container = document.getElementById('question-options');
    container.innerHTML = '';

    const inputType = question.type === 'single' ? 'radio' : 'checkbox';
    const savedAnswer = userAnswers[question.id];

    question.options.forEach(option => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';

        const input = document.createElement('input');
        input.type = inputType;
        input.id = `option-${option.id}`;
        input.name = `question-${question.id}`;
        input.value = option.id;

        // Check if this option was previously selected
        if (question.type === 'true-false' || question.type === 'matching') {
            const select = document.createElement('select');
            select.className = 'tf-select';
            select.onchange = (e) => saveAnswer(question.id, option.id, e.target.value);

            const defaultOption = document.createElement('option');
            defaultOption.value = '';
            defaultOption.textContent = '-- Select --';
            select.appendChild(defaultOption);

            if (question.type === 'true-false') {
                const trueOpt = document.createElement('option');
                trueOpt.value = 'true';
                trueOpt.textContent = 'True';
                const falseOpt = document.createElement('option');
                falseOpt.value = 'false';
                falseOpt.textContent = 'False';
                select.appendChild(trueOpt);
                select.appendChild(falseOpt);
            } else {
                const appliesOpt = document.createElement('option');
                appliesOpt.value = 'applies';
                appliesOpt.textContent = 'Applies';
                const doesNotOpt = document.createElement('option');
                doesNotOpt.value = 'does-not';
                doesNotOpt.textContent = 'Does not apply';
                select.appendChild(appliesOpt);
                select.appendChild(doesNotOpt);
            }

            if (savedAnswer && savedAnswer[option.id]) {
                select.value = savedAnswer[option.id];
            }

            const label = document.createElement('label');
            label.className = 'option-label';
            label.textContent = `${option.id}) ${option.text}`;

            optionDiv.appendChild(label);
            optionDiv.appendChild(select);
        } else {
            if (question.type === 'single') {
                input.checked = savedAnswer && savedAnswer.includes(option.id);
            } else {
                input.checked = savedAnswer && savedAnswer.includes(option.id);
            }

            input.onchange = () => handleOptionChange(question);

            const label = document.createElement('label');
            label.className = 'option-label';
            label.htmlFor = input.id;
            label.textContent = `${option.id}) ${option.text}`;

            optionDiv.appendChild(input);
            optionDiv.appendChild(label);

            if (input.checked) {
                optionDiv.classList.add('selected');
            }
        }

        container.appendChild(optionDiv);
    });
}

function handleOptionChange(question) {
    const inputs = document.querySelectorAll(`input[name="question-${question.id}"]`);
    const selected = [];

    inputs.forEach(input => {
        const optionDiv = input.closest('.option');
        if (input.checked) {
            selected.push(input.value);
            optionDiv.classList.add('selected');
        } else {
            optionDiv.classList.remove('selected');
        }
    });

    if (selected.length > 0) {
        userAnswers[question.id] = question.type === 'single' ? selected : selected;
    } else {
        delete userAnswers[question.id];
    }

    // Update progress
    const answered = Object.keys(userAnswers).length;
    document.getElementById('progress').textContent = `${answered} / ${currentExam.questions.length}`;
    updateQuestionGrid();
}

function saveAnswer(questionId, optionId, value) {
    if (!userAnswers[questionId]) {
        userAnswers[questionId] = {};
    }
    userAnswers[questionId][optionId] = value;

    // Update progress
    const answered = Object.keys(userAnswers).length;
    document.getElementById('progress').textContent = `${answered} / ${currentExam.questions.length}`;
    updateQuestionGrid();
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        loadQuestion(currentQuestionIndex - 1);
    }
}

function nextQuestion() {
    if (currentQuestionIndex < currentExam.questions.length - 1) {
        loadQuestion(currentQuestionIndex + 1);
    }
}

// Question Grid
function renderQuestionGrid() {
    const grid = document.getElementById('question-grid');
    grid.innerHTML = '';

    currentExam.questions.forEach((q, index) => {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridItem.textContent = index + 1;
        gridItem.onclick = () => loadQuestion(index);
        grid.appendChild(gridItem);
    });
}

function updateQuestionGrid() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach((item, index) => {
        item.classList.remove('answered', 'current');

        if (index === currentQuestionIndex) {
            item.classList.add('current');
        } else if (userAnswers[currentExam.questions[index].id]) {
            item.classList.add('answered');
        }
    });
}

function jumpToQuestion(index) {
    loadQuestion(index);
}

// Submit Exam
function submitExam() {
    if (timerInterval) {
        clearInterval(timerInterval);
    }

    const unanswered = currentExam.questions.length - Object.keys(userAnswers).length;
    if (unanswered > 0) {
        const confirm = window.confirm(`You have ${unanswered} unanswered questions. Are you sure you want to submit?`);
        if (!confirm) {
            startTimer(); // Restart timer if they cancel
            return;
        }
    }

    calculateResults();
}

// Calculate Results
function calculateResults() {
    let totalPoints = 0;
    let earnedPoints = 0;
    const results = [];

    currentExam.questions.forEach(question => {
        totalPoints += question.points;
        const userAnswer = userAnswers[question.id];
        let correct = false;
        let userAnswerText = '';
        let correctAnswerText = '';

        if (question.type === 'single') {
            correct = userAnswer && question.correctAnswers.includes(userAnswer[0]);
            userAnswerText = userAnswer ? userAnswer.join(', ') : 'No answer';
            correctAnswerText = question.correctAnswers.join(', ');
        } else if (question.type === 'multiple') {
            const userSet = new Set(userAnswer || []);
            const correctSet = new Set(question.correctAnswers);
            correct = userSet.size === correctSet.size && [...userSet].every(a => correctSet.has(a));
            userAnswerText = userAnswer ? userAnswer.join(', ') : 'No answer';
            correctAnswerText = question.correctAnswers.join(', ');
        } else if (question.type === 'true-false' || question.type === 'matching') {
            correct = true;
            const userAns = userAnswer || {};
            const parts = [];
            const correctParts = [];

            Object.keys(question.correctAnswers).forEach(key => {
                const userVal = userAns[key];
                const correctVal = question.correctAnswers[key];

                if (typeof correctVal === 'boolean') {
                    if (userVal !== (correctVal ? 'true' : 'false')) {
                        correct = false;
                    }
                    parts.push(`${key}: ${userVal || 'No answer'}`);
                    correctParts.push(`${key}: ${correctVal ? 'True' : 'False'}`);
                } else {
                    if (userVal !== correctVal) {
                        correct = false;
                    }
                    parts.push(`${key}: ${userVal || 'No answer'}`);
                    correctParts.push(`${key}: ${correctVal}`);
                }
            });

            userAnswerText = parts.join(', ');
            correctAnswerText = correctParts.join(', ');
        }

        if (correct) {
            earnedPoints += question.points;
        }

        results.push({
            questionNum: question.id,
            question: question.question,
            correct: correct,
            userAnswer: userAnswerText,
            correctAnswer: correctAnswerText,
            explanation: question.explanation,
            points: question.points,
            earned: correct ? question.points : 0
        });
    });

    displayResults(earnedPoints, totalPoints, results);
}

// Display Results
function displayResults(earned, total, results) {
    const percentage = ((earned / total) * 100).toFixed(1);
    const passed = earned >= 49; // Need 49/70 to pass

    // Set pass/fail indicator
    const indicator = document.getElementById('pass-fail-indicator');
    indicator.className = passed ? 'pass-indicator' : 'fail-indicator';
    document.getElementById('result-status').textContent = passed ? 'PASSED' : 'FAILED';

    // Set statistics
    document.getElementById('total-score').textContent = earned;
    document.getElementById('percentage').textContent = `${percentage}%`;

    // Calculate time taken
    const timeTaken = Math.floor((Date.now() - examStartTime) / 1000);
    const minutes = Math.floor(timeTaken / 60);
    const seconds = timeTaken % 60;
    document.getElementById('time-taken').textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

    // Display detailed results
    const resultsContainer = document.getElementById('question-results');
    resultsContainer.innerHTML = '';

    results.forEach(result => {
        const resultDiv = document.createElement('div');
        resultDiv.className = `result-item ${result.correct ? 'correct' : 'incorrect'}`;

        resultDiv.innerHTML = `
            <div class="result-question">
                <strong>Question ${result.questionNum}:</strong> ${result.question}
                <span style="float: right; font-weight: bold;">
                    ${result.earned}/${result.points} points
                </span>
            </div>
            <div class="result-answer user">
                <strong>Your answer:</strong> ${result.userAnswer}
            </div>
            ${!result.correct ? `
                <div class="result-answer correct-answer">
                    <strong>Correct answer:</strong> ${result.correctAnswer}
                </div>
            ` : ''}
            <div class="result-explanation">
                ${result.explanation}
            </div>
        `;

        resultsContainer.appendChild(resultDiv);
    });

    showScreen('results-screen');
}

// Navigation Functions
function returnHome() {
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    currentExam = null;
    currentQuestionIndex = 0;
    userAnswers = {};
    timeRemaining = 75 * 60;
    showScreen('home-screen');
}

function retakeExam() {
    if (!currentExam) {
        returnHome();
        return;
    }

    // Find the exam number
    let examNum = 1;
    for (let i = 1; i <= 5; i++) {
        if (allExams[i] === currentExam) {
            examNum = i;
            break;
        }
    }

    startExam(examNum);
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    showScreen('home-screen');
});
