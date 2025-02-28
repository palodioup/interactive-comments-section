const textArea = document.getElementById("tex");
const sendButton = document.getElementById("sendbtn");
const main = document.getElementById("main");
const img = `
  <img
    src="./images/avatars/image-juliusomo.png"
    alt="amy"
    id="aa"
  />
`;

sendButton.addEventListener("click", (e) => {
  e.preventDefault();
  main.innerHTML = `
      <div class="c">
        <div id="comments-div">
          <div class="counter">
            <img onclick="add()" src="./images/icon-plus.svg" alt="plus" id="p" />
            <h4 id="bum-txt">0</h4>
            <img onclick="subtract()" src="./images/icon-minus.svg" alt="minus" />
          </div>
          <div class="text">
            <div class="profile">
              ${img}
              <h4>juliusomo</h4>
              <p class="time">Now</p>
              <img src="./images/icon-reply.svg" alt="reply" id="ab" />
              <p>Reply</p>
            </div>
            <br />
            <p>${textArea.value}</p>
          </div>
        </div>
      </div>
  `;
  textArea.innerHTML = ``
});
