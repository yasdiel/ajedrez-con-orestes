const handleSubmit = (e) => {
    e.preventDefault()
    const name = document.getElementById('name').value
    const message = document.getElementById('mensaje').value
    const mensaje = `Hola Oreste, mi nombre es ${name}.${message}`
    const mensajeCodificado = encodeURIComponent(mensaje)
    window.open(`https://wa.me/56931733435?text=${mensajeCodificado}`)
}