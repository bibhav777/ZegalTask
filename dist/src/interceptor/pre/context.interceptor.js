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
exports.ContextInterceptor = void 0;
const common_1 = require("@nestjs/common");
const context_1 = require("../../utils/context");
let ContextInterceptor = class ContextInterceptor {
    constructor(ac) {
        this.ac = ac;
    }
    intercept(context, next) {
        var _a;
        const request = context.switchToHttp().getRequest();
        this.ac.register();
        this.ac.set("userId", (_a = request === null || request === void 0 ? void 0 : request.user) === null || _a === void 0 ? void 0 : _a.sub);
        this.ac.set("tokenData", request.user);
        return next.handle();
    }
};
ContextInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [context_1.AsyncContext])
], ContextInterceptor);
exports.ContextInterceptor = ContextInterceptor;
//# sourceMappingURL=context.interceptor.js.map