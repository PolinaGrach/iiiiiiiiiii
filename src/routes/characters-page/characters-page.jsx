import {Title} from "../main-page/components/title.jsx";
import styles from './characters-page.module.css'
import {charactersList} from "./mocks/characters-list.js";

export const CharactersPage = () => {
    return (
        <>
            <Title title={'Команда Соломеной шляпы'}/>
            <div className={styles.charactersInner}>
                {charactersList.map((item) => (
                    <div className={styles.charactersItem} key={item.id}>
                        <div className={styles.charactersAvatar}>
                            <img src={item.avatarImage} alt={`картинка ${item.charactersName}`}/>
                            <p className={styles.charactersName}>{item.charactersName}</p>
                        </div>
                        <p className={styles.charactersDescr}>{item.description}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

