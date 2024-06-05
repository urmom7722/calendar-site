function redirectTo(link){

}

function setPageContentFromTo(elementFrom, linkTo){
    fetch(linkTo)
    .then(response => response.text())
    .then(data => {
        elementFrom.innerHTML = data;
    })
    .catch(error => console.error('Error loading activity:', error));
}



setPageContentFromTo(document.getElementsById("header"),"partials/header");