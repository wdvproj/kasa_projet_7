import Wrapper from '../Wrapper'
import Header from '../Header'
import Footer from '../Footer'

function Layout({ children }) {
    return (
        <div>
            <Wrapper>
                <Header />
                {children}
            </Wrapper>
            <Footer />
        </div>
    )
}

export default Layout
