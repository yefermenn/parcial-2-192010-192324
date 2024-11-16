document.getElementById('mostrarBtn').addEventListener('click', function() {
    const cajaTexto = document.getElementById('cajaTexto');
    cajaTexto.style.display = 'block';
    cajaTexto.classList.remove('fade-out');
    cajaTexto.classList.add('fade-in');
    
    document.getElementById('mostrarBtn').style.display = 'none';
    document.getElementById('ocultarBtn').style.display = 'block';
});

document.getElementById('ocultarBtn').addEventListener('click', function() {
    const cajaTexto = document.getElementById('cajaTexto');
    cajaTexto.classList.remove('fade-in');
    cajaTexto.classList.add('fade-out');
    
    setTimeout(() => {
        cajaTexto.style.display = 'none';
        document.getElementById('mostrarBtn').style.display = 'block';
        document.getElementById('ocultarBtn').style.display = 'none';
    }, 500); 
});

document.getElementById('numHijos').addEventListener('input', function() {
    const numHijos = parseInt(this.value);
    const hijosForm = document.getElementById('hijosForm');
    hijosForm.innerHTML = '';

    for (let i = 0; i < numHijos; i++) {
        const div = document.createElement('div');
        div.className = 'form-group';
        div.innerHTML = `
            <label for="nombre${i}">Nombre del hijo ${i + 1}</label>
            <input type="text" class="form-control" id="nombre${i}" placeholder="Nombre del hijo ${i + 1}">
            <label for="edad${i}" class="mt-2">Edad del hijo ${i + 1}</label>
            <input type="number" class="form-control" id="edad${i}" placeholder="Edad del hijo ${i + 1}">
        `;
        hijosForm.appendChild(div);
    }
});
