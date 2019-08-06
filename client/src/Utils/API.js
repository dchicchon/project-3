import axios from "axios";

export default {

   // Discovery Page ==============================
   followUser: (idPackage) => {
      return axios.post(`/api/follow`, idPackage)
   },

   // ================================

   // Profile Page =========================

   // Edit User Data
   editUser: (editData) => {
      return axios.put(`/api/user`, editData)
   },

   // Get Profile Info
   getProfile: (userId) => {
      return axios.get("/api/user/" + userId)
   },

   // ============================================

   // Get Posts
   getPosts: () => {
      return axios.get(`/api/post`)
   },

   getFollowPosts: () => {
      return axios.get(`api/post`)
   },

   getFollowIds: (id) => {
      return axios.get(`api/follow/` + id)
   },
   // Make function for Discover page to get posts based by tags!
   searchTag: (tags) => {
      return axios.post("")
   },

   // Get Posts By User

   getUserPosts: (userId) => {
      return axios.get(`/api/post/` + userId)
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