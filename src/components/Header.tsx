import Contacts from "./Contacts"


export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <a href="#firstSection"><li>Краткая информация</li></a>
                    <a href="#secondSection"><li>Навыки</li></a>
                    <a href="#thirdSection"><li>Проекты</li></a>
                </ul>
            </nav>
            <Contacts />
        </header>
    )
}