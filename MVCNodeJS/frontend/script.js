document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const addres = document.getElementById('addres').value;

    fetch('http://localhost:5000/user/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, phone, address })
    })
    .then(response => response.json())
    .then(data => {
        if (data.user_id) {
            alert(`Usuario registrado: ${data.name} (${data.email} ${data.phone} ${data.address})`);
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('phone').value = '';
            document.getElementById('address').value = '';
        } else {
            alert('Error al registrar usuario');
        }
    })
    .catch(error => console.error('Error:', error));
});

function getUser() {
    const userId = document.getElementById('userId').value;
    if (userId) {
        fetch(`http://localhost:5000/user/${userId}`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert('Usuario no encontrado');
            } else {
                alert(`Detalles del usuario:\nID: ${data.user_id}\nNombre: ${data.name}\nEmail: ${data.email}\nTelefono: ${data.phone}\nDireccion: ${data.addres}`);
            }
        })
        .catch(error => console.error('Error:', error));
    } else {
        alert('Por favor, ingrese un ID de usuario válido.');
    }
}

function postUser() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const tel = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    fetch('http://localhost:5000/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, phone, address })
    })
    .then(response => response.json())
    .then(data => {
        if (data.user_id) {
            alert(`Usuario registrado: ${data.name} (${data.email} ${data.phone} ${data.address})`);
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('phone').value = '';
            document.getElementById('address').value = '';
        } else {
            alert('Error al registrar usuario');
        }
    })
    .catch(error => console.error('Error:', error));
}

function updateUser() {
    const userId = document.getElementById('userId').value;
    if (userId) {
        const name = prompt('Ingrese el nuevo nombre:');
        const email = prompt('Ingrese el nuevo email:');
        const phone = prompt('Ingrese el nuevo telefono:');
        const addres = prompt('Ingrese la nueva direccion:');

        if (name && email && phone && addres) {
            fetch(`http://localhost:5000/user/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, phone, addres })
            })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    alert('Usuario no encontrado');
                } else {
                    alert(`Usuario actualizado:\nNombre: ${data.name}\nEmail: ${data.email}\nTelefono: ${data.phone}\nDireccion: ${data.addres}`);
                }
            })
            .catch(error => console.error('Error:', error));
        } else {
            alert('Debe ingresar nombre y email válidos.');
        }
    } else {
        alert('Por favor, ingrese un ID de usuario válido.');
    }
}


function deleteUser() {
    const userId = document.getElementById('userId').value;
    if (userId) {
        fetch(`http://localhost:5000/user/${userId}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (response.ok) {
                alert('Usuario eliminado correctamente');
            } else {
                alert('Error al eliminar usuario');
            }
        })
        .catch(error => console.error('Error:', error));
    } else {
        alert('Por favor, ingrese un ID de usuario válido.');
    }
}
