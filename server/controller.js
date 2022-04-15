
const videoGames = require('./db.json');

let globalID = 10

module.exports = {
    getAllVideoGames: (req, res) => {
        res.status(200).send(videoGames)
    },

    deleteVideoGame: (req, res) => {
        let index = videoGames.findIndex(elem => elem.id === +req.params.id)
        videoGames.splice(index, 1)
        res.status(200).send(videoGames)
    },

        createRecomVideoGame: (req, res) => {
           let {title, imageURL, text} = req.body;
            let newVideoGameRecom = {
                id: globalID,
                title,
                imageURL,
                text,
            }
            videoGames.push(newVideoGameRecom)
            res.status(200).send(videoGames)
            globalID++

        },

        updateVideoGame: (req, res) => {
            const {id} = req.params;
            const {type} = req.body;
            let index = videoGames.findIndex(elem => +elem.id === +id);
            console.log(type);
        }
    

}

