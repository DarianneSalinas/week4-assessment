const videoGamesContainer = document.querySelector('#videoGames-container')
const form = document.querySelector('form')

const baseURl = `http://localhost:4000/api/videogames`

const videoGamesCallback = ({ data: videoGames}) => displayVideoGames(videoGames)
const errCallback = err => console.log(err.response.data)

const getAllVideoGames = () => axios.get(baseURL).then(videoGamesCallback).catch(errCallback)
const createRecomVideoGame = body => axios.post(baseURl, body).then(videoGamesCallback).catch(errCallback)
const deleteVideoGame = id => axios.delete(`${baseURL}/${id}`).then(videoGamesCallback).catch(errCallback)
const updateVideoGame = (id, type) => axios.put(`${baseURl}/${id}`, {type}).then(videoGamesCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

    let title = document.querySelector('#title')
    let rating = document.querySelector('input[name="ratings"]:checked')
    let imageURL = document.querySelector('#img')

    let bodyObj = {
        title: title.value,
        rating: rating.value,
        imageURL: imageURL.value
    }

    createRecomVideoGame(bodyObj)
    title.value = ''
    rating.checked = false
    imageURL.value = ''

}

function createVideoGameCard(videoGames) {
    const videoGameCard = document.createElement('div')
    videoGameCard.classList.add('video-game-card')

    videoGameCard.innerHTML = `<img alt='video game cover' src=${videoGame.imageURL} class = "video-game-cover"/>
    <p class = "video-game-title">${videoGames.title}</p>
    <div class = "btns-container">
        <button onlick="updateVideoGame(${videoGames.id}, 'minus')">-</button>
        <p class = "video-game-rating">${videoGames.rating} stars</p>
        <button onclick = "updateVideoGame(${videoGame.id}, 'plus')">+</button>
    </div>
    <button onclick="deleteVideogame(${videoGames.id})">delete</button>
`
    videoGamesContainer.appendChild(videoGameCard)

}

function displayVideoGames(arr) {
    videoGamesContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createVideoGameCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getAllVideoGames()

