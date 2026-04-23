import { Routes, Route, HashRouter } from "react-router-dom";
import Character_List from "../modules/characters/pages/character-list"
import Character_detail from "../modules/characters/pages/character-detail";

function Router() {

    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Character_List />} />
                <Route path="/character/:id" element={<Character_detail />} />
            </Routes>
        </HashRouter>
    )
}

export default Router;