import axios from "axios";

export default {

   // Profile Page
   editUser: (editData) => {
      return axios.put(`/api/user`, editData)
   },

   getProfile: (userId) => {
      return axios.get("/api/user/" + userId)
   },

   // Used on Discover Page to get all posts
   getPosts: () => {
      return axios.get(`/api/post`)
   },
   // Make function for Discover page to get posts based by tags!
   searchTag: (tags) => {
      return axios.post("")
   },

   // Post Create Methods

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