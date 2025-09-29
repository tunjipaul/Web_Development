function personalAssistant(time, weather, dayType) {
    if (time >= 5 && time <= 11) {
        if (dayType === "workday") {
            console.log(`Good Morning! it's ${dayType}, Welcome to work`);
        } else if (dayType === "weekend") {
            console.log(
                `Good Morning, it's ${dayType} and it's the weekend, you know what to do!!!`
            );
        } else if (dayType === "holiday") {
            console.log(
                `Good Morning, it's ${dayType} and na public holiday be this!!`
            );
        } else {
            ("Invalid Input");
        }
    } else if (time >= 12 && time <= 16) {
        if (dayType === "workday") {
            console.log(`Good Afternoon! it's ${dayType}, Welcome to work`);
        } else if (dayType === "weekend") {
            console.log(
                `Good Afternoon, it's ${dayType} and it's the weekend, you know what to do!!!`
            );
        } else if (dayType === "holiday") {
            console.log(
                `Good Afternoon ,it's ${dayType} and na public holiday be this!!`
            );
        } else {
            console.log("Invalid Input");
        }
    } else if (time >= 17 && time <= 23) {
        if (dayType === "workday") {
            console.log(`Good Evening! it's ${dayType}, Welcome to work`);
        } else if (dayType === "weekend") {
            console.log(
                `Good Evening, it's ${dayType} and it's the weekend, you know what to do!!!`
            );
        } else if (dayType === "holiday") {
            console.log(
                `Good Evening, it's ${dayType} and na public holiday be this!!`
            );
        } else {
            console.log("Invalid Input");
        }
    } else {
        console.log("Invalid Input");
    }

    advice =
        weather === "sunny"
            ? "it is sunny today, carry umbrella and cover your head"
            : weather === "rainy"
                ? "it is raining, carry umbrella or stay at home!!!"
                : weather === "cloudy"
                    ? "the cloud is full, prepare for rain!!!"
                    : "The weather is good!";

    console.log(advice);
}
