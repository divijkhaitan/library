function book(title, author, pages, status){
    this.title=title
    this.author=author
    this.pages=pages
    this.status=status
}
book.prototype.availability=function()
{
    if (this.status)
    {
        return "Available"
    }
    else
    {
        return "Unavailable"
    }
}

book.prototype.info= function(){
    console.log(`Name: ${this.title}\nAuthor: ${this.author}\nPages: ${this.pages}\nAvailability: ${this.availability}`)
}

const percy1=new book("Lightning Thief", "Rick Riordan", 254, true)
const clues39=new book ("One False Note", "Gordan Korman",198, false)
const artemis=new book ("Aretmis Fowl", "Eoin Colfer", 225, true)
const tweak=new book ("Tweak", "Nic Sheff", 322, false)
const alex= new book ("Skeleton Key", "Anthony Horowitz", 313, false)
const heroes=new book ("House of Hades", "Rick Riordan", 455, false)
const dragonball=new book("Dragon Ball Volume 1", "Akira Toriyama", 212, true)

let catalog=[percy1, clues39, artemis, tweak, alex, heroes, dragonball]

function populateSite(){
    let currentcard;
    let nodes;
    for (let i=0; i<catalog.length; i++)
    {
        currentcard=document.querySelector(`[data='${i}']`)
        nodes=currentcard.children;
        nodes[0].textContent=`Name: ${catalog[i].title}`
        nodes[1].textContent=`Author: ${catalog[i].author}`
        nodes[2].textContent=`Pages: ${catalog[i].pages}`
        nodes[3].textContent=`Availability: ${catalog[i].availability()}`
    }
}
populateSite()