const express = require('express')
const app = express()
app.use(express.json())

const books = [
    { id: 1, name: 'book1', author: 'author1' },
    { id: 2, name: 'book2', author: 'author2' },
    { id: 3, name: 'book3', author: 'author3' },
    { id: 4, name: 'book4', author: 'author4' },
    { id: 5, name: 'book5', author: 'author5' },
]

app.get("/", (req, res) => {
    res.send("Welcome to my API")
})

//localhost:3000/api/books

app.get("/api/books", (req, res) => {
    res.send(books)
})

//localhost:3000/api/books/1

/*
app.get("/api/books/:year/:month",(req,res)=>{
    res.send(req.params);
})
*/

app.get("/api/books/:bookid", (req, res) => {
    const reqid = req.params.bookid
    let book = books.filter((item) => item.id == reqid)
    if (book.length == 0) {
        res.status(404).send("<h1>Book not found</h1>")
    } else {
        res.send(book)
    }
})

app.post("/api/books", (req, res) => {
    //let data = req.body
    //data.name
    //data.author

    let { name, author } = req.body
    console.log(name, author)
    let newBook = {
        id: books.length + 1,
        name: name,
        author: author
    };
    books.push(newBook)
    res.send(newBook)
})

app.delete("/api/books/:bookid", (req, res) => {
    const reqid = req.params.bookid
    let book = books.find((item) => item.id == reqid)
    if (!book) {
        res.status(404).json({message:"Books not found",status:404})
        return;
    }
    const index = books.indexOf(book);
    console.log(index)
    books.splice(index, 1)
    res.send(book)
})

app.put("/api/books/:bookid", (req, res) => {
    const reqid = req.params.bookid
    let book = books.find((item) => item.id == reqid)
    if (!book) {
        res.status(404).json({message:"Books not found",status:404})
        return;
    }
    book.name = req.body.name
    book.author = req.body.author
    res.send(book)
})


app.listen(3000)