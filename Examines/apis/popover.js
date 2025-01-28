const button = document.getElementById('popoverButton')
const popover = document.getElementById('popoverContent')

button.addEventListener('click', () => {
  if (popover.open) {
    popover.close()
  } else {
    popover.showPopover(button)
  }
})