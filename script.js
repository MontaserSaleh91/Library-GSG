let books = [
   
    {
        title : 'Giovanni\'s Room',
        author : 'James Baldwin',
        image : 'https://www.powells.com/portals/0/images/9780345806567.jpg'
    },
    {
        title : 'All About Love',
        author : 'Bell Hooks',
        image : 'https://www.powells.com/portals/0/images/9780060959470.jpg'
    },
    {
        title : 'Desert Solitaire ',
        author : 'Edward Abbey',
        image : 'https://www.powells.com/portals/0/images/9780671695880.jpg'
    },
     {
        title : 'Disgrace',
        author : 'J. M. Coetzee',
        image : 'https://www.powells.com/portals/0/images/9780140296402.jpg'
    },
     {
        title : 'Gilead',
        author : 'Marilynne Robinson',
        image : 'https://www.powells.com/portals/0/images/9780312424404.jpg'
    },
     {
        title : '2666',
        author : 'Roberto Bolaño',
        image : 'https://powells-covers-2.s3.amazonaws.com/9780312429218.jpg'
    },
    {
       title : 'The Handmaid\'s Tale',
       author : 'Margaret Atwood',
       image : 'https://www.powells.com/portals/0/images/9780385490818.jpg'
    },
    {
        title : 'The Left Hand of Darkness',
        author : 'Ursula K. Le Guin',
        image : 'https://www.powells.com/portals/0/images/9780441007318.jpg'
    },
    {
        title : 'Lolita',
        author : 'Vladimir Nabokov',
        image : 'https://www.powells.com/portals/0/images/9780679723165.jpg'
    },
    {
        title : 'Man\'s Search for Meaning',
        author : 'Viktor E. Frankl',
        image : 'https://www.powells.com/portals/0/images/9780807014271.jpg'
    }
    
    
];

(
    function creatBooks() {
        for (let i = 0; i < books.length; i++) {
            
            let library = document.getElementById('library'),
                book = document.createElement('div'),
                a = document.createElement('a'),
                images = document.createElement('img'),
                title = document.createElement('h1'),
                author = document.createElement('p');
                
                images.src = books[i].image;
                library.appendChild(book);
                
                book.className = 'card column';
                images.className = 'image';
                author.className = 'author';
                title.className = 'title';
                
                book.appendChild(a);
                a.appendChild(images);
                            
                book.appendChild(title);
                book.appendChild(author);
                
                let titleBook = document.createTextNode(books[i].title);
                title.appendChild(titleBook);
                
                let authorBook = document.createTextNode(books[i].author);
                author.appendChild(authorBook);
                
        }     
            
    })();

function uploadData() {
    var title1 = document.getElementById("title").value,
        author1 = document.getElementById("author").value,
        image1 = document.getElementById("image").value;
    books.push({title: title1,author: author1,image: image1});
    let library = document.getElementById('library'),
            book = document.createElement('div'),
            a = document.createElement('a'),
            images = document.createElement('img'),
            title = document.createElement('h1'),
            author = document.createElement('p');
            
            images.src = books[books.length-1].image;
            library.appendChild(book);
            
            book.className = 'card column';
            images.className = 'image';
            author.className = 'author';
            title.className = 'title';
            
            book.appendChild(a);
            a.appendChild(images);
            
            book.appendChild(title);
            book.appendChild(author);
            
            let titleBook = document.createTextNode(books[books.length-1].title);
            title.appendChild(titleBook);
            
            let authorBook = document.createTextNode(books[books.length-1].author);
            author.appendChild(authorBook);
            return title1;
}
