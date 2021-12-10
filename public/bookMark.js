`use strict`

function add_bookMark(para_ID){
    console.log(para_ID);
    // console.log(bookID);
    var book_id = document.getElementById("book_id").innerText;
    const ans = window.prompt("========Do you want create BookMark?Y/N=======");
    console.log(ans);
    if(ans === 'N' || ans === 'n')
        return;
    let body = {
        book_id : book_id,
        para_id : para_ID,
        bookMark : ans
    }

    fetch('/add_bookmark',
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(body)
    }).then(res => res.json());

    console.log(book_id);
}
function delete_bookMark(delete_ID){
    const ans = prompt("Do you relly want to delete this book Mark");
    var book_id = document.getElementById("book_id").innerText;
    console.log(ans);
    console.log(delete_ID);
    console.log(book_id);
    let body = {
        book_id : book_id,
        delete_id : delete_ID,
    }

    fetch('/delete_bookMark',
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(body)
    }).then(res => res.json());
}
