import React from "react";
import {Link} from "react-router-dom"
import NavMenu from "./NavMenu";

const Header = () => {
  return (
    <div className="border-bottom">
		<div className="pt-5 pb-3">
			<div className="container">
				<div className="w-100 align-items-center gx-lg-2 gx-0 row">
					<div className="col-xxl-2 col-lg-3 col-md-6 col-5">
						<a className="d-none d-lg-block navbar-brand" href="/">
							<img src="/images/logo/chl-logo.svg" alt="CHL Cart" className="" width="140" />
						</a>
						<div className="d-flex justify-content-between w-100 d-lg-none">
							<a className="navbar-brand" href="/">
								<img src="/images/logo/chl-logo.svg" alt="CHL Cart" className="" />
							</a>
						</div>
					</div>
					<div className="d-none d-lg-block col-xxl-8 col-lg-7">
						<form className="">
							<div className="input-group">
								<input placeholder="Search for products" type="search" className="rounded rounded-end-0 form-control border-end-0" />
								<span className="input-group-append">
									<button type="button" className="border border-start-0 -ms-n10 rounded-0 rounded-end btn btn-white">
										<i className="bi bi-search"></i>
									</button>
								</span>
							</div>
						</form>
					</div>

					<div className="text-end col-xxl-2 col-lg-2 col-md-6 col-7">
						<div className="list-inline">
							<div role="button" className="me-5 text-muted position-relative  list-inline-item">
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
									<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
								</svg>
								<span className="custom-badge position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">4</span>
							</div>
							<div role="button" className="text-muted me-5 list-inline-item">
								<Link to="/signup">
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
									<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
									<circle cx="12" cy="7" r="4"></circle>
								</svg>
								</Link>
							</div>
							<div role="button" className="me-5 me-lg-0 text-muted position-relative list-inline-item">
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
									<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
									<line x1="3" y1="6" x2="21" y2="6"></line>
									<path d="M16 10a4 4 0 0 1-8 0"></path>
								</svg>
								<span className="custom-badge position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">5</span>
							</div>
							<div role="button" className="d-inline-block d-lg-none list-inline-item">
								<button type="button" aria-label="Toggle navigation" className="navbar-toggler collapsed">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="32" height="32" fill="currentColor" className="bi bi-text-indent-left text-primary">
										<path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708M7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"></path>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		{/* <NavMenu /> */}

    </div>
  )
  // return (
  //   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  //     <div className="container">
  //       <a className="navbar-brand" href="#">
  //         MyApp
  //       </a>
  //       <button
  //         className="navbar-toggler"
  //         type="button"
  //         data-bs-toggle="collapse"
  //         data-bs-target="#navbarNav"
  //         aria-controls="navbarNav"
  //         aria-expanded="false"
  //         aria-label="Toggle navigation"
  //       >
  //         <span className="navbar-toggler-icon"></span>
  //       </button>
  //       <div className="collapse navbar-collapse" id="navbarNav">
  //         <ul className="navbar-nav ms-auto">
  //           <li className="nav-item">
  //             <a className="nav-link" href="#">
  //               Home
  //             </a>
  //           </li>
  //           <li className="nav-item">
  //             <a className="nav-link" href="#">
  //               About
  //             </a>
  //           </li>
  //           <li className="nav-item">
  //             <a className="nav-link" href="#">
  //               Contact
  //             </a>
  //           </li>
  //         </ul>
  //       </div>
  //     </div>
  //   </nav>
  // );
};

export default Header;
