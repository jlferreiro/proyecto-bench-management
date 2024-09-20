document.addEventListener("DOMContentLoaded", () => {
    const personList = document.getElementById("person-list");
    const projectList = document.getElementById("project-list");
    
    // Renderizar las personas
    personas.forEach(person => {
        const li = document.createElement("li");
        li.textContent = `${person.name} - ${person.role} - ${person.status}`;
        personList.appendChild(li);
    });

    // Renderizar los proyectos
    proyectos.forEach(proyecto => {
        const li = document.createElement("li");
        li.textContent = `${proyecto.name}: ${proyecto.description} (Contacto: ${proyecto.clientPartner})`;
        projectList.appendChild(li);
    });

    // Añadir nuevas personas
    const form = document.getElementById("add-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const name = document.getElementById("name").value;
        const role = document.getElementById("role").value;
        const status = document.getElementById("status").value;

        if (name && role && status) {
            const li = document.createElement("li");
            li.textContent = `${name} - ${role} - ${status}`;
            personList.appendChild(li);

            // Limpiar el formulario
            form.reset();
        }
    });
});
