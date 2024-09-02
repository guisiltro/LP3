function Média(){
    const rodou = parseFloat(document.getElementById(1).value)
    const passou = parseFloat(document.getElementById(2).value)

    let resultado = (passou + rodou) / 2

    console.log(Math.round(resultado))
    console.log(Math.floor(resultado))
    console.log(Math.ceil(resultado))


alert(`sua media foi boa ruim ou mediania  ${resultado}`)



}