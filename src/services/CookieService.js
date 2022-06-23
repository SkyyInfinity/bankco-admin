import moment from "moment";

class CookieService {
    /**
     * Set Cookie
     * @param {String} name Cookie's name
     * @param {String} value Cookie's value
     */
    setCookie(name, value) {
        const EXPIRE = new Date(moment().add(1, 'months').toDate());

        document.cookie = name + "=" + value + ";expires=" + EXPIRE + ";path=/";
    }

    /**
     * Get Cookie
     * @param {String} name Cookie's name
     * @returns {string|undefined}
     */
    getCookie(name) {
        const IDENTIFIER = name + "=";
        let split = document.cookie.split(';');

        for(let j = 0; j < split.length; j++) {
            let char = split[j];
            while (char.charAt(0) === ' ') {
                char = char.substring(1);
            }
            if (char.indexOf(IDENTIFIER) === 0) {
                return char.substring(IDENTIFIER.length, char.length);
            }
        }
        return undefined;
    }

    /**
     * Delete Cookie
     * @param name
     */
    deleteCookie(name) {
        if(this.getCookie(name) !== undefined) {
            document.cookie = name + "=;path=/;";
        }
    }
}

export default new CookieService();
