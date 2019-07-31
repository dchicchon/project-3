import axios from "axios";

export default {

   // Campaign API methods
   // ===============================================
   createCampaign: (campaignData) => {
      return axios.post("/api/campaign", campaignData);
   },

   // Encounter API methods
   // ===============================================


   // Character API methods
   // ===============================================


   // Authentication methods
   // ===============================================

   getUser: function () {
      return axios.get("/auth/user");
   },

   logout: function () {
      return axios("/auth/logout")
   }

};