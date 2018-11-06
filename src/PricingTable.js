import React from "react"

const plans = [
	{
		name: "Basic",
		price: 49,
		features: ["Unlimited Appointments", "Wait Time Widget", "Email Support"]
	},
	{
		name: "Fresh",
		price: 79,
		features: ["Unlimited Appointments", "Wait Time Widget", "Check In App", "Professional Reports", "Email Support"]
	},
	{
		name: "Super Fresh",
		price: 129,
		features: [
			"Unlimited Appointments",
			"Wait Time Widget",
			"Check In App",
			"Professional Reports",
			"Advanced Reports Builder",
			"Email & Phone Support"
		]
	}
]

const PricingTable = () => {
	return (
		<section className="pricing section">
			<div className="container">
				<div className="pricing-inner section-inner has-top-divider">
					<h2 className="section-title mt-0 text-center">Pricing</h2>
					<div className="pricing-tables-wrap">
						{plans.map((plan, idx) => {
							const isPrimary = idx % 2 === 0
							return (
								<div className="pricing-table is-revealing" key={idx}>
									<div className="pricing-table-inner">
										<div className="pricing-table-main">
											<div className="pricing-table-header">
												<div
													className={`pricing-table-title mt-12 mb-16 ${isPrimary ? "text-secondary" : "text-primary"}`}
												>
													{plan.name}
												</div>
												<div className="pricing-table-price mb-24 pb-32">
													<span className="pricing-table-price-currency h3">$</span>
													<span className="pricing-table-price-amount h1">{plan.price}</span>
												</div>
											</div>
											<ul className="pricing-table-features list-reset text-xs mb-56">
												{plan.features.map((feature, fid) => {
													return (
														<li key={`feature-${fid}`}>
															<span className="list-icon">
																<svg width="16" height="12" xmlns="http://www.w3.org/2000/svg">
																	<path
																		d="M14.3.3L5 9.6 1.7 6.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l4 4c.2.2.4.3.7.3.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0z"
																		fill={isPrimary ? "#00C6A7" : "rgb(0, 162, 184)"}
																		fill-rule="nonzero"
																	/>
																</svg>
															</span>
															<span>{feature}</span>
														</li>
													)
												})}
											</ul>
										</div>
										<div className="pricing-table-cta">
											<a
												className={`button ${isPrimary ? "button-secondary" : "button-primary"} button-block`}
												href={`https://app.freshcut.xyz/register?plan=${plan.name}`}
											>
												Get started now
											</a>
										</div>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</section>
	)
}

export default PricingTable
