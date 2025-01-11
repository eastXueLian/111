//Sat Jan 11 2025 03:04:56 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var index = 0,
  st = setInterval(function () {
    index = index + 1;
    var _0x3fdb0e = document.getElementsByClassName("K4ovmNwz").length;
    if (index > 10 || _0x3fdb0e > 0) {
      {
        clearInterval(st);
        var _0x17a816 = document.querySelector("div.AJBA3PN9"),
          _0x4efceb = null;
        for (var _0x1d4fe1 = 0, _0x24755f = Object.keys(_0x17a816); _0x1d4fe1 < _0x24755f.length; _0x1d4fe1++) {
          if (_0x4efceb = _0x24755f[_0x1d4fe1].match(/^__react[^$]*(\$.+)$/)) {
            {
              _0x4efceb = _0x4efceb[1];
              break;
            }
          }
        }
        _0x4efceb = "__reactProps" + _0x4efceb;
        var _0x1dbb8c = document.getElementsByClassName("AJBA3PN9"),
          _0x47a5a4 = [],
          _0x7b789a = "",
          _0x219568 = 0,
          _0x1ae9d5 = [],
          urls = [],
          _0x1f5cd5 = [],
          _0xf68775 = "<table id=\"tableExcel\" width=\"100%\" border=\"1\" cellspacing=\"0\" cellpadding=\"0\"><tr><td colspan=\"5\" align=\"center\">采集商品列表</td></tr><tr><td>序号</td><td>名称</td><td>价格</td><td>链接</td></tr>";
        for (var _0x1d4fe1 = 0; _0x1d4fe1 < _0x1dbb8c.length; _0x1d4fe1++) {
          {
            var _0x10fddd = "https://haohuo.jinritemai.com/ecommerce/trade/detail/index.html?id=" + _0x1dbb8c[_0x1d4fe1][_0x4efceb].children.props.children[0].props.promotion.product_id;
            _0x1ae9d5[_0x1d4fe1] = _0x1dbb8c[_0x1d4fe1].querySelector("._RVz2Rea") ? _0x1dbb8c[_0x1d4fe1].querySelector("._RVz2Rea").textContent : "-";
            urls[_0x1d4fe1] = _0x10fddd;
            _0x1f5cd5[_0x1d4fe1] = _0x1dbb8c[_0x1d4fe1].querySelector(".CRfczKkD") ? _0x1dbb8c[_0x1d4fe1].querySelector(".CRfczKkD").textContent + "起" : "-";
            _0xf68775 += "<tr><td>" + (_0x1d4fe1 + 1) + "</td><td>" + _0x1ae9d5[_0x1d4fe1] + "</td><td>" + _0x1f5cd5[_0x1d4fe1] + "</td><td>" + urls[_0x1d4fe1] + "</td></tr>";
            _0x1d4fe1 % 30 === 0 ? (_0x219568 = _0x219568 + 1, _0x219568 > 1 ? _0x7b789a = _0x7b789a + ("</div><div style='background:#c1ecff;border: 1px solid red;display: inline-block;padding: 15px;right: 0;position: absolute;height: 50px;top:" + _0x219568 * 50 + "px;'" + " id='sp" + _0x219568 + "'>" + _0x219568 + "点击复制</div>" + _0x219568 + "段") + "<div class='duanlink' id='splink" + _0x219568 + "'>" + _0x10fddd + "<br>" : _0x7b789a = _0x7b789a + ("<div  style='background:#c1ecff;border: 1px solid red;display: inline-block;padding: 15px;right: 0;position: absolute;height: 50px;top:50px;' id='sp" + _0x219568 + "'>" + _0x219568 + "点击复制</div>" + _0x219568 + "段") + "<div id='splink" + _0x219568 + "'>" + _0x10fddd + "<br>") : _0x7b789a = _0x7b789a + _0x10fddd + "<br>";
          }
        }
        _0x7b789a += "<div style=\"background:#c1ecff;border: 1px solid red;display: inline-block;padding: 15px;right: 0;position: absolute;height: 50px;top:0;\" id=\"all\">导出Excel</div>";
        _0xf68775 += "</table>";
        document.body.style.backgroundColor = "#ffffff";
        document.body.style.height = "auto";
        document.body.innerHTML = _0x7b789a;
        var _0x1c7146 = document.getElementById("sp1");
        _0x1c7146 && (_0x1c7146.onclick = function () {
          copy("splink1");
          _0x1c7146.innerHTML = "<span style='color:red;'>已复制1段<span>";
        });
        var _0x5895b0 = document.getElementById("sp2");
        _0x5895b0 && (_0x5895b0.onclick = function () {
          copy("splink2");
          _0x5895b0.innerHTML = "<span style='color:red;'>已复制2段<span>";
        });
        var _0x35646f = document.getElementById("sp3");
        _0x35646f && (_0x35646f.onclick = function () {
          copy("splink3");
          _0x35646f.innerHTML = "<span style='color:red;'>已复制3段<span>";
        });
        var _0x692d17 = document.getElementById("sp4");
        _0x692d17 && (_0x692d17.onclick = function () {
          copy("splink4");
          _0x692d17.innerHTML = "<span style='color:red;'>已复制4段<span>";
        });
        var _0x9f1ccc = document.getElementById("sp5");
        _0x9f1ccc && (_0x9f1ccc.onclick = function () {
          copy("splink5");
          _0x9f1ccc.innerHTML = "<span style='color:red;'>已复制5段<span>";
        });
        var _0x299b66 = document.getElementById("sp6");
        if (_0x299b66) {
          _0x299b66.onclick = function () {
            copy("splink6");
            _0x299b66.innerHTML = "<span style='color:red;'>已复制6段<span>";
          };
        }
        var _0x47748c = document.getElementById("sp7");
        _0x47748c && (_0x47748c.onclick = function () {
          copy("splink7");
          _0x47748c.innerHTML = "<span style='color:red;'>已复制7段<span>";
        });
        var _0x233869 = document.getElementById("all");
        _0x233869.onclick = function () {
          method5(_0xf68775);
        };
      }
    } else {
      var _0x330bce = document.querySelector(".PGA7qLAy");
      _0x330bce.scrollTop = _0x330bce.scrollHeight;
    }
  }, 1200);