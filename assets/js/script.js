function calcular(){
    const n1 = parseFloat(document.getElementById('nt1').value)
    const n2 = parseFloat(document.getElementById('nt2').value)
    const n3 = parseFloat(document.getElementById('nt3').value)
    const n4 = parseFloat(document.getElementById('nt4').value)

    const nome = document.getElementById('nome').value
    const resultado = document.getElementById('resultado')

    var r = ((n1+n2+n3+n4) / 4).toFixed(2)

    if(r < 5) {
        resultado.textContent = `O aluno ${nome} está Reprovado com uma média de ${r}`
    } else if (r < 7) {
        resultado.textContent = `O aluno ${nome} está de Recuperação com uma média de ${r}`        
    } else {
        resultado.textContent = `O aluno ${nome} está Aprovado com uma média de ${r}`
    }
}
