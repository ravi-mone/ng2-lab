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
var user_repo_1 = require('../../services/repositories/user_repo');
var alert_1 = require('../../ng2-bootstrap/alert/alert');
var Home = (function () {
    function Home(repo) {
        this.repo = repo;
        this.alertOpened = true;
        this.userName = '';
        console.log(user_repo_1.default);
    }
    Home.prototype.addUser = function (currentUser) {
        var _this = this;
        this.loading = true;
        this.repo.getUser(currentUser.value)
            .then(function (u) {
            _this.loading = false;
            _this.userName = u.name;
        });
        currentUser.value = '';
    };
    Home.prototype.getAll = function () {
        return this.repo.getAll();
    };
    Home.prototype.remove = function (user) {
        this.repo.remove(user);
    };
    Home.prototype.close = function (evt) {
        evt.preventDefault();
        this.alertOpened = false;
    };
    Home.prototype.log = function (msg) {
        console.log(msg);
    };
    Home.prototype.toggle = function () {
        this.alertOpened = !this.alertOpened;
    };
    Home = __decorate([
        angular2_1.Component({
            selector: 'home'
        }),
        angular2_1.View({
            templateUrl: './components/home/home.html?v=0.0.0',
            directives: [angular2_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES, alert_1.Alert]
        }), 
        __metadata('design:paramtypes', [user_repo_1.default])
    ], Home);
    return Home;
})();
exports.Home = Home;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZS9ob21lLnRzIl0sIm5hbWVzIjpbIkhvbWUiLCJIb21lLmNvbnN0cnVjdG9yIiwiSG9tZS5hZGRVc2VyIiwiSG9tZS5nZXRBbGwiLCJIb21lLnJlbW92ZSIsIkhvbWUuY2xvc2UiLCJIb21lLmxvZyIsIkhvbWUudG9nZ2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHlCQUErQyxtQkFBbUIsQ0FBQyxDQUFBO0FBQ25FLHVCQUFnQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ2xELDBCQUFxQix1Q0FBdUMsQ0FBQyxDQUFBO0FBRTdELHNCQUFvQixpQ0FBaUMsQ0FBQyxDQUFBO0FBQ3REO0lBWUlBLGNBQW9CQSxJQUFhQTtRQUFiQyxTQUFJQSxHQUFKQSxJQUFJQSxDQUFTQTtRQUZ6QkEsZ0JBQVdBLEdBQVdBLElBQUlBLENBQUNBO1FBQ25DQSxhQUFRQSxHQUFTQSxFQUFFQSxDQUFDQTtRQUNpQkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsbUJBQVFBLENBQUNBLENBQUNBO0lBQUNBLENBQUNBO0lBQzdERCxzQkFBT0EsR0FBUEEsVUFBUUEsV0FBV0E7UUFBbkJFLGlCQVFDQTtRQVBHQSxJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxJQUFJQSxDQUFDQTtRQUNwQkEsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsS0FBS0EsQ0FBQ0E7YUFDL0JBLElBQUlBLENBQUNBLFVBQUFBLENBQUNBO1lBQ0hBLEtBQUlBLENBQUNBLE9BQU9BLEdBQUdBLEtBQUtBLENBQUNBO1lBQ3JCQSxLQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQTtRQUMzQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDUEEsV0FBV0EsQ0FBQ0EsS0FBS0EsR0FBR0EsRUFBRUEsQ0FBQ0E7SUFDM0JBLENBQUNBO0lBQ0RGLHFCQUFNQSxHQUFOQTtRQUNJRyxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQTtJQUM5QkEsQ0FBQ0E7SUFDREgscUJBQU1BLEdBQU5BLFVBQU9BLElBQVNBO1FBQ1pJLElBQUlBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLENBQUNBO0lBQzNCQSxDQUFDQTtJQUVESixvQkFBS0EsR0FBTEEsVUFBTUEsR0FBY0E7UUFDaEJLLEdBQUdBLENBQUNBLGNBQWNBLEVBQUVBLENBQUNBO1FBQ3JCQSxJQUFJQSxDQUFDQSxXQUFXQSxHQUFHQSxLQUFLQSxDQUFDQTtJQUM3QkEsQ0FBQ0E7SUFFREwsa0JBQUdBLEdBQUhBLFVBQUlBLEdBQVVBO1FBQ1ZNLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO0lBQ3JCQSxDQUFDQTtJQUVETixxQkFBTUEsR0FBTkE7UUFDSU8sSUFBSUEsQ0FBQ0EsV0FBV0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0E7SUFDekNBLENBQUNBO0lBeENMUDtRQUFDQSxvQkFBU0EsQ0FBQ0E7WUFDUEEsUUFBUUEsRUFBRUEsTUFBTUE7U0FDbkJBLENBQUNBO1FBQ0RBLGVBQUlBLENBQUNBO1lBQ0ZBLFdBQVdBLEVBQUVBLDhDQUE4Q0E7WUFDM0RBLFVBQVVBLEVBQUVBLENBQUNBLDBCQUFlQSxFQUFFQSwwQkFBaUJBLEVBQUVBLGFBQUtBLENBQUNBO1NBQzFEQSxDQUFDQTs7YUFtQ0RBO0lBQURBLFdBQUNBO0FBQURBLENBekNBLEFBeUNDQSxJQUFBO0FBbENZLFlBQUksT0FrQ2hCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9ob21lL2hvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlldywgQ09SRV9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IFVzZXJSZXBvIGZyb20gJy4uLy4uL3NlcnZpY2VzL3JlcG9zaXRvcmllcy91c2VyX3JlcG8nO1xuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vc2VydmljZXMvbW9kZWxzL3VzZXInO1xuaW1wb3J0IHtBbGVydH0gZnJvbSAnLi4vLi4vbmcyLWJvb3RzdHJhcC9hbGVydC9hbGVydCc7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2hvbWUnXG59KVxuQFZpZXcoe1xuICAgIHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL2hvbWUvaG9tZS5odG1sP3Y9PCU9IFZFUlNJT04gJT4nLFxuICAgIGRpcmVjdGl2ZXM6IFtDT1JFX0RJUkVDVElWRVMsIFJPVVRFUl9ESVJFQ1RJVkVTLCBBbGVydF1cbn0pXG5leHBvcnQgY2xhc3MgSG9tZSB7XG4gICAgcHJpdmF0ZSBsb2FkaW5nOmJvb2xlYW47XG4gICAgLy9Cb290c3RyYXAgYWxlcnRcbiAgICBwcml2YXRlIGFsZXJ0T3BlbmVkOmJvb2xlYW4gPSB0cnVlO1xuICAgIHVzZXJOYW1lOnN0cmluZyA9Jyc7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZXBvOlVzZXJSZXBvKSB7IGNvbnNvbGUubG9nKFVzZXJSZXBvKTsgfVxuICAgIGFkZFVzZXIoY3VycmVudFVzZXIpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yZXBvLmdldFVzZXIoY3VycmVudFVzZXIudmFsdWUpXG4gICAgICAgICAgICAudGhlbih1ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJOYW1lID0gdS5uYW1lO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIGN1cnJlbnRVc2VyLnZhbHVlID0gJyc7XG4gICAgfVxuICAgIGdldEFsbCgpOlVzZXJbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcG8uZ2V0QWxsKCk7XG4gICAgfVxuICAgIHJlbW92ZSh1c2VyOlVzZXIpIHtcbiAgICAgICAgdGhpcy5yZXBvLnJlbW92ZSh1c2VyKTtcbiAgICB9XG4gICAgLy9Cb290c3RyYXAgQWxlcnRcbiAgICBjbG9zZShldnQ6TW91c2VFdmVudCkge1xuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5hbGVydE9wZW5lZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGxvZyhtc2c6c3RyaW5nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKG1zZyk7XG4gICAgfVxuXG4gICAgdG9nZ2xlKCkge1xuICAgICAgICB0aGlzLmFsZXJ0T3BlbmVkID0gIXRoaXMuYWxlcnRPcGVuZWQ7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9