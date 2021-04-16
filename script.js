//  CHIAMATA CON JQUERY E AJAX
function mailGenerator(val){
    for(let i=0;i<val;i++){
        $.ajax({
            url: 'https://flynn.boolean.careers/exercises/api/random/mail',
            method: 'GET',
            success: function(data){
                    const res = data['response'];
                    printMail(res);
            },
            error: function(){
                console.log("ERRORE");
            }
        })
    }   
}

function printMail(elem){
    $("#email-list").append(`<li>${elem}</li>`);
}

function init(){
    mailGenerator(10);
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
                .then(response => {
                    const email = response['data']['response'];
                    this.emails.push(email);
                });               
               
            }
        },
    });    
    
}

document.addEventListener('DOMContentLoaded',init);
document.addEventListener('DOMContentLoaded',initVue);
