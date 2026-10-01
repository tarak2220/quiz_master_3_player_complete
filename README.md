# Quiz Master — 3 Player Space Quiz

Complete software-only prototype using the supplied 50-question Space & Universe quiz.

## Included

- 50 questions
- 4 options per question
- Correct answers
- Question background images
- 3 simultaneous players
- Independent answers and scores
- 20-second timer
- Answer locking
- Automatic next question
- Final leaderboard
- Per-player answer review
- Raspberry Pi-ready separation between quiz logic and input layer

## Run

Open `index.html` directly in a browser.

Or use a local server:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Hardware stage later

The remaining hardware work can connect three physical answer-button panels to the Raspberry Pi. The current software already maintains separate state for Player 1, Player 2 and Player 3.

Expected future input:

- Player 1: A/B/C/D
- Player 2: A/B/C/D
- Player 3: A/B/C/D

The Raspberry Pi layer can call the same answer-selection logic without changing the quiz database.
