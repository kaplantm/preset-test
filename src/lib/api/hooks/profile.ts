import useSWR from "swr";
import { endpoints } from "../endpoints";

type getProfileParams = {
  id: string;
};

type getProfileResponse = {};

const useGetProfile = (params: getProfileParams) => {
  return useSWR([endpoints.GET_PROFILE, params]);
};

export default useGetProfile;
