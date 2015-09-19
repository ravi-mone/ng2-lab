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
var http_1 = require('angular2/http');
var HelloCmp = (function () {
    function HelloCmp(_http) {
        this._http = _http;
        this.result = {};
    }
    HelloCmp.prototype.sayHello = function () {
    };
    HelloCmp.prototype.getInfo = function () {
        var _this = this;
        this._http
            .get('http://jsonplaceholder.typicode.com/posts/2')
            .toRx()
            .map(function (r) { return r.json(); })
            .subscribe(function (r) {
            _this.result = r;
            console.log(_this.result);
        });
    };
    HelloCmp = __decorate([
        angular2_1.Component({
            selector: 'hello',
            viewBindings: [http_1.HTTP_BINDINGS]
        }),
        angular2_1.View({
            template: "\n    <h2>hello</h2>\n    <button type=\"button\" (click)=\"getInfo()\">get info</button> \n    <p>hello there, <span [text-content]=\"result.title\"></span>!</p> \n  "
        }), 
        __metadata('design:paramtypes', [(typeof Http !== 'undefined' && Http) || Object])
    ], HelloCmp);
    return HelloCmp;
})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaHR0cERlbW8vaHR0cGRlbW8udHMiXSwibmFtZXMiOlsiSGVsbG9DbXAiLCJIZWxsb0NtcC5jb25zdHJ1Y3RvciIsIkhlbGxvQ21wLnNheUhlbGxvIiwiSGVsbG9DbXAuZ2V0SW5mbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx5QkFBeUMsbUJBQW1CLENBQUMsQ0FBQTtBQUM3RCxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFHbEQ7SUFlSUEsa0JBQW9CQSxLQUFXQTtRQUFYQyxVQUFLQSxHQUFMQSxLQUFLQSxDQUFNQTtRQUYvQkEsV0FBTUEsR0FBYUEsRUFBRUEsQ0FBQ0E7SUFJdEJBLENBQUNBO0lBRURELDJCQUFRQSxHQUFSQTtJQUVBRSxDQUFDQTtJQUVERiwwQkFBT0EsR0FBUEE7UUFBQUcsaUJBVUNBO1FBVEdBLElBQUlBLENBQUNBLEtBQUtBO2FBQ0xBLEdBQUdBLENBQUNBLDZDQUE2Q0EsQ0FBQ0E7YUFDbERBLElBQUlBLEVBQUVBO2FBQ05BLEdBQUdBLENBQUNBLFVBQUNBLENBQUNBLElBQUtBLE9BQUFBLENBQUNBLENBQUNBLElBQUlBLEVBQUVBLEVBQVJBLENBQVFBLENBQUNBO2FBQ3BCQSxTQUFTQSxDQUFDQSxVQUFDQSxDQUFDQTtZQUNUQSxLQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUVoQkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsS0FBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQUE7UUFDNUJBLENBQUNBLENBQUNBLENBQUNBO0lBQ1hBLENBQUNBO0lBakNMSDtRQUFDQSxvQkFBU0EsQ0FBQ0E7WUFDUEEsUUFBUUEsRUFBRUEsT0FBT0E7WUFDakJBLFlBQVlBLEVBQUVBLENBQUNBLG9CQUFhQSxDQUFDQTtTQUNoQ0EsQ0FBQ0E7UUFDREEsZUFBSUEsQ0FBQ0E7WUFDRkEsUUFBUUEsRUFBRUEseUtBSVhBO1NBQ0ZBLENBQUNBOztpQkF3QkRBO0lBQURBLGVBQUNBO0FBQURBLENBbENBLEFBa0NDQSxJQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvaHR0cERlbW8vaHR0cGRlbW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlldywgYm9vdHN0cmFwfSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5pbXBvcnQge0h0dHAsIEhUVFBfQklORElOR1N9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaGVsbG8nLFxuICAgIHZpZXdCaW5kaW5nczogW0hUVFBfQklORElOR1NdXG59KVxuQFZpZXcoe1xuICAgIHRlbXBsYXRlOiBgXG4gICAgPGgyPmhlbGxvPC9oMj5cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiZ2V0SW5mbygpXCI+Z2V0IGluZm88L2J1dHRvbj4gXG4gICAgPHA+aGVsbG8gdGhlcmUsIDxzcGFuIFt0ZXh0LWNvbnRlbnRdPVwicmVzdWx0LnRpdGxlXCI+PC9zcGFuPiE8L3A+IFxuICBgXG59KVxuXG5jbGFzcyBIZWxsb0NtcCB7XG4gICAgcmVzdWx0OiBhbnkgPSA8YW55Pnt9O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCkge1xuXG4gICAgfVxuXG4gICAgc2F5SGVsbG8oKSB7XG5cbiAgICB9XG5cbiAgICBnZXRJbmZvKCkge1xuICAgICAgICB0aGlzLl9odHRwXG4gICAgICAgICAgICAuZ2V0KCdodHRwOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cy8yJylcbiAgICAgICAgICAgIC50b1J4KClcbiAgICAgICAgICAgIC5tYXAoKHIpID0+IHIuanNvbigpKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgocikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0ID0gcjtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVzdWx0KVxuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9