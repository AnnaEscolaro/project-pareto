"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
<<<<<<< HEAD
var _a;
=======
>>>>>>> b10d18814150b384bbc2ca260f2edcb49ce9a40a
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
let AppController = exports.AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
};
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
<<<<<<< HEAD
    __metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
=======
    __metadata("design:paramtypes", [app_service_1.AppService])
>>>>>>> b10d18814150b384bbc2ca260f2edcb49ce9a40a
], AppController);
//# sourceMappingURL=app.controller.js.map