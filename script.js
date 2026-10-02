const questions = [
  {
    "q": "Which planet is known as the Red Planet?",
    "o": ["Venus", "Jupiter", "Mars", "Mercury"],
    "a": 2,
    "bg": "images/q1.jpg"
  },
  {
    "q": "Which is the largest planet in our Solar System?",
    "o": ["Earth", "Saturn", "Jupiter", "Neptune"],
    "a": 2,
    "bg": "images/q2.jpg"
  },
  {
    "q": "Which planet is closest to the Sun?",
    "o": ["Venus", "Mercury", "Earth", "Mars"],
    "a": 1,
    "bg": "images/q3.jpg"
  },
  {
    "q": "The Sun is mainly made up of:",
    "o": ["Rock", "Iron", "Hydrogen and Helium", "Water"],
    "a": 2,
    "bg": "images/q4.jpg"
  },
  {
    "q": "What is the name of our galaxy?",
    "o": ["Andromeda", "Whirlpool", "Milky Way", "Orion"],
    "a": 2,
    "bg": "images/q5.jpg"
  },
  {
    "q": "Why do astronauts float inside the ISS?",
    "o": [
      "There is no gravity",
      "Because of continuous free fall",
      "Because of air pressure",
      "Due to magnetic force"
    ],
    "a": 1,
    "bg": "images/q6.jpg"
  },
  {
    "q": "What causes day and night on Earth?",
    "o": [
      "Earth's revolution",
      "Earth's rotation",
      "Moon's motion",
      "Sun's movement"
    ],
    "a": 1,
    "bg": "images/q7.jpg"
  },
  {
    "q": "Earth takes how many days to revolve around the Sun?",
    "o": ["30", "180", "365¼", "400"],
    "a": 2,
    "bg": "images/q8.jpg"
  },
  {
    "q": "Gravity on the Moon is approximately:",
    "o": [
      "Equal to Earth",
      "Half of Earth",
      "One-sixth of Earth",
      "Double Earth"
    ],
    "a": 2,
    "bg": "images/q9.jpg"
  },
  {
    "q": "Which scientist discovered the law of universal gravitation?",
    "o": ["Einstein", "Newton", "Galileo", "Hubble"],
    "a": 1,
    "bg": "images/q10.jpg"
  },
  {
    "q": "Which fuel is commonly used in modern rockets?",
    "o": [
      "Diesel",
      "Petrol",
      "Liquid Hydrogen and Liquid Oxygen",
      "Coal"
    ],
    "a": 2,
    "bg": "images/q11.jpg"
  },
  {
    "q": "ISRO stands for:",
    "o": [
      "Indian Scientific Rocket Organization",
      "Indian Space Research Organisation",
      "International Space Rocket Office",
      "Indian Satellite Research Office"
    ],
    "a": 1,
    "bg": "images/q12.jpg"
  },
  {
    "q": "India's first satellite was:",
    "o": ["INSAT", "Aryabhata", "Rohini", "Chandrayaan"],
    "a": 1,
    "bg": "images/q13.jpg"
  },
  {
    "q": "Which launch vehicle placed Chandrayaan-3 into space?",
    "o": ["PSLV", "GSLV Mk III (LVM3)", "ASLV", "SLV"],
    "a": 1,
    "bg": "images/q14.jpg"
  },
  {
    "q": "Srihari Kota is famous because it is India's:",
    "o": [
      "Space Museum",
      "Rocket launch centre",
      "Planetarium",
      "Observatory"
    ],
    "a": 1,
    "bg": "images/q15.jpg"
  },
  {
    "q": "Which planet has the largest number of known moons?",
    "o": ["Earth", "Jupiter", "Saturn", "Mars"],
    "a": 2,
    "bg": "images/q16.jpg"
  },
  {
    "q": "Why does the Moon shine?",
    "o": [
      "It produces its own light",
      "It reflects sunlight",
      "It glows because of heat",
      "It reflects Earth's light"
    ],
    "a": 1,
    "bg": "images/q17.jpg"
  },
  {
    "q": "How long does the Moon take to orbit Earth?",
    "o": ["7 days", "14 days", "About 27 days", "365 days"],
    "a": 2,
    "bg": "images/q18.jpg"
  },
  {
    "q": "Which planet is famous for its rings?",
    "o": ["Venus", "Saturn", "Mars", "Mercury"],
    "a": 1,
    "bg": "images/q19.jpg"
  },
  {
    "q": "Which planet is known as Earth's twin?",
    "o": ["Mars", "Venus", "Jupiter", "Mercury"],
    "a": 1,
    "bg": "images/q20.jpg"
  },
  {
    "q": "Who was the first human in space?",
    "o": [
      "Neil Armstrong",
      "Yuri Gagarin",
      "Kalpana Chawla",
      "Rakesh Sharma"
    ],
    "a": 1,
    "bg": "images/q21.jpg"
  },
  {
    "q": "First person to walk on the Moon?",
    "o": [
      "Buzz Aldrin",
      "Yuri Gagarin",
      "Neil Armstrong",
      "Michael Collins"
    ],
    "a": 2,
    "bg": "images/q22.jpg"
  },
  {
    "q": "First Indian in space?",
    "o": [
      "Kalpana Chawla",
      "Rakesh Sharma",
      "Sunita Williams",
      "Vikram Sarabhai"
    ],
    "a": 1,
    "bg": "images/q23.jpg"
  },
  {
    "q": "India's Moon missions are called:",
    "o": ["Mangalyaan", "Chandrayaan", "AdityaYaan", "Gaganyaan"],
    "a": 1,
    "bg": "images/q24.jpg"
  },
  {
    "q": "Gaganyaan is India's mission to:",
    "o": ["Mars", "Moon", "Send humans into space", "Venus"],
    "a": 2,
    "bg": "images/q25.jpg"
  },
  {
    "q": "A telescope helps us observe:",
    "o": [
      "Microscopic organisms",
      "Distant celestial objects",
      "Ocean depth",
      "Underground rocks"
    ],
    "a": 1,
    "bg": "images/q26.jpg"
  },
  {
    "q": "Which telescope is located in space?",
    "o": [
      "Galileo Telescope",
      "Hubble Space Telescope",
      "Newton Telescope",
      "Kepler Ground Telescope"
    ],
    "a": 1,
    "bg": "images/q27.jpg"
  },
  {
    "q": "Stars appear to twinkle because of:",
    "o": ["Clouds", "Earth's atmosphere", "Moonlight", "Gravity"],
    "a": 1,
    "bg": "images/q28.jpg"
  },
  {
    "q": "Which star is closest to Earth?",
    "o": ["Sirius", "Polaris", "Sun", "Alpha Centauri"],
    "a": 2,
    "bg": "images/q29.jpg"
  },
  {
    "q": "Which instrument measures atmospheric pressure?",
    "o": ["Thermometer", "Barometer", "Telescope", "Compass"],
    "a": 1,
    "bg": "images/q30.jpg"
  },
  {
    "q": "Weather forecasting mainly uses:",
    "o": ["Rockets", "Satellites", "Telescopes", "Balloons"],
    "a": 1,
    "bg": "images/q31.jpg"
  },
  {
    "q": "GPS navigation works using:",
    "o": ["Airplanes", "Satellites", "Rockets", "Lasers"],
    "a": 1,
    "bg": "images/q32.jpg"
  },
  {
    "q": "Communication satellites help in:",
    "o": [
      "Farming only",
      "Television and communication",
      "Mining",
      "Road construction"
    ],
    "a": 1,
    "bg": "images/q33.jpg"
  },
  {
    "q": "Earth's natural satellite is:",
    "o": ["Mars", "Moon", "Sun", "Venus"],
    "a": 1,
    "bg": "images/q34.jpg"
  },
  {
    "q": "Artificial satellites are placed into orbit using:",
    "o": ["Aircraft", "Rockets", "Ships", "Trains"],
    "a": 1,
    "bg": "images/q35.jpg"
  },
  {
    "q": "Which layer protects Earth from harmful UV rays?",
    "o": ["Troposphere", "Ozone layer", "Exosphere", "Mesosphere"],
    "a": 1,
    "bg": "images/q36.jpg"
  },
  {
    "q": "Meteors are commonly called:",
    "o": ["Space rocks", "Shooting stars", "Satellites", "Comets"],
    "a": 1,
    "bg": "images/q37.jpg"
  },
  {
    "q": "A comet mainly consists of:",
    "o": ["Iron", "Ice, dust, and rock", "Gas only", "Water only"],
    "a": 1,
    "bg": "images/q38.jpg"
  },
  {
    "q": "Asteroids are mostly found between:",
    "o": [
      "Earth and Mars",
      "Mars and Jupiter",
      "Jupiter and Saturn",
      "Venus and Earth"
    ],
    "a": 1,
    "bg": "images/q39.jpg"
  },
  {
    "q": "The speed of light is approximately:",
    "o": [
      "30,000 km/s",
      "300,000 km/s",
      "3,000 km/s",
      "3 million km/s"
    ],
    "a": 1,
    "bg": "images/q40.jpg"
  },
  {
    "q": "Father of the Indian Space Programme?",
    "o": [
      "A. P. J. Abdul Kalam",
      "Vikram Sarabhai",
      "Satish Dhawan",
      "Homi Bhabha"
    ],
    "a": 1,
    "bg": "images/q41.jpg"
  },
  {
    "q": "Chandrayaan-3 successfully landed near the Moon's:",
    "o": ["Equator", "North Pole", "South Pole", "Far side"],
    "a": 2,
    "bg": "images/q42.jpg"
  },
  {
    "q": "Aditya-L1 mission studies the:",
    "o": ["Moon", "Sun", "Mars", "Jupiter"],
    "a": 1,
    "bg": "images/q43.jpg"
  },
  {
    "q": "Mangalyaan is also known as:",
    "o": [
      "Mars Orbiter Mission",
      "Moon Explorer",
      "Sun Observer",
      "Venus Explorer"
    ],
    "a": 0,
    "bg": "images/q44.jpg"
  },
  {
    "q": "ISRO headquarters is located in:",
    "o": ["Mumbai", "Bengaluru", "Chennai", "Hyderabad"],
    "a": 1,
    "bg": "images/q45.jpg"
  },
  {
    "q": "Which planet is called the Blue Planet?",
    "o": ["Neptune", "Earth", "Uranus", "Venus"],
    "a": 1,
    "bg": "images/q46.jpg"
  },
  {
    "q": "Which direction does the Sun appear to rise?",
    "o": ["North", "South", "East", "West"],
    "a": 2,
    "bg": "images/q47.jpg"
  },
  {
    "q": "What protects astronauts during launch?",
    "o": [
      "Normal clothes",
      "Space suit and spacecraft",
      "Helmet only",
      "Gloves only"
    ],
    "a": 1,
    "bg": "images/q48.jpg"
  },
  {
    "q": "Which is the hottest planet in our Solar System?",
    "o": ["Mercury", "Venus", "Mars", "Jupiter"],
    "a": 1,
    "bg": "images/q49.jpg"
  },
  {
    "q": "The main purpose of space exploration is to:",
    "o": [
      "Build cities in space",
      "Understand the universe and improve life on Earth",
      "Mine gold only",
      "Increase pollution"
    ],
    "a": 1,
    "bg": "images/q50.jpg"
  }
];


// ==========================================
// QUIZ SETTINGS
// ==========================================

const TIME_LIMIT = 10;     // 10 seconds per question
const QUIZ_LENGTH = 10;    // Random 10 questions
const PLAYER_COUNT = 3;    // 3 players


// ==========================================
// QUIZ VARIABLES
// ==========================================

let current = 0;
let timer = null;
let timeLeft = TIME_LIMIT;

// This contains the random 10 questions
let quizQuestions = [];

// Players
let players = [];

const app = document.getElementById("app");


// ==========================================
// CREATE PLAYERS
// ==========================================

function createPlayers() {

    return Array.from({ length: PLAYER_COUNT }, (_, i) => ({

        id: i + 1,

        name: `Player ${i + 1}`,

        // Answers for the selected 10 questions
        answers: Array(QUIZ_LENGTH).fill(null),

        // Whether answer is locked
        locked: Array(QUIZ_LENGTH).fill(false),

        // Player score
        score: 0

    }));
}


// ==========================================
// RANDOMIZE QUESTIONS
// ==========================================

function shuffleArray(array) {

    const shuffled = [...array];

    // Fisher-Yates shuffle
    for (let i = shuffled.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[j]] =
            [shuffled[j], shuffled[i]];
    }

    return shuffled;
}


// ==========================================
// START QUIZ
// ==========================================

function startQuiz() {

    // Stop previous timer
    clearInterval(timer);

    // Start from first question
    current = 0;

    // Randomly select 10 unique questions from 50
    quizQuestions =
        shuffleArray(questions).slice(0, QUIZ_LENGTH);

    // Create/reset all 3 players
    players = createPlayers();

    // Display first question
    renderQuestion();
}


// ==========================================
// WELCOME SCREEN
// ==========================================

function renderWelcome() {

    app.innerHTML = `

        <main class="screen welcome-screen">

            <section class="card welcome-card">

                <div class="logo">🚀</div>

                <div class="eyebrow">
                    3-PLAYER SPACE QUIZ
                </div>

                <h1>
                    Quiz Master
                </h1>

                <p class="subtitle">
                    Random 10 from 50 Space & Astronomy Questions
                </p>


                <div class="feature-grid">

                    <div>
                        <strong>10</strong>
                        <span>Random Questions</span>
                    </div>

                    <div>
                        <strong>3</strong>
                        <span>Players</span>
                    </div>

                    <div>
                        <strong>10s</strong>
                        <span>Per Question</span>
                    </div>

                </div>


                <button
                    class="btn primary"
                    onclick="startQuiz()">

                    Start Quiz

                </button>


                <p class="small">

                    Software mode —
                    Raspberry Pi hardware can be connected later.

                </p>

            </section>

        </main>

    `;
}


// ==========================================
// RENDER QUESTION
// ==========================================

function renderQuestion() {

    // Stop previous timer
    clearInterval(timer);

    // Reset timer
    timeLeft = TIME_LIMIT;

    // Get current random question
    const q = quizQuestions[current];


    app.innerHTML = `

        <main
            class="screen quiz-screen"
            style="background-image:url('${q.bg}')">

            <div class="overlay"></div>


            <header class="topbar">


                <div class="brand">

                    🚀 Quiz
                    <span>Master</span>

                </div>


                <div class="progress-info">

                    <strong>
                        Question ${current + 1} / ${QUIZ_LENGTH}
                    </strong>


                    <div class="progress">

                        <i
                            style="
                                width:${((current + 1) / QUIZ_LENGTH) * 100}%
                            ">
                        </i>

                    </div>

                </div>


                <div
                    class="timer"
                    id="timer">

                    ${timeLeft}s

                </div>

            </header>


            <section class="question-card">


                <div class="question-tag">

                    SPACE QUIZ

                </div>


                <h1>

                    ${q.q}

                </h1>


                <div class="players-grid">

                    ${players.map(renderPlayer).join("")}

                </div>


            </section>

        </main>

    `;


    // Start 10 second timer
    startTimer();
}


// ==========================================
// RENDER PLAYER
// ==========================================

function renderPlayer(player) {

    const answer =
        player.answers[current];

    const locked =
        player.locked[current];


    return `

        <section
            class="player-panel ${locked ? "locked" : ""}">


            <div class="player-head">


                <span class="player-badge">

                    P${player.id}

                </span>


                <div>

                    <h2>

                        ${player.name}

                    </h2>


                    <span class="status">

                        ${
                            locked
                                ? "✓ Answer locked"
                                : "Waiting for answer"
                        }

                    </span>

                </div>


                <strong class="live-score">

                    ${player.score}

                </strong>


            </div>


            <div class="options">


                ${quizQuestions[current].o.map((option, i) => `

                    <button

                        class="
                            option
                            ${answer === i ? "selected" : ""}
                        "

                        onclick="
                            selectAnswer(
                                ${player.id},
                                ${i}
                            )
                        "

                        ${locked ? "disabled" : ""}>


                        <span class="letter">

                            ${String.fromCharCode(65 + i)}

                        </span>


                        ${option}


                    </button>

                `).join("")}


            </div>


        </section>

    `;
}


// ==========================================
// PLAYER SELECTS ANSWER
// ==========================================

function selectAnswer(playerId, answerIndex) {

    const player =
        players[playerId - 1];


    // Don't allow another answer
    if (player.locked[current]) {

        return;

    }


    // Save answer
    player.answers[current] =
        answerIndex;


    // Lock answer
    player.locked[current] =
        true;


    // Check correct answer
    if (
        answerIndex ===
        quizQuestions[current].a
    ) {

        player.score++;

    }


    // Update player's UI
    updatePlayerPanel(playerId);


    // If all 3 players answered,
    // move to next question
    if (
        players.every(
            p => p.locked[current]
        )
    ) {

        clearInterval(timer);

        setTimeout(
            nextQuestion,
            700
        );

    }

}


// ==========================================
// UPDATE PLAYER PANEL
// ==========================================

function updatePlayerPanel(playerId) {

    const player =
        players[playerId - 1];


    const panel =
        document.querySelectorAll(
            ".player-panel"
        )[playerId - 1];


    if (!panel) {

        return;

    }


    // Lock panel
    panel.classList.add("locked");


    // Update score
    panel.querySelector(
        ".live-score"
    ).textContent =
        player.score;


    // Update status
    panel.querySelector(
        ".status"
    ).textContent =
        "✓ Answer locked";


    // Disable all options
    panel.querySelectorAll(
        ".option"
    ).forEach((button, i) => {

        button.disabled = true;


        // Highlight selected answer
        if (
            i === player.answers[current]
        ) {

            button.classList.add(
                "selected"
            );

        }

    });

}


// ==========================================
// START 10 SECOND TIMER
// ==========================================

function startTimer() {

    updateTimer();


    timer = setInterval(() => {

        timeLeft--;

        updateTimer();


        // Time finished
        if (timeLeft <= 0) {

            clearInterval(timer);


            // Lock unanswered players
            players.forEach(player => {

                if (
                    !player.locked[current]
                ) {

                    player.locked[current] =
                        true;

                    player.answers[current] =
                        null;

                }

            });


            // Move to next question
            setTimeout(
                nextQuestion,
                700
            );

        }

    }, 1000);

}


// ==========================================
// UPDATE TIMER DISPLAY
// ==========================================

function updateTimer() {

    const timerElement =
        document.getElementById("timer");


    if (timerElement) {

        timerElement.textContent =
            `${timeLeft}s`;


        // Warning when 5 seconds or less
        timerElement.classList.toggle(
            "warning",
            timeLeft <= 5
        );

    }

}


// ==========================================
// NEXT QUESTION
// ==========================================

function nextQuestion() {

    clearInterval(timer);


    // More questions remaining
    if (
        current <
        QUIZ_LENGTH - 1
    ) {

        current++;

        renderQuestion();

    }

    // Quiz finished
    else {

        renderResult();

    }

}


// ==========================================
// FINAL RESULT
// ==========================================

function renderResult() {

    clearInterval(timer);


    // Sort players by score
    const ranked =
        [...players].sort(
            (a, b) => b.score - a.score
        );


    app.innerHTML = `

        <main class="screen result-screen">


            <section class="result-card">


                <div class="trophy">

                    🏆

                </div>


                <div class="eyebrow">

                    QUIZ COMPLETE

                </div>


                <h1>

                    Final Results

                </h1>


                <p class="subtitle">

                    All 10 selected questions completed

                </p>


                <div class="leaderboard">


                    ${ranked.map((player, index) => `

                        <div class="leader-row">


                            <div class="rank">

                                ${index + 1}

                            </div>


                            <div class="rank-name">


                                <strong>

                                    ${player.name}

                                </strong>


                                <span>

                                    ${player.score}
                                    correct answers

                                </span>


                            </div>


                            <div class="rank-score">


                                ${player.score}

                                <small>
                                    /${QUIZ_LENGTH}
                                </small>


                            </div>


                        </div>

                    `).join("")}


                </div>


                <div class="result-actions">


                    <button
                        class="btn primary"
                        onclick="showReview()">

                        View Answers

                    </button>


                    <button
                        class="btn secondary"
                        onclick="startQuiz()">

                        Play Again

                    </button>


                </div>


                <div id="review"></div>


            </section>


        </main>

    `;

}


// ==========================================
// ANSWER REVIEW
// ==========================================

function showReview() {

    const review =
        document.getElementById(
            "review"
        );


    review.className =
        "review";


    review.innerHTML = `

        <h2>

            Answer Review

        </h2>


        <div class="review-tabs">


            ${players.map(player => `

                <button
                    onclick="
                        showPlayerReview(
                            ${player.id}
                        )
                    ">

                    ${player.name}

                </button>

            `).join("")}


        </div>


        <div id="player-review"></div>

    `;


    // Show Player 1 first
    showPlayerReview(1);

}


// ==========================================
// PLAYER ANSWER REVIEW
// ==========================================

function showPlayerReview(playerId) {

    const player =
        players[playerId - 1];


    const box =
        document.getElementById(
            "player-review"
        );


    box.innerHTML =
        quizQuestions.map(
            (question, index) => {

                const answer =
                    player.answers[index];


                const correct =
                    answer === question.a;


                const userAnswer =
                    answer === null
                        ? "No answer"
                        : question.o[answer];


                return `

                    <div class="review-row">


                        <div>


                            <strong>

                                ${index + 1}.
                                ${question.q}

                            </strong>


                            <span
                                class="
                                    ${correct
                                        ? "ok"
                                        : "bad"}
                                ">

                                ${
                                    correct
                                        ? "✓ Correct"
                                        : "✕ Wrong"
                                }

                            </span>


                        </div>


                        <p>

                            Your answer:
                            ${userAnswer}

                            • Correct:
                            ${question.o[question.a]}

                        </p>


                    </div>

                `;

            }
        ).join("");

}


// ==========================================
// START APPLICATION
// ==========================================

renderWelcome();