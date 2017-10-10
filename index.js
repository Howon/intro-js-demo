const httpReq = (mode, path, success, fail) => {
  const xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = () => {
    if (xmlhttp.readyState === XMLHttpRequest.DONE) {
      if (xmlhttp.status === 200) {
        success(JSON.parse(xmlhttp.responseText));
      } else {
        fail();
      }
    }
  };

  xmlhttp.open(mode, path, true);
  xmlhttp.send();
};

(() => {
  httpReq("GET", "https://www.reddit.com/r/showerthoughts.json", res => {
    const children = res.data.children;

    const titles = children.map(x => x.data).filter(data => {
      return data.over_18 == false
    }).map(data => {
      return document.createTextNode(data.title);
    });

    const authors = children.map(x => x.data).filter(data => {
      return data.over_18 == false
    }).map(data => {
      return document.createTextNode("—" + data.author);
    });

    const number = Math.floor((Math.random() * 24) + 1);

    if (titles[number].length > 120){
      const l = document.getElementsByClassName("long_quote")[0].appendChild(titles[number]);
    }

    else {
      const g = document.getElementsByClassName("quote")[0].appendChild(titles[number]);

    }

    const a = document.getElementsByClassName("author")[0].appendChild(authors[number]);
  });
})();

const x = y => {y + 5;}

x(f, s)