import axios from "axios";

const baseUrl = "http://localhost:3004";

const postTransaction = ({ transType, transaction }) => {
  return axios
    .post(baseUrl + "/" + transType, transaction)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};

export default postTransaction;
