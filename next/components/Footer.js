import StickyFooter from 'react-sticky-footer';
import { Nav, NavItem } from 'react-bootstrap'; 
import { SocialIcon } from 'react-social-icons'; 



const Footer = () => (
    <StickyFooter
        bottomThreshold={50}
        normalStyles={{
        backgroundColor: "lightgreen",
        padding: "2rem"
        }}
        stickyStyles={{
        backgroundColor: "rgba(255,255,255,.8)",
        padding: "2rem"
        }}
        >
        <Nav
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
            <Nav.Item>
                <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                Disabled
                </Nav.Link>
            </Nav.Item>
        </Nav>
		  <SocialIcon url="http://twitter.com/jaketrent" />
		  <SocialIcon url="http://facebook.com/jaketrent" />
		  <SocialIcon url="http://instagram.com/jaketrent" />

    </StickyFooter>
)

export default Footer;