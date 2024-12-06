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



// Вешаем на кнопку слушателя события "клик", создаём функцию формирования содержимого чата
inputButton.addEventListener(
  "click",
  function createChatContent() {
    // Выводим в блок чата корректное имя, введённое пользователем, а именно: убираем лишние пробелы и оформляем заглавную первую букву
    const chatName = userName.value;
    const trimmedChatName = chatName.trim();
    const correctChatName = trimmedChatName[0].toUpperCase() + trimmedChatName.slice(1);
    authorName.textContent = correctChatName;

    // Выводим в блок чата аватар, введённый пользователем в инпут в виде ссылки на картинку
    const chatImage = userAvatar.value;
    authorImage.src = chatImage;

    // Выводим в блок чата комментарий, введённый пользователем в инпут в виде текста с проверкой на спам, а именно: заменой на *** строк "viagra" и "XXX"
    const chatComment = userComment.value;
    authorComment.textContent = chatComment.replace(/viagra/gi, "***").replace(/XXX/gi, "***");

    // Очищаем поля ввода
    userName.value = "";
    userAvatar.value = "";
    userComment.value = "";
  });


