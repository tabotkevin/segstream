import axios from "axios";

export default {
  user: {
    get: (id) => axios.get(`/user/${id}`).then((res) => res.data),
    create: (data) =>
      axios
        .post("/user/create", data)
        .then((res) => res.data),
    update: (data) =>
      axios
        .put(`/user/${data.id}`, data)
        .then((res) => res.data),
    delete: (id) => axios.delete(`/user/${id}`),
    getAll: () => axios.get("/users").then((res) => res.data),
  },
  requests: {
    fetchAll: () => axios.get("/requests").then((res) => res.data),
  },
};
