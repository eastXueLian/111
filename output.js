//Sat Jan 11 2025 03:51:41 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
if (event.budget.kjstatus === 1) {
  var arr = event.budget.kjtxt.split(/[(\r\n)\r\n]+/);
  if (event.budget.time1 >= event.budget.kjtime) {
    chrome.storage.local.set({
      "time1": 0
    }, function () {});
    var num = arr.length;
    if (event.budget.kjsort == 2) {
      var randomNum = Math.floor(Math.random() * num) + 1;
      num > 1 ? randomNum == event.budget.sendid && (randomNum < num ? randomNum += 1 : randomNum = 1) : randomNum = 1;
      chrome.storage.local.set({
        "sendid": randomNum
      }, function () {});
      var element_input = document.querySelector("textarea[class^=input]");
      element_input.click();
      if (element_input._valueTracker) var _templMethod = element_input._valueTracker.getValue;
      if (element_input.getValue) var _templMethod = element_input.getValue;
      element_input._valueTracker && (element_input._valueTracker.getValue = () => "");
      if (typeof arr[randomNum - 1] === "undefined") element_input.value = "";else {
        element_input.value = hj(arr[randomNum - 1]);
        var eventt = new InputEvent("input", {
          "bubbles": true,
          "cancelable": true
        });
        element_input.dispatchEvent(eventt);
        element_input._valueTracker && (element_input._valueTracker.getValue = _templMethod);
        document.querySelector("[class^=text-area] [class^=button]").click();
      }
    } else event.budget.sort >= num ? chrome.storage.local.set({
      "sort": 1
    }, function () {
      var _0x5cdd00 = document.querySelector("textarea[class^=input]");
      _0x5cdd00.click();
      if (_0x5cdd00._valueTracker) {
        var _0x4b0370 = _0x5cdd00._valueTracker.getValue;
      }
      if (_0x5cdd00.getValue) {
        var _0x4b0370 = _0x5cdd00.getValue;
      }
      _0x5cdd00._valueTracker && (_0x5cdd00._valueTracker.getValue = () => "");
      if (typeof arr[0] === "undefined") {} else {
        _0x5cdd00.value = hj(arr[0]);
        var _0x3d21f3 = new InputEvent("input", {
          "bubbles": true,
          "cancelable": true
        });
        _0x5cdd00.dispatchEvent(_0x3d21f3);
        if (_0x5cdd00._valueTracker) {
          _0x5cdd00._valueTracker.getValue = _0x4b0370;
        }
        document.querySelector("[class^=text-area] [class^=button]").click();
      }
    }) : chrome.storage.local.set({
      "sort": event.budget.sort + 1
    }, function () {
      var _0x22780e = document.querySelector("textarea[class^=input]");
      _0x22780e.click();
      if (_0x22780e._valueTracker) var _0xc87f22 = _0x22780e._valueTracker.getValue;
      if (_0x22780e.getValue) {
        var _0xc87f22 = _0x22780e.getValue;
      }
      _0x22780e._valueTracker && (_0x22780e._valueTracker.getValue = () => "");
      if (typeof arr[event.budget.sort] === "undefined") {} else {
        _0x22780e.value = hj(arr[event.budget.sort]);
        var _0x2de573 = new InputEvent("input", {
          "bubbles": true,
          "cancelable": true
        });
        _0x22780e.dispatchEvent(_0x2de573);
        _0x22780e._valueTracker && (_0x22780e._valueTracker.getValue = _0xc87f22);
        document.querySelector("[class^=text-area] [class^=button]").click();
      }
    });
  } else chrome.storage.local.set({
    "time1": event.budget.time1 + 3
  }, function () {});
}
if (event.budget.spstatus === 1) {
  if (event.budget.time2 >= event.budget.sptime) {
    chrome.storage.local.set({
      "time2": 0
    }, function () {});
    var arras = event.budget.spstr;
    arras = arras.split(",");
    if (arras.length == 1) {
      var index = parseInt(arras[0]),
        divheight = document.querySelector("[class^=render-item]").offsetHeight,
        topdiv = document.querySelector("[class^=list-wrap]"),
        asdiv = topdiv.querySelector("div");
      asdiv.scrollTop = divheight * index - divheight;
      setTimeout(function () {
        var _0x594347 = document.querySelectorAll(".okee-current-live-input.okee-current-live-input-size-md"),
          _0x596b16 = document.querySelectorAll("[class^=render-item]");
        for (var _0x530bf5 = 0; _0x530bf5 < _0x594347.length; _0x530bf5++) {
          if (_0x594347[_0x530bf5].value == index) {
            {
              var _0x594347 = document.querySelectorAll(".okee-current-live-input.okee-current-live-input-size-md"),
                _0x5b52f1 = _0x596b16[_0x530bf5].querySelector("[class^=operate-area]").textContent;
              if (_0x5b52f1 == "讲解") {
                _0x596b16[_0x530bf5].querySelector("[class^=talking-btn]").click();
              } else {
                var _0x596b16 = document.querySelectorAll("[class^=render-item]");
                _0x596b16[_0x530bf5].querySelector("[class^=talking-btn]").click();
                setTimeout(function () {
                  var _0x1744e2 = document.querySelectorAll(".okee-current-live-input.okee-current-live-input-size-md"),
                    _0x1d2de5 = document.querySelectorAll("[class^=render-item]");
                  _0x1d2de5[_0x530bf5].querySelector("[class^=talking-btn]").click();
                }, 1200);
              }
              break;
            }
          }
        }
      }, 1000);
    } else {
      var nums = arras.length - 1;
      let nows = new Date();
      if (event.budget.spsort > nums) {
        chrome.storage.local.set({
          "spsort": 1
        }, function () {});
        var index = parseInt(arras[0]),
          divheight = document.querySelector("[class^=render-item]").offsetHeight,
          topdiv = document.querySelector("[class^=list-wrap]"),
          asdiv = topdiv.querySelector("div");
        asdiv.scrollTop = divheight * index - divheight;
        setTimeout(function () {
          var _0x52bdf9 = document.querySelectorAll(".okee-current-live-input.okee-current-live-input-size-md"),
            _0xc0dac3 = document.querySelectorAll("[class^=render-item]");
          for (var _0x1bbaaf = 0; _0x1bbaaf < _0x52bdf9.length; _0x1bbaaf++) {
            {
              if (_0x52bdf9[_0x1bbaaf].value == index) {
                var _0x47f06f = _0xc0dac3[_0x1bbaaf].querySelector("[class^=operate-area]").textContent;
                document.querySelector(".ant-modal.ant-modal-confirm.ant-modal-confirm-confirm.custom-modal");
                if (_0x47f06f == "讲解") {
                  _0xc0dac3[_0x1bbaaf].querySelector("[class^=talking-btn]").click();
                } else {
                  var _0xc0dac3 = document.querySelectorAll("[class^=render-item]");
                  _0xc0dac3[_0x1bbaaf].querySelector("[class^=talking-btn]").click();
                  setTimeout(function () {
                    {
                      var _0x4928b1 = document.querySelectorAll(".okee-current-live-input.okee-current-live-input-size-md"),
                        _0x4e06d7 = document.querySelectorAll("[class^=render-item]");
                      _0x4e06d7[_0x1bbaaf].querySelector("[class^=talking-btn]").click();
                    }
                  }, 1200);
                }
                break;
              }
            }
          }
        }, 1000);
      } else {
        var indea = event.budget.spsort,
          asi = parseInt(arras[indea]),
          index = asi,
          divheight = document.querySelector("[class^=render-item]").offsetHeight,
          topdiv = document.querySelector("[class^=list-wrap]"),
          asdiv = topdiv.querySelector("div");
        asdiv.scrollTop = divheight * index - divheight;
        setTimeout(function () {
          var _0x2c26d0 = document.querySelectorAll(".okee-current-live-input.okee-current-live-input-size-md"),
            _0x345e1b = document.querySelectorAll("[class^=render-item]");
          for (var _0x1b1881 = 0; _0x1b1881 < _0x2c26d0.length; _0x1b1881++) {
            {
              if (_0x2c26d0[_0x1b1881].value == index) {
                var _0x51ef72 = _0x345e1b[_0x1b1881].querySelector("[class^=operate-area]").textContent;
                if (_0x51ef72 == "讲解") _0x345e1b[_0x1b1881].querySelector("[class^=talking-btn]").click();else {
                  var _0x345e1b = document.querySelectorAll("[class^=render-item]");
                  _0x345e1b[_0x1b1881].querySelector("[class^=talking-btn]").click();
                  setTimeout(function () {
                    var _0x3b42be = document.querySelectorAll(".okee-current-live-input.okee-current-live-input-size-md"),
                      _0x21b68e = document.querySelectorAll("[class^=render-item]");
                    _0x21b68e[_0x1b1881].querySelector("[class^=talking-btn]").click();
                  }, 1200);
                }
                break;
              }
            }
          }
        }, 1000);
        chrome.storage.local.set({
          "spsort": event.budget.spsort + 1
        }, function () {});
      }
    }
  } else chrome.storage.local.set({
    "time2": event.budget.time2 + 3
  }, function () {});
}