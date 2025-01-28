// global 'content' element which will hold the content of a page
const content = document.getElementById('content')

// routes including content for your SPA
const routes = {
  home: '<h2>Home Page</h2><p>Welcome to the Home Page!</p>',
  about: '<h2>About Page</h2><p>This is the About Page. Learn more about us here.</p>',
  contact: '<h2>Contact Page</h2><p>Get in touch with us through the Contact Page.</p>'
}

// Function to update content and URL
function navigateTo(page) {
  content.innerHTML = routes[page] || '<h2>404 Page</h2><p>Page not found.</p>'
  history.pushState({ page }, page, `/${page}`)
}

// Event listener for navigation
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault()
    const page = event.target.getAttribute('data-page')
    navigateTo(page)
  })
})

// Handle browser navigation (back/forward)
window.addEventListener('popstate', (event) => {
  const page = event.state ? event.state.page : 'home'
  content.innerHTML = routes[page] || '<h2>404 Page</h2><p>Page not found.</p>'
})

// Set initial content
navigateTo('home')