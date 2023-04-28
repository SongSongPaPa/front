import customAxios from "./customAxios";
import { User } from "@root/2_domain/models/User";

class Http {
  public async login(): Promise<void> {
    console.log(process.env.REACT_APP_API_URL);
    await customAxios.get("/auth/login");
    //const request = customAxios({
    //  baseURL: "/auth/logout",
    //  method: "delete",
    //});
  }

  public async getUserDetail(): Promise<User> {
    console.log(process.env.REACT_APP_API_URL);
    const data = await customAxios.get("/user/detail", {});
    return data.data;
    console.log(data);
    //const request = customAxios({
    //  baseURL: "/auth/logout",
    //  method: "delete",
    //});
  }

  public async getUserDetailById(id: number): Promise<User> {
    const response = await customAxios.get(`/user/detail/${id}`);
    return response.data;
  }

  //public async;
}

export default Http;
