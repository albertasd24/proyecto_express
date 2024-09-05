

new DataTable('#table', {
    language: {
        search: 'Buscar',
        info: 'Página _PAGE_ de _PAGES_',
        infoEmpty: 'No hay información para paginar',
        emptyTable:  'No hay usuarios registrados aún',
        infoFiltered: '(filtered from _MAX_ total records)',
        lengthMenu: 'Mostrar _MENU_ registrospor página',
        zeroRecords: 'No hay resultados que coincidan'
    }
});

function deleteMessageUser(id) {
    const confirmation = confirm("¿Estás seguro de que deseas eliminar este usuario?");

    if (confirmation) {
        // Realizar la petición DELETE usando fetch
        fetch(`/delete/usuarios/${id}`, {
            method: 'POST'
        })
        .then(response => {
            if (response.ok) {
                alert("Usuario eliminado con éxito.");
                // Redirigir o actualizar la página
                window.location.reload(); // Recargar la página para actualizar la lista
            } else {
                alert("Hubo un error al eliminar el usuario.");
            }
        })
        .catch(error => {
            console.error("Error al realizar la petición:", error);
        });
    }
}
