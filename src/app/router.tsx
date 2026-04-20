import { BrowserRouter, Routes, Route } from "react-router-dom";
import Character_List from "../modules/characters/pages/character-list"

function Router() {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Character_List />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;