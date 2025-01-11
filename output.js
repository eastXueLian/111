//Sat Jan 11 2025 03:54:54 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var currentUrl = window.location.href,
  targetContent = "live.douyin.com";
setTimeout(function () {
  if (currentUrl.includes(targetContent)) {
    if (document.readyState === "complete") {
      {
        var _0x3fed9c = document.querySelector(".bYaAzfVn"),
          _0x1a0c50 = document.querySelector("#MS3tMtRG");
        if (_0x3fed9c || _0x1a0c50) {} else {
          chrome.storage.local.set({
            "cjid": "",
            "cjstatus": false
          }, function () {
            var _0x22d5fc = document.querySelector(".U6vVCppM") ? 1 : 0,
              _0x52c1eb = document.getElementsByClassName("bYaAzfVn");
            if (_0x22d5fc) var _0x534d31 = document.getElementsByClassName("aktymjet");else var _0x534d31 = document.getElementsByClassName("D77MbyHc");
            if (_0x52c1eb.length == 0 && _0x534d31.length > 0) {
              const url = chrome.runtime.getURL("js/base.js"),
                _0x35fe53 = document.createElement("script");
              _0x35fe53.src = url;
              document.head.appendChild(_0x35fe53);
            } else {
              if (_0x52c1eb.length == 0 && _0x534d31.length == 0) {
                if (_0x22d5fc) document.querySelector(".U6vVCppM").click();else {
                  document.querySelector(".q4OfieDg").click();
                }
                const url = chrome.runtime.getURL("js/base.js"),
                  _0x286449 = document.createElement("script");
                _0x286449.src = url;
                document.head.appendChild(_0x286449);
              }
            }
          });
        }
      }
    }
  } else chrome.storage.local.set({
    "cjid": "",
    "cjstatus": false
  }, function () {}), alert("请输入正确的直播间网址，示例：https://live.douyin.com/110000，11000是抖音账号，直播间主页复制即可");
}, 2000);