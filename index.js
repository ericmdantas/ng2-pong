System.register(['angular2/angular2', 'client/app.js'], function(exports_1) {
    var angular2_1, app_js_1;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (app_js_1_1) {
                app_js_1 = app_js_1_1;
            }],
        execute: function() {
            angular2_1.bootstrap(app_js_1.AppCmp);
        }
    }
});
//# sourceMappingURL=index.js.map