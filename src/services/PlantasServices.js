class PlantasServices {

  obterPlantas() {
    const element = document.querySelector('section.vitrine .container')
    const vitrine = new VitrineView(element)
    vitrine.loading()

    window.scrollTo({
      top: document.querySelector('section.vitrine').offsetTop - 100,
      behavior: 'smooth',
    })

    if(Object.keys(params).length) {
      let query = Object.keys(params)
      .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
      .join('&')

      fetch(`api/plantas?${query}`)
      .then(res => {
        return res.json()
      })
      .then(data => {
        if(Object.keys(data).length) {
          vitrine.update(data)
        } else {
          vitrine.error()
        }
      })
    }
  }
}