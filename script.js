const title = document.getElementsByClassName("typing")[0];
const cursor = document.getElementsByClassName("cursor")[0];
const texts = {
  title: "당연함에 의문을 던지고,\n익숙함 속에서 새로움을 찾습니다.",
};

const print = console.log;
function sleep(t) {
  return new Promise((resolve) => setTimeout(resolve, t));
}

(async function () {
  title.innerHTML = "|";
  let time, output, index;
  for (var i in texts.title) {
    time = 70;
    output = texts.title[i];
    index = i;
    if (texts.title[i] == "\\") {
      time = 200;
    } else if (texts.title[i] == "\n") {
      output = "<br>";
      time = 200;
    }
    print(title)
    title.innerHTML = title.innerHTML.replace("|", "");
    title.innerHTML += output;
    title.innerHTML += '|';
    await sleep(time);
  }
  title.innerHTML = title.innerHTML.replace("|", "");
})();

(async function () {
  while(true) {
    break;
    sleep(100);
  }
})();
