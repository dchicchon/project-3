import axios from "../../node_modules/axios";

export default {

    // Authentication Methods
    // ======================

    getUser: function() {
        return axios.get("/auth/user");
    },

    logOut: function() {
        return axios.get("/auth/logout")
    }
};