
function randomFact() {
    const facts = [
        "A day on Venus is longer than its year!",
        "Light travels approximately 300,000 km per second.",
        "Saturn could float in water if a large enough ocean existed.",
        "The Sun contains approximately 99.86% of the Solar System's mass.",
        "Neutron stars are incredibly dense."
    ];

    document.getElementById("fact").innerText =
        facts[Math.floor(Math.random() * facts.length)];
}

function calculateGravity() {
    const mass = Number(document.getElementById("mass").value);

    if (mass <= 0 || !Number.isFinite(mass)) {
        document.getElementById("gravityResult").innerText =
            "Enter a valid positive mass.";
        return;
    }

    const gravity = mass * 9.81;

    document.getElementById("gravityResult").innerText =
        "Weight = " + gravity.toFixed(2) + " Newtons";
}

function spaceFact() {
    const planets = [
        "Mars has the largest volcano in the Solar System.",
        "Jupiter is the largest planet.",
        "Uranus rotates on its side.",
        "Mercury has extreme temperature changes.",
        "Earth is the only planet currently known to support life."
    ];

    document.getElementById("spaceResult").innerText =
        planets[Math.floor(Math.random() * planets.length)];
}

function calculateSpeed() {
    const distance = Number(document.getElementById("distance").value);
    const time = Number(document.getElementById("time").value);

    if (distance < 0 || time <= 0 ||
        !Number.isFinite(distance) || !Number.isFinite(time)) {
        document.getElementById("speedResult").innerText =
            "Enter valid distance and time.";
        return;
    }

    const speed = distance / time;

    document.getElementById("speedResult").innerText =
        "Speed = " + speed.toFixed(2) + " m/s";
}

function quiz() {
    const answer = prompt(
        "Which planet is known as the Red Planet?\nA. Venus\nB. Mars\nC. Jupiter"
    );

    const result = document.getElementById("quizResult");

    if (answer && answer.trim().toLowerCase() === "b") {
        result.innerText = "🎉 Correct! Mars is the Red Planet!";
    } else {
        result.innerText = "Not quite! The correct answer is Mars.";
    }
}
