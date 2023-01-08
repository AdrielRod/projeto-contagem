function contar()
{
    var inicio = Number(document.getElementById("iInicio").value)
    var fim = Number(document.getElementById("iFim").value)
    var passo = Number(document.getElementById("iPasso").value)
    var msg = document.getElementById("iRes")
    var contador = 0
   
    if (inicio.lenght != 0)
    {
        if(fim.lenght != 0)
        {
            if(passo.lenght != 0)
            {
                for (contador = inicio; contador <= fim; contador++) 
                {   
                    msg.innerText += ` ${contador} + `
                }
            }
            else
            {
                alert("Impossivel Continuar")
            }
        }
        else
        {
            alert("Impossivel Continuar")
        }
    }
    else
    {
        alert("Impossivel Contar")
    }
        if (inicio.lenght != 0)
    {
        if(fim.lenght != 0)
        {
            if(passo.lenght != 0)
            {
                for (contador = inicio; contador <= fim; contador++) 
                {   
                    msg.innerText += ` ${contador} + `
                }
            }
            else
            {
                alert("Impossivel Continuar")
            }
        }
        else
        {
            alert("Impossivel Continuar")
        }
    }
    else
    {
        alert("Impossivel Contar")
    }

}