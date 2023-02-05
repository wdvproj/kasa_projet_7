import './style.css'
import Layout from '../../components/Layout'
import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'
import photo from '../../assets/images/background_landscape_2.jpg'

function About() {
    const sections = [
        {
            title: 'Fiabilité',
            description:
                'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
        },
        {
            title: 'Respect',
            description:
                'La bienveillance fait partie des valeurs fondatrices de Kase. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
        },
        {
            title: 'Service',
            description:
                "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
        },
        {
            title: 'Responsabilité',
            description:
                "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
        },
    ]

    return (
        <Layout>
            <main className="about">
                <Banner picture={photo} />
                <div className="about__sections">
                    {sections.map(({ title, description }, index) => (
                        <Collapse
                            id={`${title}-${index}`}
                            title={title}
                            description={description}
                        />
                    ))}
                </div>
            </main>
        </Layout>
    )
}

export default About
