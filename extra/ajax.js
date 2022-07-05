let popBtn = document.getElementById('sm');
popBtn.addEventListener('click', popHandler);

function popHandler() {
    console.log('You have clicked the pop handler');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET', 'https://sheetdb.io/api/v1/b70w6hs5ccavr', true);


    // What to do when response is ready
    xhr.onload = function () {
        if(this.status === 200){
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('ul');
            str = "";
            for (key in obj)
            {
                str += `<li>@${obj[key].name} <p style="margin-top: 0.5rem;"></p> - ${obj[key].msg} </li>`;
            }
            list.innerHTML = str;
        }
        else{
            console.log("Some error occured")
        }
    }

    // send the request
    xhr.send();
    console.log("We are done fetching employees!");
}

popHandler();