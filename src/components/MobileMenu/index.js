import React, { Component } from 'react';
import { Collapse, CardBody, Card } from 'reactstrap';
import { Link } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './style.css';

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/',
    },
    {
        id: 2,
        title: 'About Us',
        link: '/about',
    },
    {
        id: 3,
        title: 'Service',
        submenu: [
            {
                id: 31,
                title: 'Logistic',
                link: '/servicesingle',
            },
            {
                id: 32,
                title: 'Customs Brokerage',
                link: '/freight',
            }
        ]
    },
    {
        id: 4,
        title: 'Track',
        external: true,
        link: 'https://www.client.deepclear.ca/cbsa-checking',
    },
    {
        id: 5,
        title: 'Contact',
        link: '/contact',
    },
];

class MobileMenu extends Component {
    state = {
        isMenuShow: false,
        isOpen: 0,
    };

    menuHandler = () => {
        this.setState({
            isMenuShow: !this.state.isMenuShow
        });
    };

    setIsOpen = id => () => {
        this.setState({
            isOpen: id === this.state.isOpen ? 0 : id
        });
    };

    render() {
        const { isMenuShow, isOpen } = this.state;

        return (
            <div>
                <PerfectScrollbar>
                    <div className={`mobileMenu ${isMenuShow ? 'show' : ''}`}>
                        <ul className="responsivemenu">
                            {menus.map(item => (
                                <li key={item.id}>
                                    {/* Check if has submenu */}
                                    {item.submenu ? (
                                        <p onClick={this.setIsOpen(item.id)}>
                                            {item.title}
                                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                                        </p>
                                    ) : item.external ? (
                                        // External link (Track)
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {item.title}
                                        </a>
                                    ) : (
                                        <Link to={item.link}>{item.title}</Link>
                                    )}

                                    {/* Submenu collapse */}
                                    {item.submenu ? (
                                        <Collapse isOpen={item.id === isOpen}>
                                            <Card>
                                                <CardBody>
                                                    <ul>
                                                        {item.submenu.map(sub => (
                                                            <li key={sub.id}>
                                                                <Link className="active" to={sub.link}>
                                                                    {sub.title}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </CardBody>
                                            </Card>
                                        </Collapse>
                                    ) : null}
                                </li>
                            ))}
                        </ul>
                    </div>
                </PerfectScrollbar>

                {/* Toggle button */}
                <div className="showmenu" onClick={this.menuHandler}>
                    <i className="fa fa-bars" aria-hidden="true"></i>
                </div>
            </div>
        );
    }
}

export default MobileMenu;
