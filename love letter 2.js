$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  var yesButton = $("#yes-button");
  var noButton = $("#no-button");
  var decisionImage = $("#decision-image");
  var decisionText = $("#decision-text");

  yesButton.click(function () {
    decisionImage.attr("src", "pictures/Happy.gif");
    decisionText.text("Yay! 💖 See you Ganda!");
  });

  noButton.click(function () {
    decisionImage.attr("src", "pictures/Sad.gif");
    decisionText.text("HUHUHUHUHUHU :(");
  });

  envelope.click(function () {
    open();
  });
  btn_open.click(function () {
    open();
  });
  btn_reset.click(function () {
    close();
  });

  function open() {
    envelope.addClass("open").removeClass("close");
  }
  function close() {
    envelope.addClass("close").removeClass("open");
  }
});
