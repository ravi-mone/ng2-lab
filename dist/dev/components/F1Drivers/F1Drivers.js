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
var points_1 = require('./points/points');
var nationality_1 = require('./nationality/nationality');
var driverheader_1 = require('./Header/driverheader');
var NameList_1 = require('../../services/models/NameList');
var F1Drivers = (function () {
    function F1Drivers(list) {
        this.list = list;
        this.driverObj = list.get();
        this.driverObj = this.driverObj[0]['DriverStandings'];
        this.driversList = this.driverObj;
        this.pageSelected = parseInt(this.driversList.length);
    }
    F1Drivers.prototype.showSelected = function (limitTo) {
        this.pageSelected = limitTo;
    };
    F1Drivers.prototype.filterObj = function (obj, key, nameFilter) {
        var driverName = key;
        if (driverName.indexOf(nameFilter) !== -1) {
            obj.points = parseInt(obj.points);
            obj.position = parseInt(obj.position);
            obj.wins = parseInt(obj.wins);
            return obj;
        }
    };
    F1Drivers.prototype.filterByNames = function (nameFilter) {
        this.driverObj = this.driversList;
        var self = this;
        console.log(nameFilter.value);
        this.driverObj = this.driverObj.filter(function (Obj) {
            return self.filterObj(Obj, Obj.Driver.givenName, nameFilter.value);
        });
        this.pageSelected = this.driverObj.length;
        console.log(this.driverObj);
    };
    F1Drivers = __decorate([
        angular2_1.Component({
            selector: 'f1Drivers',
            viewInjector: [router_1.routerInjectables]
        }),
        angular2_1.View({
            templateUrl: './components/F1Drivers/f1Drivers.html?v=0.0.0',
            directives: [angular2_1.NgFor, angular2_1.NgIf, angular2_1.NgSwitch, angular2_1.NgSwitchWhen, angular2_1.NgSwitchDefault, points_1.Points, nationality_1.Nationality, driverheader_1.driverHeader, router_1.RouterLink]
        }), 
        __metadata('design:paramtypes', [NameList_1.NamesList])
    ], F1Drivers);
    return F1Drivers;
})();
exports.F1Drivers = F1Drivers;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRjFEcml2ZXJzL0YxRHJpdmVycy50cyJdLCJuYW1lcyI6WyJGMURyaXZlcnMiLCJGMURyaXZlcnMuY29uc3RydWN0b3IiLCJGMURyaXZlcnMuc2hvd1NlbGVjdGVkIiwiRjFEcml2ZXJzLmZpbHRlck9iaiIsIkYxRHJpdmVycy5maWx0ZXJCeU5hbWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHlCQUFvRixtQkFBbUIsQ0FBQyxDQUFBO0FBR3hHLHVCQUE0QyxpQkFBaUIsQ0FBQyxDQUFBO0FBQzlELHVCQUFxQixpQkFDckIsQ0FBQyxDQURxQztBQUN0Qyw0QkFBMEIsMkJBQzFCLENBQUMsQ0FEb0Q7QUFDckQsNkJBQTJCLHVCQUUzQixDQUFDLENBRmlEO0FBRWxELHlCQUF3QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBRXpEO0lBYUlBLG1CQUFtQkEsSUFBZUE7UUFBZkMsU0FBSUEsR0FBSkEsSUFBSUEsQ0FBV0E7UUFDOUJBLElBQUlBLENBQUNBLFNBQVNBLEdBQUNBLElBQUlBLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBO1FBQzFCQSxJQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxpQkFBaUJBLENBQUNBLENBQUNBO1FBQ3REQSxJQUFJQSxDQUFDQSxXQUFXQSxHQUFHQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQTtRQUNsQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsR0FBSUEsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7SUFDM0RBLENBQUNBO0lBQ0RELGdDQUFZQSxHQUFaQSxVQUFhQSxPQUFPQTtRQUNoQkUsSUFBSUEsQ0FBQ0EsWUFBWUEsR0FBR0EsT0FBT0EsQ0FBQ0E7SUFDaENBLENBQUNBO0lBRURGLDZCQUFTQSxHQUFUQSxVQUFVQSxHQUFHQSxFQUFFQSxHQUFHQSxFQUFFQSxVQUFVQTtRQUMxQkcsSUFBSUEsVUFBVUEsR0FBR0EsR0FBR0EsQ0FBQ0E7UUFDckJBLEVBQUVBLENBQUNBLENBQUNBLFVBQVVBLENBQUNBLE9BQU9BLENBQUNBLFVBQVVBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBRXhDQSxHQUFHQSxDQUFDQSxNQUFNQSxHQUFHQSxRQUFRQSxDQUFDQSxHQUFHQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtZQUNsQ0EsR0FBR0EsQ0FBQ0EsUUFBUUEsR0FBR0EsUUFBUUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0E7WUFDdENBLEdBQUdBLENBQUNBLElBQUlBLEdBQUdBLFFBQVFBLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQzlCQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQTtRQUNmQSxDQUFDQTtJQUNMQSxDQUFDQTtJQUNESCxpQ0FBYUEsR0FBYkEsVUFBY0EsVUFBVUE7UUFDcEJJLElBQUlBLENBQUNBLFNBQVNBLEdBQUdBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBO1FBS2xDQSxJQUFJQSxJQUFJQSxHQUFDQSxJQUFJQSxDQUFDQTtRQUNkQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxVQUFVQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFBQTtRQUM3QkEsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsVUFBU0EsR0FBR0E7WUFFL0MsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2RSxDQUFDLENBQUNBLENBQUNBO1FBQ0hBLElBQUlBLENBQUNBLFlBQVlBLEdBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLE1BQU1BLENBQUNBO1FBQ3hDQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFBQTtJQUMvQkEsQ0FBQ0E7SUEvQ0xKO1FBQUNBLG9CQUFTQSxDQUFDQTtZQUNQQSxRQUFRQSxFQUFFQSxXQUFXQTtZQUNyQkEsWUFBWUEsRUFBRUEsQ0FBQ0EsMEJBQWlCQSxDQUFDQTtTQUNwQ0EsQ0FBQ0E7UUFDREEsZUFBSUEsQ0FBQ0E7WUFDRkEsV0FBV0EsRUFBRUEsd0RBQXdEQTtZQUNyRUEsVUFBVUEsRUFBQ0EsQ0FBQ0EsZ0JBQUtBLEVBQUVBLGVBQUlBLEVBQUVBLG1CQUFRQSxFQUFFQSx1QkFBWUEsRUFBRUEsMEJBQWVBLEVBQUVBLGVBQU1BLEVBQUVBLHlCQUFXQSxFQUFFQSwyQkFBWUEsRUFBRUEsbUJBQVVBLENBQUNBO1NBRW5IQSxDQUFDQTs7a0JBeUNEQTtJQUFEQSxnQkFBQ0E7QUFBREEsQ0FqREEsQUFpRENBLElBQUE7QUF4Q1ksaUJBQVMsWUF3Q3JCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9GMURyaXZlcnMvRjFEcml2ZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXcsIE5nRm9yLCBOZ0lmLCBOZ1N3aXRjaCwgTmdTd2l0Y2hXaGVuLCBOZ1N3aXRjaERlZmF1bHR9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbi8vaW1wb3J0IHsgVmlld0NvbnRhaW5lclJlZiwgVGVtcGxhdGVSZWYgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbi8vaW1wb3J0IHtodHRwSW5qZWN0YWJsZXMsIEh0dHB9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0IHtSb3V0ZXJMaW5rLCByb3V0ZXJJbmplY3RhYmxlc30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7UG9pbnRzfSBmcm9tICcuL3BvaW50cy9wb2ludHMnXG5pbXBvcnQge05hdGlvbmFsaXR5fSBmcm9tICcuL25hdGlvbmFsaXR5L25hdGlvbmFsaXR5J1xuaW1wb3J0IHtkcml2ZXJIZWFkZXJ9IGZyb20gJy4vSGVhZGVyL2RyaXZlcmhlYWRlcidcblxuaW1wb3J0IHtOYW1lc0xpc3R9IGZyb20gJy4uLy4uL3NlcnZpY2VzL21vZGVscy9OYW1lTGlzdCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZjFEcml2ZXJzJyxcbiAgICB2aWV3SW5qZWN0b3I6IFtyb3V0ZXJJbmplY3RhYmxlc11cbn0pXG5AVmlldyh7XG4gICAgdGVtcGxhdGVVcmw6ICcuL2NvbXBvbmVudHMvRjFEcml2ZXJzL2YxRHJpdmVycy5odG1sP3Y9PCU9IFZFUlNJT04gJT4nLFxuICAgIGRpcmVjdGl2ZXM6W05nRm9yLCBOZ0lmLCBOZ1N3aXRjaCwgTmdTd2l0Y2hXaGVuLCBOZ1N3aXRjaERlZmF1bHQsIFBvaW50cywgTmF0aW9uYWxpdHksIGRyaXZlckhlYWRlciwgUm91dGVyTGlua11cbiAgICAvL3ZpZXdCaW5kaW5nczogW2h0dHBJbmplY3RhYmxlc11cbn0pXG5leHBvcnQgY2xhc3MgRjFEcml2ZXJzIHtcbiAgICBkcml2ZXJPYmo6QXJyYXk8T2JqZWN0PjtcbiAgICBwYWdlU2VsZWN0ZWQ6bnVtYmVyO1xuICAgIGRyaXZlcnNMaXN0Om51bWJlcjtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbGlzdDogTmFtZXNMaXN0KXtcbiAgICAgICAgdGhpcy5kcml2ZXJPYmo9bGlzdC5nZXQoKTtcbiAgICAgICAgdGhpcy5kcml2ZXJPYmogPSB0aGlzLmRyaXZlck9ialswXVsnRHJpdmVyU3RhbmRpbmdzJ107XG4gICAgICAgIHRoaXMuZHJpdmVyc0xpc3QgPSB0aGlzLmRyaXZlck9iajtcbiAgICAgICAgdGhpcy5wYWdlU2VsZWN0ZWQgPSAgcGFyc2VJbnQodGhpcy5kcml2ZXJzTGlzdC5sZW5ndGgpO1xuICAgIH1cbiAgICBzaG93U2VsZWN0ZWQobGltaXRUbyl7XG4gICAgICAgIHRoaXMucGFnZVNlbGVjdGVkID0gbGltaXRUbztcbiAgICB9XG4gICAgLy9GdW5jdGlvbiBjYWxsZWQgd2hlbiB0aGUgdXNlciBjbGlja3Mgb24gdGhlIHNlYXJjaCBidXR0b24uXG4gICAgZmlsdGVyT2JqKG9iaiwga2V5LCBuYW1lRmlsdGVyKSB7XG4gICAgICAgIHZhciBkcml2ZXJOYW1lID0ga2V5O1xuICAgICAgICBpZiAoZHJpdmVyTmFtZS5pbmRleE9mKG5hbWVGaWx0ZXIpICE9PSAtMSkge1xuICAgICAgICAgICAgLy9tYWtlIHBhcnNlSW50IHNvIGFzIHRvIGFwcGx5IG9yZGVyQnkgZmlsdGVyIG9uICdwb2ludHMnLCAncG9zaXRpb24nIGFuZCAnd2lucycgY29sdW1uXG4gICAgICAgICAgICBvYmoucG9pbnRzID0gcGFyc2VJbnQob2JqLnBvaW50cyk7XG4gICAgICAgICAgICBvYmoucG9zaXRpb24gPSBwYXJzZUludChvYmoucG9zaXRpb24pO1xuICAgICAgICAgICAgb2JqLndpbnMgPSBwYXJzZUludChvYmoud2lucyk7XG4gICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZpbHRlckJ5TmFtZXMobmFtZUZpbHRlcikge1xuICAgICAgICB0aGlzLmRyaXZlck9iaiA9IHRoaXMuZHJpdmVyc0xpc3Q7XG5cbiAgICAgICAgLypUaGUgZmlsdGVyKCkgbWV0aG9kIGNyZWF0ZXMgYSBuZXcgYXJyYXkgd2l0aCBhbGwgZWxlbWVudHMgdGhhdCBwYXNzIHRoZSB0ZXN0IGltcGxlbWVudGVkIGJ5IHRoZSBwcm92aWRlZCBmdW5jdGlvbi5cbiAgICAgICAgICogcmVmZXI6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L2ZpbHRlclxuICAgICAgICAgKiAqL1xuICAgICAgICB2YXIgc2VsZj10aGlzO1xuICAgICAgICBjb25zb2xlLmxvZyhuYW1lRmlsdGVyLnZhbHVlKVxuICAgICAgICB0aGlzLmRyaXZlck9iaiA9IHRoaXMuZHJpdmVyT2JqLmZpbHRlcihmdW5jdGlvbihPYmope1xuXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5maWx0ZXJPYmooT2JqLCBPYmouRHJpdmVyLmdpdmVuTmFtZSwgbmFtZUZpbHRlci52YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnBhZ2VTZWxlY3RlZD10aGlzLmRyaXZlck9iai5sZW5ndGg7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZHJpdmVyT2JqKVxuICAgIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9