const textArea = document.getElementById("tex");
const sendButton = document.getElementById("sendbtn");
const main = document.getElementById("main");

const del = `
  <img src="./images/delete_24dp_EB3D34_FILL0_wght400_GRAD0_opsz24.png" alt="del" id="abad">
`;

const img = `
  <img
    src="./images/avatars/image-juliusomo.png"
    alt="amy"
    id="aa"
  />
`;

sendButton.addEventListener("click", (e) => {
  e.preventDefault();
  const newMsg = document.createElement("div")
  newMsg.className = "c"
  newMsg.innerHTML = `
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
              ${del}
            </div>
            <br />
            <p>${textArea.value}</p>
          </div>
        </div>
      </div>
  `
  main.appendChild(newMsg)
  textArea.innerHTML = ``
});