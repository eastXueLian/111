//Sat Jan 11 2025 03:50:42 GMT+0000 (Coordinated Universal Time)
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
      if (document.querySelector("#chat-textarea")) var element_input = document.querySelector("#chat-textarea");else var element_input = document.querySelector(".webcast-chatroom___textarea");
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
        document.querySelector(".webcast-chatroom___send-btn").dispatchEvent(new MouseEvent("click", {
          "bubbles": true
        }));
      }
    } else event.budget.sort >= num ? chrome.storage.local.set({
      "sort": 1
    }, function () {
      var _0x3ccbcd = document.querySelector("#chat-textarea");
      if (_0x3ccbcd._valueTracker) {
        var _0x1fc3dc = _0x3ccbcd._valueTracker.getValue;
      }
      if (_0x3ccbcd.getValue) {
        var _0x1fc3dc = _0x3ccbcd.getValue;
      }
      _0x3ccbcd._valueTracker && (_0x3ccbcd._valueTracker.getValue = () => "");
      if (typeof arr[0] === "undefined") {} else {
        {
          _0x3ccbcd.value = hj(arr[0]);
          var _0x40e86d = new InputEvent("input", {
            "bubbles": true,
            "cancelable": true
          });
          _0x3ccbcd.dispatchEvent(_0x40e86d);
          _0x3ccbcd._valueTracker && (_0x3ccbcd._valueTracker.getValue = _0x1fc3dc);
          document.querySelector(".webcast-chatroom___send-btn").dispatchEvent(new MouseEvent("click", {
            "bubbles": true
          }));
        }
      }
    }) : chrome.storage.local.set({
      "sort": event.budget.sort + 1
    }, function () {
      if (document.querySelector("#chat-textarea")) {
        var _0x24e7fe = document.querySelector("#chat-textarea");
      } else var _0x24e7fe = document.querySelector(".webcast-chatroom___textarea");
      if (_0x24e7fe._valueTracker) {
        var _0x228758 = _0x24e7fe._valueTracker.getValue;
      }
      if (_0x24e7fe.getValue) var _0x228758 = _0x24e7fe.getValue;
      _0x24e7fe._valueTracker && (_0x24e7fe._valueTracker.getValue = () => "");
      if (typeof arr[event.budget.sort] === "undefined") {} else {
        _0x24e7fe.value = hj(arr[event.budget.sort]);
        var _0x12d876 = new InputEvent("input", {
          "bubbles": true,
          "cancelable": true
        });
        _0x24e7fe.dispatchEvent(_0x12d876);
        _0x24e7fe._valueTracker && (_0x24e7fe._valueTracker.getValue = _0x228758);
        document.querySelector(".webcast-chatroom___send-btn").dispatchEvent(new MouseEvent("click", {
          "bubbles": true
        }));
      }
    });
  } else chrome.storage.local.set({
    "time1": event.budget.time1 + 3
  }, function () {});
}