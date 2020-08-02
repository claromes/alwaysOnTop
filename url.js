let webview = document.querySelector('webview')

onload = () => {
  document.querySelector('form').onsubmit = function(el) {
    el.preventDefault()
    getUrl(document.getElementById('url').value)
  }

  document.querySelector('button').onclick = function(el) {
    el.preventDefault()
    document.getElementById('url').value = 'https://'
    getUrl(`file://${__dirname}/favs.html`)
  }

  webview.addEventListener('did-fail-load', failLoad)
  webview.addEventListener('did-finish-load', finishLoad)
}

const getUrl = (url) => webview.src = url

function failLoad() {
  console.log('Fail')
}

function finishLoad() {
  url = webview.getURL()
}