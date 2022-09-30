import { defineStore } from 'pinia'

 interface user{
    username: string;
    password: string;
    isLogin: boolean;
}
export const userStore = defineStore('user', {
    state: () :user => {
        return { username: '', password: '',isLogin: false };
    },
    actions: {
        changePassword(newPassword: string) {
            this.password = newPassword;
        }
    },
})
