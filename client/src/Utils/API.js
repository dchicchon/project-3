import axios from "axios";

export default {

   // Profile Page
   editUser: (editData) => {
      return axios.put(`/api/user`, editData)
   },

   getProfile: (userId) => {
      return axios.get("/api/user/" + userId)
   },

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