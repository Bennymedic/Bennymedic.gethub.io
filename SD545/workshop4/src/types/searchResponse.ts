import { Users } from "./users";

export default interface SearchRespnse {
    isFirst:boolean,
    isLoading: boolean,
    isError:boolean,
    users:Users[]
}