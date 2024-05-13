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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenaiService = void 0;
const common_1 = require("@nestjs/common");
const openai_1 = require("openai");
let OpenaiService = exports.OpenaiService = class OpenaiService {
    constructor() {
        this.openai = new openai_1.default({
            apiKey: process.env.OPEN_AI_PRIVATE_KEY,
        });
    }
    async generateImage(text) {
        try {
            const { data } = await this.openai.images.generate({
                model: 'dall-e-3',
                prompt: text,
                response_format: 'url',
            });
            return data[0].url;
        }
        catch (e) {
            console.error(e);
            throw new common_1.ServiceUnavailableException('Failed to generate image');
        }
    }
};
exports.OpenaiService = OpenaiService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], OpenaiService);
//# sourceMappingURL=openai.service.js.map