//Sat Jan 11 2025 03:49:22 GMT+0000 (Coordinated Universal Time)
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
      var element_input = document.querySelector(".send-comment-area input");
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
        setTimeout(function () {
          document.querySelector(".send-comment-area button").dispatchEvent(new MouseEvent("click", {
            "bubbles": true
          }));
        }, 200);
      }
    } else event.budget.sort >= num ? chrome.storage.local.set({
      "sort": 1
    }, function () {
      var _0xaca04d = document.querySelector(".send-comment-area input");
      _0xaca04d.click();
      if (_0xaca04d._valueTracker) var _0x27b0c8 = _0xaca04d._valueTracker.getValue;
      if (_0xaca04d.getValue) var _0x27b0c8 = _0xaca04d.getValue;
      _0xaca04d._valueTracker && (_0xaca04d._valueTracker.getValue = () => "");
      if (typeof arr[0] === "undefined") {} else {
        _0xaca04d.value = hj(arr[0]);
        var eventt = new InputEvent("input", {
          "bubbles": true,
          "cancelable": true
        });
        _0xaca04d.dispatchEvent(eventt);
        _0xaca04d._valueTracker && (_0xaca04d._valueTracker.getValue = _0x27b0c8);
        setTimeout(function () {
          document.querySelector(".send-comment-area button").dispatchEvent(new MouseEvent("click", {
            "bubbles": true
          }));
        }, 200);
      }
    }) : chrome.storage.local.set({
      "sort": event.budget.sort + 1
    }, function () {
      var _0x500e16 = document.querySelector(".send-comment-area input");
      _0x500e16.click();
      if (_0x500e16._valueTracker) {
        var _0x4949e5 = _0x500e16._valueTracker.getValue;
      }
      if (_0x500e16.getValue) {
        var _0x4949e5 = _0x500e16.getValue;
      }
      if (_0x500e16._valueTracker) {
        _0x500e16._valueTracker.getValue = () => "";
      }
      if (typeof arr[event.budget.sort] === "undefined") {} else {
        {
          _0x500e16.value = hj(arr[event.budget.sort]);
          var eventt = new InputEvent("input", {
            "bubbles": true,
            "cancelable": true
          });
          _0x500e16.dispatchEvent(eventt);
          _0x500e16._valueTracker && (_0x500e16._valueTracker.getValue = _0x4949e5);
          setTimeout(function () {
            document.querySelector(".send-comment-area button").dispatchEvent(new MouseEvent("click", {
              "bubbles": true
            }));
          }, 200);
        }
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
        divheight = document.querySelector(".goods-wrapper .live-pro-card-draggable").offsetHeight,
        asdiv = document.querySelector(".goods-wrapper");
      asdiv.scrollTop = divheight * index - divheight;
      setTimeout(function () {
        var _0x158f96 = document.querySelectorAll(".goods-wrapper .live-pro-card>div")[1],
          _0x27dc4a = _0x158f96.querySelectorAll("input"),
          _0x1d4233 = _0x158f96.querySelectorAll(".live-pro-card-draggable");
        for (var _0x2b3770 = 0; _0x2b3770 < _0x27dc4a.length; _0x2b3770++) {
          {
            if (_0x27dc4a[_0x2b3770].value == index) {
              var _0x1c2ac0 = _0x1d4233[_0x2b3770].querySelector(".live-pro-card-draggable-item-content-price-btn button").textContent.trim();
              _0x1c2ac0 == "开始讲解" ? (console.log(_0x1c2ac0), _0x1d4233[_0x2b3770].querySelector(".live-pro-card-draggable-item-content-price-btn button").click()) : (console.log(_0x1c2ac0), _0x1d4233[_0x2b3770].querySelector(".live-pro-card-draggable-item-content-price-btn button").click(), setTimeout(function () {
                console.log(_0x1c2ac0, 23);
                _0x1d4233[_0x2b3770].querySelector(".live-pro-card-draggable-item-content-price-btn button").click();
              }, 2000));
              break;
            }
          }
        }
      }, 800);
    } else {
      var nums = arras.length - 1;
      let nows = new Date();
      if (event.budget.spsort > nums) {
        chrome.storage.local.set({
          "spsort": 1
        }, function () {});
        var index = parseInt(arras[0]),
          divheight = document.querySelector(".goods-wrapper .live-pro-card-draggable").offsetHeight,
          asdiv = document.querySelector(".goods-wrapper");
        asdiv.scrollTop = divheight * index - divheight;
        setTimeout(function () {
          var _0x446428 = document.querySelectorAll(".goods-wrapper .live-pro-card>div")[1],
            _0x58805b = _0x446428.querySelectorAll("input"),
            _0x20386c = _0x446428.querySelectorAll(".live-pro-card-draggable");
          for (var _0x31b60c = 0; _0x31b60c < _0x58805b.length; _0x31b60c++) {
            {
              if (_0x58805b[_0x31b60c].value == index) {
                var _0x42b4a8 = _0x20386c[_0x31b60c].querySelector(".live-pro-card-draggable-item-content-price-btn button").textContent.trim();
                _0x42b4a8 == "开始讲解" ? _0x20386c[_0x31b60c].querySelector(".live-pro-card-draggable-item-content-price-btn button").click() : (_0x20386c[_0x31b60c].querySelector(".live-pro-card-draggable-item-content-price-btn button").click(), setTimeout(function () {
                  _0x20386c[_0x31b60c].querySelector(".live-pro-card-draggable-item-content-price-btn button").click();
                }, 2000));
                break;
              }
            }
          }
        }, 800);
      } else {
        var indea = event.budget.spsort,
          asi = parseInt(arras[indea]),
          index = asi,
          divheight = document.querySelector(".goods-wrapper .live-pro-card-draggable").offsetHeight,
          asdiv = document.querySelector(".goods-wrapper");
        asdiv.scrollTop = divheight * index - divheight;
        setTimeout(function () {
          var _0x24bbde = document.querySelectorAll(".goods-wrapper .live-pro-card>div")[1],
            _0x5677b3 = _0x24bbde.querySelectorAll("input"),
            _0x4ebc75 = _0x24bbde.querySelectorAll(".live-pro-card-draggable");
          for (var _0x18dcca = 0; _0x18dcca < _0x5677b3.length; _0x18dcca++) {
            if (_0x5677b3[_0x18dcca].value == index) {
              var _0xf008d1 = _0x4ebc75[_0x18dcca].querySelector(".live-pro-card-draggable-item-content-price-btn button").textContent.trim();
              _0xf008d1 == "开始讲解" ? _0x4ebc75[_0x18dcca].querySelector(".live-pro-card-draggable-item-content-price-btn button").click() : (_0x4ebc75[_0x18dcca].querySelector(".live-pro-card-draggable-item-content-price-btn button").click(), setTimeout(function () {
                _0x4ebc75[_0x18dcca].querySelector(".live-pro-card-draggable-item-content-price-btn button").click();
              }, 2000));
              break;
            }
          }
        }, 800);
        chrome.storage.local.set({
          "spsort": event.budget.spsort + 1
        }, function () {});
      }
    }
  } else chrome.storage.local.set({
    "time2": event.budget.time2 + 3
  }, function () {});
}