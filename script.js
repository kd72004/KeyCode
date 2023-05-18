console.log("YOU can DO IT BROOOOO");
// First Dirty Way :::::::

// let key='s';
// let keyCode=83;
// let code='KeyS';

// function onkeydown(e){
//     key=e.key;
//     keyCode=e.keyCode;
//     code=e.code;
//     setter(key,keyCode,code);
// }

// function setter(key,keyCode,code){
//     // if(key === ' ' ? 'space'){
//     //     key='Space'
//     // }
    
//     const keySelect=document.querySelectorAll('.key');
//     keySelect[0].textContent= key === ' '? 'Space' : key;
//     // keySelect[0].textContent=key;
//     // keySelect[0].appendChild(keySelect[0].querySelector('small'));
//     keySelect[1].textContent=keyCode;
//     keySelect[2].textContent=code;
// }



// Second Way :::

function onkeydown(e){
    const insert=document.getElementById('insert');
    insert.innerHTML=' ';
    const keyCodes = {
        'e.key':e.key === ' '? 'Space' : e.key,
        'e.keyCode':e.keyCode,
        'e.code':e.code,
    };
    addElement(keyCodes);
}

function addElement(keyCodes){
    console.log("Function call");
    for (let key in keyCodes) {
        if (keyCodes.hasOwnProperty(key)) {
            // making one div class key 
            const insert=document.getElementById('insert');
            //making div tag with class and text content ::
            const div=document.createElement('div');
            div.setAttribute('class','key');  
            console.log(keyCodes[key]);
            div.textContent=keyCodes[key];

            //making small tag 
            const small=document.createElement('small');
            small.textContent=key;

            //add small tag inside the div tag ::
            div.appendChild(small);

            //add div tag inside the main insert div tag
            insert.appendChild(div);
        }
    }
}



document.addEventListener('keydown',onkeydown);