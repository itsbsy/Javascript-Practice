function simpleTag(strings, ...values) {
    console.log(strings);  // Outputs the text parts of the template
    console.log(values);   // Outputs the inserted values between the texts
    let result = '';
    for (let i = 0; i < strings.length; i++) {
        result += strings[i];
        if (i < values.length) {
            result += values[i];
        }
    }
    return result;
}


const name = "Alice";
const timeOfDay = "evening";
const message = simpleTag`Good ${timeOfDay}, ${name}!`;
console.log(message);  // "Good evening, Alice!"
