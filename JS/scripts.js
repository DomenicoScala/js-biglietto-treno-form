const myButton = document.getElementById('special-button');

myButton.addEventListener('click', function(){
    const kmInput = document.getElementById('km');
    const kmInputValue = parseInt(kmInput.value)
    console.log('kmInputValue', kmInputValue, typeof kmInputValue)

    const ageInput = document.getElementById('age');       
    console.log('ageInput', ageInput, typeof ageInput);

    const prezzo = kmInputValue * 0.21;

    if(ageInput.value == 'under'){
        const scontoPrezzo = prezzo - ((prezzo / 100) * 20)
        document.getElementById('result-container').innerHTML = 'Il prezzo del biglietto è €' + scontoPrezzo.toFixed(2);
        console.log('scontoPrezzo' , scontoPrezzo,  typeof scontoPrezzo) 
    }
    else if(ageInput.value == 'over'){
        const scontoPrezzo = prezzo - ((prezzo / 100) * 40);
        document.getElementById('result-container').innerHTML = 'Il prezzo del biglietto è €' + scontoPrezzo.toFixed(2);
        console.log('scontoPrezzo', scontoPrezzo, typeof scontoPrezzo)
    }
    else{
        document.getElementById('result-container').innerHTML = 'Il prezzo del biglietto è €' + prezzo.toFixed(2);
    }
})







 



 

