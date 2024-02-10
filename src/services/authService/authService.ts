type CaptchaResponse = {
    success?: boolean;
    score?: number;
}

export default class AuthService {
    static _instance: AuthService;
    private secretKey = process.env.RECAPTCHA_SECRET_KEY ?? '';
    private readonly THRESHOLD = 0.5;
    
    public static getInstance() {
        if (AuthService._instance) return AuthService._instance;
        
        return new AuthService();
    }
    
    constructor() {
        if (AuthService._instance) return AuthService._instance;
        
        AuthService._instance = this;
    }
    
    public async verifyToken(token: string): Promise<undefined | boolean> {
        const responseData = await fetch(
            `https://www.google.com/recaptcha/api/siteverify?secret=${this.secretKey}&response=${token}`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            });
        
        const response = await responseData.json();
        
        return !!response && response?.success && response?.score > this.THRESHOLD;
    }
}