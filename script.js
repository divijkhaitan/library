function book(title, author, pages){
    this.title=title
    this.author=author
    this.pages=pages
}

book.prototype.info= function(){
    console.log(`Name: ${this.title}\nAuthor: ${this.author}\nPages: ${this.pages}`)
}