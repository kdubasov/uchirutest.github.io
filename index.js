let CARDS_SPISOK = [];

function render(){
    navbar.render()
    cardsCats.render()
}

fetch('https://api.thecatapi.com/v1/images/search?limit=10')
    .then(res => res.json())
    .then(body => {
        CARDS_SPISOK = body;
        console.log(body)
        render()

    })
    .catch(error=>{
        console.log(error)
    })

const showCats =()=>{
    fetch('https://api.thecatapi.com/v1/images/search?limit=10')
        .then(res => res.json())
        .then(body => {
            body.map(item=>{
                CARDS_SPISOK.push(item)
            })
            // console.log(CARDS_SPISOK)
            render()

        })
        .catch(error=>{
            console.log(error)
        })
}