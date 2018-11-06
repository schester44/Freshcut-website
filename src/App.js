import React, { Component } from "react"

import hero from "./hero.jpg"
import calendar from "./icons/undraw_calendar_dutt.svg"
import walkin from "./icons/undraw_pedestrian_crossing_l6jv.svg"
import reports from "./icons/undraw_report_mx0a.svg"
import clients from "./icons/undraw_barber_3uel.svg"

import PricingTable from "./PricingTable"
import Footer from "./Footer"

import locations from "./icons/undraw_hiring_cyhs.svg"
import integrations from "./icons/undraw_real-time_sync_o57k.svg"
import waitTimes from "./icons/undraw_chat_1wo5.svg"

class App extends Component {
	state = {
		features: [
			{
				icon: calendar,
				title: "Total Appointment Management",
				text:
					"Powerful calendar scheduling in a simple interface makes it easy to handle all of your customers and appointments."
			},
			{
				icon: walkin,
				title: "Walk-In Appointments",
				text:
					"Walk ins will never be the same again. Our one of a kind check-in system lets your customers claim their sport and come back when its their turn. Say goodbye to waiting."
			},
			{
				icon: reports,
				title: "Advanced Reports",
				text:
					"Stay on top of everything with our advanced report generator. Appointments, finances, and customer-related reports are just some of the possibilities."
			},
			{
				icon: clients,
				title: "Manage Your Clients",
				text:
					"Easily maintain client relationships via detailed appointments history, booking preferences, and contact details."
			}
		]
	}

	componentDidMount() {
		const doc = document.documentElement

		doc.classList.remove("no-js")
		doc.classList.add("js")

		// Reveal animations
		if (document.body.classList.contains("has-animations")) {
			/* global ScrollReveal */
			const sr = (window.sr = ScrollReveal())

			sr.reveal(".hero-title, .hero-paragraph, .hero-cta", {
				duration: 1000,
				distance: "40px",
				easing: "cubic-bezier(0.5, -0.01, 0, 1.005)",
				origin: "bottom",
				interval: 150
			})

			sr.reveal(".feature, .pricing-table", {
				duration: 600,
				distance: "40px",
				easing: "cubic-bezier(0.5, -0.01, 0, 1.005)",
				interval: 100,
				origin: "bottom",
				viewFactor: 0.5
			})

			sr.reveal(".feature-extended-image", {
				duration: 600,
				scale: 0.9,
				easing: "cubic-bezier(0.5, -0.01, 0, 1.005)",
				viewFactor: 0.5
			})
		}
	}

	render() {
		return (
			<div className="body-wrap boxed-container">
				<header className="site-header">
					<div className="container">
						<div className="site-header-inner">
							<div className="brand header-brand">
								<h1 className="m-0">Freshcut</h1>
							</div>
							<ul className="header-links list-reset m-0">
								<li>
									<a href="https://app.freshcut.xyz/login">Login</a>
								</li>
								<li>
									<a className="button button-sm button-shadow" href="https://app.freshcut.xyz/register">
										Signup
									</a>
								</li>
							</ul>
						</div>
					</div>
				</header>

				<main>
					<section className="hero text-light text-center">
						<div className="container-sm">
							<div className="hero-inner">
								<h1 className="hero-title h2-mobile mt-0 is-revealing">Appointments made easy</h1>
								<p className="hero-paragraph is-revealing">
									Increase revenue with our appoinmtment management solution while improving customer happiness and
									retention.
								</p>
								<p className="hero-cta is-revealing">
									<a className="button button-secondary button-shadow" href="https://app.freshcut.xyz/register">
										Get started now
									</a>
								</p>
								<div className="hero-media">
									<img src={hero} alt="appointments made easy" />
								</div>
							</div>
						</div>
					</section>

					<section className="features section text-center">
						<div className="container">
							<div className="features-inner section-inner has-top-divider">
								<h2 className="section-title mt-0">All the tools you need to take it to the next level</h2>
								<div className="features-wrap">
									{this.state.features.map((feature, idx) => {
										return (
											<div className="feature is-revealing" key={`feature-${idx}`}>
												<div className="feature-inner">
													<div className="feature-icon">{<img src={feature.icon} alt={feature.title} />}</div>
													<h4 className="feature-title h3-mobile">{feature.title}</h4>
													<p className="text-sm">{feature.text}</p>
												</div>
											</div>
										)
									})}
									<div className="feature is-revealing" style={{ marginTop: 20 }}>
										And many, many, many more features
									</div>
								</div>
							</div>
						</div>
					</section>

					<section className="features-extended section">
						<div className="container">
							<div className="features-extended-inner section-inner has-top-divider">
								<div className="features-extended-header text-center">
									<div className="container-sm">
										<h2 className="section-title mt-0">Meet Freshcut</h2>
										<p className="section-paragraph">The do everything appointment and walk-in management system.</p>
									</div>
								</div>
								<div className="feature-extended">
									<div className="feature-extended-image is-revealing">
										<img src={locations} alt="Many Locations, One App" />
									</div>
									<div className="feature-extended-body">
										<h3 className="mt-0">Many Locations, One App.</h3>
										<p>
											One shop or twenty shops, Freshcut saves you time by centralizing location and employee
											management.
										</p>
									</div>
								</div>
								<div className="feature-extended">
									<div className="feature-extended-image is-revealing">
										<img src={integrations} alt="Integrations" />
									</div>

									<div className="feature-extended-body">
										<h3 className="mt-0">Best in Class Integrations</h3>
										<p>
											Extend your shop with multiple integrations, all talking in real-time, providing the ability to
											inform your customers of current wait times, their position in line, and more.
										</p>
									</div>
								</div>
								<div className="feature-extended">
									<div className="feature-extended-image is-revealing">
										<img src={waitTimes} alt="Reduce wait Times" />
									</div>
									<div className="feature-extended-body">
										<h3 className="mt-0">Reduce Wait Times</h3>
										<p style={{ fontSize: 18 }}>
											John, your walk-in appointment at Lorenzo's starts in 20 minutes. Please arrive no later than
											12:45pm.
										</p>
										<p>
											Clear, timely text messages that keep the shop flowing. Set reminders and follow ups to be
											delivered when you want.
										</p>
									</div>
								</div>
							</div>
						</div>
					</section>

					<PricingTable />
					<Footer />
				</main>
			</div>
		)
	}
}

export default App
