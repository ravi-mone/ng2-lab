var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var http_1 = require('http/http');
var home_1 = require('./components/home/home');
var user_details_1 = require('./components/user_details/user_details');
var about_1 = require('./components/about/about');
var F1Drivers_1 = require('./components/F1Drivers/F1Drivers');
var details_1 = require('./components/F1Drivers/Details/details');
var events_1 = require('./components/F1Drivers/Events/events');
var NameList_1 = require('./services/models/NameList');
var github_api_1 = require('./services/api/github_api');
var user_repo_1 = require('./services/repositories/user_repo');
var httpdemo_1 = require('./components/httpDemo/httpdemo');
var App = (function () {
    function App() {
    }
    App = __decorate([
        angular2_1.Component({
            selector: 'app',
            viewBindings: [user_repo_1.default, github_api_1.GitHubAPI, http_1.HTTP_BINDINGS, NameList_1.NamesList]
        }),
        router_1.RouteConfig([
            { path: '/', component: home_1.Home, as: 'home', loader: function (obj) { console.log('loader: ', obj); } },
            { path: '/user_details/:username', component: user_details_1.UserDetails, as: 'user_details' },
            { path: '/about', component: about_1.About, as: 'about' },
            { path: '/drivers', component: F1Drivers_1.F1Drivers, as: 'drivers' },
            { path: '/details/:name', component: details_1.Details, as: 'details' },
            { path: '/events', component: events_1.EventsDemo, as: 'events' },
            { path: '/httpdemo', component: httpdemo_1.HelloCmp, as: 'httpdemo' }
        ]),
        angular2_1.View({
            templateUrl: './app.html?v=0.0.0',
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
angular2_1.bootstrap(App, [router_1.ROUTER_BINDINGS, http_1.HTTP_BINDINGS]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6WyJBcHAiLCJBcHAuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEseUJBQW9ELG1CQUFtQixDQUFDLENBQUE7QUFDeEUsdUJBQThELGlCQUFpQixDQUFDLENBQUE7QUFDaEYscUJBQTRCLFdBQVcsQ0FBQyxDQUFBO0FBR3hDLHFCQUEyQix3QkFBd0IsQ0FBQyxDQUFBO0FBQ3BELDZCQUEyQix3Q0FBd0MsQ0FBQyxDQUFBO0FBQ3BFLHNCQUEyQiwwQkFBMEIsQ0FBQyxDQUFBO0FBQ3RELDBCQUEyQixrQ0FBa0MsQ0FBQyxDQUFBO0FBQzlELHdCQUEyQix3Q0FBd0MsQ0FBQyxDQUFBO0FBQ3BFLHVCQUEyQixzQ0FBc0MsQ0FBQyxDQUFBO0FBQ2xFLHlCQUEyQiw0QkFBNEIsQ0FBQyxDQUFBO0FBQ3hELDJCQUEyQiwyQkFBMkIsQ0FBQyxDQUFBO0FBQ3ZELDBCQUEyQixtQ0FBbUMsQ0FBQyxDQUFBO0FBQy9ELHlCQUEyQixnQ0FBZ0MsQ0FBQyxDQUFBO0FBSTVEO0lBQUFBO0lBMEJXQyxDQUFDQTtJQTFCWkQ7UUFBQ0Esb0JBQVNBLENBQUNBO1lBQ1RBLFFBQVFBLEVBQUVBLEtBQUtBO1lBVWZBLFlBQVlBLEVBQUVBLENBQUNBLG1CQUFRQSxFQUFFQSxzQkFBU0EsRUFBRUEsb0JBQWFBLEVBQUVBLG9CQUFTQSxDQUFDQTtTQUM5REEsQ0FBQ0E7UUFDREEsb0JBQVdBLENBQUNBO1lBQ1hBLEVBQUVBLElBQUlBLEVBQUVBLEdBQUdBLEVBQUVBLFNBQVNBLEVBQUVBLFdBQUlBLEVBQUVBLEVBQUVBLEVBQUVBLE1BQU1BLEVBQUdBLE1BQU1BLEVBQUVBLFVBQVNBLEdBQUdBLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUcsR0FBRyxDQUFFLENBQUEsQ0FBQSxDQUFDLEVBQUVBO1lBQ3BHQSxFQUFFQSxJQUFJQSxFQUFFQSx5QkFBeUJBLEVBQUVBLFNBQVNBLEVBQUVBLDBCQUFXQSxFQUFFQSxFQUFFQSxFQUFFQSxjQUFjQSxFQUFFQTtZQUMvRUEsRUFBRUEsSUFBSUEsRUFBRUEsUUFBUUEsRUFBRUEsU0FBU0EsRUFBRUEsYUFBS0EsRUFBRUEsRUFBRUEsRUFBRUEsT0FBT0EsRUFBRUE7WUFDakRBLEVBQUVBLElBQUlBLEVBQUVBLFVBQVVBLEVBQUVBLFNBQVNBLEVBQUVBLHFCQUFTQSxFQUFFQSxFQUFFQSxFQUFFQSxTQUFTQSxFQUFFQTtZQUN6REEsRUFBRUEsSUFBSUEsRUFBRUEsZ0JBQWdCQSxFQUFFQSxTQUFTQSxFQUFFQSxpQkFBT0EsRUFBRUEsRUFBRUEsRUFBRUEsU0FBU0EsRUFBRUE7WUFDN0RBLEVBQUVBLElBQUlBLEVBQUVBLFNBQVNBLEVBQUVBLFNBQVNBLEVBQUVBLG1CQUFVQSxFQUFFQSxFQUFFQSxFQUFFQSxRQUFRQSxFQUFFQTtZQUN4REEsRUFBRUEsSUFBSUEsRUFBRUEsV0FBV0EsRUFBRUEsU0FBU0EsRUFBRUEsbUJBQVFBLEVBQUVBLEVBQUVBLEVBQUVBLFVBQVVBLEVBQUVBO1NBQzNEQSxDQUFDQTtRQUNEQSxlQUFJQSxDQUFDQTtZQUNKQSxXQUFXQSxFQUFFQSw2QkFBNkJBO1lBQzFDQSxVQUFVQSxFQUFFQSxDQUFDQSwwQkFBaUJBLENBQUNBO1NBQ2hDQSxDQUFDQTs7WUFDVUE7SUFBREEsVUFBQ0E7QUFBREEsQ0ExQlgsQUEwQllBLElBQUE7QUFFWixvQkFBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLHdCQUFlLEVBQUUsb0JBQWEsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXcsIGJvb3RzdHJhcCwgQXR0cmlidXRlfSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5pbXBvcnQge1JvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFUywgUk9VVEVSX0JJTkRJTkdTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtIVFRQX0JJTkRJTkdTfSBmcm9tICdodHRwL2h0dHAnO1xuXG4vKiBDdXN0b20gQW5ndWxhcjIgY29tcG9uZW50cyAqL1xuaW1wb3J0IHtIb21lfSAgICAgICAgIGZyb20gJy4vY29tcG9uZW50cy9ob21lL2hvbWUnO1xuaW1wb3J0IHtVc2VyRGV0YWlsc30gIGZyb20gJy4vY29tcG9uZW50cy91c2VyX2RldGFpbHMvdXNlcl9kZXRhaWxzJztcbmltcG9ydCB7QWJvdXR9ICAgICAgICBmcm9tICcuL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQnO1xuaW1wb3J0IHtGMURyaXZlcnN9ICAgIGZyb20gJy4vY29tcG9uZW50cy9GMURyaXZlcnMvRjFEcml2ZXJzJztcbmltcG9ydCB7RGV0YWlsc30gICAgICBmcm9tICcuL2NvbXBvbmVudHMvRjFEcml2ZXJzL0RldGFpbHMvZGV0YWlscyc7XG5pbXBvcnQge0V2ZW50c0RlbW99ICAgZnJvbSAnLi9jb21wb25lbnRzL0YxRHJpdmVycy9FdmVudHMvZXZlbnRzJztcbmltcG9ydCB7TmFtZXNMaXN0fSAgICBmcm9tICcuL3NlcnZpY2VzL21vZGVscy9OYW1lTGlzdCc7XG5pbXBvcnQge0dpdEh1YkFQSX0gICAgZnJvbSAnLi9zZXJ2aWNlcy9hcGkvZ2l0aHViX2FwaSc7XG5pbXBvcnQgVXNlclJlcG8gICAgICAgZnJvbSAnLi9zZXJ2aWNlcy9yZXBvc2l0b3JpZXMvdXNlcl9yZXBvJzsgLy9oZXJlLCB7fSBhcmVuJ3QgdXNlZCB3aGVuIGV4cG9ydCBkZWZhdWx0IC4uLiggI2h0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjExMTcxNjAvd2hhdC1pcy1leHBvcnQtZGVmYXVsdC1pbi1qYXZhc2NyaXB0KVxuaW1wb3J0IHtIZWxsb0NtcH0gICAgIGZyb20gJy4vY29tcG9uZW50cy9odHRwRGVtby9odHRwZGVtbyc7XG4vKlxuKkNyZWF0ZSBhIHdob2xlIGNvbXBvbmVudC4gUmVxdWlyZXMgYSBAVmlldy5cbiAqICAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwJyxcbiAgLypcbiAgKiBTcGVjaWZpZXMgYSBsaXN0IG9mIG9iamVjdHMgdGhhdCB3aWxsIGNyZWF0ZWQgdXNpbmcgZGVwZW5kZW5jeSBpbmplY3Rpb25cbiAgKiBhbmQgd2lsbCBiZSB2aXNpYmxlIHRvIHRoZSBjb21wb25lbnRzIGFuZCBpdHMgdmlldyBjaGlsZHJlbi5cbiAgKiBOT1RFIDpcbiAgKiBgYmluZGluZ3NgIDogYXJlIGF2YWlsYWJsZSB0byBhIGNvbXBvbmVudCBhbmQgaXRzIGNoaWxkcmVuLFxuICAqIGB2aWV3QmluZGluZ3NgIDogYXJlIG9ubHkgYXZhaWxhYmxlIHRvIGEgcGFydGljdWxhciB2aWV3LFxuICAqIGBsaWZlY3ljbGVgIDogcmVmZXJzIHRvIGRpZmZlcmVudCBzdGFnZXMgdGhyb3VnaCB3aGljaCBhIGNvbXBvbmVudCBtaWdodCBnbyAoY3JlYXRlLCBkZXN0cm95LCBjaGFuZ2UgZGV0ZWN0aW9uIGV0Yy4pXG4gICBzbyB5b3UgY2FuIHRoaW5rIG9mIHRob3NlIGFzIGNhbGxiYWNrcyB0aGF0IGFyZSBleGVjdXRlZCB3aGVuIFwic29tZXRoaW5nIGhhcHBlbnNcIiB0byBhIGdpdmVuIGNvbXBvbmVudCAvIGRpcmVjdGl2ZVxuICAgKiAqL1xuICB2aWV3QmluZGluZ3M6IFtVc2VyUmVwbywgR2l0SHViQVBJLCBIVFRQX0JJTkRJTkdTLCBOYW1lc0xpc3RdXG59KVxuQFJvdXRlQ29uZmlnKFtcbiAgeyBwYXRoOiAnLycsIGNvbXBvbmVudDogSG9tZSwgYXM6ICdob21lJywgIGxvYWRlcjogZnVuY3Rpb24ob2JqKSB7IGNvbnNvbGUubG9nKCdsb2FkZXI6ICcgOiBvYmogKX0gfSxcbiAgeyBwYXRoOiAnL3VzZXJfZGV0YWlscy86dXNlcm5hbWUnLCBjb21wb25lbnQ6IFVzZXJEZXRhaWxzLCBhczogJ3VzZXJfZGV0YWlscycgfSxcbiAgeyBwYXRoOiAnL2Fib3V0JywgY29tcG9uZW50OiBBYm91dCwgYXM6ICdhYm91dCcgfSxcbiAgeyBwYXRoOiAnL2RyaXZlcnMnLCBjb21wb25lbnQ6IEYxRHJpdmVycywgYXM6ICdkcml2ZXJzJyB9LFxuICB7IHBhdGg6ICcvZGV0YWlscy86bmFtZScsIGNvbXBvbmVudDogRGV0YWlscywgYXM6ICdkZXRhaWxzJyB9LFxuICB7IHBhdGg6ICcvZXZlbnRzJywgY29tcG9uZW50OiBFdmVudHNEZW1vLCBhczogJ2V2ZW50cycgfVxuICB7IHBhdGg6ICcvaHR0cGRlbW8nLCBjb21wb25lbnQ6IEhlbGxvQ21wLCBhczogJ2h0dHBkZW1vJyB9XG5dKVxuQFZpZXcoe1xuICB0ZW1wbGF0ZVVybDogJy4vYXBwLmh0bWw/dj08JT0gVkVSU0lPTiAlPicsXG4gIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU11cbn0pXG5jbGFzcyBBcHAge31cblxuYm9vdHN0cmFwKEFwcCwgW1JPVVRFUl9CSU5ESU5HUywgSFRUUF9CSU5ESU5HU10pO1xuLy9pbXBvcnQge1JvdXRlQ29uZmlnLCBSb3V0ZXJPdXRsZXQsIFJvdXRlckxpbmssIHJvdXRlckluamVjdGFibGVzfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9