document.addEventListener('DOMContentLoaded', () => {
  // Selecciona el botón que abre/cierra el menú
  const menuBtn = document.getElementById('boton-menu')
  // Selecciona la lista del menú principal
  const menuPrincipal = document.getElementById('menu-principal')
  
  // Al hacer clic en el botón del menú se alterna la clase hidden para mostrar/ocultar
  menuBtn.addEventListener('click', () => {
    menuPrincipal.classList.toggle('hidden')
    // Cambia el aria-label para accesibilidad según el estado del menú
    menuBtn.setAttribute(
      'aria-label',
      menuPrincipal.classList.contains('hidden') ? 'Abrir menú' : 'Cerrar menú'
    )
  })

  // Selecciona el formulario de contacto si existe en la página
  const contactForm = document.getElementById('contact-form')
  if (contactForm) {
    // Valida los campos del formulario cuando se envía
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault()
      const nombre = contactForm.nombre.value.trim()
      const tipoTrabajo = contactForm.tipoTrabajo.value.trim()
      const mensaje = contactForm.mensaje.value.trim()

      // Si alguno de los campos es muy corto o está vacío, mostramos alerta
      if (nombre.length < 3 || tipoTrabajo === '' || mensaje.length < 10) {
        alert('Por favor completa correctamente todos los campos antes de enviar.')
      } else {
        // Si todo está bien, mostramos un mensaje de éxito y limpiamos el formulario
        alert(`¡Gracias ${nombre}! Hemos recibido tu solicitud para ${tipoTrabajo}.`)
        contactForm.reset()
      }
    })
  }

  // Selecciona todos los botones que despliegan contenido
  document.querySelectorAll('.boton-desplegar').forEach((btn) => {
    btn.addEventListener('click', () => {
      // Obtiene el div que está debajo del botón (contenido a desplegar)
      const contenido = btn.nextElementSibling
      // Alterna entre mostrar y ocultar el contenido
      contenido.classList.toggle('hidden')
      // Actualiza el aria-expanded para accesibilidad según el estado visible/oculto
      btn.setAttribute(
        'aria-expanded',
        contenido.classList.contains('hidden') ? 'false' : 'true'
      )
    })
  })
})
