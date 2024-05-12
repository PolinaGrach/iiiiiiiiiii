import {Route, Routes} from "react-router-dom";
import {AppLayout} from "./routes/app-layout/app-layout.jsx";
import {MainPage} from "./routes/main-page/main-page.jsx";
import {StoryPage} from "./routes/story-page/stoty-page.jsx";
import {RegistrationPage} from "./routes/registration-page/registration-page.jsx";
import {CharactersPage} from "./routes/characters-page/characters-page.jsx";
import {MerchPage} from "./routes/merch-page/merch-page.jsx";
import {AboutPage} from "./routes/about-page/about-page.jsx";
import {MerchItem} from "./routes/merch-card/merch-item.jsx";

export const RoutesApp = () => {
    return (
        <Routes>
            <Route path="/" element={<AppLayout/>}>
                <Route path="/registration" element={<RegistrationPage/>}/>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/story" element={<StoryPage/>}/>
                <Route path={'/characters'} element={<CharactersPage/>}/>
                <Route path={'/merch'} element={<MerchPage/>}/>
                <Route path={'/about'} element={<AboutPage/>}/>
                <Route path={'/merch-item'} element={<MerchItem/>}/>
            </Route>
        </Routes>
    );
};
