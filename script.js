function convert(type) {
    if (type === 'C') {
        let celsius = parseFloat(document.getElementById('inputCelsius').value);
        let fahrenheit = (celsius * 9 / 5) + 32;
        document.getElementById('outputFahrenheit').value = fahrenheit.toFixed(2);
    } else if (type === 'F') {
        let fahrenheit = parseFloat(document.getElementById('inputFahrenheit').value);
        let celsius = (fahrenheit - 32) * 5 / 9;
        document.getElementById('outputCelsius').value = celsius.toFixed(2);
    }
}
