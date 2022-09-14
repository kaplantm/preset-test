import { endpoints } from "../endpoints";
/* for endpoint:
GET_PLANET: "https://swapi.dev/api/planets/:id",
*/
import useSWR from "swr";

export type getPlanetParams = {
  id: string;
};

export type getPlanetResponse = {};

const useGetPlanet = (params: getPlanetParams): getPlanetResponse => {
  return useSWR([endpoints.GET_PLANET, params]);
};

export default useGetPlanet;
