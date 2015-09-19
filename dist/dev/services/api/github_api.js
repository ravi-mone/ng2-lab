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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var angular2_1 = require('angular2/angular2');
var http_1 = require('http/http');
var config_1 = require('../../config/config');
var UrlBuilder = (function () {
    function UrlBuilder(url, token) {
        this.url = url;
        this.token = token;
    }
    UrlBuilder.prototype.appendToken = function (url) {
        if (this.token) {
            return url + ("?access_token=" + config_1.API_TOKEN);
        }
        return url;
    };
    UrlBuilder.prototype.user = function (user) {
        return this.appendToken(this.url + "/users/" + user);
    };
    return UrlBuilder;
})();
var GitHubAPI = (function () {
    function GitHubAPI(http) {
        this.http = http;
        this.urlBuilder = new UrlBuilder(config_1.GITHUB_API_ROOT, config_1.API_TOKEN);
        console.log(this.urlBuilder);
    }
    GitHubAPI.prototype.getUser = function (user) {
        var httpCall = this.http.get(this.urlBuilder.user(user))
            .toRx()
            .map(function (res) { return res.json(); })
            .toPromise();
        console.log(httpCall);
        return httpCall;
    };
    GitHubAPI = __decorate([
        angular2_1.Injectable(),
        __param(0, angular2_1.Inject(http_1.Http)), 
        __metadata('design:paramtypes', [http_1.Http])
    ], GitHubAPI);
    return GitHubAPI;
})();
exports.GitHubAPI = GitHubAPI;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2FwaS9naXRodWJfYXBpLnRzIl0sIm5hbWVzIjpbIlVybEJ1aWxkZXIiLCJVcmxCdWlsZGVyLmNvbnN0cnVjdG9yIiwiVXJsQnVpbGRlci5hcHBlbmRUb2tlbiIsIlVybEJ1aWxkZXIudXNlciIsIkdpdEh1YkFQSSIsIkdpdEh1YkFQSS5jb25zdHJ1Y3RvciIsIkdpdEh1YkFQSS5nZXRVc2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHlCQUFpQyxtQkFBbUIsQ0FBQyxDQUFBO0FBRXJELHFCQUFtQixXQUFXLENBQUMsQ0FBQTtBQUsvQix1QkFBeUMscUJBQXFCLENBQUMsQ0FBQTtBQUUvRDtJQUNFQSxvQkFBb0JBLEdBQVVBLEVBQVVBLEtBQVlBO1FBQWhDQyxRQUFHQSxHQUFIQSxHQUFHQSxDQUFPQTtRQUFVQSxVQUFLQSxHQUFMQSxLQUFLQSxDQUFPQTtJQUFHQSxDQUFDQTtJQUNoREQsZ0NBQVdBLEdBQW5CQSxVQUFvQkEsR0FBVUE7UUFDNUJFLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBO1lBQ2ZBLE1BQU1BLENBQUNBLEdBQUdBLEdBQUdBLG9CQUFpQkEsa0JBQVNBLENBQUVBLENBQUNBO1FBQzVDQSxDQUFDQTtRQUNEQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQTtJQUNiQSxDQUFDQTtJQUNERix5QkFBSUEsR0FBSkEsVUFBS0EsSUFBV0E7UUFDZEcsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBSUEsSUFBSUEsQ0FBQ0EsR0FBR0EsZUFBVUEsSUFBTUEsQ0FBQ0EsQ0FBQ0E7SUFDdkRBLENBQUNBO0lBQ0hILGlCQUFDQTtBQUFEQSxDQVhBLEFBV0NBLElBQUE7QUFFRDtJQUdFSSxtQkFBa0NBLElBQVNBO1FBQVRDLFNBQUlBLEdBQUpBLElBQUlBLENBQUtBO1FBQ3pDQSxJQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxJQUFJQSxVQUFVQSxDQUFDQSx3QkFBZUEsRUFBRUEsa0JBQVNBLENBQUNBLENBQUNBO1FBQy9EQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFBQTtJQUM1QkEsQ0FBQ0E7SUFDTUQsMkJBQU9BLEdBQWRBLFVBQWVBLElBQVdBO1FBRXhCRSxJQUFJQSxRQUFRQSxHQUFHQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTthQUNuREEsSUFBSUEsRUFBRUE7YUFDUkEsR0FBR0EsQ0FBQ0EsVUFBQUEsR0FBR0EsSUFBSUEsT0FBQUEsR0FBR0EsQ0FBQ0EsSUFBSUEsRUFBRUEsRUFBVkEsQ0FBVUEsQ0FBQ0E7YUFDdEJBLFNBQVNBLEVBQUVBLENBQUNBO1FBQ2JBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLFFBQVFBLENBQUNBLENBQUFBO1FBQ3ZCQSxNQUFNQSxDQUFDQSxRQUFRQSxDQUFDQTtJQUNsQkEsQ0FBQ0E7SUFmSEY7UUFBQ0EscUJBQVVBLEVBQUVBO1FBR0NBLFdBQUNBLGlCQUFNQSxDQUFDQSxXQUFJQSxDQUFDQSxDQUFBQTs7a0JBYTFCQTtJQUFEQSxnQkFBQ0E7QUFBREEsQ0FoQkEsQUFnQkNBLElBQUE7QUFmWSxpQkFBUyxZQWVyQixDQUFBIiwiZmlsZSI6InNlcnZpY2VzL2FwaS9naXRodWJfYXBpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3QsIEluamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcblxuaW1wb3J0IHtIdHRwfSBmcm9tICdodHRwL2h0dHAnO1xuXG5pbXBvcnQge0lQcm9taXNlfSBmcm9tICdyeCc7XG5cbmltcG9ydCB7R2l0SHViVXNlcn0gZnJvbSAnLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7R0lUSFVCX0FQSV9ST09ULCBBUElfVE9LRU59IGZyb20gJy4uLy4uL2NvbmZpZy9jb25maWcnO1xuXG5jbGFzcyBVcmxCdWlsZGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB1cmw6c3RyaW5nLCBwcml2YXRlIHRva2VuOnN0cmluZykge31cbiAgcHJpdmF0ZSBhcHBlbmRUb2tlbih1cmw6c3RyaW5nKTpzdHJpbmcge1xuICAgIGlmICh0aGlzLnRva2VuKSB7XG4gICAgICByZXR1cm4gdXJsICsgYD9hY2Nlc3NfdG9rZW49JHtBUElfVE9LRU59YDtcbiAgICB9XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1c2VyKHVzZXI6c3RyaW5nKTpzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmFwcGVuZFRva2VuKGAke3RoaXMudXJsfS91c2Vycy8ke3VzZXJ9YCk7XG4gIH1cbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdpdEh1YkFQSSB7XG4gIHByaXZhdGUgdXJsQnVpbGRlcjpVcmxCdWlsZGVyO1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KEh0dHApIHByaXZhdGUgaHR0cDpIdHRwKSB7XG4gICAgdGhpcy51cmxCdWlsZGVyID0gbmV3IFVybEJ1aWxkZXIoR0lUSFVCX0FQSV9ST09ULCBBUElfVE9LRU4pO1xuICBjb25zb2xlLmxvZyh0aGlzLnVybEJ1aWxkZXIpXG4gIH1cbiAgcHVibGljIGdldFVzZXIodXNlcjpzdHJpbmcpOklQcm9taXNlPEdpdEh1YlVzZXI+IHtcbiAgLy9odHRwLnJlcXVlc3QoJ2RhdGEudHh0Jykuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmRhdGEgPSByZXMudGV4dCgpKTtcbiAgICB2YXIgaHR0cENhbGwgPSB0aGlzLmh0dHAuZ2V0KHRoaXMudXJsQnVpbGRlci51c2VyKHVzZXIpKVxuICAgICAgICAudG9SeCgpXG4gICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgLnRvUHJvbWlzZSgpO1xuICAgICAgY29uc29sZS5sb2coaHR0cENhbGwpXG4gICAgcmV0dXJuIGh0dHBDYWxsO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=