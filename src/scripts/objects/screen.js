const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = ` <div class="info">
                                            <img src="${user.avatarUrl}" alt="Foto do perfil do usúario"/> 
                                            <div class="data">
                                            <h1>${user.name ?? 'Não possui nome cadastrado 😭'} </h1>
                                            <p>${user.bio ?? 'Não possui bio cadastrada 😭'} </p>
                                            </div> 
                                         </div>`



        if (user.repositories.length > 0) {
            let repositoriesItens = ''
            user.repositories.forEach(repo => 

                repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name} 
                <i class="forks"> 🍴 ${repo.forks_count} </i>
                <i class="stars"> ⭐ ${repo.stargazers_count} </i>
                <i class="watches"> 👀 ${repo.watchers_count} </i>
                <i class="language"> 👨‍💻 ${repo.language ?? 'Sem linguagem '} </i></a> </li>
                `);
            this.userProfile.innerHTML += `<div class="repositories section">
                                            <h2>Repositórios</h2>
                                            <ul>${repositoriesItens}</ul>
                                        </div>`
        }
    },
    renderNotFound() {
        this.userProfile.innerHTML = `<spain class="text">Usuário não existe</spain>`
    }
}

export { screen }