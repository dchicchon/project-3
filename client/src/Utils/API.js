import axios from "axios";

export default {

   // Post Create Methods
   getPosts: () => {
      return axios.get(`/api/post`)
   },

   newPost: function (postData) {
      return axios.post(`/api/post`, postData)
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