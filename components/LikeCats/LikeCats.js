class LikeCats{

    getCats(){
        const catsLocalStorage = localStorage.getItem('cats')
        if(catsLocalStorage !== null){
            return JSON.parse(catsLocalStorage)
        }else{
            return []
        }
    }

    setCat(url){
        let cats = this.getCats()
        const index = cats.indexOf(url)
        if (index === -1){
            cats.push(url)
        }else {
            cats.splice(index,1)
        }
        localStorage.setItem('cats',JSON.stringify(cats))
        return{
            cats
        }
    }

    deleteCat(url){
        let cats = this.getCats()
        const index = cats.indexOf(url)
        cats.splice(index,1)
        localStorage.setItem('cats',JSON.stringify(cats))
        likesCats.render()
    }

    render(){
        let likeCatsSpisok = ``;
        this.getCats().map(item=>{
            likeCatsSpisok += `
                <div class="card-cat">
                    <img class="img-cat-card" src='${item}' alt='${item}'>
                    <img onclick="likesCats.deleteCat('${item}')" src="img/delete.svg" class="img-like">
                </div>
            `;
        });
        const html = `
            <div class="cards-spisok-container">
                ${likeCatsSpisok}
            </div>
        `;
        ROOT_LIKES_CATS.innerHTML = html;
    }
}

const likesCats = new LikeCats();
likesCats.render()
