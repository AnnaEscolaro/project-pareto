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
exports.GoogleStrategy = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const passport_google_oauth20_1 = require("passport-google-oauth20");
const auth_service_1 = require("./auth.service");
let GoogleStrategy = exports.GoogleStrategy = class GoogleStrategy extends (0, passport_1.PassportStrategy)(passport_google_oauth20_1.Strategy, 'google') {
    constructor(authService) {
        super({
            clientID: 'your-client-id',
            clientSecret: 'your-client-secret',
            callbackURL: 'your-callback-url',
            scope: ['email', 'profile'],
        });
        this.authService = authService;
    }
};
exports.GoogleStrategy = GoogleStrategy = __decorate([
    (0, common_1.Injectable)(),
<<<<<<< HEAD
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
=======
    __metadata("design:paramtypes", [auth_service_1.AuthService])
>>>>>>> b10d18814150b384bbc2ca260f2edcb49ce9a40a
], GoogleStrategy);
//# sourceMappingURL=google.strategy.js.map