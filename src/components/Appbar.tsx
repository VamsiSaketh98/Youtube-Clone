import { Logout } from "./Logout"
import { SearchBar } from "./Searchbar"
import { LogosYoutubeIcon} from "@/components/Youtube"


export const Appbar = () => {
    return <div className="flex justify-between	pl-3 pr-3 pt-1">
        <div >
            <LogosYoutubeIcon />
            
        </div>
        <div>
            <SearchBar />
        </div>
        <div>
            <Logout />
        </div>
    </div>
}