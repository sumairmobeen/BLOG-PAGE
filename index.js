
var mylist = document.getElementById("mylist")

function login() {

    let Emails = document.getElementById("uEmail").value;
    let Passwords = document.getElementById("uPassword").value;
    let user1 = {
        email: Emails,
        password: Passwords
    }
    const Http = new XMLHttpRequest();
    const url = "http://localhost:5000/login"
    Http.open("POST", url);
    Http.setRequestHeader("Content-Type", "application/json");

    Http.send(JSON.stringify(user1));
    document.getElementById('uEmail').value = "";
    document.getElementById('uPassword').value = "";
    Http.onreadystatechange = (e) => {
        var resp = JSON.parse(Http.responseText);
        if (resp.status === 200) {
            alert(resp.message);

            window.location.href = "blog.html";
        }
        else {
            alert(resp.message);
        }
    }
    return false;
}

///////////// blog code/////////////////////

function funcblog() {
    var blogs = {
        title: document.getElementById("title").value,
        text: document.getElementById("textarea").value,
    }
    console.log(blogs);
    const Http = new XMLHttpRequest();
    const url = "http://localhost:5000/blogs"
    Http.open("POST", url);
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify(blogs));
    document.getElementById('title').value = "";
    document.getElementById('textarea').value = "";
    Http.onreadystatechange = (e) => {
        console.log(Http.responseText);
        window.location.href = "index.html";

    }


    return false;
}
/////////////////// blogdata-dispalay//////////////

function getdata() {
    var mydata = document.getElementById("blogdata");
    const Http = new XMLHttpRequest()
    const url = "http://localhost:5000/getdata"
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange = (e) => {
        var blogdata = JSON.parse(Http.responseText)
        console.log(blogdata);

        for (let i = 0; i < blogdata.length; i++) {
            var list = document.createElement("li");
            list.innerHTML = blogdata[i].title + " " + blogdata[i].text
            mylist.appendChild(list);
        }
      

    }
}


