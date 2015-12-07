System.register(['angular2/angular2', 'client/app.js', 'client/player/players.js'], function(exports_1) {
    var angular2_1, app_js_1, players_js_1;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (app_js_1_1) {
                app_js_1 = app_js_1_1;
            },
            function (players_js_1_1) {
                players_js_1 = players_js_1_1;
            }],
        execute: function() {
            angular2_1.bootstrap(app_js_1.AppCmp, [players_js_1.Player]);
        }
    }
});
//# sourceMappingURL=client.js.map