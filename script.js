console.log("Javascript carregado")
function validaCPF(cpf){
return false
}
function validacao(){
  console.log("Iniciando validacao")
  //buscando dados digitados na pagina html
  var cpf = document.getElementById('cpf_digitado').value;
  //validando cpf digitado pelo usuario
  var resultadoValidacao = validaCPF(cpf);
  if(resultadoValidacao){
    document.getElementById('success').style.display = 'block';
  }
  else{
    document.getElementById('error').style.display = 'block';
  }
}