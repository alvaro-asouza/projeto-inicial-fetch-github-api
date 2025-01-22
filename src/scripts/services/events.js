import {baseUrl, repositoriesEventQuantity} from '../variables.js'

async function getEvents(userName) {
    try {
        if (!userName) {
            throw new Error('Nome de usuário é obrigatório');
        }

        const response = await fetch(`${baseUrl}/${userName}/events?per_page=${repositoriesEventQuantity}`);
        
        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }

        const eventsData = await response.json();
        return eventsData;
    } catch (error) {
        console.error('Erro ao buscar eventos:', error);
        return [];
    }
}

export { getEvents }