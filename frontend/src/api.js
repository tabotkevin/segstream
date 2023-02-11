import axios from "axios";

const api = {
  user: {
    get: (id) => axios.get(`/user/${id}`).then((res) => res),
    create: (data) =>
      axios
        .post("/user/create", data)
        .then((res) => res),
    update: (data) =>
      axios
        .put(`/user/${data.id}`, data)
        .then((res) => res),
    delete: (id) => axios.delete(`/user/${id}`),
    getAll: () => axios.get("/users").then((res) => res),
  },
  requests: {
    fetchAll: () => axios.get("/requests").then((res) => res.data),
  },
};

export default api;
