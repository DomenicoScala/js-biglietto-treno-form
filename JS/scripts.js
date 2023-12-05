const myButton = document.getElementById('special-button');

myButton.addEventListener('click', function(){
    const kmInput = document.getElementById('km');
    const kmInputValue = parseInt(kmInput.value)
    console.log('kmInputValue', kmInputValue, typeof kmInputValue)


    const ageInput = document.getElementById('age');
    const ageInputValue = parseInt(ageInput.value);
    console.log('ageInputValue', ageInputValue, typeof ageInputValue);

    const prezzo = kmInputValue * 0.21;

    if(ageInputValue < 18){
        const scontoPrezzo = prezzo - ((prezzo / 100) * 20)
        document.getElementById('result-container').innerHTML = 'Il prezzo del biglietto è €' + scontoPrezzo.toFixed(2);
        console.log('scontoPrezzo' , scontoPrezzo,  typeof scontoPrezzo) 
    }
    else if(ageInputValue > 65){
        const scontoPrezzo = prezzo - ((prezzo / 100) * 40);
        document.getElementById('result-container').innerHTML = 'Il prezzo del biglietto è €' + scontoPrezzo.toFixed(2);
        console.log('scontoPrezzo', scontoPrezzo, typeof scontoPrezzo)
    }
    else{
        document.getElementById('result-container').innerHTML = 'Il prezzo del biglietto è €' + prezzo.toFixed(2);
    }
})







 



 

