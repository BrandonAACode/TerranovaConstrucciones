document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('boton-menu')
  const menuPrincipal = document.getElementById('menu-principal')

  // Mostrar/Ocultar el menu en celular
  menuBtn.addEventListener('click', () => {
    menuPrincipal.classList.toggle('hidden')
    menuBtn.setAttribute(
      'aria-label',
      menuPrincipal.classList.contains('hidden') ? 'Abrir menú' : 'Cerrar menú'
    )
  })

  // Validaciones para formulario
  const contactForm = document.getElementById('contact-form')
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault()
      const nombre = contactForm.nombre.value.trim()
      const tipoTrabajo = contactForm.tipoTrabajo.value.trim()
      const mensaje = contactForm.mensaje.value.trim()

      if (nombre.length < 3 || tipoTrabajo === '' || mensaje.length < 10) {
        alert('Por favor completa correctamente todos los campos antes de enviar.')
      } else {
        alert(`¡Gracias ${nombre}! Hemos recibido tu solicitud para ${tipoTrabajo}.`)
        contactForm.reset()
      }
    })
  }
})