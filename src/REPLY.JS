const replyBtn = document.getElementById("ab");
const replyBtn1 = document.getElementById("ab1");
const replyBtn2 = document.getElementById("ab2");
const replyBtn3 = document.getElementById("ab3");
const mainZ = document.getElementById("main");
const textAreaZ = document.getElementById("tex");

const delZa = `
  <img src="./images/delete_24dp_EB3D34_FILL0_wght400_GRAD0_opsz24.png" alt="del" id="aba">
`;

const delZb = `
  <img src="./images/delete_24dp_EB3D34_FILL0_wght400_GRAD0_opsz24.png" alt="del" id="ab1a">
`;

const delZc = `
  <img src="./images/delete_24dp_EB3D34_FILL0_wght400_GRAD0_opsz24.png" alt="del" id="ab2a">
`;

const delZd = `
  <img src="./images/delete_24dp_EB3D34_FILL0_wght400_GRAD0_opsz24.png" alt="del" id="ab3a">
`;

const imgZ = `
  <img
    src="./images/avatars/image-juliusomo.png"
    alt="amy"
    id="aa"
  />
`;

replyBtn.addEventListener("click", () => {
  const text = document.createElement("div");
  text.innerHTML = `

          <div class="c">
            <div id="comments-diva">
              <div class="counter">
                <img onclick="add2()" src="./images/icon-plus.svg" alt="plus" id="p" />
                <h4 id="bum-txt2">0</h4>
                <img onclick="subtract2()" src="./images/icon-minus.svg" alt="minus" />
              </div>
              <div class="text">
                <div class="profile">
                  ${imgZ}
                  <h4>ramsesmiron</h4>
                  <p class="time">Now</p>
                  ${delZa}
                  <p>Reply</p>
                </div>
                <br />
                <p>
                  ${textAreaZ.value}
                </p>
              </div>
            </div>
          </div>
          </div>
  `;
  mainZ.appendChild(text);
});

replyBtn1.addEventListener("click", () => {
  const text = document.createElement("div");
  text.innerHTML = `
    
          <div class="c">
            <div id="comments-diva">
              <div class="counter">
                <img onclick="add2()" src="./images/icon-plus.svg" alt="plus" id="p" />
                <h4 id="bum-txt2">0</h4>
                <img onclick="subtract2()" src="./images/icon-minus.svg" alt="minus" />
              </div>
              <div class="text">
                <div class="profile">
                  ${imgZ}
                  <h4>ramsesmiron</h4>
                  <p class="time">Now</p>
                  ${delZb}
                  <p>Reply</p>
                </div>
                <br />
                <p>
                  ${textAreaZ.value}
                </p>
              </div>
            </div>
          </div>
          </div>
  `;
  mainZ.appendChild(text);
});

replyBtn2.addEventListener("click", () => {
  const text = document.createElement("div");
  text.innerHTML = `
    
          <div class="c">
            <div id="comments-diva">
              <div class="counter">
                <img onclick="add2()" src="./images/icon-plus.svg" alt="plus" id="p" />
                <h4 id="bum-txt2">0</h4>
                <img onclick="subtract2()" src="./images/icon-minus.svg" alt="minus" />
              </div>
              <div class="text">
                <div class="profile">
                  ${imgZ}
                  <h4>ramsesmiron</h4>
                  <p class="time">Now</p>
                  ${delZc}
                  <p>Reply</p>
                </div>
                <br />
                <p>
                  ${textAreaZ.value}
                </p>
              </div>
            </div>
          </div>
          </div>
  `;
  mainZ.appendChild(text);
});

replyBtn3.addEventListener("click", () => {
  const text = document.createElement("div");
  text.innerHTML = `
    
          <div class="c">
            <div id="comments-diva">
              <div class="counter">
                <img onclick="add2()" src="./images/icon-plus.svg" alt="plus" id="p" />
                <h4 id="bum-txt2">0</h4>
                <img onclick="subtract2()" src="./images/icon-minus.svg" alt="minus" />
              </div>
              <div class="text">
                <div class="profile">
                  ${imgZ}
                  <h4>ramsesmiron</h4>
                  <p class="time">Now</p>
                  ${delZd}
                  <p>Reply</p>
                </div>
                <br />
                <p>
                  ${textAreaZ.value}
                </p>
              </div>
            </div>
          </div>
          </div>
  `;
  mainZ.appendChild(text);
});

const remove = () => {
  mainZ.parentNode.removeChild(mainZ)
}

mainZ.innerHTML = ``
insertBefore(mainZ)