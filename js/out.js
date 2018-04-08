/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("console.log(\"hello! trololololololololo\");\n\n$(() => {\n  $(\".btn-asans-show\").click(function () {\n    $(\".card-body-asans\").show();\n  })\n\n  // timer\n  let timerTry = $(\"#timer\");\n  timerTry.hide();\n\n  let timeCounter = 0;\n  // seconds = timeCounter * 60;\n  let counterInt = 0;\n  let currentTime = 0;\n\n  function humanReadableTime(seconds) {\n    minutes = Math.floor(seconds / 60);\n    if (minutes < 10) {\n      minutes = `0${minutes}`;\n    }\n    seconds %= 60;\n    if (seconds < 10) {\n      seconds = `0${seconds}`;\n    }\n    return `${minutes}:${seconds}`;\n  }\n\n  function setTime(el, second) {\n    counterInt = setInterval(function () {\n      el.html(humanReadableTime(second));\n      second -= 1;\n      currentTime = second;\n      if (second < 0) {\n        clearInterval(counterInt);\n      }\n    }, 1000)\n  }\n\n  $(\"#start\").click(function () {\n    if (currentTime == 0) {\n      setTime($(\"time\"), timeCounter);\n    } else {\n      setTime($(\"time\"), currentTime);\n    }\n    $(this).attr(\"disabled\", true);\n  })\n\n  $(\"time\").html(humanReadableTime(timeCounter));\n\n  $(\"#stop\").click(function () {\n    clearInterval(counterInt);\n    $(\"#start\").removeAttr(\"disabled\");\n  })\n\n  $(\"#clear\").click(function () {\n    clearInterval(counterInt);\n    $(\"time\").html(humanReadableTime(timeCounter));\n    currentTime = 0;\n    $(\"#start\").removeAttr(\"disabled\");\n  })\n\n  $(\".stop-2m, .stop-4m, .stop-6m\").click(function () {\n    $(\"#timer\").show().addClass(\"d-flex\");\n    $(\"#headingThree\").hide();\n    $(\"time\").html(humanReadableTime($(this).attr(\"data-time\")));\n    timeCounter = $(this).attr(\"data-time\");\n    currentTime = 0;\n  })\n \n  //copy buttons\n  $(\".stojace\").click(function () {\n    $(\".btn-repeat\").text(\"\");\n    $(\".stojace\").clone(true).appendTo($(\".btn-repeat\"));\n  })\n\n  $(\".skrety\").click(function () {\n    $(\".btn-repeat\").text(\"\");\n    $(\".skrety\").clone(true).appendTo($(\".btn-repeat\"));\n  })\n\n  $(\".wygiecia\").click(function () {\n    $(\".btn-repeat\").text(\"\");\n    $(\".wygiecia\").clone(true).appendTo($(\".btn-repeat\"));\n  })\n\n  $(\".odwrocone\").click(function () {\n    $(\".btn-repeat\").text(\"\");\n    $(\".odwrocone\").clone(true).appendTo($(\".btn-repeat\"));\n  })\n\n  //Api json\n  let lastRandId = 0;\n\n  function displayPos(el, array) {\n    let arraySelected = [];\n    let randId = 0;\n    do {\n      randId = Math.floor((Math.random() * 3) + 0);\n    } while (randId == lastRandId);\n    lastRandId = randId;\n\n    var asans = $(\".asany\");\n    var newHeader = $(\"<h3>\");\n    var description = $(\"<div>\");\n    var newImg = $(\"<img>\");\n    var newSteps = $('<div class=\"steps\">');\n    var newEffect = $(\"<p>\");\n\n    asans[0].innerHTML = \"\";\n    newHeader.text(el[randId].name);\n    asans.append(newHeader);\n    $(description).html(el[randId].description);\n    asans.append(description);\n    newImg.attr(\"src\", el[randId].img);\n    asans.append(newImg);\n    el[randId].steps.forEach((step, index) => {\n      let i = index + 1;\n      let newStep = $('<div class=\"step\">' + i + '.' + ' ' + step + '</div>');\n      newSteps.append(newStep);\n    });\n    asans.append(newSteps);\n    newEffect.text(el[randId].effect);\n    asans.append(newEffect);\n  };\n\n  let button = $(\".btn-asany\")\n  let url = 'http://localhost:3000/'\n\n  button.on(\"click\", function () {\n    $(\"time\").html(humanReadableTime(timeCounter));\n    let host = $(this).attr(\"data-host\");\n    $.ajax({\n      url: url + host,\n      method: \"GET\",\n      dataType: \"jsonp\"\n    }).done(function (response) {\n      displayPos(response);\n    }).fail(function (error) {\n      console.log(error);\n    });\n  });\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBwLmpzPzcxYjQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQSxjQUFjLFFBQVEsR0FBRyxRQUFRO0FBQ2pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVILENBQUMiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKFwiaGVsbG8hIHRyb2xvbG9sb2xvbG9sb2xvbG9cIik7XG5cbiQoKCkgPT4ge1xuICAkKFwiLmJ0bi1hc2Fucy1zaG93XCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAkKFwiLmNhcmQtYm9keS1hc2Fuc1wiKS5zaG93KCk7XG4gIH0pXG5cbiAgLy8gdGltZXJcbiAgbGV0IHRpbWVyVHJ5ID0gJChcIiN0aW1lclwiKTtcbiAgdGltZXJUcnkuaGlkZSgpO1xuXG4gIGxldCB0aW1lQ291bnRlciA9IDA7XG4gIC8vIHNlY29uZHMgPSB0aW1lQ291bnRlciAqIDYwO1xuICBsZXQgY291bnRlckludCA9IDA7XG4gIGxldCBjdXJyZW50VGltZSA9IDA7XG5cbiAgZnVuY3Rpb24gaHVtYW5SZWFkYWJsZVRpbWUoc2Vjb25kcykge1xuICAgIG1pbnV0ZXMgPSBNYXRoLmZsb29yKHNlY29uZHMgLyA2MCk7XG4gICAgaWYgKG1pbnV0ZXMgPCAxMCkge1xuICAgICAgbWludXRlcyA9IGAwJHttaW51dGVzfWA7XG4gICAgfVxuICAgIHNlY29uZHMgJT0gNjA7XG4gICAgaWYgKHNlY29uZHMgPCAxMCkge1xuICAgICAgc2Vjb25kcyA9IGAwJHtzZWNvbmRzfWA7XG4gICAgfVxuICAgIHJldHVybiBgJHttaW51dGVzfToke3NlY29uZHN9YDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFRpbWUoZWwsIHNlY29uZCkge1xuICAgIGNvdW50ZXJJbnQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICBlbC5odG1sKGh1bWFuUmVhZGFibGVUaW1lKHNlY29uZCkpO1xuICAgICAgc2Vjb25kIC09IDE7XG4gICAgICBjdXJyZW50VGltZSA9IHNlY29uZDtcbiAgICAgIGlmIChzZWNvbmQgPCAwKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoY291bnRlckludCk7XG4gICAgICB9XG4gICAgfSwgMTAwMClcbiAgfVxuXG4gICQoXCIjc3RhcnRcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgIGlmIChjdXJyZW50VGltZSA9PSAwKSB7XG4gICAgICBzZXRUaW1lKCQoXCJ0aW1lXCIpLCB0aW1lQ291bnRlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFRpbWUoJChcInRpbWVcIiksIGN1cnJlbnRUaW1lKTtcbiAgICB9XG4gICAgJCh0aGlzKS5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XG4gIH0pXG5cbiAgJChcInRpbWVcIikuaHRtbChodW1hblJlYWRhYmxlVGltZSh0aW1lQ291bnRlcikpO1xuXG4gICQoXCIjc3RvcFwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgY2xlYXJJbnRlcnZhbChjb3VudGVySW50KTtcbiAgICAkKFwiI3N0YXJ0XCIpLnJlbW92ZUF0dHIoXCJkaXNhYmxlZFwiKTtcbiAgfSlcblxuICAkKFwiI2NsZWFyXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICBjbGVhckludGVydmFsKGNvdW50ZXJJbnQpO1xuICAgICQoXCJ0aW1lXCIpLmh0bWwoaHVtYW5SZWFkYWJsZVRpbWUodGltZUNvdW50ZXIpKTtcbiAgICBjdXJyZW50VGltZSA9IDA7XG4gICAgJChcIiNzdGFydFwiKS5yZW1vdmVBdHRyKFwiZGlzYWJsZWRcIik7XG4gIH0pXG5cbiAgJChcIi5zdG9wLTJtLCAuc3RvcC00bSwgLnN0b3AtNm1cIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICQoXCIjdGltZXJcIikuc2hvdygpLmFkZENsYXNzKFwiZC1mbGV4XCIpO1xuICAgICQoXCIjaGVhZGluZ1RocmVlXCIpLmhpZGUoKTtcbiAgICAkKFwidGltZVwiKS5odG1sKGh1bWFuUmVhZGFibGVUaW1lKCQodGhpcykuYXR0cihcImRhdGEtdGltZVwiKSkpO1xuICAgIHRpbWVDb3VudGVyID0gJCh0aGlzKS5hdHRyKFwiZGF0YS10aW1lXCIpO1xuICAgIGN1cnJlbnRUaW1lID0gMDtcbiAgfSlcbiBcbiAgLy9jb3B5IGJ1dHRvbnNcbiAgJChcIi5zdG9qYWNlXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAkKFwiLmJ0bi1yZXBlYXRcIikudGV4dChcIlwiKTtcbiAgICAkKFwiLnN0b2phY2VcIikuY2xvbmUodHJ1ZSkuYXBwZW5kVG8oJChcIi5idG4tcmVwZWF0XCIpKTtcbiAgfSlcblxuICAkKFwiLnNrcmV0eVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgJChcIi5idG4tcmVwZWF0XCIpLnRleHQoXCJcIik7XG4gICAgJChcIi5za3JldHlcIikuY2xvbmUodHJ1ZSkuYXBwZW5kVG8oJChcIi5idG4tcmVwZWF0XCIpKTtcbiAgfSlcblxuICAkKFwiLnd5Z2llY2lhXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAkKFwiLmJ0bi1yZXBlYXRcIikudGV4dChcIlwiKTtcbiAgICAkKFwiLnd5Z2llY2lhXCIpLmNsb25lKHRydWUpLmFwcGVuZFRvKCQoXCIuYnRuLXJlcGVhdFwiKSk7XG4gIH0pXG5cbiAgJChcIi5vZHdyb2NvbmVcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICQoXCIuYnRuLXJlcGVhdFwiKS50ZXh0KFwiXCIpO1xuICAgICQoXCIub2R3cm9jb25lXCIpLmNsb25lKHRydWUpLmFwcGVuZFRvKCQoXCIuYnRuLXJlcGVhdFwiKSk7XG4gIH0pXG5cbiAgLy9BcGkganNvblxuICBsZXQgbGFzdFJhbmRJZCA9IDA7XG5cbiAgZnVuY3Rpb24gZGlzcGxheVBvcyhlbCwgYXJyYXkpIHtcbiAgICBsZXQgYXJyYXlTZWxlY3RlZCA9IFtdO1xuICAgIGxldCByYW5kSWQgPSAwO1xuICAgIGRvIHtcbiAgICAgIHJhbmRJZCA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAzKSArIDApO1xuICAgIH0gd2hpbGUgKHJhbmRJZCA9PSBsYXN0UmFuZElkKTtcbiAgICBsYXN0UmFuZElkID0gcmFuZElkO1xuXG4gICAgdmFyIGFzYW5zID0gJChcIi5hc2FueVwiKTtcbiAgICB2YXIgbmV3SGVhZGVyID0gJChcIjxoMz5cIik7XG4gICAgdmFyIGRlc2NyaXB0aW9uID0gJChcIjxkaXY+XCIpO1xuICAgIHZhciBuZXdJbWcgPSAkKFwiPGltZz5cIik7XG4gICAgdmFyIG5ld1N0ZXBzID0gJCgnPGRpdiBjbGFzcz1cInN0ZXBzXCI+Jyk7XG4gICAgdmFyIG5ld0VmZmVjdCA9ICQoXCI8cD5cIik7XG5cbiAgICBhc2Fuc1swXS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIG5ld0hlYWRlci50ZXh0KGVsW3JhbmRJZF0ubmFtZSk7XG4gICAgYXNhbnMuYXBwZW5kKG5ld0hlYWRlcik7XG4gICAgJChkZXNjcmlwdGlvbikuaHRtbChlbFtyYW5kSWRdLmRlc2NyaXB0aW9uKTtcbiAgICBhc2Fucy5hcHBlbmQoZGVzY3JpcHRpb24pO1xuICAgIG5ld0ltZy5hdHRyKFwic3JjXCIsIGVsW3JhbmRJZF0uaW1nKTtcbiAgICBhc2Fucy5hcHBlbmQobmV3SW1nKTtcbiAgICBlbFtyYW5kSWRdLnN0ZXBzLmZvckVhY2goKHN0ZXAsIGluZGV4KSA9PiB7XG4gICAgICBsZXQgaSA9IGluZGV4ICsgMTtcbiAgICAgIGxldCBuZXdTdGVwID0gJCgnPGRpdiBjbGFzcz1cInN0ZXBcIj4nICsgaSArICcuJyArICcgJyArIHN0ZXAgKyAnPC9kaXY+Jyk7XG4gICAgICBuZXdTdGVwcy5hcHBlbmQobmV3U3RlcCk7XG4gICAgfSk7XG4gICAgYXNhbnMuYXBwZW5kKG5ld1N0ZXBzKTtcbiAgICBuZXdFZmZlY3QudGV4dChlbFtyYW5kSWRdLmVmZmVjdCk7XG4gICAgYXNhbnMuYXBwZW5kKG5ld0VmZmVjdCk7XG4gIH07XG5cbiAgbGV0IGJ1dHRvbiA9ICQoXCIuYnRuLWFzYW55XCIpXG4gIGxldCB1cmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwLydcblxuICBidXR0b24ub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgJChcInRpbWVcIikuaHRtbChodW1hblJlYWRhYmxlVGltZSh0aW1lQ291bnRlcikpO1xuICAgIGxldCBob3N0ID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1ob3N0XCIpO1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6IHVybCArIGhvc3QsXG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICBkYXRhVHlwZTogXCJqc29ucFwiXG4gICAgfSkuZG9uZShmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIGRpc3BsYXlQb3MocmVzcG9uc2UpO1xuICAgIH0pLmZhaWwoZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfSk7XG4gIH0pO1xuXG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9hcHAuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);