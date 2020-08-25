!(function (e, t, i) {
  var r = (e.bigPicture = e.bigPicture || []);
  if (!r.initialized)
    if (r.invoked)
      e.console &&
        console.error &&
        console.error("BigPicture.io snippet included twice.");
    else {
      (r.invoked = !0),
        (r.SNIPPET_VERSION = 1.5),
        (r.handler = function (e) {
          if (void 0 !== r.callback)
            try {
              return r.callback(e);
            } catch (e) {}
        }),
        (r.eventList = ["mousedown", "mouseup", "click", "submit"]),
        (r.methods = [
          "track",
          "identify",
          "page",
          "group",
          "alias",
          "integration",
          "ready",
          "intelReady",
          "consentReady",
          "on",
          "off",
        ]),
        (r.factory = function (e) {
          return function () {
            var t = Array.prototype.slice.call(arguments);
            return t.unshift(e), r.push(t), r;
          };
        });
      for (var n = 0; n < r.methods.length; n++) {
        var o = r.methods[n];
        r[o] = r.factory(o);
      }
      r.getCookie = function (e) {
        var i = ("; " + t.cookie).split("; " + e + "=");
        return 2 == i.length && i.pop().split(";").shift();
      };
      var c = (r.isEditor = (function () {
        try {
          return (
            e.self !== e.top &&
            (new RegExp("app" + i, "ig").test(t.referrer) ||
              "edit" == r.getCookie("_bpr_edit"))
          );
        } catch (e) {
          return !1;
        }
      })());
      r.init = function (n, o) {
        if (((r.projectId = n), (r._config = o), !c))
          for (var a = 0; a < r.eventList.length; a++)
            e.addEventListener(r.eventList[a], r.handler, !0);
        var s = t.createElement("script");
        s.async = !0;
        var d = c ? "/editor/editor" : "/public-" + n;
        (s.src = "//cdn" + i + d + ".js"),
          t.getElementsByTagName("head")[0].appendChild(s);
      };
    }
})(window, document, ".bigpicture.io");

bigPicture.init("1260");
