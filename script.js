let container=document.querySelector('.gridcontainer');
function book(title, author, pages, status, read){
    this.title=title
    this.author=author
    this.pages=pages
    this.status=status
    this.read=read
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

book.prototype.haveRead=function()
{
    if(this.read)
    {
        return "Completed"
    }
    else
    {
        return "Unread"
    }
}
book.prototype.toggleRead=function()
{
    this.read= !(this.read)
}


book.prototype.info= function(){
    console.log(`Name: ${this.title}\nAuthor: ${this.author}\nPages: ${this.pages}\nAvailability: ${this.availability}`)
}

const percy1=new book("Lightning Thief", "Rick Riordan", 254, true, true)
const clues39=new book ("One False Note", "Gordan Korman",198, false, true)
const artemis=new book ("Aretmis Fowl", "Eoin Colfer", 225, true, true)
const tweak=new book ("Tweak", "Nic Sheff", 322, false, true)
const alex= new book ("Skeleton Key", "Anthony Horowitz", 313, false, false)
const heroes=new book ("House of Hades", "Rick Riordan", 455, false, false)
const dragonball=new book("Dragon Ball Volume 1", "Akira Toriyama", 212, true, false)

let initcatalog=[percy1, clues39, artemis, tweak, alex, heroes, dragonball]
let divcat=[];
let catalog=[]

function populateSiten(){
    for (let i=0; i<initcatalog.length; i++)
    {
        addbook(initcatalog[i])
    }
}
populateSiten()


function addbook(newbook)
{
    let currentcard;
    let currentTitle;
    let currentAuth;
    let currentPages;
    let currentStatus;
    let currentButtons;
    let currentRead;    
        currentcard=document.createElement('div')//currentcard=document.querySelector(`[data='${i}']`)
        currentcard.classList.add('cards')
        currentcard.setAttribute('data',`${divcat.length}`)

        currentTitle=document.createElement('div')//currentcard=document.querySelector(`[data='${i}']`)
        currentTitle.classList.add('title')
        currentTitle.textContent=`Name: ${newbook.title}`
        
        currentAuth=document.createElement('div')
        currentAuth.classList.add('author')
        currentAuth.textContent=`Author: ${newbook.author}`
        
        currentPages=document.createElement('div')
        currentPages.classList.add('pages')
        currentPages.textContent=`Pages: ${newbook.pages}`
        
        currentStatus=document.createElement('div')
        currentStatus.classList.add('status')
        currentStatus.textContent=`Availability: ${newbook.availability()}`
        
        currentRead=document.createElement('div')
        currentRead.classList.add('read')
        currentRead.textContent=`Completion: ${newbook.haveRead()}`
        
        currentButtons=document.createElement('div')
        currentButtons.classList.add('buttonbar')
        
        remove=document.createElement('button')
        remove.classList.add('button')
        remove.addEventListener('click', clicked)
        remove.textContent="Remove"
        currentButtons.appendChild(remove)

        readToggle=document.createElement('button')
        readToggle.classList.add('button')
        readToggle.addEventListener('click', toggle)
        readToggle.textContent="Toggle Completion"
        currentButtons.appendChild(readToggle)

        currentcard.appendChild(currentTitle)
        currentcard.appendChild(currentAuth)
        currentcard.appendChild(currentPages)
        currentcard.appendChild(currentStatus)
        currentcard.appendChild(currentRead)
        currentcard.appendChild(currentButtons)

        container.appendChild(currentcard)
        divcat.push(currentcard)
        catalog.push(newbook)
}

function clicked(e)
{
    let currentcard=e.target.parentNode.parentNode;
    index=parseInt(currentcard.getAttribute('data'))
    currentcard.remove()
    divcat.splice(index,1)
    catalog.splice(index,1)
    //console.log(index)
    //console.log(index+1)
    //console.log(catalog.length)
    for(let i=index;i<catalog.length;i++)
    {
        console.log(divcat[i].getAttribute('data'))
        divcat[i].setAttribute('data',`${parseInt(divcat[i].getAttribute('data')) - 1}`)
    }
}

function toggle(e)
{
    let currentcard=e.target.parentNode.parentNode;
    index=parseInt(currentcard.getAttribute('data'))
    catalog[index].toggleRead();
    divcat[index].children[4].textContent=`Completion: ${catalog[index].haveRead()}`;

}