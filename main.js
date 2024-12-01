    function checkForm() {
        let name = document.getElementById('name').value;
        console.log(name);
        let firstLetter = name[0];
        console.log(firstLetter);
        let upperFirstLetter = firstLetter.toUpperCase();
        console.log(upperFirstLetter);
        let slicedName = name.slice(1);
        console.log(slicedName);
        let correctName = upperFirstLetter + slicedName;
        console.log(correctName);
        
        let chatName = document.getElementById('chat-name');
        chatName.innerHTML = correctName.trim();

        let avatar = document.getElementById('avatar').value;
        console.log(avatar);

        let authorImage = document.getElementById('author-img');
        console.log(authorImage.hasAttribute('src'));

        authorImage.classList.add("image-size") 
        authorImage.src = avatar;
        
        let authorComment = document.getElementById('comment').value;
        console.log(authorComment);


        let authorCommentChat = document.getElementById('author-comment');
        authorCommentChat.innerHTML = authorComment.replace(/viagra/gi, "***").replace(/XXX/gi, "***");

        return false;
    }






