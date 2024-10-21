import adaptive from '../assets/icons/adaptive.svg';
import axios from '../assets/icons/axios.svg';
import bem from '../assets/icons/bem.svg';
import browser from '../assets/icons/browser.svg';
import css from '../assets/icons/css.svg';
import git from '../assets/icons/git.svg';
import html from '../assets/icons/html.svg';
import react from '../assets/icons/react.svg';
import redux from '../assets/icons/redux.svg';
import sass from '../assets/icons/sass.svg';
import vite from '../assets/icons/vite.svg';
import webpack from '../assets/icons/webpack.svg';


const icons = {
    adaptive,
    axios,
    bem,
    browser,
    css,
    git,
    html,
    react,
    redux,
    sass,
    vite,
    webpack
};

type IconKey = keyof typeof icons;

interface Skill {
    name: string;
    description: string;
    icon: IconKey;
}

let skills: Skill[] = [
    {
        "name": "HTML5",
        "description": "Стандартный язык разметки для создания веб-страниц. Обеспечивает семантическую разметку и поддержку мультимедиа.",
        "icon": "html"
    },
    {
        "name": "CSS3",
        "description": "Каскадные таблицы стилей для оформления внешнего вида веб-страниц. Поддерживает стилизацию, анимацию и адаптивный дизайн.",
        "icon": "css"
    },
    {
        "name": "React",
        "description": "Библиотека JavaScript для создания пользовательских интерфейсов. Использует компоненты и управляемое состояние.",
        "icon": "react"
    },
    {
        "name": "SASS",
        "description": "Препроцессор CSS, который добавляет функции, такие как переменные, вложенность и миксины, для более удобной работы со стилями.",
        "icon": "sass"
    },
    {
        "name": "БЭМ",
        "description": "Методология организации CSS-кода, основанная на блоках, элементах и модификаторах для повышения читабельности и переиспользования.",
        "icon": "bem"
    },
    {
        "name": "Адаптивная верстка",
        "description": "Подход к разработке, при котором сайт автоматически подстраивается под разные размеры экранов и устройства.",
        "icon": "adaptive"
    },
    {
        "name": "Кроссбраузерная верстка",
        "description": "Методы и подходы, обеспечивающие одинаковое отображение веб-страниц в различных браузерах и устройствах.",
        "icon": "browser"
    },
    {
        "name": "Redux",
        "description": "Библиотека для управления состоянием приложения. Позволяет централизовать состояние и управлять им с помощью действий и редьюсеров.",
        "icon": "redux"
    },
    {
        "name": "Vite",
        "description": "Современный сборщик и инструмент для разработки, обеспечивающий быструю сборку и поддержку ES-модулей.",
        "icon": "vite"
    },
    {
        "name": "Webpack",
        "description": "Мощный инструмент для сборки JavaScript-приложений, позволяющий управлять зависимостями и оптимизировать ресурсы.",
        "icon": "webpack"
    },
    {
        "name": "Axios",
        "description": "Библиотека для выполнения HTTP-запросов в браузере и Node.js. Упрощает взаимодействие с API, поддерживает промисы и имеет удобный интерфейс для обработки запросов и ответов.",
        "icon": "axios"
    },
    {
        "name": "Git",
        "description": "Система контроля версий, позволяющая отслеживать изменения в коде, совместную работу над проектами и управление версиями приложений.",
        "icon": "git"
    }
];

export default function SecondsSection() {
    return (
        <div className="secondSection" id="secondSection">
            <div className="secondSection__header">
                <p>
                    Навыки:</p>
            </div>
            <div className="secondSection__skilsSection">
                {skills.map((skill, index) => (
                    <div key={index} className="secondSection__skilsSection__item">
                        <div className="secondSection__skilsSection__item__header">
                            <img src={icons[skill.icon]} alt={skill.icon} />
                            <div className="secondSection__skilsSection__item__header__name">{skill.name}</div>
                        </div>
                        <div className="secondSection__skilsSection__item__description">{skill.description}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
