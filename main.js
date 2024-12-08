// Кнопка отправки содержимого инпутов
const inputButton = document.getElementById("inputbtn");
// Инпут, куда пользователь вводит имя
const userName = document.getElementById("username");
// Инпут, куда пользователь вводит ссылку на аватарку
const userAvatar = document.getElementById("useravatar");
// Инпут, куда пользователь вводит комментарий
const userComment = document.getElementById("usercomment");
// Блок, куда будет вставляться введённое пользователем имя
const authorName = document.getElementById("author-name");
// Блок, куда будет вставляться картинка из введённой пользователем ссылки
const authorImage = document.getElementById('author-img');
// Блок, куда будет вставляться введённый пользователем комментарий
const authorComment = document.getElementById("author-comment");
// Блок, куда будет вставляться время, когда пользователь вводит комментарий
const authorCommentDate = document.getElementById('comment-date');
// Массив аватарок
const images = [
  {src: './assets/images/1.jpg'},
  {src: './assets/images/2.jpg'},
  {src: './assets/images/3.jpg'},
  {src: './assets/images/4.jpg'},
  {src: './assets/images/5.jpg'},
  {src: './assets/images/6.jpg'},
]

    // Выводим в блок чата корректное имя, введённое пользователем, а именно: убираем лишние пробелы и оформляем заглавную первую букву. Добавляем условие: Если выбрана радиокнопка ДА, выводим корректное имя пользователя. Если выбрана радиокнопка НЕТ, выводим username вместо имени

    function insertCorrectName() {
      const radioYes = document.getElementById('showname').checked;
      const chatName = userName.value;
      const trimmedChatName = chatName.trim();
      const correctChatName = trimmedChatName[0].toUpperCase() + trimmedChatName.slice(1);

      if (radioYes === true) {
        authorName.textContent = correctChatName;
      } else {
        authorName.textContent = "username";
      }

    }

    // Выводим в блок чата аватар, введённый пользователем в инпут в виде ссылки на картинку
    function insertCorrectAvatar() {
      const chatImage = userAvatar.value;
      const randomIndex = Math.floor(Math.random() * images.length);
      const randomImage = images[randomIndex];
      const randomImageLink = randomImage.src;
      if (chatImage === "") {
        authorImage.src = randomImageLink;
      } else {
        authorImage.src = chatImage;
      }
    }

    // Выводим в блок чата комментарий, введённый пользователем в инпут в виде текста с проверкой на спам, а именно: заменой на *** строк "viagra" и "XXX"
    function insertCorrectComment() {
      const chatComment = userComment.value;
      authorComment.textContent = chatComment.replace(/viagra/gi, "***").replace(/XXX/gi, "***");
      // Выводим в блок чата время комментария, пропущенное через конвертер
      const chatCommentTime = Math.floor(Date.now() / 1000);
      authorCommentDate.textContent = timeConverter(chatCommentTime);
    }

    // Конвертер времени 
    function timeConverter(UNIX_timestamp){
      const a = new Date(UNIX_timestamp * 1000);
      const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      const year = a.getFullYear();
      const month = months[a.getMonth()];
      const date = a.getDate();
      const hour = a.getHours();
      const min = a.getMinutes();
      const sec = a.getSeconds();
      const time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
      return time;
  }

// Вешаем на кнопку слушателя события "клик", создаём функцию формирования содержимого чата
inputButton.addEventListener(
  "click",
  function createChatContent() {
    // radioChoice();
    // Вызываем функцию вставки корректного имени пользователя в чат
    insertCorrectName();
    // Вызываем функцию вставки корректного аватара пользователя в чат
    insertCorrectAvatar();
    // Вызываем функцию вставки корректного комментария пользователя в чат
    insertCorrectComment();

    
    // Очищаем поля ввода
    userName.value = "";
    userAvatar.value = "";
    userComment.value = "";
  });



  
  
  