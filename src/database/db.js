/*
Request the server.

Sunil Park
*/

import axios from "axios";
const BASE_URL = "https://typestr-backend-sunilpark1129.onrender.com";

export const postRank = (payload) => {
    axios({
            url: "/api/save",
            method: "POST",
            data: payload,
        })
        .then(() => {
            console.log("Data has been sent to the server");
        })
        .catch(() => {
            console.log("Internal server error");
        });
};

export const getRank = (setData) => {
    axios
        .get("/api")
        .then((response) => {
            const data = response.data;
            data.sort((a, b) => {
                return a.total - b.total;
            });
            setData(data);
        })
        .catch(() => {
            console.log("Error retrieving data");
        });
};

export const deleteRank = (id) => {
    axios
        .delete(`/api/delete/${id}`)
        .then(() => {
            console.log("Data has been deleted");
        })
        .catch(() => {
            console.log("Error deleting data");
        });
};