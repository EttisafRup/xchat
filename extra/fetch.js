function nunu() {
    sheet = "https://sheetdb.io/api/v1/b70w6hs5ccavr";
    fetch(sheet).then((response) => {
        return response.json();
    }).then((show) => {
        let obj = show;
        let edit = document.getElementById('ul');
        str = "";
        for (key in obj) {
            str += `<li>@ ${obj[key].name} <p style="margin-top: 0.5rem;"></p> - ${obj[key].msg} </li>`;
        }
        edit.innerHTML = str
    })
}
nunu();
