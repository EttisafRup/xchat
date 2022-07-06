let button = document.getElementById('sm');
button.addEventListener('click', rupMamu)

function rupMamu() {

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://sheetdb.io/api/v1/b70w6hs5ccavr', true);

    xhr.onload = function () {
        if (this.status === 200) {
            let obj = JSON.parse(this.responseText);
            let li = document.getElementById('ul');
            str = "";
            for (key in obj) {
                str += `<li>@${obj[key].name} <p style="margin-top: 0.5rem;"></p> - ${obj[key].msg} </li>`;
            }
            li.innerHTML = str;
        }
        else{
            alert('Something went wrong');
        }
    }
        xhr.send();
    }

    rupMamu();
