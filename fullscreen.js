let hideHeader = () => {
  document.querySelector('div').classList.add('hide')
  document.querySelector('div').classList.remove('show')
  document.querySelector('webview').style.height = '100%'
}

let showHeader = () => {
  document.querySelector('div').classList.add('show')
  document.querySelector('div').classList.remove('hide')
  document.querySelector('webview').style.height = 'calc(100% - 33px)'
}

webview.addEventListener('enter-html-full-screen', hideHeader)
webview.addEventListener('leave-html-full-screen', showHeader)