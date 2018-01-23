let Record = (function() {
    let closureId = 0;

    return class Record {
        constructor(temperature, humidity, pressure, windSpeed) {
            this.id = closureId++;
            this.temperature = temperature;
            this.humidity = humidity;
            this.pressure = pressure;
            this.windSpeed = windSpeed;
            console.log("Successfully added record!");
        }

        get status() {
            if (this.temperature === 20 
                && (this.pressure < 700 || this.pressure > 900) 
                && this.windSpeed > 25)  {
                return 'Stormy';
            }
            return 'Not stormy';
        }

        toString() {
            let result = `ReadingID: ${this.id} \n`;
            result += `Temperature: ${this.temperature}*C \n`;
            result += `Relative Humidity: ${this.humidity}% \n`;
            result += `Pressure: ${this.pressure}hpa \n`;
            result += `Wind Speed: ${this.windSpeed}m/s \n`;
            result += `Weather: ${this.status}`;

            appendToHTML(result);

            return result;

            function appendToHTML(result) {
                let resultArr = result.split("\n");            
                for (let i in resultArr) {
                    let div = $('<div>').text(resultArr[i])
                    $('#container').append(div);
                }
                $('#container').append($('<hr>'));    
            }
        }
    };
})();

let record1 = new Record(20, 66, 950, 50);
record1.toString();

let record2 = new Record(32, 66, 760, 12);
record2.toString();