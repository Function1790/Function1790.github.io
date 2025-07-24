async function render(mdPath) {
  const response = await fetch(mdPath);
  const text = await response.text();

  const lines = text.split("\n");
  let html = "";
  let inList = false;

  for (let line of lines) {
    line = line.trim();

    // 제목 처리
    if (line.startsWith("### ")) {
      html += `<h3>${parseInline(line.slice(4))}</h3>`;
    } else if (line.startsWith("## ")) {
      html += `<h2>${parseInline(line.slice(3))}</h2>`;
    } else if (line.startsWith("# ")) {
      html += `<h1>${parseInline(line.slice(2))}</h1>`;
    }

    // 리스트 항목 처리
    else if (line.startsWith("- ")) {
      if (!inList) {
        html += "<ul>";
        inList = true;
      }
      html += `<li>${parseInline(line.slice(2))}</li>`;
    } else if (line.startsWith("<desc>") && line.endsWith("</desc>")) {
      const content = line
        .slice(6, -7)
        .split("|")
        .map((part) => part.trim());
      if (content.length === 2) {
        html += `
      <div class="desc-row">
        <div class="desc-key">${parseInline(content[0])}</div>
        <div class="desc-value">${parseInline(content[1])}</div>
      </div>
    `;
      }
    } else {
      if (inList) {
        html += "</ul>";
        inList = false;
      }

      // 이미지 처리
      const imgMatch = line.match(/^img\(['"](.+?)['"]\)$/);
      const bgImgMatch = line.match(/^bgImg\(['"](.+?)['"]\)$/);
      if (imgMatch) {
        html += `<img src="${imgMatch[1]}" alt="">`;
      } else if (bgImgMatch) {
        html += `<div class="main-img-wrap"><img src="${bgImgMatch[1]}" id="main-img"></div>`;
      } else if (line !== "") {
        html += `<p>${parseInline(line)}</p>`;
      } else {
        html += `<br>`;
      }
    }
  }

  if (inList) {
    html += "</ul>";
  }

  document.getElementById("content").innerHTML = html;
}

// 백틱 코드블록을 <code>로 변환
function parseInline(text) {
  return text
    .replace(/`([^`]+)`/g, "<code>$1</code>") // 백틱 코드
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>") // 볼드
    .replace(/---/g, "<hr>") // hr
    .replace(/<a>(.*?)<\/a>/g, (_, url) => {
      const displayText = url.replace(/^https:\/\/github\.com\//, "");
      return `<a href="${url}">${displayText}</a>`;
    }) // link
    .replace(
      /<blue>(.*?)<\/blue>/g,
      '<span style="color: rgba(112, 165, 240, 1);;">$1</span>'
    )
    .replace(
      /<red>(.*?)<\/red>/g,
      '<span style="color: rgb(240, 112, 112);">$1</span>'
    );
}
