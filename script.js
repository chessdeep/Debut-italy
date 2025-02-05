javascript
document.addEventListener('DOMContentLoaded', function () {
    fetch('assets/data.json')
        .then(response => response.json())
        .then(data => {
            const openingsList = document.getElementById('openings-list');
            data.forEach(opening => {
                const openingElement = document.createElement('div');
                openingElement.classList.add('opening');
                openingElement.innerHTML = `
                    <h2>${opening.name}</h2>
                    <p>${opening.description}</p>
                    <p><strong>Ходы:</strong> ${opening.moves}</p>
                `;
                openingsList.appendChild(openingElement);
            });
        })
        .catch(error => console.error('Ошибка загрузки данных:', error));
});
