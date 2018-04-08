console.log("hello! trololololololololo");

$(() => {
  $(".btn-asans-show").click(function () {
    $(".card-body-asans").show();
  })

  // timer
  let timerTry = $("#timer");
  timerTry.hide();

  let timeCounter = 0;
  // seconds = timeCounter * 60;
  let counterInt = 0;
  let currentTime = 0;

  function humanReadableTime(seconds) {
    minutes = Math.floor(seconds / 60);
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    seconds %= 60;
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
  }

  function setTime(el, second) {
    counterInt = setInterval(function () {
      el.html(humanReadableTime(second));
      second -= 1;
      currentTime = second;
      if (second < 0) {
        clearInterval(counterInt);
      }
    }, 1000)
  }

  $("#start").click(function () {
    if (currentTime == 0) {
      setTime($("time"), timeCounter);
    } else {
      setTime($("time"), currentTime);
    }
    $(this).attr("disabled", true);
  })

  $("time").html(humanReadableTime(timeCounter));

  $("#stop").click(function () {
    clearInterval(counterInt);
    $("#start").removeAttr("disabled");
  })

  $("#clear").click(function () {
    clearInterval(counterInt);
    $("time").html(humanReadableTime(timeCounter));
    currentTime = 0;
    $("#start").removeAttr("disabled");
  })

  $(".stop-2m, .stop-4m, .stop-6m").click(function () {
    $("#timer").show().addClass("d-flex");
    $("#headingThree").hide();
    $("time").html(humanReadableTime($(this).attr("data-time")));
    timeCounter = $(this).attr("data-time");
    currentTime = 0;
  })
 
  //copy buttons
  $(".stojace").click(function () {
    $(".btn-repeat").text("");
    $(".stojace").clone(true).appendTo($(".btn-repeat"));
  })

  $(".skrety").click(function () {
    $(".btn-repeat").text("");
    $(".skrety").clone(true).appendTo($(".btn-repeat"));
  })

  $(".wygiecia").click(function () {
    $(".btn-repeat").text("");
    $(".wygiecia").clone(true).appendTo($(".btn-repeat"));
  })

  $(".odwrocone").click(function () {
    $(".btn-repeat").text("");
    $(".odwrocone").clone(true).appendTo($(".btn-repeat"));
  })

  //Api json
  let lastRandId = 0;

  function displayPos(el, array) {
    let arraySelected = [];
    let randId = 0;
    do {
      randId = Math.floor((Math.random() * 3) + 0);
    } while (randId == lastRandId);
    lastRandId = randId;

    var asans = $(".asany");
    var newHeader = $("<h3>");
    var description = $("<div>");
    var newImg = $("<img>");
    var newSteps = $('<div class="steps">');
    var newEffect = $("<p>");

    asans[0].innerHTML = "";
    newHeader.text(el[randId].name);
    asans.append(newHeader);
    $(description).html(el[randId].description);
    asans.append(description);
    newImg.attr("src", el[randId].img);
    asans.append(newImg);
    el[randId].steps.forEach((step, index) => {
      let i = index + 1;
      let newStep = $('<div class="step">' + i + '.' + ' ' + step + '</div>');
      newSteps.append(newStep);
    });
    asans.append(newSteps);
    newEffect.text(el[randId].effect);
    asans.append(newEffect);
  };

  let button = $(".btn-asany")
  let url = 'http://localhost:3000/'

  button.on("click", function () {
    $("time").html(humanReadableTime(timeCounter));
    let host = $(this).attr("data-host");
    $.ajax({
      url: url + host,
      method: "GET",
      dataType: "jsonp"
    }).done(function (response) {
      displayPos(response);
    }).fail(function (error) {
      console.log(error);
    });
  });

});