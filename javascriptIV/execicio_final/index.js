function renderData(data) {

    const name = document.createElement('label')
    name.classList.add('name')
    name.id = `name-${data.id}`
    name.innerText = data.name

    const value = document.createElement('label')
    value.classList.add('value')
    value.id = `value-${data.id}` // Corrigi aqui para usar o ID do data
    value.innerText = ` R$ ${data.value}`

    const financa = document.createElement('div')
    financa.appendChild(name)
    financa.appendChild(value)

    // Adicione financa ao DOM
    document.body.appendChild(financa)

    // Criar um botão de remoção para cada item
    const editButton = document.createElement('button');
    editButton.textContent = 'Editar';
    editButton.dataset.id = data.id; // Armazenar o ID no botão

    financa.appendChild(editButton);

    // Criar um botão de remoção para cada item
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remover';
    removeButton.dataset.id = data.id; // Armazenar o ID no botão

    financa.appendChild(removeButton);


    // Adicione financa ao DOM
    document.body.appendChild(financa);

    // Adicionar evento de clique ao botão de remoção
    removeButton.addEventListener('click', function () {
        removeItem(this.dataset.id);
    });

    editButton.addEventListener('click', function () {
        editItem(data.id, data.name, data.value);
    });
}

async function fetchDatas() {
    const datas = await fetch("http://localhost:3000/financas").then(res => res.json())
    datas.forEach(renderData)
}

document.addEventListener('DOMContentLoaded', () => {
    fetchDatas()
})


const form = document.querySelector('form')

form.addEventListener('submit', async (ev) => {
    ev.preventDefault()

    const financaData = {
        name: document.querySelector('#name').value,
        value: document.querySelector('#value').value,
    }
    console.log(financaData.name)
    if (isNameExist(financaData.name)) {
        const response = await fetch('http://localhost:3000/financas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(financaData)
        })

        const savedArticle = await response.json()
        form.reset()
        renderData(savedArticle)
        console.log(savedArticle)

    } else {
        alert('Este nome já existe.');
    }
})

async function removeItem(id) {
    try {
        const response = await fetch(`http://localhost:3000/financas/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }
        // Remover o elemento do DOM após a remoção bem-sucedida
        document.querySelector(`[data-id='${id}']`).parentElement.remove();
        alert("Item removido com sucesso!");
    } catch (error) {
        console.error('Falha na solicitação:', error);
        alert("Falha ao remover o item.");
    }
}

async function editItem(id) {
    const name = prompt("Novo nome:");
    const value = prompt("Novo valor:");

    if (name && value) {
        try {
            const response = await fetch(`http://localhost:3000/financas/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, value })
            });

            if (!response.ok) {
                throw new Error(`Erro HTTP: ${response.status}`);
            }

            const updatedItem = await response.json();
            // Atualizar o item na interface do usuário
            document.querySelector(`#name-${id}`).textContent = updatedItem.name;
            document.querySelector(`#value-${id}`).textContent = ` R$ ${updatedItem.value}`;

            alert("Item atualizado com sucesso!");
        } catch (error) {
            console.error('Falha na solicitação:', error);
            alert("Falha ao atualizar o item.");
        }
    }
}


function isNameExist(name) {
    let labels = document.querySelectorAll('body label.name');
    for (let i = 0; i < labels.length; i++) {
        if (labels[i].textContent.trim() === name.trim()) {
            return false; // Nome já existe
        }
    }
    return true; // Nome não existe
}