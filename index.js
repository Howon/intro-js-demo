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

    const filteredChildren = children.map(x => x.data).filter(data => {
      return data.over_18 == false
    });

    const number = Math.floor((Math.random() * filteredChildren.length));

    const post = filteredChildren[number];

    const quote = document.createTextNode(post.title);
    const author = document.createTextNode("- " + post.author);

    const textNode = document.getElementById("quote");
    const authorNode = document.getElementById("author");
    textNode.appendChild(quote);
    authorNode.appendChild(author);
  });
})();
