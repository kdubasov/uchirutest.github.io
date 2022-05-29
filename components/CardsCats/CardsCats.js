class CardsCats{

    showLike(id,url){
        let elem = document.getElementsByClassName(id)
        // console.log(elem)
        elem[0].classList.remove('hidden')
        if (localStorage.getItem('cats').indexOf(url) !== -1){
            elem[0].src = "img/delete.svg";
        }
    }
    deleteLike(id){
        let elem = document.getElementsByClassName(id)
        elem[0].classList.add('hidden')
    }

    leaveLike(id){
        let elem = document.getElementsByClassName(id)
        elem[0].src = "img/like.svg";
    }
    checkLike(id){
        let elem = document.getElementsByClassName(id)
        elem[0].src = "img/delete.svg";
    }

    render(){
        let cardsSpisokHTML = ``;
        CARDS_SPISOK.map((item)=>{
            cardsSpisokHTML += `
                <div 
                    class="card-cat"
                    onmouseleave="cardsCats.deleteLike('${item.id}')"
                    onmouseenter="cardsCats.showLike('${item.id}','${item.id}')"
                >
                    
                    <img class="img-cat-card" src='${item.url}' alt='${item.id}'>
                    
                    <img
                            
                         class="img-like hidden ${item.id}"
                         src="img/like.svg"
                         id="${item.id}"
                         onclick="likesCats.setCat('${item.url}')"
                         onmouseleave="cardsCats.leaveLike('${item.id}')"
                         onmouseenter="cardsCats.checkLike('${item.id}')"
                    >
                </div>
            `;
        });

        const html = `
            <div class="cards-spisok-container">
                ${cardsSpisokHTML}
            </div>
        `;
        ROOT_CARDS_CATS.innerHTML = html;
    }
}
const cardsCats = new CardsCats();
