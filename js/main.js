window.addEventListener('DOMContentLoaded', () => {
  let colors = [
    document.documentElement.style.getPropertyValue('--color1'),
    document.documentElement.style.getPropertyValue('--color2'),
    document.documentElement.style.getPropertyValue('--color3'),
    document.documentElement.style.getPropertyValue('--color4'),
    document.documentElement.style.getPropertyValue('--color5'),
    document.documentElement.style.getPropertyValue('--color6'),
  ]

  $visual = document.querySelector('.visual')
  $pads = document.querySelectorAll('.pad')
  $pads.forEach(($pad) => {
    $pad.addEventListener('click', function() {
      $bubble = document.createElement('div')
      $bubble.classList.add('bubble')
      $bubble.style.backgroundColor = window.getComputedStyle(this).backgroundColor
      $bubble.addEventListener('animationend', function() { this.remove() })
      $visual.appendChild($bubble)
      this.querySelector('audio').play()
    })
  })
})
