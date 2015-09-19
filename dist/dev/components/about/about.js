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
var NameList_1 = require('../../services/models/NameList');
var About = (function () {
    function About(list) {
        this.list = list;
    }
    About.prototype.addName = function (newname) {
        this.list.add(newname.value);
        newname.value = '';
    };
    About = __decorate([
        angular2_1.Component({
            selector: 'about',
        }),
        angular2_1.View({
            templateUrl: './components/about/about.html?v=0.0.0',
            styleUrls: ['about.css'],
            directives: [angular2_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [NameList_1.NamesList])
    ], About);
    return About;
})();
exports.About = About;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWJvdXQvYWJvdXQudHMiXSwibmFtZXMiOlsiQWJvdXQiLCJBYm91dC5jb25zdHJ1Y3RvciIsIkFib3V0LmFkZE5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEseUJBQStDLG1CQUFtQixDQUFDLENBQUE7QUFFbkUseUJBQXdCLGdDQUFnQyxDQUFDLENBQUE7QUFFekQ7SUFVRUEsZUFBbUJBLElBQWVBO1FBQWZDLFNBQUlBLEdBQUpBLElBQUlBLENBQVdBO0lBQ2xDQSxDQUFDQTtJQUNERCx1QkFBT0EsR0FBUEEsVUFBUUEsT0FBT0E7UUFDYkUsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDN0JBLE9BQU9BLENBQUNBLEtBQUtBLEdBQUdBLEVBQUVBLENBQUNBO0lBQ3JCQSxDQUFDQTtJQWZIRjtRQUFDQSxvQkFBU0EsQ0FBQ0E7WUFDVEEsUUFBUUEsRUFBRUEsT0FBT0E7U0FFbEJBLENBQUNBO1FBQ0RBLGVBQUlBLENBQUNBO1lBQ0pBLFdBQVdBLEVBQUVBLGdEQUFnREE7WUFDN0RBLFNBQVNBLEVBQUdBLENBQUNBLFdBQVdBLENBQUNBO1lBQ3pCQSxVQUFVQSxFQUFFQSxDQUFDQSwwQkFBZUEsQ0FBQ0E7U0FDOUJBLENBQUNBOztjQVFEQTtJQUFEQSxZQUFDQTtBQUFEQSxDQWhCQSxBQWdCQ0EsSUFBQTtBQVBZLGFBQUssUUFPakIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2Fib3V0L2Fib3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXcsIENPUkVfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuXG5pbXBvcnQge05hbWVzTGlzdH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbW9kZWxzL05hbWVMaXN0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWJvdXQnLFxuXG59KVxuQFZpZXcoe1xuICB0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50cy9hYm91dC9hYm91dC5odG1sP3Y9PCU9IFZFUlNJT04gJT4nLFxuICBzdHlsZVVybHMgOiBbJ2Fib3V0LmNzcyddXG4gIGRpcmVjdGl2ZXM6IFtDT1JFX0RJUkVDVElWRVNdXG59KVxuZXhwb3J0IGNsYXNzIEFib3V0IHtcbiAgY29uc3RydWN0b3IocHVibGljIGxpc3Q6IE5hbWVzTGlzdCkge1xuICB9XG4gIGFkZE5hbWUobmV3bmFtZSkge1xuICAgIHRoaXMubGlzdC5hZGQobmV3bmFtZS52YWx1ZSk7XG4gICAgbmV3bmFtZS52YWx1ZSA9ICcnO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=