const container = document.getElementById("container");
const input = document.getElementById("inputex");

document.getElementById("botao").addEventListener('click', () => {
    fetch(`http://localhost:8080/dados?nome=${input.value}` )
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const div = document.createElement('div')

            div.innerHTML = `<p>Personagem ${data[0].nome}</p>`
            container.appendChild(div)
            console.log(data);
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
});
