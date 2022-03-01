// let card = `<div class="card" style="width: 11rem;">
// <img src="" class="card-img-top" alt="">
// <div class="card-body">
//   <h5 class="card-title">Card title</h5>
//   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
//     content.</p>

// </div>
// <div class="card-footer text-muted">
//   2 days ago
// </div>
// </div>`;




let xhr = new XMLHttpRequest();
xhr.open('GET', './resources1/store.json', true);
xhr.send();
xhr.onload = () => {
  if (xhr.status == 200) {
    let json = JSON.parse(xhr.response);
    for (let i = 0; i < 4; i++) {
      document.querySelectorAll('.card img')[i].setAttribute('src', `resources1/pr${i + 1}.jpg`);
      document.querySelectorAll('.card-title')[i].innerHTML = json.products[i].product_name;
      document.querySelectorAll('.card-text')[i].innerHTML = json.products[i].brand_name;
      document.querySelectorAll('.card-footer')[i].innerHTML = json.products[i].price;
      document.querySelector('input').addEventListener('input', function () {
        for (let i = 0; i < 4; i++) {
          if (json.products[i].product_name.includes(document.querySelector('input').value)) {
            document.querySelectorAll('.card')[i].style.display = "block";
          } else {
            document.querySelectorAll('.card')[i].style.display = "none";
          }
          
        }
      })
    }
  }
}
