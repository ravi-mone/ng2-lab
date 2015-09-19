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
var github_api_1 = require('../api/github_api');
var user_1 = require('../models/user');
var UserRepo = (function () {
    function UserRepo(api) {
        this.api = api;
        this.users = new Map();
    }
    UserRepo.prototype.getUser = function (username) {
        var _this = this;
        if (this.users.has(username)) {
            return Promise.resolve(this.users.get(username));
        }
        else {
            return this.api.getUser(username)
                .then(function (u) {
                var user = new user_1.default();
                user.id = u.id;
                user.name = u.name;
                user.username = u.login;
                user.avatarUrl = u.avatar_url;
                user.followers = u.followers;
                user.following = u.following;
                _this.users.set(username, user);
                return user;
            });
        }
    };
    UserRepo.prototype.getAll = function () {
        return this.users.values();
    };
    UserRepo.prototype.remove = function (user) {
        this.users.delete(user.username);
    };
    UserRepo = __decorate([
        angular2_1.Injectable(),
        __param(0, angular2_1.Inject(github_api_1.GitHubAPI)), 
        __metadata('design:paramtypes', [github_api_1.GitHubAPI])
    ], UserRepo);
    return UserRepo;
})();
exports.default = UserRepo;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3JlcG9zaXRvcmllcy91c2VyX3JlcG8udHMiXSwibmFtZXMiOlsiVXNlclJlcG8iLCJVc2VyUmVwby5jb25zdHJ1Y3RvciIsIlVzZXJSZXBvLmdldFVzZXIiLCJVc2VyUmVwby5nZXRBbGwiLCJVc2VyUmVwby5yZW1vdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUJBQTJDLG1CQUFtQixDQUFDLENBQUE7QUFFL0QsMkJBQXdCLG1CQUFtQixDQUFDLENBQUE7QUFHNUMscUJBQWlCLGdCQUFnQixDQUFDLENBQUE7QUFFbEM7SUFHRUEsa0JBQXVDQSxHQUFhQTtRQUFiQyxRQUFHQSxHQUFIQSxHQUFHQSxDQUFVQTtRQUNsREEsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsSUFBSUEsR0FBR0EsRUFBZ0JBLENBQUNBO0lBQ3ZDQSxDQUFDQTtJQUNERCwwQkFBT0EsR0FBUEEsVUFBUUEsUUFBZUE7UUFBdkJFLGlCQWlCQ0E7UUFoQkNBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQzdCQSxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNuREEsQ0FBQ0E7UUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDTkEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsUUFBUUEsQ0FBQ0E7aUJBQzlCQSxJQUFJQSxDQUFDQSxVQUFDQSxDQUFZQTtnQkFDakJBLElBQUlBLElBQUlBLEdBQUdBLElBQUlBLGNBQUlBLEVBQUVBLENBQUNBO2dCQUN0QkEsSUFBSUEsQ0FBQ0EsRUFBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0E7Z0JBQ2ZBLElBQUlBLENBQUNBLElBQUlBLEdBQUdBLENBQUNBLENBQUNBLElBQUlBLENBQUNBO2dCQUNuQkEsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0E7Z0JBQ3hCQSxJQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxDQUFDQSxDQUFDQSxVQUFVQSxDQUFDQTtnQkFDOUJBLElBQUlBLENBQUNBLFNBQVNBLEdBQUdBLENBQUNBLENBQUNBLFNBQVNBLENBQUNBO2dCQUM3QkEsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsU0FBU0EsQ0FBQ0E7Z0JBQzdCQSxLQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxRQUFRQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtnQkFDL0JBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBO1lBQ2RBLENBQUNBLENBQUNBLENBQUNBO1FBQ1BBLENBQUNBO0lBQ0hBLENBQUNBO0lBQ0RGLHlCQUFNQSxHQUFOQTtRQUNFRyxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQTtJQUM3QkEsQ0FBQ0E7SUFDREgseUJBQU1BLEdBQU5BLFVBQU9BLElBQVNBO1FBQ2RJLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBO0lBQ25DQSxDQUFDQTtJQTdCSEo7UUFBQ0EscUJBQVVBLEVBQUVBO1FBR0NBLFdBQUNBLGlCQUFNQSxDQUFDQSxzQkFBU0EsQ0FBQ0EsQ0FBQUE7O2lCQTJCL0JBO0lBQURBLGVBQUNBO0FBQURBLENBOUJBLEFBOEJDQSxJQUFBO0FBOUJELDBCQThCQyxDQUFBIiwiZmlsZSI6InNlcnZpY2VzL3JlcG9zaXRvcmllcy91c2VyX3JlcG8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdCwgSW5qZWN0YWJsZSwgSVByb21pc2V9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcblxuaW1wb3J0IHtHaXRIdWJBUEl9IGZyb20gJy4uL2FwaS9naXRodWJfYXBpJztcbmltcG9ydCB7R2l0SHViVXNlcn0gZnJvbSAnLi4vYXBpL2ludGVyZmFjZXMnO1xuXG5pbXBvcnQgVXNlciBmcm9tICcuLi9tb2RlbHMvdXNlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJSZXBvIHtcbiAgcHJpdmF0ZSB1c2VyczpNYXA8c3RyaW5nLCBVc2VyPjtcbiAgY29uc3RydWN0b3IoQEluamVjdChHaXRIdWJBUEkpIHByaXZhdGUgYXBpOkdpdEh1YkFQSSkge1xuICAgIHRoaXMudXNlcnMgPSBuZXcgTWFwPHN0cmluZywgVXNlcj4oKTtcbiAgfVxuICBnZXRVc2VyKHVzZXJuYW1lOnN0cmluZyk6SVByb21pc2U8VXNlcj4ge1xuICAgIGlmICh0aGlzLnVzZXJzLmhhcyh1c2VybmFtZSkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy51c2Vycy5nZXQodXNlcm5hbWUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuYXBpLmdldFVzZXIodXNlcm5hbWUpXG4gICAgICAgIC50aGVuKCh1OkdpdEh1YlVzZXIpID0+IHtcbiAgICAgICAgICBsZXQgdXNlciA9IG5ldyBVc2VyKCk7XG4gICAgICAgICAgdXNlci5pZCA9IHUuaWQ7XG4gICAgICAgICAgdXNlci5uYW1lID0gdS5uYW1lO1xuICAgICAgICAgIHVzZXIudXNlcm5hbWUgPSB1LmxvZ2luO1xuICAgICAgICAgIHVzZXIuYXZhdGFyVXJsID0gdS5hdmF0YXJfdXJsO1xuICAgICAgICAgIHVzZXIuZm9sbG93ZXJzID0gdS5mb2xsb3dlcnM7XG4gICAgICAgICAgdXNlci5mb2xsb3dpbmcgPSB1LmZvbGxvd2luZztcbiAgICAgICAgICB0aGlzLnVzZXJzLnNldCh1c2VybmFtZSwgdXNlcik7XG4gICAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBnZXRBbGwoKTpVc2VyW10ge1xuICAgIHJldHVybiB0aGlzLnVzZXJzLnZhbHVlcygpO1xuICB9XG4gIHJlbW92ZSh1c2VyOlVzZXIpIHtcbiAgICB0aGlzLnVzZXJzLmRlbGV0ZSh1c2VyLnVzZXJuYW1lKTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==