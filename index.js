//importando módulos para a realização do trabalho
const fetch = require('node-fetch');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

//Utilizando o módulo csv-writer para escrever no diretório usuários.csv e os títulos das colunas estarão disponíveis no header
const csvWriter = createCsvWriter({
    path: 'usuarios.csv',
    header: [
        {id: 'picture', title: 'PICTURE'},
        {id: 'name', title: 'NAME'},
        {id: 'gender', title: 'GENDER'},
        {id: 'email', title: 'EMAIL'},
        {id: 'country', title: 'COUNTRY'},
        {id: 'state', title: 'STATE'},
        {id: 'city', title: 'CITY'}
    ]
});

//array criado com o objetivo de atender as necessidades do módulo

const elements = [];

// Número de usuários coletados a partir do método GET da API randomuser
let number_users_generated = 5000;

//Requisição assíncrona realizada através de módulo node-fetch

async function generator(){

    const response =  await fetch(`https://randomuser.me/api/?results=${number_users_generated}`);

    if (response.ok) {
        
        const data = await response.json();

        //Loop que guarda no array elements objetos contendo as informações disponibilizadas dos usuários pela API
        
        for(i=0; i<data.results.length; i++){

            let apiObj = {
                picture: data.results[i].picture.thumbnail,
                name: `${data.results[i].name.title} ${data.results[i].name.first} ${data.results[i].name.last}`,
                gender: data.results[i].gender,
                email: data.results[i].email,
                country: data.results[i].location.country,
                state: data.results[i].location.state,
                city: data.results[i].location.city

            }

            elements.push(apiObj);

            
        }

        //escrevendo o conteúdo do array elements no csv

        await csvWriter.writeRecords(elements)
            .then(() => {
                console.log('...Done');
            });
    }  
}

generator();