const calculateTemp = () => {

    const numberTemp = document.getElementById('temp').value;
    //console.log(numberTemp);

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;
    //console.log(valueTemp);

    const celTofah = (cel) => {
        let Fahrenheit = Math.round((cel * 9/5) + 32);
        return Fahrenheit;
    }

    const fehTocel = (Fahr) => {
        let Celsius = Math.round((Fahr - 32) * 5/9);
        return Celsius;
        }
        
    let result;

    if(valueTemp == 'cel') {
        result = celTofah(numberTemp);
        document.getElementById('resultContainer').innerHTML= `= ${result}°Fahrenheit`;
    }else{
        result = fehTocel(numberTemp);
        document.getElementById('resultContainer').innerHTML= `= ${result}°Celsius`;
    }

}