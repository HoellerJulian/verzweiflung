const copyButton = document.getElementById('copyButton')
const codeSnippet = document.getElementById('codeSnippet')

copyButton.addEventListener('click', async () => {
  try {
    // Use navigator.clipboard.writeText to copy the code snippet's text
    await navigator.clipboard.writeText(codeSnippet.innerText.trim())
    alert('Code copied to clipboard!')
  } catch (err) {
    alert(`Failed to copy code: ${err})`)
  }
})