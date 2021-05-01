//let f = function () {
    let button = document.createElement('button');
    button.innerHTML = 'přidat známku';
    button.onclick = function () {
        let textfield = document.createElement('textarea');
        document.body.appendChild(textfield);// pote co klikneme na tlacitko vytvori novy text field
    }
    //document.body.appendChild(button);
    document.body.innerHTML = 'ahoj';
//};