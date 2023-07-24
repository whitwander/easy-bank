const button = document.getElementById('menu')
const hmtlElement = document.getElementById('bar')

button.addEventListener('click', abreMenu)

function abreMenu() {
    if (hmtlElement.dataset.value != 'false') {
        hmtlElement.innerHTML=''
        hmtlElement.dataset.value ='false'
    } else {
        hmtlElement.innerHTML = `
    <nav class="navigation  mobile-menu-all">
      <a class="navigation-itens mobile-menu" href="#">Home</a>
      <a class="navigation-itens mobile-menu" href="#">About</a>
      <a class="navigation-itens mobile-menu" href="#">Contact</a>
      <a class="navigation-itens mobile-menu" href="#">Blog</a>
      <a class="navigation-itens mobile-menu" href="#">Carrers</a>
    </nav>
    `
    hmtlElement.dataset.value= 'true'
    }
}

