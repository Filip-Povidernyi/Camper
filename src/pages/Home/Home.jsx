import styleHome from './style.module.css'

const Home = () => {


    return (
        <div className={styleHome.home}>
            <div className={styleHome.headering}>
                <h1>Ласкаво просимо до McCamper Company</h1>
                <p>
        Наша компанія пропонує оренду кемперів по всій Україні. Відчуйте свободу подорожей з нашими сучасними та комфортними кемперами, які ідеально підходять для вашого відпочинку.
                </p>
            </div>
      
            <div className={styleHome.headering}>
                <h2>Наші Послуги</h2>
                <ul>
                    <li>Оренда кемперів на день, тиждень або місяць</li>
                    <li>Повний інструктаж та підтримка 24/7</li>
                    <li>Гнучкі умови оренди та вигідні тарифи</li>
                    <li>Додаткове обладнання та аксесуари для кемперів</li>
                </ul> 
            </div> 
    </div>
    )
}

export default Home