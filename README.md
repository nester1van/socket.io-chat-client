# socket.io-chat-client
 
[Live demo](https://socket-io-chat-client.vercel.app)

Проект построен на стеке ***React - Redux - Socket.io*** , для маршрутизации использовался ***react-router-dom*** . 

Проект состоит из двух страниц:

1. Страница авторизации – пользователю нужно ввести имя для входа в чат.

2. Страница чата - на ней реализован чат клиент (подробное описание ниже).

### Страница

Ключевые элементы страницы:

* Шапка чата, в которой отображется текущая комната и кнопка выхода из чата.

* Тело чата отображает сообщения пользователей с датой, именем пользователя и текстом сообщения.

* Поле ввода сообщения с кнопкой отпавить

* Сайдбар, на котором показаны пользователи текущей комнаты. А также форма добавления комнаты, и список комнат, с возможностью перехода и удаления.


Проект запускаеться в консоли командой 
  npm start 
после чего он доступен для просмотра по адресу
  http://localhost:3000/