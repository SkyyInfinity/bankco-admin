import CookieService from "@/services/CookieService";

class AuthService {
    /**
     * Is Logged In
     * @returns {boolean}
     */
    isLoggedIn() {
        return !!CookieService.getCookie('token');
    }
}

export default new AuthService();
