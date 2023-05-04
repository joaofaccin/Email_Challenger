function logar(){

        var login = document.getElementById('login').value;
        var pass = document.getElementById('senha').value;

        if(login == "admin" && pass == "admin"){
            alert('Sucesso')
        }
        else{
            alert('Acesso Negado')
        }
}