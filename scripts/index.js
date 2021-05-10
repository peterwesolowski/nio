/* 
  Links to Icomoon selection JSON, Icomoon icon font css and Nissan font.
  Nissan font CSS is optional, can be skipped ther is no need for Nissan 
  font on the page.
*/

const iconJsonUrl   = 'https://i.icomoon.io/public/2dd01fe93e/Nissan/selection.json',
      iconFontUrl   = 'https://i.icomoon.io/public/2dd01fe93e/Nissan/style.css',
      nissanFontUrl = 'https://libs-europe.nissan-cdn.net/etc/designs/nissan_next_v3/21.04.2.NISSAN-11/common-assets/css/fonts/fonts-latin-basic.min.css';

/*
  CSS id'd and classess names. Those can be changed if they collide with 
  container page id's of classess.
*/

const nioWrapperId        = 'nio-container',
      nioHeaderClass      = 'nio-header',
      nioFilterId         = 'nio-filter',
      nioFilterClass      = 'nio-filter-wrapper',
      nioSizeId           = 'nio-size',
      nioSizeClass        = 'nio-size-wrapper',
      nioOptionsClass     = 'nio-options-wrapper',
      nioToggleCssId      = 'nio-toggle-css',
      nioToggleCodeId     = 'nio-toggle-code',
      nioToggleTagsId     = 'nio-toggle-tags',
      nioWrapperClass     = 'nio-items-wrapper',
      nioItemClass        = 'nio-item',
      nioIconClass        = 'nio-icon',
      nioIconWrapperClass = 'nio-icon-wrapper',
      nioNameClass        = 'nio-name',
      nioCssClass         = 'nio-css',
      nioCodeClass        = 'nio-code',
      nioTagsClass        = 'nio-tags',
      nioHideClass        = 'nio-hide';

const styles = `
  .${nioHideClass}{ display: none !important; }
  #${nioWrapperId}{
    margin: 0;
    padding: 0;
    font-family: "Nissan Regular",Verdana,Arial,sans-serif;
  }
  .${nioHeaderClass}{
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  .${nioHeaderClass} > div{
    padding: 10px;
    margin: 10px 10px 0 10px;
  }
  .${nioWrapperClass}{
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  .${nioItemClass}{
    width: 230px;
    padding: 10px;
    margin: 20px 10px 0 10px;
  }
  .${nioIconWrapperClass}{
    display: inline-block;
    padding: 20px;
    background: #f2f2f2;
  }
  .${nioIconClass}{
    padding-bottom: 20px;
    font-size: 24px;
  }
  .${nioNameClass}{
    font-weight: bold;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 2px;
  }
  .${nioCssClass}, .${nioCodeClass}{
    display: block;
    margin-bottom: 5px;
    font-family: "Nissan Light";
    font-size: 12px;
    line-height: 162%;
    letter-spacing: 1.5px;
  }
  .${nioTagsClass}{
    list-style: none;
    margin: 10px 0 0 0;
    padding: 0;
  }
  .${nioTagsClass} li{
    display: inline-block;
    margin: 1px;
    padding: 0 5px;
    font-size: 10px;
    text-transform: uppercase;
    border: 2px solid black;
    box-sizing: border-box;
    border-radius: 4px;
    line-height: 167%;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-family: "Nissan Bold";
  }

  #${nioWrapperId} label{
    display: block;
    font-family: "Nissan Light";
    font-size: 16px;
    line-height: 162%;
    letter-spacing: 1.5px;
  }
  #${nioWrapperId} input, #${nioWrapperId} select{
    margin: 0;
    padding: 11px 12px;
    background: #FFFFFF;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 4px;
    font-family: "Nissan Light";
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 1.5px;

  }
  .${nioOptionsClass} a{
    display: inline-block;
    margin-right: 15px;
    padding: 12px 0;
    font-family: "Nissan Bold";
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-decoration: none;
    color: black;
  }
`;

/* Add Nissan Font css - optional */

if (typeof nissanFontUrl !== 'undefined'){
  let nissanFontCss = document.createElement("link");
  
  nissanFontCss.setAttribute("rel", "stylesheet");
  nissanFontCss.setAttribute("type", "text/css");
  nissanFontCss.setAttribute("href", nissanFontUrl);
  document.head.appendChild(nissanFontCss);
}

/* Add Icommon Icon font & css */

let iconFontCss = document.createElement("link");
    iconFontCss.setAttribute("rel", "stylesheet");
    iconFontCss.setAttribute("type", "text/css");
    iconFontCss.setAttribute("href", iconFontUrl);
    document.head.appendChild(iconFontCss);

let iconsCss = document.createElement("style");
    iconsCss.type = "text/css";
    iconsCss.innerText = styles;
    document.head.appendChild(iconsCss);

/* Template for filter bar - search, size and toggles */

let filterBarHtml = `
  <div class="${nioFilterClass}">
    <label for="${nioFilterId}">Search icon</label>
    <input type="text" id="${nioFilterId}" placeholder="name, tag, description..."/>
  </div>
`;

let arrSize = [24, 16, 32, 48, 64, 128],
    sizesHtml = '';
    for(i in arrSize){ sizesHtml += `<option>${arrSize[i]}</option>` }

let sizeBarHtml = `
  <div class="${nioSizeClass}">
    <label for="${nioSizeId}">Icon size</label>
    <select class="form-control" id="${nioSizeId}" onchange="changeSize(this);">
      ${sizesHtml}
    </select>
  </div>
`;

let optionsBarHtml = `
  <div class="${nioOptionsClass}">
    <label>Display options</label>
    <a href="#" id="${nioToggleCssId}" onclick="toggleCss(this)">Toggle CSS class name</a>
    <a href="#" id="${nioToggleCodeId}" onclick="toggleCode(this)">Toggle char code</a>
    <a href="#" id="${nioToggleTagsId}" onclick="toggleTags(this)">Toggle tags</a>
  </div>
`;

let iconWrapper = document.getElementById(nioWrapperId);
let xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let objNio = JSON.parse(this.responseText),
        nioItemsHtml = '';
    
    for (x in objNio.icons) {
      let tags = '',
          iconBlock = '',
          allTags = objNio.icons[x].icon.tags;
      
      for (i in objNio.icons[x].icon.tags){
        tags += `<li data-tag-no="${i}">${objNio.icons[x].icon.tags[i]}</li>`;
      }
      iconBlock = `
        <div class="${nioItemClass}" data-tags="${allTags}" data-code="${objNio.icons[x].properties.code.toString(16)}">
          <div class="${nioIconWrapperClass}">
            <span class="${nioIconClass} icon-${objNio.icons[x].properties.name}"></span>
          </div>
          <h2 class="${nioNameClass}" data-icon-no="${x}">${objNio.icons[x].properties.name.replaceAll('-', ' ').replaceAll('_', ' ')}</h2>
          <code class="${nioCssClass}">.icon-${objNio.icons[x].properties.name}</code>
          <code class="${nioCodeClass}">${objNio.icons[x].properties.code.toString(16)}</code>
          <ul class="${nioTagsClass}">${tags}</ul>
        </div>
      `;
      nioItemsHtml += iconBlock;
    }
    
    iconWrapper.innerHTML = `
      <div class="${nioHeaderClass}">
        ${filterBarHtml}
        ${sizeBarHtml}
        ${optionsBarHtml}
      </div>
      <div class="${nioWrapperClass}">
        ${nioItemsHtml}
      </div>
    `;
  }
};
xmlhttp.open( "GET", iconJsonUrl, true );
xmlhttp.send();

iconWrapper.addEventListener('keyup', event => {
  if (event.target.matches('#'+nioFilterId)) {
    let search = event.target.value.toLowerCase(),
        all    = iconWrapper.querySelectorAll("."+nioItemClass);

    for (let i of all) {
      let item = i.getAttributeNode("data-tags").value.toLowerCase();
      if (item.indexOf(search) == -1) { 
        i.classList.add(nioHideClass); 
      } else { 
        i.classList.remove(nioHideClass); 
      }
    }
  }
});

let changeSize = function (e) {
  let all = iconWrapper.querySelectorAll("."+nioIconClass);
  for (let i of all) {
    i.style.fontSize = e.value + 'px';
  }
}

let toggleElement = function (e) {
  e.classList.toggle(nioHideClass);
}

let toggleCss = function (e) {
  Array.from(iconWrapper.getElementsByClassName(nioCssClass)).forEach(toggleElement); 
  return false;
}

let toggleCode = function (e) {
  Array.from(iconWrapper.getElementsByClassName(nioCodeClass)).forEach(toggleElement); 
  return false;
}

let toggleTags = function (e) {
  Array.from(iconWrapper.getElementsByClassName(nioTagsClass)).forEach(toggleElement); 
  return false;
}