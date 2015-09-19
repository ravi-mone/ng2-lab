import {Component, View, NgFor, NgIf, NgSwitch, NgSwitchWhen, NgSwitchDefault} from 'angular2/angular2';
//import { ViewContainerRef, TemplateRef } from 'angular2/core';
//import {httpInjectables, Http} from 'angular2/http';
import {RouterLink, routerInjectables} from 'angular2/router';
import {Points} from './points/points'
import {Nationality} from './nationality/nationality'
import {driverHeader} from './Header/driverheader'

import {NamesList} from '../../services/models/NameList';

@Component({
    selector: 'f1Drivers',
    viewInjector: [routerInjectables]
})
@View({
    templateUrl: './components/F1Drivers/f1Drivers.html?v=<%= VERSION %>',
    directives:[NgFor, NgIf, NgSwitch, NgSwitchWhen, NgSwitchDefault, Points, Nationality, driverHeader, RouterLink]
    //viewBindings: [httpInjectables]
})
export class F1Drivers {
    driverObj:Array<Object>;
    pageSelected:number;
    driversList:number;
    constructor(public list: NamesList){
        this.driverObj=list.get();
        this.driverObj = this.driverObj[0]['DriverStandings'];
        this.driversList = this.driverObj;
        this.pageSelected =  parseInt(this.driversList.length);
    }
    showSelected(limitTo){
        this.pageSelected = limitTo;
    }
    //Function called when the user clicks on the search button.
    filterObj(obj, key, nameFilter) {
        var driverName = key;
        if (driverName.indexOf(nameFilter) !== -1) {
            //make parseInt so as to apply orderBy filter on 'points', 'position' and 'wins' column
            obj.points = parseInt(obj.points);
            obj.position = parseInt(obj.position);
            obj.wins = parseInt(obj.wins);
            return obj;
        }
    }
    filterByNames(nameFilter) {
        this.driverObj = this.driversList;

        /*The filter() method creates a new array with all elements that pass the test implemented by the provided function.
         * refer: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
         * */
        var self=this;
        console.log(nameFilter.value)
        this.driverObj = this.driverObj.filter(function(Obj){

            return self.filterObj(Obj, Obj.Driver.givenName, nameFilter.value);
        });
        this.pageSelected=this.driverObj.length;
        console.log(this.driverObj)
    }

}
