const replyBtn = document.getElementById("ab");
const replyBtn1 = document.getElementById("ab1");
const replyBtn2 = document.getElementById("ab2");
const replyBtn3 = document.getElementById("ab3");
const mainZ = document.getElementById("main");
const textAreaZ = document.getElementById("tex");

replyBtn.addEventListener("click", () => {
  const text = document.createElement("div")
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
                  <img
                    src="./images/avatars/image-ramsesmiron.png"
                    alt="amy"
                    id="aa"
                  />
                  <h4>ramsesmiron</h4>
                  <p class="time">Now</p>
                  <img src="./images/icon-reply.svg" alt="reply" id="ab2" />
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
  `
  mainZ.appendChild(text)
});

replyBtn1.addEventListener("click", () => {
  const text = document.createElement("div")
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
                  <img
                    src="./images/avatars/image-ramsesmiron.png"
                    alt="amy"
                    id="aa"
                  />
                  <h4>ramsesmiron</h4>
                  <p class="time">Now</p>
                  <img src="./images/icon-reply.svg" alt="reply" id="ab2" />
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
  `
  mainZ.appendChild(text)
});

replyBtn2.addEventListener("click", () => {
  const text = document.createElement("div")
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
                  <img
                    src="./images/avatars/image-ramsesmiron.png"
                    alt="amy"
                    id="aa"
                  />
                  <h4>ramsesmiron</h4>
                  <p class="time">Now</p>
                  <img src="./images/icon-reply.svg" alt="reply" id="ab2" />
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
  `
  mainZ.appendChild(text)
});

replyBtn3.addEventListener("click", () => {
  const text = document.createElement("div")
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
                  <img
                    src="./images/avatars/image-ramsesmiron.png"
                    alt="amy"
                    id="aa"
                  />
                  <h4>ramsesmiron</h4>
                  <p class="time">Now</p>
                  <img src="./images/icon-reply.svg" alt="reply" id="ab2" />
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
  `
  mainZ.appendChild(text)
});
