const searchButton = document.getElementById('searchButton');
const usernameInput = document.getElementById('usernameInput');
const userCard = document.getElementById('userCard');
const githubUrl = 'https://api.github.com/users/';

async function fetchUser() {
    const username = usernameInput.value.trim();
    if (username === '') {
        alert('Please enter a username');
        return;
    }

    try {
        const response = await fetch(githubUrl + username);
        if (!response.ok) {
            throw new Error('User not found');
        }

        const userData = await response.json();
        displayUserCard(userData);
    } catch (error) {
        alert('User not found');
    }
}


function displayUserCard(userData) {
    const { avatar_url, login, public_repos, html_url } = userData;

    const cardContainer = document.createElement('div');
    cardContainer.classList.add('user-info');

    const avatarImage = document.createElement('img');
    avatarImage.src = avatar_url;
    avatarImage.alt = 'User Avatar';
    avatarImage.addEventListener('click', () => {
        window.open(html_url, '_blank');
    });

    const usernameHeader = document.createElement('h2');
    usernameHeader.textContent = login;

    const publicReposParagraph = document.createElement('p');
    publicReposParagraph.textContent = `Public Repositories: ${public_repos}`;

    cardContainer.appendChild(avatarImage);
    cardContainer.appendChild(usernameHeader);
    cardContainer.appendChild(publicReposParagraph);

    // userCard.innerHTML = '';
    userCard.appendChild(cardContainer);

    usernameInput.value = '';
    usernameInput.focus();
}

searchButton.addEventListener('click', fetchUser);
usernameInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        fetchUser();
    }
});

window.onload = () => {
    usernameInput.focus();
};
