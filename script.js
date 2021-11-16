let contentGridElement = document.getElementById("contentGrid");

let json = [
  {
    image: "img/dav.png",
    color: "#B9d8c2",
    width: "40%",
    height: "31%",
    shadowcol: "#767676",
    url: "https://drive.google.com/drive/my-drive",
  },
  {
    image: "img/eye.png",
    color: "#9ac2c9",
    width: "45%",
    height: "30%",
    shadowcol: "#767676",
    url: "https://wp.nyu.edu/tandonschoolofengineering-cyrene_ch/2021/03/21/diptych-recap-sculpt-the-sculpture/",
  },
  {
    image: "img/panda.png",
    color: "#ffcb47",
    width: "45%",
    height: "30%",
    shadowcol: "#767676",
    url: "https://wp.nyu.edu/tandonschoolofengineering-cyrene_ch/2021/03/21/diptych-recap-sculpt-the-sculpture/",
  },
];

for (var i = 0; i < json.length; i++) {
  createElementProper(json[i]);
}

function createElementProper(incomingJSON) {
  /// Create whole content item div and set class
  let newContentElement = document.createElement("DIV");
  newContentElement.style.backgroundColor = incomingJSON["color"];
  newContentElement.classList.add("contentItem");

  let newImage = document.createElement("IMG");
  newURL = incomingJSON["url"];
  newImage.classList.add("mainpic");
  newImage.onclick = function () {
    window.location.href =
      "https://wp.nyu.edu/tandonschoolofengineering-cyrene_ch/2021/03/21/diptych-recap-sculpt-the-sculpture/";
  };
  newImage.style.width = incomingJSON["width"];
  newImage.style.height = incomingJSON["height"];
  newImage.src = incomingJSON["image"];
  newContentElement.appendChild(newImage);

  let shadow = document.createElement("div");
  shadow.classList.add("ovalshadow");
  shadow.style.backgroundColor = incomingJSON["shadowcol"];
  newContentElement.appendChild(shadow);

  contentGridElement.appendChild(newContentElement);
}
