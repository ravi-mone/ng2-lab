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
var nationality_1 = require('../nationality/nationality');
var points_1 = require('../points/points');
var Details = (function () {
    function Details(list, params) {
        this.list = list;
        this.driverObj = list.get();
        this.driverObj = this.driverObj[0]['DriverStandings'];
        this.name = params.get('name');
        this.fetchNameFromParams(this.driverObj[parseInt(params.get('name')) - 1]);
    }
    Details.prototype.fetchNameFromParams = function (driverDetails) {
        this.driver = driverDetails;
    };
    Details = __decorate([
        angular2_1.Component({
            selector: 'Details'
        }),
        angular2_1.View({
            templateUrl: './components/F1Drivers/Details/details.html?v=0.0.0',
            directives: [router_1.RouterLink, nationality_1.Nationality, points_1.Points]
        }), 
        __metadata('design:paramtypes', [(typeof NamesList !== 'undefined' && NamesList) || Object, router_1.RouteParams])
    ], Details);
    return Details;
})();
exports.Details = Details;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRjFEcml2ZXJzL0RldGFpbHMvZGV0YWlscy50cyJdLCJuYW1lcyI6WyJEZXRhaWxzIiwiRGV0YWlscy5jb25zdHJ1Y3RvciIsIkRldGFpbHMuZmV0Y2hOYW1lRnJvbVBhcmFtcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx5QkFBc0MsbUJBQW1CLENBQUMsQ0FBQTtBQUMxRCx1QkFBOEMsaUJBQWlCLENBQUMsQ0FBQTtBQUNoRSw0QkFBMEIsNEJBQzFCLENBQUMsQ0FEcUQ7QUFDdEQsdUJBQXFCLGtCQUNyQixDQUFDLENBRHNDO0FBR3ZDO0lBV0lBLGlCQUFtQkEsSUFBZUEsRUFBR0EsTUFBa0JBO1FBQXBDQyxTQUFJQSxHQUFKQSxJQUFJQSxDQUFXQTtRQUM5QkEsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0E7UUFDMUJBLElBQUlBLENBQUNBLFNBQVNBLEdBQUdBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLGlCQUFpQkEsQ0FBQ0EsQ0FBQ0E7UUFDdERBLElBQUlBLENBQUNBLElBQUlBLEdBQUdBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO1FBQy9CQSxJQUFJQSxDQUFDQSxtQkFBbUJBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUVBLFFBQVFBLENBQUNBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLEdBQUNBLENBQUNBLENBQUFBLENBQUNBLENBQUNBO0lBQzdFQSxDQUFDQTtJQUNERCxxQ0FBbUJBLEdBQW5CQSxVQUFvQkEsYUFBbUJBO1FBQ25DRSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxhQUFhQSxDQUFDQTtJQUNoQ0EsQ0FBQ0E7SUFuQkxGO1FBQUNBLG9CQUFTQSxDQUFDQTtZQUNQQSxRQUFRQSxFQUFFQSxTQUFTQTtTQUN0QkEsQ0FBQ0E7UUFDREEsZUFBSUEsQ0FBQ0E7WUFDRkEsV0FBV0EsRUFBRUEsOERBQThEQTtZQUMzRUEsVUFBVUEsRUFBRUEsQ0FBQ0EsbUJBQVVBLEVBQUVBLHlCQUFXQSxFQUFFQSxlQUFNQSxDQUFDQTtTQUNoREEsQ0FBQ0E7O2dCQWNEQTtJQUFEQSxjQUFDQTtBQUFEQSxDQXBCQSxBQW9CQ0EsSUFBQTtBQWJZLGVBQU8sVUFhbkIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL0YxRHJpdmVycy9EZXRhaWxzL2RldGFpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlldywgSW5qZWN0fSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5pbXBvcnQge1JvdXRlciwgUm91dGVQYXJhbXMsIFJvdXRlckxpbmt9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge05hdGlvbmFsaXR5fSBmcm9tICcuLi9uYXRpb25hbGl0eS9uYXRpb25hbGl0eSdcbmltcG9ydCB7UG9pbnRzfSBmcm9tICcuLi9wb2ludHMvcG9pbnRzJ1xuaW1wb3J0IHtOYW1lc0xpc3R9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL05hbWVMaXN0JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdEZXRhaWxzJ1xufSlcbkBWaWV3KHtcbiAgICB0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50cy9GMURyaXZlcnMvRGV0YWlscy9kZXRhaWxzLmh0bWw/dj08JT0gVkVSU0lPTiAlPicsXG4gICAgZGlyZWN0aXZlczogW1JvdXRlckxpbmssIE5hdGlvbmFsaXR5LCBQb2ludHNdXG59KVxuZXhwb3J0IGNsYXNzIERldGFpbHMge1xuICAgIGRyaXZlck9iajpBcnJheTxPYmplY3Q+O1xuICAgIGRyaXZlcjpPYmplY3Q7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbGlzdDogTmFtZXNMaXN0LCAgcGFyYW1zOlJvdXRlUGFyYW1zKXtcbiAgICAgICAgdGhpcy5kcml2ZXJPYmo9bGlzdC5nZXQoKTtcbiAgICAgICAgdGhpcy5kcml2ZXJPYmogPSB0aGlzLmRyaXZlck9ialswXVsnRHJpdmVyU3RhbmRpbmdzJ107XG4gICAgICAgIHRoaXMubmFtZSA9IHBhcmFtcy5nZXQoJ25hbWUnKTtcbiAgICAgICAgdGhpcy5mZXRjaE5hbWVGcm9tUGFyYW1zKHRoaXMuZHJpdmVyT2JqWyBwYXJzZUludChwYXJhbXMuZ2V0KCduYW1lJykpLTEpO1xuICAgIH1cbiAgICBmZXRjaE5hbWVGcm9tUGFyYW1zKGRyaXZlckRldGFpbHM6PGFueT4pIHtcbiAgICAgICAgdGhpcy5kcml2ZXIgPSBkcml2ZXJEZXRhaWxzOyBcbiAgICB9XG59XG5cbi8vIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9