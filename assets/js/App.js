var post = {
    isSponsored: true,
    author: 'Test Author',
    title: 'Testing Post Title',
    body: 'Testing Post Body'
}

var data = post;

function Header(){
    return `<div class="header">
                
                    <span onClick="onHomeClicked()" >Home</span>
                    <span onClick="" >About</span>
                    <span onClick="" >Contact</span>
                </span>
            </div>`;
}

function onHomeClicked() {
    document.querySelector('body').innerHTML = HomePage();
}

function PostElement(postData){
    //console.log(postData.isSponsored);
    return `<div class="post"> 
                <h1>${postData.title}</h1>
                ${postData.isSponsored ? '<img src="assets/images/testImage.jpg">' : ''} 
                <h3>By ${postData.author}</h3>
                <p>${postData.body}</p>
            </div>`;
}

function PostPage(postData){
    return  `<div class="page">
                ${Header()}
                ${PostElement(postData)}
            </div>`;
}

function PostLists(data) {
    var list = "<ul>";
    for(var i = 0; i < data.length; i++) {
        list += `<li onClick="">${data[i].title}</li>`
    }
    return list += "</ul>";
}

function HomePage(){
    return `<div class="page">
                ${Header()}
                <h1>Welcome to my blog!</h1>
                <p>It's about lorem ipsum dolor sit amet, consectetur ad...</p>
                ${PostLists()}
            </div>`;
}

//console.log(Header())

//document.querySelector('body').innerHTML = "hi";

document.querySelector('body').innerHTML = PostPage(post);