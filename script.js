const game = document.getElementById('game')
const scoreDisplay = document.getElementById('score')

const genres = [
    {
        name: 'Film',
        id: 20
    }
]

const levels = ['easy','medium','hard']

function addGenre(genre[0]) {
    const column = document.createElement('div')
    column.classList.add('genre-column')
    column.innerHTML = genre.name
    game.append(column)
    
    levels.forEach(level => {
        const card = document.createElement('div')
        card.classList.add('card')
        column.append(card)

        if (level === 'easy'){
            card.innerHTML = 100
        }
        if (level === 'medium'){
            card.innerHTML = 150
        }
        if (level === 'hard'){
            card.innerHTML = 200
        }

        fetch('https://opentdb.com/api.php?amount=10&category=${genre.id}&difficulty=${level}&type=boolean')  
            .then(response => response.json())
            .then(data => {
                console.log(data)
                card.setAttribute('data-question', data.results[0].question)
                card.setAttribute('data-answer', data.results[0].correct_answer)
                card.setAttribute('data-value', card.innerHTML())
            })
        card.addEventListener('click',flipCard)
     })
    }
addGenre(film)
function flipCard(){
    console.log('clicked')
}






// function changeColor(newColor) {
//     const elem = document.getElementById('hover');
//     elem.style.color = newColor;
//   }
// 
//   const questions = [
//     {
//       text: `Hasta la vista, baby.`,
//       correctAnswer: "Movie Quote",
//       incorrectAnswer: ["Music Lyric"]
//     },
//     {
//       text: `You is kind. You is smart. You is important.`,
//       correctAnswer: "Movie Quote",
//       incorrectAnswer: ["Music Lyric"]
//     },
//     {
//       text: `So you're a tough guy,Like it really rough guy.`,
//       correctAnswer: "Music Lyric",
//       incorrectAnswer: ["Movie Quote"]
//     },
//     {
//       text: `Carpe diem. Seize the day, boys. Make your lives extraordinary.`,
//       correctAnswer: "Movie Quote",
//       incorrectAnswer: ["Music Lyric"]
//     },
//     {
//       text: `Yeah, I'm gonna take my horse to the old town road.`,
//       correctAnswer: "Music Lyric",
//       incorrectAnswer: ["Movie Quote"]
//     },
//     {
//       text: `Look, if you had one shot or one opportunity to seize everything you ever wanted in one moment
//       would you capture it, or just let it slip?`,
//       correctAnswer: "Music Lyric",
//       incorrectAnswer: ["Movie Quote"]
//     },
//     {
//       text: `Roads? Where we're going we don't need roads.`,
//       correctAnswer: "Movie Quote",
//       incorrectAnswer: ["Music Lyric"]     
//     },
//     {
//       text: `You’re killin’ me, Smalls.`,
//       correctAnswer: "Movie Quote",
//       incorrectAnswer: ["Music Lyric"]
//     },
//     {
//       text: `Elementary, my dear Watson.`,
//       correctAnswer: "Movie Quote",
//       incorrectAnswer: ["Music Lyric"]
//     },
//     {
//       text: `It's about damn time.`,
//       correctAnswer: "Music Lyric",
//       incorrectAnswer: ["Movie Quote"]
//     }
//   ]

//   let questions = [
//     {
//       text: `Hasta la vista, baby.
//         A. Movie Quote
//         B. Music Lyric`,
//       correctAnswer: "A"
//     },
//     {
//       text: `You is kind. You is smart. You is important.
//         A. Movie Quote
//         B. Music Lyric`,
//       correctAnswer: "A"
//     },
//     {
//       text: `So you're a tough guy,Like it really rough guy.
//         A. Movie Quote
//         B. Music Lyric`,
//       correctAnswer: "B"
//     },
//     {
//       text: `Carpe diem. Seize the day, boys. Make your lives extraordinary.
//         A. Movie Quote
//         B. Music Lyric`,
//       correctAnswer: "A"
//     },
//     {
//       text: `Yeah, I'm gonna take my horse to the old town road.
//         A. Movie Quote
//         B. Music Lyric`,
//       correctAnswer: "B"
//     },
//     {
//       text: `Look, if you had one shot or one opportunity to seize everything you ever wanted in one moment
//       would you capture it, or just let it slip?
//         A. Movie Quote
//         B. Music Lyric`,
//       correctAnswer: "B"
//     },
//     {
//       text: `Roads? Where we're going we don't need roads.
//         A. Movie Quote
//         B. Music Lyric`,
//       correctAnswer: "A"
//     },
//     {
//       text: `You’re killin’ me, Smalls.
//         A. Movie Quote
//         B. Music Lyric`,
//       correctAnswer: "A"
//     },
//     {
//       text: `Elementary, my dear Watson.
//         A. Movie Quote
//         B. Music Lyric`,
//       correctAnswer: "A"
//     },
//     {
//       text: `It's about damn time.
//         A. Movie Quote
//         B. Music Lyric`,
//       correctAnswer: "B"
//     }
//   ]