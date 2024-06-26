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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
<<<<<<< HEAD
var _a, _b;
=======
>>>>>>> b10d18814150b384bbc2ca260f2edcb49ce9a40a
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImagesController = void 0;
const common_1 = require("@nestjs/common");
const images_service_1 = require("./images.service");
<<<<<<< HEAD
const generate_image_dto_1 = require("src/dto/generate.image.dto");
=======
const generate_image_dto_1 = require("../dto/generate.image.dto");
>>>>>>> b10d18814150b384bbc2ca260f2edcb49ce9a40a
let ImagesController = exports.ImagesController = class ImagesController {
    constructor(imagesService) {
        this.imagesService = imagesService;
    }
    async getAll(req) {
        const userId = req.body.userId;
        console.log(userId);
        const result = await this.imagesService.findAll(userId);
        return result;
    }
    async generateImage(generateImageDto) {
        const { prompt } = generateImageDto;
        return this.imagesService.generateImage(prompt);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ImagesController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)('/generate-image'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
<<<<<<< HEAD
    __metadata("design:paramtypes", [typeof (_b = typeof generate_image_dto_1.GenerateImageDto !== "undefined" && generate_image_dto_1.GenerateImageDto) === "function" ? _b : Object]),
=======
    __metadata("design:paramtypes", [generate_image_dto_1.GenerateImageDto]),
>>>>>>> b10d18814150b384bbc2ca260f2edcb49ce9a40a
    __metadata("design:returntype", Promise)
], ImagesController.prototype, "generateImage", null);
exports.ImagesController = ImagesController = __decorate([
    (0, common_1.Controller)('images'),
<<<<<<< HEAD
    __metadata("design:paramtypes", [typeof (_a = typeof images_service_1.ImagesService !== "undefined" && images_service_1.ImagesService) === "function" ? _a : Object])
=======
    __metadata("design:paramtypes", [images_service_1.ImagesService])
>>>>>>> b10d18814150b384bbc2ca260f2edcb49ce9a40a
], ImagesController);
//# sourceMappingURL=images.controller.js.map