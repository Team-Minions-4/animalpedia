document.getElementById('fetchAnimals').addEventListener('click', () => {
    fetch('/api/animals')
        .then(response => response.json())
        .then(data => {
            const animalList = document.getElementById('animal-list');
            animalList.innerHTML = data.map(animal => `<p>${animal.name}</p>`).join('');
        });
});
