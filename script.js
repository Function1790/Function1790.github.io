// Title
const title = document.getElementsByClassName("typing")[0];
const texts = {
  title: "당연함에 의문을 던지고,\n익숙함 속에서 새로움을 찾습니다.",
};
const cursorHTML = '<span class="cursor">.</span>';

const print = console.log;
function sleep(t) {
  return new Promise((resolve) => setTimeout(resolve, t));
}

(async function () {
  title.innerHTML = cursorHTML;
  let time, output, index;
  for (var i in texts.title) {
    time = 70;
    output = texts.title[i];
    index = i;
    if (texts.title[i] == "\\") {
      time = 250;
    } else if (texts.title[i] == "\n") {
      output = "<br>";
      time = 250;
    }
    title.innerHTML = title.innerHTML.replace(cursorHTML, "");
    title.innerHTML += output;
    title.innerHTML += cursorHTML;
    await sleep(time);
  }
  //title.innerHTML = title.innerHTML.replace("|", "");
  cursor = document.getElementsByClassName("cursor")[0];
  while (true) {
    cursor.style.backgroundColor = "transparent";
    await sleep(1000);
    cursor.style.backgroundColor = "white";
    await sleep(1000);
  }
})();

// Fade
const elements = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.1 }
);

elements.forEach((el) => observer.observe(el));

// Projects
const projectItems = document.querySelectorAll(".project-item");

const observer2 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer2.unobserve(entry.target); // 한 번만 실행되도록
      }
    });
  },
  {
    threshold: 0.2,
  }
);

projectItems.forEach((item) => observer2.observe(item));
