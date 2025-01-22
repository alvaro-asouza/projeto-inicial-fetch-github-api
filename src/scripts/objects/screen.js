const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = ` <div class="info">
                                            <img src="${user.avatarUrl}" alt="Foto do perfil do usúario"/> 
                                            <div class="data">
                                            <h1>${user.name ?? 'Não possui nome cadastrado 😭'} </h1>
                                            <p>${user.bio ?? 'Não possui bio cadastrada 😭'} </p>
                                            <p>Seguidores:⬅️ ${user.followers ?? 'Não tem seguidores 😭'} </p>
                                            <p>Seguindo:➡️ ${user.following ?? 'Não segue ninguém 😭'} </p>
                                            </div> 
                                         </div>`
         
                                         if (user.events.length > 0) {
                                            let events = '';
                                            const pushEvents = user.events.filter(event => event.type === 'PushEvent');
                                            
                                            pushEvents.forEach(event => {
                                                const branch = event.payload.ref.split('/').pop();
                                                const repoUrl = `https://github.com/${event.repo.name}/tree/${branch}`;
                                                
                                                event.payload.commits.forEach(commit => {
                                                    events += `
                                                        <li class="event">
                                                            <h3>${event.repo.name}</h3> -
                                                            <a href="${repoUrl}" target="_blank">
                                                                ${commit.message}
                                                            </a>
                                                        </li>`;
                                                });
                                            });
                                        
                                            this.userProfile.innerHTML += `
                                                <div class="events section">
                                                    <h2>Eventos</h2>
                                                    <ul>${events}</ul>
                                                </div>`;
                                        }



        if (user.repositories.length > 0) {
            let repositoriesItens = ''
            user.repositories.forEach(repo => 

                repositoriesItens += `<li class="repo"><a href="${repo.html_url}" target="_blank">${repo.name} <br>
                <i> 🍴 ${repo.forks_count} </i>
                <i> ⭐ ${repo.stargazers_count} </i>
                <i> 👀 ${repo.watchers_count} </i>
                <i> 👨‍💻 ${repo.language ?? 'Sem linguagem '} </i></a> </li>
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