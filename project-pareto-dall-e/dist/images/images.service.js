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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImagesService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const images_entity_1 = require("../images/images.entity");
const openai_service_1 = require("../openai/openai.service");
let ImagesService = exports.ImagesService = class ImagesService {
    constructor(imageModel, openAiService) {
        this.imageModel = imageModel;
        this.openAiService = openAiService;
    }
    async findAll(userId) {
        try {
            return this.imageModel.findAll({
                where: { userId: userId },
            });
        }
        catch (ex) {
            console.error(ex);
        }
    }
    async generateImage(prompt) {
        const imageUrl = await this.openAiService.generateImage(prompt);
        await this.imageModel.create({
            prompt: prompt,
            link: imageUrl,
        });
        return imageUrl;
    }
};
exports.ImagesService = ImagesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(images_entity_1.Images)),
    __metadata("design:paramtypes", [Object, openai_service_1.OpenaiService])
], ImagesService);
//# sourceMappingURL=images.service.js.map