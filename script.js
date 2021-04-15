function printMail(val){
    for(let i=0;i<val;i++){
        mailGenerator();
    }
}

function mailGenerator(){
    $.ajax({
        url: 'https://flynn.boolean.careers/exercises/api/random/mail',
        method: 'GET',
        success: function(data){           
                const res = data['response'];
                $("#emails").append(`<div>${res}</div>`);           
        },
        error: function(){
            console.log("ERRORE");
        }
    })
}

function init(){
    printMail(10);
}

document.addEventListener('DOMContentLoaded',init);