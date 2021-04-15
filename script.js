//  CHIAMATA CON JQUERY E AJAX
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
                $("#email-list").append(`<li>${res}</li>`);
        },
        error: function(){
            console.log("ERRORE");
        }
    })
}

function init(){
    printMail(10);
}

// CHIAMATA CON VUE E AXIOS
function initVue(){
    new Vue ({
        el: "#app",
        data: {
            emails: [],
        },
        
        mounted(){
            for( let i = 0; i<10; i++){
                
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(response => ( this.emails.push(response['data']['response'])));               
               
            }
        },
    });    
    
}

document.addEventListener('DOMContentLoaded',init);
document.addEventListener('DOMContentLoaded',initVue);
