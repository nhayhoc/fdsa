const FontFaceObserver = require('fontfaceobserver')

const Fonts = () => {
  const link = document.createElement('link')
  link.href = 'https://fonts.googleapis.com/css?family=Poppins:400,500,600,700'
  link.rel = 'stylesheet'



  document.head.appendChild(link)
  


  const fonts = new FontFaceObserver('Poppins')

  fonts.load().then(() => {
    document.documentElement.classList.add('Poppins')
  })



}

export default Fonts;