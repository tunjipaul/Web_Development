function weatherAdvice() {
    let temperature = Number(prompt("What is your temperature: "));
    let isRaining = false;
    if (temperature <= 50) {
        isRaining = prompt("Is it raining?(true/false ").toLowerCase() === "true";
    }

    if (temperature < 32 && isRaining) {
        console.log("Freezing Rain! Stay Inside!");
    } else if (temperature < 32 && !isRaining) {
        console.log("Very cold, wear a heavy coat.");
    } else if (temperature >= 32 && temperature <= 60 && !isRaining) {
        console.log("Chilly, bring a jacket.");
    } else if (temperature >= 60 && temperature <= 80 && !isRaining) {
        console.log("Nice Weather!");
    } else {
        console.log("It's hot, stay hydrated!");
    }

    console.log(
        "Advice: ",
        isRaining ? "Bring an Umbrella" : "No umbrella needed"
    );
}