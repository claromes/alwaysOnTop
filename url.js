let webview = document.querySelector('webview')

onload = () => {
  document.querySelector('form').onsubmit = function(el) {
    el.preventDefault()
    getUrl(document.getElementById('url').value)
  }

  webview.addEventListener('did-fail-load', failLoad)
  webview.addEventListener('did-finish-load', finishLoad)
}

const getUrl = (url) => document.querySelector('webview').src = url

function failLoad() {
  console.log('Fail')
}

function finishLoad() {
  document.getElementById('url').value = webview.getURL()
}