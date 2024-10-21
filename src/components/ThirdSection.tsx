let data = [
    {
        "id": 1,
        "name": "auk",
        "altName": "",
        "description": "Небольшой проект, который позволяет проводить аукционы",
        "link": "https://github.com/ydkot735/auk",
        "stack": "TypeScript • React • SASS",
        "link_local": "./auk/"
    },
    {
        "id": 2,
        "name": "news_fetch",
        "altName": "",
        "description": "Небольшое приложение с обращением к NewsAPI.",
        "link": "https://github.com/ydkot735/news_fetch",
        "stack": "React • Redux • Axios",
        "link_local": "./news_fetch/"
    },
    {
        "id": 3,
        "name": "event-calendar",
        "altName": "",
        "description": "React-приложение с использованием Redux Toolkit для управления событиями в календаре, с сохранением данных в localStorage.",
        "link": "https://github.com/ydkot735/event-calendar",
        "stack": "React • Redux • React Calendar",
        "link_local": "./event-calendar/"
    }
]

let landings = [
    {
        "name": "Продуктовый магазин",
        "description": "Страница с продуктами ",
        "link": "./project_one/index.html"
    },
    {
        "name": "Информациооный  сайт",
        "description": "Информационный сайт про сибирский лес",
        "link": "./project_two/index.html"
    },
    {
        "name": "Письмо",
        "description": "Лендинг письма",
        "link": "./project_three/index.html"
    }
]

interface Landing {
    name: string;
    description: string;
    link: string;
}



interface Data {
    id: number;
    name: string;
    altName: string;
    description: string;
    link: string;
    stack: string;
    link_local: string;
}

export default function ThirdSection() {
    return (
        <div className="thirdSection" id="thirdSection">
            <div className="thirdSection__header">
                <p>Мои проекты</p>
            </div>
            <div className="thirdSection__projects">
                <div className="thirdSection__projects__react">
                    <div className="thirdSection__projects__react__header">
                        <img src="" alt="" />
                        <p>React</p>
                    </div>
                    {
                        data.map((item: Data) => (
                            <div className="thirdSection__projects__item" key={item.id} >
                                <a href={item.link}>
                                    <div className="thirdSection__projects__item__name">
                                        {item.name}
                                    </div>
                                    <div className="thirdSection__projects__item__description">
                                        {item.description}
                                    </div>
                                    <div className="thirdSection__projects__item__stack">
                                        {item.stack}
                                    </div>


                                </a>

                            </div>
                        )
                        )
                    }
                </div>
                <div className="thirdSection__projects__landings">
                    <div className="thirdSection__projects__landings__header">
                        <img src="" alt="" />
                        <p>Лендинги</p>
                    </div>
                    {
                        landings.map((item: Landing) => (
                            <div className="thirdSection__projects__item" key={item.name} >
                                <a href={item.link}>
                                    <div className="thirdSection__projects__item__name">
                                        {item.name}
                                    </div>
                                    <div className="thirdSection__projects__item__description">
                                        {item.description}
                                    </div>
                                </a>
                            </div>
                        )
                        )
                    }
                </div>
            </div>
        </div>
    )
}