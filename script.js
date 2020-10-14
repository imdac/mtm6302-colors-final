const $colors = document.getElementById('colors')
const html = []

for (const color in colors) {
  html.push(`<div 
              class="color" 
              data-name="${color}" 
              data-code="${colors[color]}"
              data-display="name"
              style="background-color: ${color}">${color}</div>`)
}

$colors.innerHTML = html.join('')

$colors.addEventListener('click', function (e) {
  if (e.target.classList.contains('color')) {
    if (e.target.dataset.display === 'name') {
      e.target.dataset.display = 'code'
      e.target.textContent = e.target.dataset.code
    } else {
      e.target.dataset.display = 'name'
      e.target.textContent = e.target.dataset.name
    }
  }
})
