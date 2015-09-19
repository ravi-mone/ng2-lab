/**
 * Created by ravi on 28/8/15.
 */
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
var NameList_1 = require('../../../services/models/NameList');
var driverHeader = (function () {
    function driverHeader(list) {
        this.list = list;
        this.isreverse = false;
        this.driverObj = list.get();
        this.driverObj = this.driverObj[0]['DriverStandings'];
    }
    driverHeader.prototype.sortBy = function (name) {
        if (this.isreverse == false) {
            this.driverObj = this.driverObj.sort(function (a, b) {
                return a[name] - b[name];
            });
            this.isreverse = true;
        }
        else {
            this.driverObj = this.driverObj.sort(function (a, b) {
                return b[name] - a[name];
            });
            this.isreverse = false;
        }
    };
    driverHeader = __decorate([
        angular2_1.Component({
            selector: 'driverHeader',
        }),
        angular2_1.View({
            templateUrl: './components/F1Drivers/Header/driverheader.html?v=0.0.0'
        }), 
        __metadata('design:paramtypes', [NameList_1.NamesList])
    ], driverHeader);
    return driverHeader;
})();
exports.driverHeader = driverHeader;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRjFEcml2ZXJzL0hlYWRlci9kcml2ZXJoZWFkZXIudHMiXSwibmFtZXMiOlsiZHJpdmVySGVhZGVyIiwiZHJpdmVySGVhZGVyLmNvbnN0cnVjdG9yIiwiZHJpdmVySGVhZGVyLnNvcnRCeSJdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7Ozs7Ozs7Ozs7OztBQUVILHlCQUE4QixtQkFBbUIsQ0FBQyxDQUFBO0FBRWxELHlCQUF3QixtQ0FBbUMsQ0FBQyxDQUFBO0FBRTVEO0lBV0lBLHNCQUFtQkEsSUFBZUE7UUFBZkMsU0FBSUEsR0FBSkEsSUFBSUEsQ0FBV0E7UUFGbENBLGNBQVNBLEdBQVdBLEtBQUtBLENBQUNBO1FBR3RCQSxJQUFJQSxDQUFDQSxTQUFTQSxHQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQTtRQUMxQkEsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsaUJBQWlCQSxDQUFDQSxDQUFDQTtJQUMxREEsQ0FBQ0E7SUFFREQsNkJBQU1BLEdBQU5BLFVBQU9BLElBQUlBO1FBQ1BFLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLElBQUlBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBO1lBQzFCQSxJQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxFQUFFQSxDQUFDQTtnQkFDL0MsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0IsQ0FBQyxDQUFDQSxDQUFDQTtZQUNIQSxJQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxJQUFJQSxDQUFDQTtRQUMxQkEsQ0FBQ0E7UUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDSkEsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsRUFBRUEsQ0FBQ0E7Z0JBQy9DLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdCLENBQUMsQ0FBQ0EsQ0FBQ0E7WUFDSEEsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsS0FBS0EsQ0FBQ0E7UUFDM0JBLENBQUNBO0lBRUxBLENBQUNBO0lBN0JMRjtRQUFDQSxvQkFBU0EsQ0FBQ0E7WUFDUEEsUUFBUUEsRUFBRUEsY0FBY0E7U0FDM0JBLENBQUNBO1FBQ0RBLGVBQUlBLENBQUNBO1lBQ0ZBLFdBQVdBLEVBQUVBLGtFQUFrRUE7U0FDbEZBLENBQUNBOztxQkF5QkRBO0lBQURBLG1CQUFDQTtBQUFEQSxDQTlCQSxBQThCQ0EsSUFBQTtBQXhCWSxvQkFBWSxlQXdCeEIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL0YxRHJpdmVycy9IZWFkZXIvZHJpdmVyaGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHJhdmkgb24gMjgvOC8xNS5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgVmlld30gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuXG5pbXBvcnQge05hbWVzTGlzdH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbW9kZWxzL05hbWVMaXN0JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdkcml2ZXJIZWFkZXInLFxufSlcbkBWaWV3KHtcbiAgICB0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50cy9GMURyaXZlcnMvSGVhZGVyL2RyaXZlcmhlYWRlci5odG1sP3Y9PCU9IFZFUlNJT04gJT4nXG59KVxuZXhwb3J0IGNsYXNzIGRyaXZlckhlYWRlciB7XG5cbiAgICBkcml2ZXJPYmo6QXJyYXk8T2JqZWN0PjtcbiAgICBpc3JldmVyc2U6Ym9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGxpc3Q6IE5hbWVzTGlzdCl7XG4gICAgICAgIHRoaXMuZHJpdmVyT2JqPWxpc3QuZ2V0KCk7XG4gICAgICAgIHRoaXMuZHJpdmVyT2JqID0gdGhpcy5kcml2ZXJPYmpbMF1bJ0RyaXZlclN0YW5kaW5ncyddO1xuICAgIH1cblxuICAgIHNvcnRCeShuYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLmlzcmV2ZXJzZSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5kcml2ZXJPYmogPSB0aGlzLmRyaXZlck9iai5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFbbmFtZV0gLSBiW25hbWVdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmlzcmV2ZXJzZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRyaXZlck9iaiA9IHRoaXMuZHJpdmVyT2JqLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYltuYW1lXSAtIGFbbmFtZV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuaXNyZXZlcnNlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=