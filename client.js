System.register(['angular2/platform/browser', 'client/app.js', 'client/player/players.js'], function(exports_1) {
    var browser_1, app_js_1, players_js_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_js_1_1) {
                app_js_1 = app_js_1_1;
            },
            function (players_js_1_1) {
                players_js_1 = players_js_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_js_1.AppCmp, [players_js_1.Player]);
        }
    }
});
//# sourceMappingURL=client.js.map