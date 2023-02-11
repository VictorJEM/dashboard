
let runScripts = () =>{

    let chart_bars = document.getElementById("chart-bars")
    console.log(chart_bars)

    let icons = document.getElementsByTagName("i")
    for(let icon of icons){
        console.log(icon)
    }

    let cards = document.getElementsByClassName("card")
    for(let card of cards){
        console.log(card)
    }

}

runScripts()


let modifyText = () =>{

    let listOfP = document.getElementsByTagName("p")
    let elementP = listOfP[3]
    elementP.innerHTML= 'Dinero actual'

    let listOfH4 = document.getElementsByTagName("h4")
    let elementH4 = listOfH4[0]
    elementH4.innerHTML = '$301k'

}

modifyText()


let updateData = () =>{

    //Parte 1 clase 10-Feb-2023

    let data = [
        {
        title: 'Usuarios actuales',
        value: '3,200'
        },
        {
        title: 'Nuevos clientes',
        value: '4,215'
        },
        {
        title: 'Ventas',
        value: '$121,520'
        }];
    
    let [ users, clients, sales ] = data;

    let { title: title_users , value: value_users } = users;
    let { title: title_clients , value: value_clients } = clients;
    let { title: title_sales , value: value_sales } = sales;

    let message_users = `<p class="text-sm mb-0 text-capitalize">${title_users}</p><h4 class="mb-0">${value_users}</h4>`;
    let message_clients = `<p class="text-sm mb-0 text-capitalize">${title_clients}</p><h4 class="mb-0">${value_clients}</h4>`;
    let message_sales = `<p class="text-sm mb-0 text-capitalize">${title_sales}</p><h4 class="mb-0">${value_sales}</h4>`;

    let listOfElements = document.getElementsByClassName('text-end pt-1') 

    let [ , second, third, fourth ] = listOfElements;

    second.innerHTML = message_users;
    third.innerHTML = message_clients;
    fourth.innerHTML = message_sales;


    //Parte 2 clase 10-Feb-2023

    let cambios = [
        {
          valor_previo: 250,
          valor_actual: 301,
          mensaje_tiempo: 'que la semana anterior'
        },
        {
          valor_previo: 3510,
          valor_actual: 3200,
          mensaje_tiempo: 'que la semana anterior'
        },
        {
          valor_previo: 3920,
          valor_actual: 4215,
          mensaje_tiempo: 'que ayer'
        },
        {
          valor_previo: 110200,
          valor_actual: 121520,
          mensaje_tiempo: 'que ayer'
        }
    ]

    let[obj1, obj2, obj3, obj4] = cambios;

    let{valor_previo: vp1, valor_actual: va1, mensaje_tiempo: mt1} = obj1;
    let{valor_previo: vp2, valor_actual: va2, mensaje_tiempo: mt2} = obj2;
    let{valor_previo: vp3, valor_actual: va3, mensaje_tiempo: mt3} = obj3;
    let{valor_previo: vp4, valor_actual: va4, mensaje_tiempo: mt4} = obj4;

    let clase_cambio1 = '';
    let clase_cambio2 = '';
    let clase_cambio3 = '';
    let clase_cambio4 = '';

    let signo1 = '';
    let signo2 = '';
    let signo3 = '';
    let signo4 = '';

    let porcentaje_de_cambio1 = ((va1 - vp1)*100/vp1).toFixed(2);
    if(porcentaje_de_cambio1 > 0){
        clase_cambio1 = "text-success";
        signo1 = '+';
    }else{
        clase_cambio1 = "text-danger";
    }
    
    let porcentaje_de_cambio2 = ((va2 - vp2)*100/vp2).toFixed(2);  
    if(porcentaje_de_cambio2 > 0){
        clase_cambio2 = "text-success";
        signo2 = '+';
    }else{
        clase_cambio2 = "text-danger";
    }
    
    let porcentaje_de_cambio3 = ((va3 - vp3)*100/vp3).toFixed(2); 
    if(porcentaje_de_cambio3 > 0){
        clase_cambio3 = "text-success";
        signo3 = '+';
    }else{
        clase_cambio3 = "text-danger";
    }
    
    let porcentaje_de_cambio4 = ((va4 - vp4)*100/vp4).toFixed(2);
    if(porcentaje_de_cambio4 > 0){
        clase_cambio4 = "text-success";
        signo4 = '+';
    }else{
        clase_cambio4 = "text-danger";
    } 

    let message_obj1 = `<p class="mb-0"><span class="text-sm ${clase_cambio1} font-weight-bolder"> ${signo1}${porcentaje_de_cambio1}% </span> ${mt1} </p>`;
    let message_obj2 = `<p class="mb-0"><span class="text-sm ${clase_cambio2} font-weight-bolder"> ${signo2}${porcentaje_de_cambio2}% </span> ${mt2} </p>`;
    let message_obj3 = `<p class="mb-0"><span class="text-sm ${clase_cambio3} font-weight-bolder"> ${signo3}${porcentaje_de_cambio3}% </span> ${mt3} </p>`;
    let message_obj4 = `<p class="mb-0"><span class="text-sm ${clase_cambio4} font-weight-bolder"> ${signo4}${porcentaje_de_cambio4}% </span> ${mt4} </p>`;

    let listaDeElementos = document.getElementsByClassName('card-footer p-3');

    let[uno, dos, tres, cuatro] = listaDeElementos;

    uno.innerHTML = message_obj1;
    dos.innerHTML = message_obj2;
    tres.innerHTML = message_obj3;
    cuatro.innerHTML = message_obj4;
    
}

updateData()