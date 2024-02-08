import useData from "./useData";
import { Genre } from "./useGenre";

export interface Platforms {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platforms}[];
    metacritic: number;
  }
  
  interface FetchGamesRespon {
    count: number;
    results: Game[];
  }

const useGames = (selectedGenre: Genre | null, selectedPlatform: Platforms | null) => useData<Game>('/games', { params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id}}, [selectedGenre?.id, selectedPlatform?.id])
    // const [games, setGames] = useState<Game[]>([]);
    // const [error, setError] = useState("");
    // const [isLoading, setLoading] = useState(false);
  
    // useEffect(() => {
    //     const controller = new AbortController();
    //     setLoading(true);
    //   apiClient
    //     .get<FetchGamesRespon>("/games", { signal: controller.signal})
    //     .then((res) => {
    //       setGames(res.data.results);
    //       setLoading(false);
    //     })
    //     .catch((err) => {
    //         if(err instanceof CanceledError) return;
    //         setError(err.message);
    //         setLoading(false);
    //       });

    //     return () => controller.abort();
    // }, []);
    // return {games, error, isLoading}

export default useGames