import React from "react";

const NavMenu = () => {
return (
    <nav className="py-0 pb-lg-4 navbar-default navbar navbar-expand-lg navbar-light">
        <div className="container">
            <div id="navbar-default" className="offcanvas-lg offcanvas-start">
                <div className="pb-1 offcanvas-header">
                    <a href="/">
                        <img src="/images/logo/freshcart-logo.svg" alt="" className="" />
                    </a>
                    <button type="button" className="btn btn-close" />
                </div>
                <div className="offcanvas-body">
                    <div className="d-block d-lg-none mb-4">
                        <form className="">
                            <div className="input-group">
                                <input
                                    placeholder="Search for products"
                                    type="search"
                                    className="rounded form-control"
                                />
                                <span className="input-group-append">
                                    <button
                                        type="button"
                                        className="border border-start-0 ms-n10 rounded-0 rounded-end btn btn-white"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <circle cx={11} cy={11} r={8} />
                                            <line x1={21} y1={21} x2="16.65" y2="16.65" />
                                        </svg>
                                    </button>
                                </span>
                            </div>
                        </form>
                    </div>
                    <div className="d-block d-lg-none mb-4">
                        <a
                            role="button"
                            tabIndex={0}
                            href=""
                            className="w-100 d-flex justify-content-center align-items-center btn btn-success"
                        >
                            <span className="me-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.25"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect x={3} y={3} width={7} height={7} />
                                    <rect x={14} y={3} width={7} height={7} />
                                    <rect x={14} y={14} width={7} height={7} />
                                    <rect x={3} y={14} width={7} height={7} />
                                </svg>
                            </span>
                            All Departments
                        </a>
                        <div id="collapseExample" className="mt-2 collapse">
                            <div className="card">
                                <div className="card-body">
                                    <ul className="mb-0 list-unstyled">
                                        <li className="dropdown-item">Dairy, Bread &amp; Eggs</li>
                                        <li className="dropdown-item">Snacks &amp; Munchies</li>
                                        <li className="dropdown-item">Fruits &amp; Vegetables</li>
                                        <li className="dropdown-item">Cold Drinks &amp; Juices</li>
                                        <li className="dropdown-item">
                                            Breakfast &amp; Instant Food
                                        </li>
                                        <li className="dropdown-item">Bakery &amp; Biscuits</li>
                                        <li className="dropdown-item">Chicken, Meat &amp; Fish</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="me-3 d-none d-lg-block dropdown">
                        <button
                            type="button"
                            id="dropdownMenuButton1"
                            className="px-6 btn btn-success"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="me-1"
                            >
                                <rect x={3} y={3} width={7} height={7} />
                                <rect x={14} y={3} width={7} height={7} />
                                <rect x={14} y={14} width={7} height={7} />
                                <rect x={3} y={14} width={7} height={7} />
                            </svg>{" "}
                            {/* */}All Departments
                        </button>
                        <div
                            data-bs-popper="static"
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton1"
                        >
                            <a
                                href="#"
                                data-rr-ui-dropdown-item=""
                                className="dropdown-item"
                                role="button"
                                tabIndex={0}
                            >
                                Dairy, Bread &amp; Eggs
                            </a>
                            <a
                                href="#"
                                data-rr-ui-dropdown-item=""
                                className="dropdown-item"
                                role="button"
                                tabIndex={0}
                            >
                                Snacks &amp; Munchies
                            </a>
                            <a
                                href="#"
                                data-rr-ui-dropdown-item=""
                                className="dropdown-item"
                                role="button"
                                tabIndex={0}
                            >
                                Fruits &amp; Vegetables
                            </a>
                            <a
                                href="#"
                                data-rr-ui-dropdown-item=""
                                className="dropdown-item"
                                role="button"
                                tabIndex={0}
                            >
                                Cold Drinks &amp; Juices
                            </a>
                            <a
                                href="#"
                                data-rr-ui-dropdown-item=""
                                className="dropdown-item"
                                role="button"
                                tabIndex={0}
                            >
                                Breakfast &amp; Instant Food
                            </a>
                            <a
                                href="#"
                                data-rr-ui-dropdown-item=""
                                className="dropdown-item"
                                role="button"
                                tabIndex={0}
                            >
                                Bakery &amp; Biscuits
                            </a>
                            <a
                                href="#"
                                data-rr-ui-dropdown-item=""
                                className="dropdown-item"
                                role="button"
                                tabIndex={0}
                            >
                                Chicken, Meat &amp; Fish
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className="align-items-center undefined navbar-nav">
                            <div className="w-100 w-lg-auto nav-item dropdown">
                                <a
                                    aria-expanded="false"
                                    role="button"
                                    className="dropdown-toggle nav-link"
                                    tabIndex={0}
                                    href="#"
                                >
                                    Home
                                </a>
                                <div
                                    aria-labelledby=""
                                    data-bs-popper="static"
                                    className="dropdown-menu"
                                >
                                    <a
                                        data-rr-ui-dropdown-item=""
                                        className="w-100 w-lg-auto dropdown-item"
                                        href="/"
                                    >
                                        Home Default
                                    </a>
                                    <a
                                        data-rr-ui-dropdown-item=""
                                        className="w-100 w-lg-auto dropdown-item"
                                        href="/homepage-2"
                                    >
                                        Home Modern
                                    </a>
                                    <a
                                        data-rr-ui-dropdown-item=""
                                        className="w-100 w-lg-auto dropdown-item"
                                        href="/homepage-3"
                                    >
                                        Home Creative
                                    </a>
                                    <a
                                        data-rr-ui-dropdown-item=""
                                        className="w-100 w-lg-auto dropdown-item"
                                        href="/homepage-4"
                                    >
                                        Home Local Store
                                    </a>
                                    <a
                                        data-rr-ui-dropdown-item=""
                                        className="w-100 w-lg-auto dropdown-item"
                                        href="/homepage-5"
                                    >
                                        Home Minimalist
                                    </a>
                                </div>
                            </div>
                            <div className="w-100 w-lg-auto nav-item dropdown">
                                <a
                                    aria-expanded="false"
                                    role="button"
                                    className="dropdown-toggle nav-link"
                                    tabIndex={0}
                                    href="#"
                                >
                                    Shop
                                </a>
                                <div
                                    aria-labelledby=""
                                    data-bs-popper="static"
                                    className="dropdown-menu"
                                >
                                    <a
                                        data-rr-ui-dropdown-item=""
                                        className="w-100 w-lg-auto dropdown-item"
                                        href="/shop/shop-grid"
                                    >
                                        Shop Grid - Filter
                                    </a>
                                    <a
                                        data-rr-ui-dropdown-item=""
                                        className="w-100 w-lg-auto dropdown-item"
                                        href="/shop/shop-grid-3-column"
                                    >
                                        Shop Grid - 3 column
                                    </a>
                                    <a
                                        data-rr-ui-dropdown-item=""
                                        className="w-100 w-lg-auto dropdown-item"
                                        href="/shop/shop-list"
                                    >
                                        Shop List - Filter
                                    </a>
                                    <a
                                        data-rr-ui-dropdown-item=""
                                        className="w-100 w-lg-auto dropdown-item"
                                        href="/shop/shop-filter"
                                    >
                                        Shop - Filter
                                    </a>
                                    <a
                                        data-rr-ui-dropdown-item=""
                                        className="w-100 w-lg-auto dropdown-item"
                                        href="/shop/shop-fullwidth"
                                    >
                                        Shop Wide
                                    </a>
                                    <a
                                        data-rr-ui-dropdown-item=""
                                        className="w-100 w-lg-auto dropdown-item"
                                        href="/shop/haldirams-sev-bhujia"
                                    >
                                        Shop Single
                                    </a>
                                    <a
                                        data-rr-ui-dropdown-item=""
                                        className="w-100 w-lg-auto dropdown-item"
                                        href="/shop/nutrichoice-digestive"
                                    >
                                        Shop Single v2
                                    </a>
                                    <a
                                        data-rr-ui-dropdown-item=""
                                        className="w-100 w-lg-auto dropdown-item"
                                        href="/shop/shop-wishlist"
                                    >
                                        Shop Wishlist
                                    </a>
                                    <a
                                        data-rr-ui-dropdown-item=""
                                        className="w-100 w-lg-auto dropdown-item"
                                        href="/shop/shop-cart"
                                    >
                                        Shop Cart
                                    </a>
                                    <a
                                        data-rr-ui-dropdown-item=""
                                        className="w-100 w-lg-auto dropdown-item"
                                        href="/shop/shop-checkout"
                                    >
                                        Shop Checkout
                                    </a>
                                </div>
                            </div>
                            <div className="w-100 w-lg-auto nav-item dropdown">
                                <a
                                    aria-expanded="false"
                                    role="button"
                                    className="dropdown-toggle nav-link"
                                    tabIndex={0}
                                    href="#"
                                >
                                    Stores
                                </a>
                                <div
                                    aria-labelledby=""
                                    data-bs-popper="static"
                                    className="dropdown-menu"
                                >
                                    <a
                                        data-rr-ui-dropdown-item=""
                                        className="w-100 w-lg-auto dropdown-item"
                                        href="/store/store-list"
                                    >
                                        Store List
                                    </a>
                                    <a
                                        data-rr-ui-dropdown-item=""
                                        className="w-100 w-lg-auto dropdown-item"
                                        href="/store/store-grid"
                                    >
                                        Store Grid
                                    </a>
                                    <a
                                        data-rr-ui-dropdown-item=""
                                        className="w-100 w-lg-auto dropdown-item"
                                        href="/store/store-single"
                                    >
                                        Store Single
                                    </a>
                                </div>
                            </div>
                            <div className="w-100 w-lg-auto dropdown-fullwidth nav-item dropdown">
                                <a
                                    aria-expanded="false"
                                    role="button"
                                    className="dropdown-toggle nav-link"
                                    tabIndex={0}
                                    href="#"
                                >
                                    Mega menu
                                </a>
                                <div
                                    aria-labelledby=""
                                    data-bs-popper="static"
                                    className="dropdown-menu"
                                >
                                    <div className="p-2 p-lg-4 row">
                                        <div className="mb-4 mb-lg-0 col-lg-3 col-12">
                                            <h6 className="text-primary ps-3">
                                                Dairy, Bread &amp; Eggs
                                            </h6>
                                            <a
                                                data-rr-ui-dropdown-item=""
                                                className="dropdown-item"
                                                href=""
                                            >
                                                Butter
                                            </a>
                                            <a
                                                data-rr-ui-dropdown-item=""
                                                className="dropdown-item"
                                                href=""
                                            >
                                                Milk Drinks
                                            </a>
                                            <a
                                                data-rr-ui-dropdown-item=""
                                                className="dropdown-item"
                                                href=""
                                            >
                                                Curd &amp; Yogurt
                                            </a>
                                            <a
                                                data-rr-ui-dropdown-item=""
                                                className="dropdown-item"
                                                href=""
                                            >
                                                Eggs
                                            </a>
                                            <a
                                                data-rr-ui-dropdown-item=""
                                                className="dropdown-item"
                                                href=""
                                            >
                                                Buns &amp; Bakery
                                            </a>
                                            <a
                                                data-rr-ui-dropdown-item=""
                                                className="dropdown-item"
                                                href=""
                                            >
                                                Cheese
                                            </a>
                                            <a
                                                data-rr-ui-dropdown-item=""
                                                className="dropdown-item"
                                                href=""
                                            >
                                                Condensed Milk
                                            </a>
                                            <a
                                                data-rr-ui-dropdown-item=""
                                                className="dropdown-item"
                                                href=""
                                            >
                                                Dairy Products
                                            </a>
                                        </div>
                                        <div className="mb-4 mb-lg-0 col-lg-3 col-12">
                                            <h6 className="text-primary ps-3">
                                                Breakfast &amp; Instant Food
                                            </h6>
                                            <a
                                                data-rr-ui-dropdown-item=""
                                                className="dropdown-item"
                                                href=""
                                            >
                                                Breakfast Cereal
                                            </a>
                                            <a
                                                data-rr-ui-dropdown-item=""
                                                className="dropdown-item"
                                                href=""
                                            >
                                                Noodles, Pasta &amp; Soup
                                            </a>
                                            <a
                                                data-rr-ui-dropdown-item=""
                                                className="dropdown-item"
                                                href=""
                                            >
                                                Frozen Veg Snacks
                                            </a>
                                            <a
                                                data-rr-ui-dropdown-item=""
                                                className="dropdown-item"
                                                href=""
                                            >
                                                Frozen Non-Veg Snacks
                                            </a>
                                            <a
                                                data-rr-ui-dropdown-item=""
                                                className="dropdown-item"
                                                href=""
                                            >
                                                Frozen Non-Veg Snacks
                                            </a>
                                            <a
                                                data-rr-ui-dropdown-item=""
                                                className="dropdown-item"
                                                href=""
                                            >
                                                Instant Mixes
                                            </a>
                                            <a
                                                data-rr-ui-dropdown-item=""
                                                className="dropdown-item"
                                                href=""
                                            >
                                                Batter
                                            </a>
                                            <a
                                                data-rr-ui-dropdown-item=""
                                                className="dropdown-item"
                                                href=""
                                            >
                                                Fruit and Juices
                                            </a>
                                        </div>
                                        <div className="mb-4 mb-lg-0 col-lg-3 col-12">
                                            <h6 className="text-primary ps-3">
                                                Cold Drinks &amp; Juices
                                            </h6>
                                            <a
                                                data-rr-ui-dropdown-item=""
                                                className="dropdown-item"
                                                href=""
                                            >
                                                Soft Drinks
                                            </a>
                                            <a
                                                data-rr-ui-dropdown-item=""
                                                className="dropdown-item"
                                                href=""
                                            >
                                                Fruit Juices
                                            </a>
                                            <a
                                                data-rr-ui-dropdown-item=""
                                                className="dropdown-item"
                                                href=""
                                            >
                                                Coldpress
                                            </a>
                                            <a
                                                data-rr-ui-dropdown-item=""
                                                className="dropdown-item"
                                                href=""
                                            >
                                                Water &amp; Ice Cubes
                                            </a>
                                            <a
                                                data-rr-ui-dropdown-item=""
                                                className="dropdown-item"
                                                href=""
                                            >
                                                Soda &amp; Mixers
                                            </a>
                                            <a
                                                data-rr-ui-dropdown-item=""
                                                className="dropdown-item"
                                                href=""
                                            >
                                                Health Drinks
                                            </a>
                                            <a
                                                data-rr-ui-dropdown-item=""
                                                className="dropdown-item"
                                                href=""
                                            >
                                                Herbal Drinks
                                            </a>
                                            <a
                                                data-rr-ui-dropdown-item=""
                                                className="dropdown-item"
                                                href=""
                                            >
                                                Milk Drinks
                                            </a>
                                        </div>
                                        <div className="mb-4 mb-lg-0 col">
                                            <div className="border-0 card">
                                                <img
                                                    src="/images/banner/menu-banner.jpg"
                                                    alt="eCommerce HTML Template"
                                                    className="img-fluid"
                                                />
                                                <div className="position-absolute ps-6 mt-8">
                                                    <h5 className="mb-0">
                                                        Dont miss this
                                                        <br />
                                                        offer today.
                                                    </h5>
                                                    <a className="btn btn-primary btn-sm mt-3" href="#">
                                                        Shop Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-100 w-lg-auto nav-item dropdown">
                                <a
                                    aria-expanded="false"
                                    role="button"
                                    className="dropdown-toggle nav-link"
                                    tabIndex={0}
                                    href="#"
                                >
                                    Pages
                                </a>
                                <div
                                    aria-labelledby=""
                                    data-bs-popper="static"
                                    className="dropdown-menu"
                                >
                                    <a
                                        data-rr-ui-dropdown-item=""
                                        className="w-100 w-lg-auto dropdown-item"
                                        href="/blog"
                                    >
                                        Blog
                                    </a>
                                    <a
                                        data-rr-ui-dropdown-item=""
                                        className="w-100 w-lg-auto dropdown-item"
                                        href="/blog/cheese-garlic-cream-soup"
                                    >
                                        Blog Single
                                    </a>
                                    <a
                                        data-rr-ui-dropdown-item=""
                                        className="w-100 w-lg-auto dropdown-item"
                                        href="/blog/blog-category"
                                    >
                                        Blog Category
                                    </a>
                                    <a
                                        data-rr-ui-dropdown-item=""
                                        className="w-100 w-lg-auto dropdown-item"
                                        href="/about"
                                    >
                                        About us
                                    </a>
                                    <a
                                        data-rr-ui-dropdown-item=""
                                        className="w-100 w-lg-auto dropdown-item"
                                        href="/not-found"
                                    >
                                        404 Error
                                    </a>
                                    <a
                                        data-rr-ui-dropdown-item=""
                                        className="w-100 w-lg-auto dropdown-item"
                                        href="/contact"
                                    >
                                        Contact
                                    </a>
                                </div>
                            </div>
                            <div className="w-100 w-lg-auto nav-item dropdown">
                                <a
                                    aria-expanded="false"
                                    role="button"
                                    className="dropdown-toggle nav-link"
                                    tabIndex={0}
                                    href="#"
                                >
                                    Account
                                </a>
                                <div
                                    aria-labelledby=""
                                    data-bs-popper="static"
                                    className="dropdown-menu"
                                >
                                    <a
                                        data-rr-ui-dropdown-item=""
                                        className="w-100 w-lg-auto dropdown-item"
                                        href="/signin"
                                    >
                                        Sign in
                                    </a>
                                    <a
                                        data-rr-ui-dropdown-item=""
                                        className="w-100 w-lg-auto dropdown-item"
                                        href="/signup"
                                    >
                                        Signup
                                    </a>
                                    <a
                                        data-rr-ui-dropdown-item=""
                                        className="w-100 w-lg-auto dropdown-item"
                                        href="/forgot-password"
                                    >
                                        Forgot Password
                                    </a>
                                    <div className="dropdown-submenu p-0 w-100 w-lg-auto nav-item dropend">
                                        <a
                                            aria-expanded="false"
                                            role="button"
                                            className="dropdown-toggle dropdown-item dropdown-list-group-item w-100 w-lg-auto justify-content-between"
                                            tabIndex={0}
                                            href="#"
                                        >
                                            My Account
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="w-100 w-lg-auto nav-item">
                                <a
                                    data-rr-ui-event-key="/dashboard"
                                    className="nav-link"
                                    href="/dashboard"
                                >
                                    Dashboard
                                </a>
                            </div>
                            <div className="w-100 w-lg-auto dropdown-flyout dropdown">
                                <a
                                    href="#"
                                    id="navbarDropdownDocs"
                                    role="button"
                                    data-rr-ui-event-key="#"
                                    className="nav-link"
                                    tabIndex={0}
                                >
                                    Docs
                                </a>
                                <div
                                    data-bs-popper="static"
                                    className="dropdown-menu-lg dropdown-menu"
                                >
                                    <a
                                        data-rr-ui-dropdown-item=""
                                        className="align-items-start dropdown-item"
                                        href="/docs"
                                    >
                                        <div>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 16 16"
                                                width={24}
                                                height={24}
                                                fill="currentColor"
                                                className="bi bi-file-text text-primary"
                                            >
                                                <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5M5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z" />
                                                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1" />
                                            </svg>
                                        </div>
                                        <div className="ms-3 lh-1">
                                            <h6 className="mb-1">Documentation</h6>
                                            <p className="mb-0 small">Browse the all documentation</p>
                                        </div>
                                    </a>
                                    <a
                                        data-rr-ui-dropdown-item=""
                                        className="align-items-start dropdown-item"
                                        href="/docs/changelog"
                                    >
                                        <div>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 16 16"
                                                width={24}
                                                height={24}
                                                fill="currentColor"
                                                className="bi bi-layers text-primary"
                                            >
                                                <path d="M8.235 1.559a.5.5 0 0 0-.47 0l-7.5 4a.5.5 0 0 0 0 .882L3.188 8 .264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l2.922-1.559a.5.5 0 0 0 0-.882zm3.515 7.008L14.438 10 8 13.433 1.562 10 4.25 8.567l3.515 1.874a.5.5 0 0 0 .47 0zM8 9.433 1.562 6 8 2.567 14.438 6z" />
                                            </svg>
                                        </div>
                                        <div className="ms-3 lh-1">
                                            <h6 className="mb-1">
                                                Changelog <span>v1.0.0</span>
                                            </h6>
                                            <p className="mb-0 small">Browse the all documentation</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
);
}

export default NavMenu;