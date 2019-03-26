(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_main_back_main_back_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main-back/main-back.component */ "./src/app/components/main-back/main-back.component.ts");
/* harmony import */ var _components_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/upload-file/upload-file.component */ "./src/app/components/upload-file/upload-file.component.ts");
/* harmony import */ var _components_data_show_data_show_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/data-show/data-show.component */ "./src/app/components/data-show/data-show.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    //, canActivate:[AuthGuard]
    { path: 'bemain', component: _components_main_back_main_back_component__WEBPACK_IMPORTED_MODULE_2__["MainBackComponent"],
        children: [
            { path: 'uploadfile', component: _components_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_3__["UploadFileComponent"] },
            { path: '**', redirectTo: 'uploadfile' }
        ]
    },
    { path: 'datashow', component: _components_data_show_data_show_component__WEBPACK_IMPORTED_MODULE_4__["DataShowComponent"] },
    { path: '**', redirectTo: 'bemain' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_main_back_main_back_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/main-back/main-back.component */ "./src/app/components/main-back/main-back.component.ts");
/* harmony import */ var _components_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/upload-file/upload-file.component */ "./src/app/components/upload-file/upload-file.component.ts");
/* harmony import */ var _components_data_show_data_show_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/data-show/data-show.component */ "./src/app/components/data-show/data-show.component.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _services_adddata_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/adddata.service */ "./src/app/services/adddata.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_getdata_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/getdata.service */ "./src/app/services/getdata.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//materialize components





//services




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_main_back_main_back_component__WEBPACK_IMPORTED_MODULE_4__["MainBackComponent"],
                _components_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_5__["UploadFileComponent"],
                _components_data_show_data_show_component__WEBPACK_IMPORTED_MODULE_6__["DataShowComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_13__["HttpModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"]
            ],
            providers: [_services_adddata_service__WEBPACK_IMPORTED_MODULE_12__["AdddataService"], _services_getdata_service__WEBPACK_IMPORTED_MODULE_15__["GetdataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/data-show/data-show.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/data-show/data-show.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".al-one{\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    min-width:98%;\r\n    max-width:98%;\r\n    font-size: 1.1vw;\r\n    padding-top: 20px;\r\n}\r\n.backgraund{\r\n    border: 1px solid #dee2e6;\r\n    background-color: #bd9921;\r\n    color: #ffffff;\r\n    text-align: center;\r\n\r\n}\r\n.logo-class{\r\n   width: 15%;\r\n   margin-left: 20px;\r\n   margin-top: 20px; \r\n}\r\n.backgraund-two{\r\n    border: 1px solid #dee2e6;\r\n    background-color: #2e3e9b;\r\n    color: #ffffff;\r\n    text-align: center;\r\n}\r\n.colom-style{\r\n    border: 1px solid #dee2e6;\r\n    padding: 20px;\r\n    text-align: center;\r\n    color: #ffffff;\r\n}\r\n.backgraud-photo{\r\n    z-index: -100;\r\n    position: fixed;\r\n    width:100%;\r\n    height:100%;\r\n}\r\n.class-for-table{\r\n   padding-left: 10px;\r\n   padding-right: 10px; \r\n   margin-top: 10px;\r\n}"

/***/ }),

/***/ "./src/app/components/data-show/data-show.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/data-show/data-show.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img src=\"/assets/backgroundlogistic.png\" class=\"backgraud-photo \">\r\n<img src=\"assets/logo-final-A.png\" class=\"logo-class\"/>\r\n<div class=\"containers\">\r\n  <div class=\"row\">\r\n    <table  class=\"class-for-table\">\r\n      <th class=\"backgraund\">Supplier</th>\r\n      <th class=\"backgraund-two\">Invoice No.</th>\r\n      <th class=\"backgraund\">Inv. Amount</th>\r\n      <th class=\"backgraund-two\"> <img src=''>swift</th>\r\n      <th class=\"backgraund\">Supplier Readiness</th>\r\n      <th class=\"backgraund-two\">Legalization</th>\r\n      <th class=\"backgraund\">Pick Up</th>\r\n      <th class=\"backgraund-two\">Type</th>\r\n      <th class=\"backgraund\">Dep.</th>\r\n      <th class=\"backgraund-two\">ETA</th>\r\n      <th class=\"backgraund\">Bank</th>\r\n      <th class=\"backgraund-two\">Clearance</th>\r\n      <th class=\"backgraund\">NTRA</th>\r\n      <th class=\"backgraund-two\">Nat. Security</th>\r\n      <th class=\"backgraund\">Gate in </th>\r\n    \r\n      <tr *ngFor = \"let item of this.row_altered \">\r\n        <td class=\"colom-style\">{{item[0]}}</td>\r\n        <td class=\"colom-style\">{{item[1]}}</td>\r\n        <td class=\"colom-style\">{{item[2]}} {{item[3]}}</td>\r\n        <td class=\"colom-style\">{{item[4]}}</td>\r\n        <td class=\"colom-style\">{{item[5]}}</td>\r\n        <td class=\"colom-style\">{{item[6]}}</td>\r\n        <td class=\"colom-style\">{{item[7]}}</td>\r\n        <td class=\"colom-style\">{{item[8]}}</td>\r\n        <td class=\"colom-style\">{{item[9]}}</td>\r\n        <td class=\"colom-style\">{{item[10]}}</td>\r\n        <td class=\"colom-style\">{{item[11]}}</td>\r\n        <td class=\"colom-style\">{{item[12]}}</td>\r\n        <td class=\"colom-style\">{{item[13]}}</td>\r\n        <td class=\"colom-style\">{{item[14]}}</td>\r\n        <td class=\"colom-style\">{{item[15]}}</td>\r\n      </tr>\r\n    </table>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/data-show/data-show.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/data-show/data-show.component.ts ***!
  \*************************************************************/
/*! exports provided: DataShowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataShowComponent", function() { return DataShowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_getdata_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/getdata.service */ "./src/app/services/getdata.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataShowComponent = /** @class */ (function () {
    function DataShowComponent(getdataservice) {
        this.getdataservice = getdataservice;
        this.row_altered = [];
    }
    DataShowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.total_usd = 0;
        this.total_euro = 0;
        this.getdataservice.getCSVData('http://192.168.1.155:3080/fetchs/read_xls_file').subscribe(function (dataFromServer) {
            var bodyJson = JSON.parse(dataFromServer._body);
            _this.row = bodyJson[0].data;
            console.log(_this.row);
            for (var i = 4; i <= _this.row.length; i++) {
                //  console.log(this.row[i][0])
                if (_this.row[i][0] == null) {
                    break;
                }
                else {
                    _this.row_altered.push(_this.row[i]);
                    // console.log(bodyJson[0].data[i][2])
                    if (bodyJson[0].data[i][3] == 'USD') {
                        _this.total_euro = bodyJson[0].data[i][2] + _this.total_euro;
                    }
                    if (bodyJson[0].data[i][3] == 'EUR') {
                        _this.total_usd = bodyJson[0].data[i][2] + _this.total_usd;
                    }
                }
                // for(let i=4; i<=this.row.length; i++){
                //   if(this.row[i][])
                // }
            }
            console.log(_this.total_euro);
            console.log(_this.total_usd);
            //  console.log(this.total);
            //  if (this.value){
            //  }
            //  for(let i=5;i>15;i++){
            //   console.log(bodyJson[i].data[i]);
            // }
        });
    };
    DataShowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-data-show',
            template: __webpack_require__(/*! ./data-show.component.html */ "./src/app/components/data-show/data-show.component.html"),
            styles: [__webpack_require__(/*! ./data-show.component.css */ "./src/app/components/data-show/data-show.component.css")]
        }),
        __metadata("design:paramtypes", [_services_getdata_service__WEBPACK_IMPORTED_MODULE_1__["GetdataService"]])
    ], DataShowComponent);
    return DataShowComponent;
}());



/***/ }),

/***/ "./src/app/components/main-back/main-back.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/main-back/main-back.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/main-back/main-back.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/main-back/main-back.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"border\"><mat-toolbar color=\"primary\">Logistic Report Upload Panel</mat-toolbar></div>\r\n<br><br>\r\n<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/main-back/main-back.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/main-back/main-back.component.ts ***!
  \*************************************************************/
/*! exports provided: MainBackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainBackComponent", function() { return MainBackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainBackComponent = /** @class */ (function () {
    function MainBackComponent() {
    }
    MainBackComponent.prototype.ngOnInit = function () {
    };
    MainBackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-back',
            template: __webpack_require__(/*! ./main-back.component.html */ "./src/app/components/main-back/main-back.component.html"),
            styles: [__webpack_require__(/*! ./main-back.component.css */ "./src/app/components/main-back/main-back.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainBackComponent);
    return MainBackComponent;
}());



/***/ }),

/***/ "./src/app/components/upload-file/upload-file.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/upload-file/upload-file.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.custom-file-upload {\r\n    border: 2px solid  #1A237E;\r\n    display: inline-block;\r\n    padding: 6px 12px;\r\n    cursor: pointer;\r\n    color:black;\r\n    line-height: 50px;\r\n    font-size: 2.0em;\r\n}\r\ninput[type=\"file\"] {\r\n    display: none;\r\n}\r\n.full-width {\r\n  width: 100vw;\r\n  position: relative;\r\n  left: 50%;\r\n  right: 50%;\r\n  margin-left: -50vw;\r\n  margin-right: -50vw;\r\n}"

/***/ }),

/***/ "./src/app/components/upload-file/upload-file.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/upload-file/upload-file.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card> \r\n  <div class=\"center\">\r\n    <form id = \"formNewCSV\" name =\"formNewCSV\" #CSVData = \"ngForm\" >\r\n        <label class=\"custom-file-upload\"> Click to upload the XLSX file\r\n        <input id=\"file\" name=\"file\" type=\"file\" (change)=\"addCSV();CSVData.reset() \" placeholder=\"Upload a file...\" multiple ngModel/>\r\n      </label>\r\n      <br><br>\r\n      </form>\r\n    </div>\r\n\r\n</mat-card>"

/***/ }),

/***/ "./src/app/components/upload-file/upload-file.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/upload-file/upload-file.component.ts ***!
  \*****************************************************************/
/*! exports provided: UploadFileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFileComponent", function() { return UploadFileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_adddata_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/adddata.service */ "./src/app/services/adddata.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UploadFileComponent = /** @class */ (function () {
    function UploadFileComponent(addDataService, elem, snackbar) {
        this.addDataService = addDataService;
        this.elem = elem;
        this.snackbar = snackbar;
    }
    UploadFileComponent.prototype.ngOnInit = function () {
    };
    UploadFileComponent.prototype.addCSV = function () {
        var _this = this;
        var files = this.elem.nativeElement.querySelector('#file').files;
        var formData = new FormData();
        formData.append('bodydummy', "dummy");
        if (files[0].name.split('.').pop() != 'xlsx') {
            this.snackbar.open('Unsupported format', 'OK', {
                duration: 3000
            });
        }
        else {
            formData.append('file', files[0], files[0].name);
            var json_arr = JSON.stringify(formData);
            //console.log(formData);
            this.addDataService.sendCSV(formData).subscribe(function (res) {
                _this.snackbar.open('File Uploaded', 'OK', {
                    duration: 3000
                });
            });
        }
    };
    UploadFileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upload-file',
            template: __webpack_require__(/*! ./upload-file.component.html */ "./src/app/components/upload-file/upload-file.component.html"),
            styles: [__webpack_require__(/*! ./upload-file.component.css */ "./src/app/components/upload-file/upload-file.component.css")]
        }),
        __metadata("design:paramtypes", [_services_adddata_service__WEBPACK_IMPORTED_MODULE_1__["AdddataService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], UploadFileComponent);
    return UploadFileComponent;
}());



/***/ }),

/***/ "./src/app/services/adddata.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/adddata.service.ts ***!
  \*********************************************/
/*! exports provided: AdddataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdddataService", function() { return AdddataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AdddataService = /** @class */ (function () {
    function AdddataService(http) {
        this.http = http;
    }
    AdddataService.prototype.sendCSV = function (formdata) {
        var _url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].server_url + "/additems/xlsx_file_upload";
        return this.http.post(_url, formdata)
            .catch(this._errorHandler);
    };
    AdddataService.prototype._errorHandler = function (error) {
        console.error('Error occured: ' + error);
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error || 'some error on server occured');
    };
    AdddataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]])
    ], AdddataService);
    return AdddataService;
}());



/***/ }),

/***/ "./src/app/services/getdata.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/getdata.service.ts ***!
  \*********************************************/
/*! exports provided: GetdataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetdataService", function() { return GetdataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetdataService = /** @class */ (function () {
    function GetdataService(http) {
        this.http = http;
    }
    // Getdata(){
    //   return this.http.get('http://192.168.1.155:3080/fetchs/read_xls_file');
    // }
    GetdataService.prototype.getCSVData = function (url) {
        return this.http.get(url);
    };
    GetdataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], GetdataService);
    return GetdataService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    server_url: 'http://192.168.1.155:3080'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Development\logistics_report\logistic-report-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map