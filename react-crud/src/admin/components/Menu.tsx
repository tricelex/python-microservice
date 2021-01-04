import React from 'react';

const Menu = () => {
    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="sidebar-sticky">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <button className="nav-link active" aria-current="page">
                            Products
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Menu;
