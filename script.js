const $colors = $('#colors')
const html = []

for (const color in colors) {
  html.push(`<div 
              class="color" 
              data-name="${color}" 
              data-code="${colors[color]}"
              data-display="name"
              style="background-color: ${color}">${color}</div>`)
}

$colors.append(html.join(''))

$colors.on('click', '.color', function () {
  if ($(this).data('display') === 'name') {
    $(this).data('display', 'code')
    $(this).text($(this).data('code'))
  } else {
    $(this).data('display', 'name')
    $(this).text($(this).data('name'))
  }
})
