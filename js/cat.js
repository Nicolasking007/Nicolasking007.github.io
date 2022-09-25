if (document.body.clientWidth > 992) {
    function a() {
        var a = $(window).height(),
            b = $("body")[0].scrollHeight,
            c = $(window).scrollTop(),
            d = b - a,
            e = c / (b - a) * 100;
        return {
            ViewH: a,
            DocH: b,
            ScrollTop: c,
            Band_H: e,
            S_V: d
        }
    }

    function b(a) {
        a.ScrollTop > .001 ? $(".neko").css("display", "block") : $(".neko").css("display", "none"), a.Band_H > 40 ? ($("#catalog-box").css("display", "block"), a.Band_H > 70 ? ($("#catalog-box").css("display", "none"), $("#catalog-box2").css("display", "block")) : $("#catalog-box2").css("display", "none")) : ($("#catalog-box").css("display", "none"), $("#catalog-box2").css("display", "none"))
    }! function ($) {
        $.fn.nekoScroll = function (e) {
            var f = {
                    top: "0",
                    scroWidth: "6px",
                    z_index: 9999,
                    zoom: .9,
                    borderRadius: "5px",
                    right: "60px",
                    nekoImg: "https://bu.dusays.com/2022/07/20/62d812db74be9.png",
                    hoverMsg: "\u55B5\u55B5\u55B5~",
                    color: "#6f42c1",
                    during: 500,
                    blog_body: "body"
                },
                c = $.extend(f, e),
                g = "" !== this.prop("className") ? "." + this.prop("className") : "" !== this.prop("id") ? "#" + this.prop("id") : this.prop("nodeName");
            0 == $(".neko").length && (this.after('<div class="neko" id=' + c.nekoname + ' data-msg="' + c.hoverMsg + '"></div>'), $("#" + c.nekoname).append('<div id="catalog-box"><a class="link-open">\u6253\u8D4F\u732B\u54AA</div>   </div>'), $("#" + c.nekoname).append('<div id="catalog-box2">\u5982\u679C\u6211\u7684\u6587\u7AE0\u5E2E\u52A9\u5230\u4E86\u60A8\uFF0C\u53EF\u4EE5\u5E2E\u5FD9\u70B9\u4E00\u4E0B\u7AD9\u5185\u7684\u5C0F\u5E7F\u544A\u5417\uFF1F\u611F\u8C22\u60A8\u7684\u652F\u6301 \u{1F339}\u{1F339}\u{1F339}  </div>'));
            let d = a();
            return $(g).css({
                position: "fixed",
                width: c.scroWidth,
                top: c.top,
                height: d.Band_H * c.zoom * d.ViewH * .01 + "px",
                "z-index": c.z_index,
                "background-color": c.bgcolor,
                "border-radius": c.borderRadius,
                right: c.right,
                "background-image": "url(" + c.scImg + ")",
                "background-image": "-webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.1) 75%, transparent 75%, transparent)",
                "border-radius": "2em",
                "background-size": "contain"
            }), $("#" + c.nekoname).css({
                position: "fixed",
                top: d.Band_H * c.zoom * d.ViewH * .01 - 50 + "px",
                "z-index": 10 * c.z_index,
                right: c.right,
                "background-image": "url(" + c.nekoImg + ")"
            }), b(a()), $(window).scroll(function () {
                let d = a();
                b(d), $(g).css({
                    position: "fixed",
                    width: c.scroWidth,
                    top: c.top,
                    height: d.Band_H * c.zoom * d.ViewH * .01 + "px",
                    "z-index": c.z_index,
                    "background-color": c.bgcolor,
                    "border-radius": c.borderRadius,
                    right: c.right,
                    "background-image": "url(" + c.scImg + ")",
                    "background-image": "-webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.1) 75%, transparent 75%, transparent)",
                    "border-radius": "2em",
                    "background-size": "contain"
                }), $("#" + c.nekoname).css({
                    position: "fixed",
                    top: d.Band_H * c.zoom * d.ViewH * .01 - 50 + "px",
                    "z-index": 10 * c.z_index,
                    right: c.right,
                    "background-image": "url(" + c.nekoImg + ")"
                }), d.ScrollTop == d.S_V ? $("#" + c.nekoname).addClass("showMsg") : ($("#" + c.nekoname).removeClass("showMsg"), $("#" + c.nekoname).attr("data-msg", c.hoverMsg))
            }), this.click(function (a) {
                btf.scrollToDest(0, 500)
            }), $("#" + c.nekoname).click(function () {
                btf.scrollToDest(0, 500)
            }), $(".link-open").click(function () {
                window.open("https://nkupp.com/post/9366f1e2.html")
            }), this
        }
    }(jQuery), $(document).ready(function () {
        $("#myscoll").nekoScroll({
            bgcolor: "rgb(255 255 255 / .3)",
            borderRadius: "2em",
            zoom: .9
        })
    })
}