
import { Change_City, Change_Country,Change_Population} from "./action";

const initState = {
    cities:""
}


export const reducer = (store = initState, {type,payload}) =>{
    console.log("Store",store)
    switch(type){
        case Change_City:
            return({...store,city:payload})
            case Change_Country:
                return({...store,country:payload})
                case Change_Population:
                    return({...store,population:payload})
                    default:
                        return store
    }
}