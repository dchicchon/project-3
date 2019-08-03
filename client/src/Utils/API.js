import axios from "axios";

export default {

   // Post Create Methods
   newPost: function () {
      return axios.get("/api/post")
   },

   // Authentication methods
   // ===============================================

   getUser: function () {
      return axios.get("/auth/user");
   },

   logout: function () {
      return axios.get("/auth/logout")
   }

};