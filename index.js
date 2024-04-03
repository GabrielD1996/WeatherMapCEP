function onclickSubmitHandler() {
    getAddressByCep();
    getForecast();
}
async function getAddressByCep() {
    const cep = document.getElementById('cep').value;
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json()
        console.log(data);
        document.getElementById('rua').innerHTML = data.logradouro;
        document.getElementById('bairro').innerHTML = data.bairro;
        document.getElementById('estado').innerHTML = data.localidade + '/' + data.uf;
    } catch (error) {
        alert("Favor preencher todos os campos! " )
    }

}
async function getForecast() {
    const lat = document.getElementById('lat').value;
    const long = document.getElementById('long').value;
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m&forecast_days=1`);
        const data = await response.json()
        console.log(data);
        document.getElementById('returnForecast').innerHTML = 'Previsão de tempo de acordo com a região: ' + data.current.temperature_2m + ' ° C';

    } catch (error) {
        alert("Favor preencher todos os campos! ")
    }

}