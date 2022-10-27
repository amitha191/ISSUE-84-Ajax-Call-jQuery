// $.get('https://jsonplaceholder.typicode.com/todos').done(function(data){
//     tableData(data);
//     console.log(data);
// })

// var tbody = document.getElementsByClassName('table-body');

// function tableData(json){
//     for(const data of json){
//         tbody.innerHtml += `<tr>
//                 <td>${data.userId}</td>
//                 <td>${data.id}</td>
//                 <td>${data.title}</td>
//                 <td>${data.completed}</td>
//         </tr>`;
//     }
// }


$.get('https://jsonplaceholder.typicode.com/todos').done(function(data){

    tableData(data);

    console.log(data);

});

var tbody = document.getElementById("tbody");

function tableData(json) {
    for (const data of json) {
tbody.innerHTML += `<tr>
<td>${data.userId}</td>
<td>${data.id}</td>
<td>${data.title}</td>
<td>${data.completed}</td>
</tr>
`
}}