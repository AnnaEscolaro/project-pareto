import { AuthService } from './auth.service';
<<<<<<< HEAD
declare const GoogleStrategy_base: any;
=======
declare const GoogleStrategy_base: new (...args: any[]) => any;
>>>>>>> b10d18814150b384bbc2ca260f2edcb49ce9a40a
export declare class GoogleStrategy extends GoogleStrategy_base {
    private readonly authService;
    constructor(authService: AuthService);
}
export {};
