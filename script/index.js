function contar()
{
    var inicio = Number(document.getElementById("iInicio").value)
    var fim = Number(document.getElementById("iFim").value)
    var passo = Number(document.getElementById("iPasso").value)
    var msg = document.getElementById("iRes")
    var contador = 0
   
    msg.innerText = ""
    
    if (inicio.lenght == 0 || fim.lenght == 0 || passo == 0) 
    {
        window.alert("ERRO")
    }
    else
    {
        if(inicio < fim)
        {
            for (contador = inicio; contador <= fim; contador += passo) 
            {   
                msg.innerText += ` ${contador} 👉  `
            }
        }
        if (inicio > fim)
        {
            for (contador = inicio; contador >= fim; contador -= passo) 
            {   
                msg.innerText += ` ${contador} 👉  `
            }
        }

    }
    msg.innerText += "👌 "
}