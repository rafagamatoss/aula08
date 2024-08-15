function converter(){
  const medida = parseFloat(document.getElementById('medida').value)
const unidade = document.getElementById('unidade').value
let valorConvertido = 0

if(isNaN(medida)){
  document.getElementById('convertido').innerText = 'Digite um valor válido!'
  return
}

switch(unidade){
  case 'jarda':
    valorConvertido = medida * 1.094
    break
  
  case 'pes': 
    valorConvertido = medida * 3.281
    break

  case 'polegada':
    valorConvertido = medida * 39.37

  case 'milha':
    valorConvertido = medida * 0.000621
    break
}

document.getElementById('convertido').innerText = `${medida} metros é igual a ${valorConvertido.toFixed(4)} ${unidade}(s)`

}