import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "5557754e78114d079352d7be1827d7bb"
    }
})