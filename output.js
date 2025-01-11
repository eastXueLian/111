//Sat Jan 11 2025 03:52:42 GMT+0000 (Coordinated Universal Time)
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
      var element_input = document.querySelector(".textarea--ghIzR");
      if (!element_input) var element_input = document.querySelector(".textarea--FgtBj");
      if (!element_input) var element_input = document.querySelector(".textarea--FgtBj");
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
        document.querySelector(".btn--p0UmO") ? document.querySelector(".btn--p0UmO").click() : document.querySelector(".btn--fkiPN").click();
      }
    } else event.budget.sort >= num ? chrome.storage.local.set({
      "sort": 1
    }, function () {
      var _0x250560 = document.querySelector(".textarea--ghIzR");
      if (!_0x250560) var _0x250560 = document.querySelector(".textarea--FgtBj");
      _0x250560.click();
      if (_0x250560._valueTracker) var _0xb52883 = _0x250560._valueTracker.getValue;
      if (_0x250560.getValue) {
        var _0xb52883 = _0x250560.getValue;
      }
      _0x250560._valueTracker && (_0x250560._valueTracker.getValue = () => "");
      if (typeof arr[0] === "undefined") {} else {
        _0x250560.value = hj(arr[0]);
        var eventt = new InputEvent("input", {
          "bubbles": true,
          "cancelable": true
        });
        _0x250560.dispatchEvent(eventt);
        _0x250560._valueTracker && (_0x250560._valueTracker.getValue = _0xb52883);
        if (document.querySelector(".btn--p0UmO")) {
          document.querySelector(".btn--p0UmO").click();
        } else {
          document.querySelector(".btn--fkiPN").click();
        }
      }
    }) : chrome.storage.local.set({
      "sort": event.budget.sort + 1
    }, function () {
      var _0x473063 = document.querySelector(".textarea--ghIzR");
      if (!_0x473063) {
        var _0x473063 = document.querySelector(".textarea--FgtBj");
      }
      _0x473063.click();
      if (_0x473063._valueTracker) {
        var _0x44cbdc = _0x473063._valueTracker.getValue;
      }
      if (_0x473063.getValue) var _0x44cbdc = _0x473063.getValue;
      _0x473063._valueTracker && (_0x473063._valueTracker.getValue = () => "");
      if (typeof arr[event.budget.sort] === "undefined") {} else {
        _0x473063.value = hj(arr[event.budget.sort]);
        var eventt = new InputEvent("input", {
          "bubbles": true,
          "cancelable": true
        });
        _0x473063.dispatchEvent(eventt);
        _0x473063._valueTracker && (_0x473063._valueTracker.getValue = _0x44cbdc);
        if (document.querySelector(".btn--p0UmO")) {
          document.querySelector(".btn--p0UmO").click();
        } else document.querySelector(".btn--fkiPN").click();
      }
    });
  } else chrome.storage.local.set({
    "time1": event.budget.time1 + 3
  }, function () {});
}
if (event.budget.spstatus === 1) {
  console.log(event.budget.time2);
  if (event.budget.time2 >= event.budget.sptime) {
    chrome.storage.local.set({
      "time2": 0
    }, function () {});
    var arr2s = event.budget.spstr;
    arr2s = arr2s.split(",");
    var if_qr = document.querySelectorAll(".ant-modal.ant-modal-confirm.ant-modal-confirm-confirm.custom-modal");
    if (if_qr.length > 0) for (let index = 0; index < if_qr.length; index++) {
      if_qr[index].querySelectorAll("button")[0].click();
    }
    if (arr2s.length == 1) {
      var index = parseInt(arr2s[0]),
        divheight = document.querySelector(".goods-card-border--jNj4_.dragOverall--i0XRD").offsetHeight + 2,
        topdiv = document.querySelector(".list-container--a71uy"),
        asdiv = topdiv.querySelector("div");
      asdiv.scrollTop = divheight * index - divheight;
      setTimeout(function () {
        var _0x42c5c3 = document.querySelectorAll(".sort-input--nP1KR"),
          _0x566a4f = document.querySelectorAll(".goods-card-border--jNj4_.dragOverall--i0XRD");
        for (var _0x2b6fd5 = 0; _0x2b6fd5 < _0x42c5c3.length; _0x2b6fd5++) {
          if (_0x42c5c3[_0x2b6fd5].value == index) {
            var _0x21deee = _0x566a4f[_0x2b6fd5].querySelectorAll("button")[3].textContent;
            if (_0x21deee == "开始讲解") _0x566a4f[_0x2b6fd5].querySelectorAll("button")[3].click(), setTimeout(function () {
              var _0x461aed = document.querySelectorAll(".ant-modal.ant-modal-confirm.ant-modal-confirm-confirm.custom-modal");
              if (_0x461aed.length > 0) {
                for (let _0x3e9603 = 0; _0x3e9603 < _0x461aed.length; _0x3e9603++) {
                  _0x461aed[_0x3e9603].querySelectorAll("button")[1].click();
                }
              }
            }, 800);else {
              var _0x566a4f = document.querySelectorAll(".goods-card-border--jNj4_.dragOverall--i0XRD");
              _0x566a4f[_0x2b6fd5].querySelectorAll("button")[3].click();
              setTimeout(function () {
                var _0x1b2b75 = document.querySelectorAll(".ant-modal.ant-modal-confirm.ant-modal-confirm-confirm.custom-modal");
                if (_0x1b2b75.length > 0) for (let _0x43fac5 = 0; _0x43fac5 < _0x1b2b75.length; _0x43fac5++) {
                  _0x1b2b75[_0x43fac5].querySelectorAll("button")[1].click();
                }
              }, 800);
              setTimeout(function () {
                var _0x2d7520 = document.querySelectorAll(".sort-input--nP1KR"),
                  _0x408896 = document.querySelectorAll(".goods-card-border--jNj4_.dragOverall--i0XRD");
                _0x408896[_0x2b6fd5].querySelectorAll("button")[3].click();
              }, 1200);
            }
            break;
          }
        }
      }, 1000);
    } else {
      var nums = arr2s.length - 1;
      let nows = new Date();
      if (event.budget.spsort > nums) {
        chrome.storage.local.set({
          "spsort": 1
        }, function () {});
        var index = parseInt(arr2s[0]),
          divheight = document.querySelector(".goods-card-border--jNj4_.dragOverall--i0XRD").offsetHeight + 2,
          topdiv = document.querySelector(".list-container--a71uy"),
          asdiv = topdiv.querySelector("div");
        asdiv.scrollTop = divheight * index - divheight;
        setTimeout(function () {
          var _0x3a9f01 = document.querySelectorAll(".sort-input--nP1KR"),
            _0x521e60 = document.querySelectorAll(".goods-card-border--jNj4_.dragOverall--i0XRD");
          for (var _0x577e56 = 0; _0x577e56 < _0x3a9f01.length; _0x577e56++) {
            {
              if (_0x3a9f01[_0x577e56].value == index) {
                var _0x3f35e5 = _0x521e60[_0x577e56].querySelectorAll("button")[3].textContent;
                document.querySelector(".ant-modal.ant-modal-confirm.ant-modal-confirm-confirm.custom-modal");
                if (_0x3f35e5 == "开始讲解") {
                  _0x521e60[_0x577e56].querySelectorAll("button")[3].click();
                  setTimeout(function () {
                    var _0x4b30c3 = document.querySelectorAll(".ant-modal.ant-modal-confirm.ant-modal-confirm-confirm.custom-modal");
                    if (_0x4b30c3.length > 0) for (var _0x382c81 = 0; _0x382c81 < _0x4b30c3.length; _0x382c81++) {
                      _0x4b30c3[_0x382c81].querySelectorAll("button")[1].click();
                    }
                  }, 800);
                } else {
                  var _0x521e60 = document.querySelectorAll(".goods-card-border--jNj4_.dragOverall--i0XRD");
                  _0x521e60[_0x577e56].querySelectorAll("button")[3].click();
                  setTimeout(function () {
                    {
                      var _0x36580c = document.querySelectorAll(".ant-modal.ant-modal-confirm.ant-modal-confirm-confirm.custom-modal");
                      if (_0x36580c.length > 0) for (let _0x9a0544 = 0; _0x9a0544 < _0x36580c.length; _0x9a0544++) {
                        _0x36580c[_0x9a0544].querySelectorAll("button")[1].click();
                      }
                    }
                  }, 800);
                  setTimeout(function () {
                    var _0x32bada = document.querySelectorAll(".sort-input--nP1KR"),
                      _0x5c28b1 = document.querySelectorAll(".goods-card-border--jNj4_.dragOverall--i0XRD");
                    _0x5c28b1[_0x577e56].querySelectorAll("button")[3].click();
                  }, 1200);
                }
                break;
              }
            }
          }
        }, 1000);
      } else {
        var indea = event.budget.spsort,
          asi = parseInt(arr2s[indea]),
          index = asi,
          divheight = document.querySelector(".goods-card-border--jNj4_.dragOverall--i0XRD").offsetHeight + 2,
          topdiv = document.querySelector(".list-container--a71uy"),
          asdiv = topdiv.querySelector("div");
        asdiv.scrollTop = divheight * index - divheight;
        setTimeout(function () {
          var _0x3ce463 = document.querySelectorAll(".sort-input--nP1KR"),
            _0x5117a2 = document.querySelectorAll(".goods-card-border--jNj4_.dragOverall--i0XRD");
          for (var _0x364306 = 0; _0x364306 < _0x3ce463.length; _0x364306++) {
            {
              if (_0x3ce463[_0x364306].value == index) {
                var _0x2bbde3 = _0x5117a2[_0x364306].querySelectorAll("button")[3].textContent;
                document.querySelector(".ant-modal.ant-modal-confirm.ant-modal-confirm-confirm.custom-modal");
                if (_0x2bbde3 == "开始讲解") _0x5117a2[_0x364306].querySelectorAll("button")[3].click(), setTimeout(function () {
                  {
                    var _0x3a6968 = document.querySelectorAll(".ant-modal.ant-modal-confirm.ant-modal-confirm-confirm.custom-modal");
                    if (_0x3a6968.length > 0) for (var _0x44fdaf = 0; _0x44fdaf < _0x3a6968.length; _0x44fdaf++) {
                      _0x3a6968[_0x44fdaf].querySelectorAll("button")[1].click();
                    }
                  }
                }, 800);else {
                  var _0x5117a2 = document.querySelectorAll(".goods-card-border--jNj4_.dragOverall--i0XRD");
                  _0x5117a2[_0x364306].querySelectorAll("button")[3].click();
                  setTimeout(function () {
                    var _0x17b657 = document.querySelectorAll(".ant-modal.ant-modal-confirm.ant-modal-confirm-confirm.custom-modal");
                    if (_0x17b657.length > 0) for (var _0x2d27b0 = 0; _0x2d27b0 < _0x17b657.length; _0x2d27b0++) {
                      _0x17b657[_0x2d27b0].querySelectorAll("button")[1].click();
                    }
                  }, 800);
                  setTimeout(function () {
                    var _0x120381 = document.querySelectorAll(".sort-input--nP1KR"),
                      _0x233ec1 = document.querySelectorAll(".goods-card-border--jNj4_.dragOverall--i0XRD");
                    _0x233ec1[_0x364306].querySelectorAll("button")[3].click();
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