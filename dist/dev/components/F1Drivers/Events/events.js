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
var angular2_1 = require("angular2/angular2");
var NameList_1 = require('../../../services/models/NameList');
var EventsDemo = (function () {
    function EventsDemo(list) {
        this.listObj = list;
        this.articles = list.articleList;
        console.log(this.articles);
    }
    EventsDemo.prototype.addArticle = function (title, link) {
        console.log("Adding article with title", title.value, "and link", link.value);
        this.listObj.postArticle({ title: title.value, link: link.value });
        title.value = '';
        link.value = '';
    };
    EventsDemo.prototype.deleteArticle = function (index) {
        console.log(index);
        this.listObj.deleteArticle(index);
    };
    EventsDemo = __decorate([
        angular2_1.Component({
            selector: 'events-demo',
        }),
        angular2_1.View({
            templateUrl: './components/F1Drivers/Events/events.html',
            directives: [angular2_1.NgFor, angular2_1.NgIf, angular2_1.formDirectives]
        }), 
        __metadata('design:paramtypes', [NameList_1.NamesList])
    ], EventsDemo);
    return EventsDemo;
})();
exports.EventsDemo = EventsDemo;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRjFEcml2ZXJzL0V2ZW50cy9ldmVudHMudHMiXSwibmFtZXMiOlsiRXZlbnRzRGVtbyIsIkV2ZW50c0RlbW8uY29uc3RydWN0b3IiLCJFdmVudHNEZW1vLmFkZEFydGljbGUiLCJFdmVudHNEZW1vLmRlbGV0ZUFydGljbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEseUJBQTRELG1CQUFtQixDQUFDLENBQUE7QUFDaEYseUJBQXdCLG1DQUFtQyxDQUFDLENBQUE7QUFFNUQ7SUFZSUEsb0JBQVlBLElBQWVBO1FBQ3ZCQyxJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxJQUFJQSxDQUFDQTtRQUNwQkEsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0E7UUFDL0JBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLENBQUFBO0lBQzlCQSxDQUFDQTtJQUNERCwrQkFBVUEsR0FBVkEsVUFBV0EsS0FBS0EsRUFBRUEsSUFBSUE7UUFDbkJFLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLDJCQUEyQkEsRUFBRUEsS0FBS0EsQ0FBQ0EsS0FBS0EsRUFBRUEsVUFBVUEsRUFBRUEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDOUVBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLFdBQVdBLENBQUNBLEVBQUNBLEtBQUtBLEVBQUdBLEtBQUtBLENBQUNBLEtBQUtBLEVBQUVBLElBQUlBLEVBQUNBLElBQUlBLENBQUNBLEtBQUtBLEVBQUNBLENBQUNBLENBQUNBO1FBQ2hFQSxLQUFLQSxDQUFDQSxLQUFLQSxHQUFDQSxFQUFFQSxDQUFDQTtRQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFDQSxFQUFFQSxDQUFDQTtJQUNsQ0EsQ0FBQ0E7SUFDREYsa0NBQWFBLEdBQWJBLFVBQWNBLEtBQUtBO1FBQ2ZHLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLEtBQUtBLENBQUNBLENBQUFBO1FBQ2xCQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxhQUFhQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtJQUN0Q0EsQ0FBQ0E7SUF6QkxIO1FBQUNBLG9CQUFTQSxDQUFDQTtZQUNQQSxRQUFRQSxFQUFFQSxhQUFhQTtTQUMxQkEsQ0FBQ0E7UUFDREEsZUFBSUEsQ0FBQ0E7WUFDRkEsV0FBV0EsRUFBRUEsMkNBQTJDQTtZQUN4REEsVUFBVUEsRUFBRUEsQ0FBQ0EsZ0JBQUtBLEVBQUVBLGVBQUlBLEVBQUVBLHlCQUFjQSxDQUFDQTtTQUU1Q0EsQ0FBQ0E7O21CQW1CREE7SUFBREEsaUJBQUNBO0FBQURBLENBMUJBLEFBMEJDQSxJQUFBO0FBakJZLGtCQUFVLGFBaUJ0QixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvRjFEcml2ZXJzL0V2ZW50cy9ldmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXcsIE5nRm9yLCBOZ0lmLCBmb3JtRGlyZWN0aXZlc30gZnJvbSBcImFuZ3VsYXIyL2FuZ3VsYXIyXCI7XG5pbXBvcnQge05hbWVzTGlzdH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbW9kZWxzL05hbWVMaXN0JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdldmVudHMtZGVtbycsXG59KVxuQFZpZXcoe1xuICAgIHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL0YxRHJpdmVycy9FdmVudHMvZXZlbnRzLmh0bWwnLFxuICAgIGRpcmVjdGl2ZXM6IFtOZ0ZvciwgTmdJZiwgZm9ybURpcmVjdGl2ZXNdXG5cbn0pXG5cbmV4cG9ydCBjbGFzcyBFdmVudHNEZW1vIHtcbiAgICBhcnRpY2xlczpBcnJheTxPYmplY3Q+O1xuICAgIGxpc3RPYmogOk9iamVjdFxuICAgIGNvbnN0cnVjdG9yKGxpc3Q6IE5hbWVzTGlzdCl7XG4gICAgICAgIHRoaXMubGlzdE9iaiA9IGxpc3Q7XG4gICAgICAgIHRoaXMuYXJ0aWNsZXM9bGlzdC5hcnRpY2xlTGlzdDtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5hcnRpY2xlcylcbiAgICB9XG4gICAgYWRkQXJ0aWNsZSh0aXRsZSwgbGluaykge1xuICAgICAgIGNvbnNvbGUubG9nKFwiQWRkaW5nIGFydGljbGUgd2l0aCB0aXRsZVwiLCB0aXRsZS52YWx1ZSwgXCJhbmQgbGlua1wiLCBsaW5rLnZhbHVlKTtcbiAgICAgICB0aGlzLmxpc3RPYmoucG9zdEFydGljbGUoe3RpdGxlIDogdGl0bGUudmFsdWUsIGxpbms6bGluay52YWx1ZX0pO1xuICAgICAgICB0aXRsZS52YWx1ZT0nJzsgbGluay52YWx1ZT0nJztcbiAgICB9XG4gICAgZGVsZXRlQXJ0aWNsZShpbmRleCl7XG4gICAgICAgIGNvbnNvbGUubG9nKGluZGV4KVxuICAgICAgICB0aGlzLmxpc3RPYmouZGVsZXRlQXJ0aWNsZShpbmRleCk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9