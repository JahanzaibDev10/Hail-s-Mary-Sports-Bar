import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as createRouter, f as Outlet, g as useRouter, h as Link, l as useRouterState, m as createRootRouteWithContext, p as createFileRoute, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { a as useScroll, i as useMotionValue, n as animate, o as motion, r as useTransform, s as AnimatePresence, t as useInView } from "../_libs/framer-motion.mjs";
import { t as Lenis } from "../_libs/lenis.mjs";
import { C as ChevronRight, D as Beer, E as Calendar, S as Clock, T as Check, _ as Mail, a as Tv, b as Facebook, c as Sparkles, d as PartyPopper, f as Music, g as MapPin, h as Menu, i as User, l as ShieldAlert, m as MessageCircle, n as Wind, o as Trophy, p as MessageSquare, r as Users, s as Star, t as X, u as Phone, v as Instagram, w as ChevronLeft, x as ExternalLink, y as Flame } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as useEmblaCarousel } from "../_libs/embla-carousel-react+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DTBZjd0n.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-0-nZAa1h.css";
var SITE_URL = "https://hail-marys-digital-dive.vercel.app".replace(/\/$/, "");
var SOCIAL_IMAGE = `${SITE_URL}/og-image.jpg`;
function createSeo({ title, description, path = "/" }) {
	const canonicalUrl = `${SITE_URL}${path}`;
	return {
		meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				name: "robots",
				content: "index, follow, max-image-preview:large"
			},
			{
				property: "og:locale",
				content: "en_US"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:site_name",
				content: "Hail Mary's Sports Bar"
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: description
			},
			{
				property: "og:url",
				content: canonicalUrl
			},
			{
				property: "og:image",
				content: SOCIAL_IMAGE
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				property: "og:image:alt",
				content: "Hail Mary's Sports Bar in Glendale, Arizona"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: title
			},
			{
				name: "twitter:description",
				content: description
			},
			{
				name: "twitter:image",
				content: SOCIAL_IMAGE
			}
		],
		links: [{
			rel: "canonical",
			href: canonicalUrl
		}]
	};
}
var localBusinessJsonLd = {
	"@context": "https://schema.org",
	"@type": ["BarOrPub", "SportsActivityLocation"],
	"@id": `${SITE_URL}/#business`,
	name: "Hail Mary's Sports Bar",
	url: SITE_URL,
	image: SOCIAL_IMAGE,
	telephone: "+1-623-934-1780",
	email: "hmsportsbar@gmail.com",
	priceRange: "$$",
	address: {
		"@type": "PostalAddress",
		streetAddress: "5114 W Camelback Rd",
		addressLocality: "Glendale",
		addressRegion: "AZ",
		postalCode: "85301",
		addressCountry: "US"
	},
	openingHours: "Mo-Su 11:00-02:00",
	sameAs: [
		"https://instagram.com/hailmaryssportsbar",
		"https://facebook.com/HailMarysSportsbar",
		"https://tiktok.com/@hailmaryssportsbar"
	]
};
function LenisProvider() {
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		const lenis = new Lenis({
			duration: 1.15,
			smoothWheel: true,
			lerp: .1,
			wheelMultiplier: 1
		});
		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		const id = requestAnimationFrame(raf);
		lenis.on("scroll", () => {
			window.dispatchEvent(new Event("scroll"));
		});
		return () => {
			cancelAnimationFrame(id);
			lenis.destroy();
		};
	}, []);
	return null;
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function CTAButton({ children, variant = "blitz", size = "md", className, ...rest }) {
	const ref = (0, import_react.useRef)(null);
	const [pos, setPos] = (0, import_react.useState)({
		x: 0,
		y: 0
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
		ref,
		onMouseMove: (e) => {
			const r = ref.current.getBoundingClientRect();
			setPos({
				x: (e.clientX - r.left - r.width / 2) * .25,
				y: (e.clientY - r.top - r.height / 2) * .25
			});
		},
		onMouseLeave: () => setPos({
			x: 0,
			y: 0
		}),
		animate: {
			x: pos.x,
			y: pos.y
		},
		transition: {
			type: "spring",
			stiffness: 180,
			damping: 15
		},
		whileTap: { scale: .96 },
		className: cn("relative inline-flex items-center justify-center font-display uppercase tracking-widest rounded-md transition-[filter,background]", size === "lg" ? "px-8 py-4 text-lg" : "px-6 py-3 text-sm", {
			blitz: "bg-[var(--blitz)] text-white glow-pulse hover:brightness-110",
			gold: "bg-[var(--gold)] text-[var(--ink)] glow-gold hover:brightness-110",
			ghost: "bg-transparent text-bone border border-white/20 hover:border-[var(--gold)] hover:text-[var(--gold)]"
		}[variant], className),
		...rest,
		children
	});
}
var links = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/events",
		label: "Events"
	},
	{
		to: "/game-day",
		label: "Game Day"
	},
	{
		to: "/menu",
		label: "Menu"
	},
	{
		to: "/gallery",
		label: "Gallery"
	},
	{
		to: "/about",
		label: "About"
	}
];
function Nav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const { location } = useRouterState();
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 50);
		onScroll();
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => setOpen(false), [location.pathname]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.header, {
		initial: {
			y: -40,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		},
		transition: { duration: .6 },
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-black/75 backdrop-blur-xl border-b border-white/5 py-3" : "bg-transparent py-5"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 lg:grid-cols-[auto_1fr_auto]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "flex items-center gap-2 shrink-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-2xl md:text-3xl neon-red tracking-wider",
						children: "HAIL MARY'S"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden lg:flex items-center justify-center gap-8",
					children: links.map((l) => {
						const active = location.pathname === l.to;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: l.to,
							className: `relative font-display tracking-widest text-sm transition ${active ? "text-[var(--gold)]" : "text-bone/80 hover:text-bone"}`,
							children: [l.label.toUpperCase(), active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
								layoutId: "nav-underline",
								className: "absolute -bottom-2 left-0 right-0 h-[2px] bg-[var(--gold)] glow-gold"
							})]
						}, l.to);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden lg:flex items-center gap-3 shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "sms:8333668785?body=JOIN",
						className: "inline-flex items-center gap-2 text-xs font-display tracking-widest text-bone/80 hover:text-[var(--gold)] transition",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "h-4 w-4" }), "TEXT \"JOIN\" 833-366-8785"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/reserve",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTAButton, {
							variant: "blitz",
							children: "Reserve"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setOpen(!open),
					className: "lg:hidden grid h-10 w-10 place-items-center rounded-md border border-white/15 text-bone",
					"aria-label": "Menu",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "fixed inset-0 z-40 bg-black/95 backdrop-blur-xl lg:hidden pt-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "wrap flex flex-col gap-2",
			children: [
				links.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						x: -20
					},
					animate: {
						opacity: 1,
						x: 0
					},
					transition: { delay: .05 * i },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						className: "block py-4 font-display text-4xl tracking-wider text-bone hover:text-[var(--blitz)] border-b border-white/5",
						children: l.label.toUpperCase()
					})
				}, l.to)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/reserve",
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTAButton, {
						variant: "blitz",
						size: "lg",
						className: "w-full",
						children: "Reserve Your Spot"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "sms:8333668785?body=JOIN",
					className: "mt-4 text-center font-display text-sm tracking-widest text-[var(--gold)]",
					children: "TEXT \"JOIN\" TO 833-366-8785"
				})
			]
		})
	}) })] });
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "relative mt-32 border-t border-white/5 bg-black pt-20 pb-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-4xl neon-red mb-3",
							children: "HAIL MARY'S"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-script text-2xl text-[var(--gold)] mb-4",
							children: "the best damn dive bar in glendale"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-bone/70 text-sm max-w-sm mb-6",
							children: "Sports. Strong drinks. Loud nights. Open 7 days a week, until 2AM. Come for the game, stay for the party."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/reserve",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTAButton, {
								variant: "blitz",
								children: "Reserve Your Spot"
							})
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-display text-sm tracking-widest text-[var(--gold)] mb-4",
						children: "EXPLORE"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-3 text-bone/80",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/events",
								className: "hover:text-[var(--blitz)]",
								children: "What's On"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/game-day",
								className: "hover:text-[var(--blitz)]",
								children: "Game Day"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/menu",
								className: "hover:text-[var(--blitz)]",
								children: "Menu & Drinks"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/gallery",
								className: "hover:text-[var(--blitz)]",
								children: "Gallery"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/about",
								className: "hover:text-[var(--blitz)]",
								children: "About / Contact"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/reserve",
								className: "hover:text-[var(--blitz)]",
								children: "Reserve"
							}) })
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-display text-sm tracking-widest text-[var(--gold)] mb-4",
						children: "VISIT"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-3 text-bone/80 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 shrink-0 mt-0.5 text-[var(--blitz)]" }),
									" 5114 W Camelback Rd",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Glendale, AZ 85301"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-4 w-4 shrink-0 mt-0.5 text-[var(--blitz)]" }),
									" 7 days a week",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"11:00 AM – 2:00 AM"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 shrink-0 mt-0.5 text-[var(--blitz)]" }),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "tel:+16239341780",
										className: "hover:text-bone",
										children: "+1 623-934-1780"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 shrink-0 mt-0.5 text-[var(--blitz)]" }),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "mailto:hmsportsbar@gmail.com",
										className: "hover:text-bone",
										children: "hmsportsbar@gmail.com"
									})
								]
							})
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-display text-sm tracking-widest text-[var(--gold)] mb-4",
							children: "JOIN THE CLUB"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-bone/70 text-sm mb-4",
							children: "Get drink specials & event drops straight to your phone."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "sms:8333668785?body=JOIN",
							className: "block rounded-xl border border-[var(--gold)]/40 bg-[var(--gold)]/5 p-4 hover:bg-[var(--gold)]/10 transition glow-gold",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-xs tracking-widest text-[var(--gold)]",
									children: "TEXT"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-2xl neon-gold",
									children: "JOIN"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-sm tracking-wider text-bone/80",
									children: "to 833-366-8785"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://instagram.com/hailmaryssportsbar",
									target: "_blank",
									rel: "noopener",
									className: "grid h-10 w-10 place-items-center rounded-full border border-white/15 hover:border-[var(--blitz)] hover:text-[var(--blitz)] transition",
									"aria-label": "Instagram",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-4 w-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://facebook.com/HailMarysSportsbar",
									target: "_blank",
									rel: "noopener",
									className: "grid h-10 w-10 place-items-center rounded-full border border-white/15 hover:border-[var(--blitz)] hover:text-[var(--blitz)] transition",
									"aria-label": "Facebook",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { className: "h-4 w-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://tiktok.com/@hailmaryssportsbar",
									target: "_blank",
									rel: "noopener",
									className: "grid h-10 w-10 place-items-center rounded-full border border-white/15 hover:border-[var(--blitz)] hover:text-[var(--blitz)] transition",
									"aria-label": "TikTok",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										viewBox: "0 0 24 24",
										className: "h-4 w-4 fill-current",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19.6 6.7a5.7 5.7 0 0 1-3.4-1.1V15a5.5 5.5 0 1 1-4.8-5.4v2.7a2.8 2.8 0 1 0 2 2.7V2h2.6a3.6 3.6 0 0 0 3.6 3.3v1.4Z" })
									})
								})
							]
						})
					] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row gap-4 items-center justify-between text-xs text-bone/50",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Hail Mary's Sports Bar. 21+ with valid ID. Drink responsibly."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"This website is powered by",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://theinnovations.tech/",
						target: "_blank",
						rel: "noopener",
						className: "text-[var(--gold)] hover:text-bone",
						children: "The Innovations"
					})
				] })]
			})]
		})
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-8xl neon-red",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-2xl",
					children: "Wrong way, champ."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-bone/70",
					children: "This play didn't connect."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-[var(--blitz)] px-6 py-3 font-display tracking-widest text-white",
						children: "BACK TO THE BAR"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-2xl",
					children: "Something fumbled."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-bone/70",
					children: "Try again — we got you."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "rounded-md bg-[var(--blitz)] px-4 py-2 font-display tracking-widest text-sm text-white",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "rounded-md border border-white/15 px-4 py-2 font-display tracking-widest text-sm",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$8 = createRootRouteWithContext()({
	head: () => {
		const seo = createSeo({
			title: "Hail Mary's Sports Bar — Glendale's Best Damn Dive Bar",
			description: "Glendale sports and dive bar with NFL watch parties, karaoke, live music, bingo, poker, billiards, strong drinks, and a late-night patio."
		});
		return {
			meta: [
				{ charSet: "utf-8" },
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1"
				},
				{
					name: "theme-color",
					content: "#0B0B0D"
				},
				{
					name: "geo.region",
					content: "US-AZ"
				},
				{
					name: "geo.placename",
					content: "Glendale"
				},
				...seo.meta
			],
			links: [
				...seo.links,
				{
					rel: "icon",
					href: "/favicon.svg",
					type: "image/svg+xml"
				},
				{
					rel: "apple-touch-icon",
					href: "/apple-touch-icon.svg"
				},
				{
					rel: "manifest",
					href: "/site.webmanifest"
				},
				{
					rel: "stylesheet",
					href: styles_default
				},
				{
					rel: "preconnect",
					href: "https://fonts.googleapis.com"
				},
				{
					rel: "preconnect",
					href: "https://fonts.gstatic.com",
					crossOrigin: "anonymous"
				},
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Caveat+Brush&family=Inter:wght@400;500;600;700&display=swap"
				}
			]
		};
	},
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
			type: "application/ld+json",
			dangerouslySetInnerHTML: { __html: JSON.stringify(localBusinessJsonLd) }
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			suppressHydrationWarning: true,
			children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})]
		})]
	});
}
function RootComponent() {
	const { queryClient } = Route$8.useRouteContext();
	const pathname = useRouter().state.location.pathname;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LenisProvider, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				mode: "wait",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.main, {
					initial: {
						opacity: 0,
						y: 12
					},
					animate: {
						opacity: 1,
						y: 0
					},
					exit: {
						opacity: 0,
						y: -12
					},
					transition: {
						duration: .45,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}, pathname)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
var entries = [
	{
		path: "/",
		priority: "1.0",
		changefreq: "weekly"
	},
	{
		path: "/events",
		priority: "0.9",
		changefreq: "weekly"
	},
	{
		path: "/game-day",
		priority: "0.9",
		changefreq: "weekly"
	},
	{
		path: "/menu",
		priority: "0.8",
		changefreq: "monthly"
	},
	{
		path: "/reserve",
		priority: "0.9",
		changefreq: "monthly"
	},
	{
		path: "/gallery",
		priority: "0.6",
		changefreq: "monthly"
	},
	{
		path: "/about",
		priority: "0.7",
		changefreq: "monthly"
	}
];
var Route$7 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.map((e) => `  <url>\n    <loc>${SITE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`).join("\n")}\n</urlset>`;
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var variants = {
	hidden: {
		opacity: 0,
		y: 32
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .7,
			ease: [
				.22,
				1,
				.36,
				1
			]
		}
	}
};
function SectionReveal({ children, className, delay = 0, as: Tag = "div" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion(Tag), {
		initial: "hidden",
		whileInView: "show",
		viewport: {
			once: true,
			amount: .2
		},
		variants: {
			hidden: {
				opacity: 0,
				y: 32
			},
			show: {
				opacity: 1,
				y: 0,
				transition: {
					duration: .7,
					delay,
					ease: [
						.22,
						1,
						.36,
						1
					]
				}
			}
		},
		className,
		children
	});
}
function Stagger({ children, className, gap = .08 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: "hidden",
		whileInView: "show",
		viewport: {
			once: true,
			amount: .15
		},
		variants: {
			hidden: {},
			show: { transition: {
				staggerChildren: gap,
				delayChildren: .05
			} }
		},
		className,
		children
	});
}
var StaggerItem = ({ children, className }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
	variants,
	className,
	children
});
var OCCASIONS = [
	{
		value: "Watch a Game",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "h-6 w-6" }),
		desc: "NFL, Cardinals, PPV, you name it."
	},
	{
		value: "Event Night",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-6 w-6" }),
		desc: "Bingo, karaoke, live band, latin night."
	},
	{
		value: "Private Party / Booth",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PartyPopper, { className: "h-6 w-6" }),
		desc: "Birthdays, work parties, bachelor(ette)."
	},
	{
		value: "Just Drinks",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Beer, { className: "h-6 w-6" }),
		desc: "Walk in. Sit down. We'll handle the rest."
	}
];
var AREAS = [
	{
		value: "Main Floor",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-5 w-5" }),
		desc: "Open seating, full bar energy."
	},
	{
		value: "Booth",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-5 w-5" }),
		desc: "Tucked-in, your own zone."
	},
	{
		value: "Outdoor Patio",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-5 w-5" }),
		desc: "Drinks + hookah, string lights."
	},
	{
		value: "Big-Screen Section",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tv, { className: "h-5 w-5" }),
		desc: "Front row for the game."
	}
];
var GAMES$1 = [
	"Cardinals vs Seahawks — Sun 1:25PM",
	"NFL RedZone — Sun All Day",
	"Monday Night Football — 6:15PM",
	"Thursday Night Football — 5:15PM",
	"College Football Saturday — All Day",
	"Heavyweight Boxing PPV — Sat 7PM"
];
var empty = {
	occasion: null,
	date: "",
	time: "",
	party: 2,
	area: null,
	game: null,
	name: "",
	phone: "",
	email: "",
	notes: ""
};
function ReservationFlow({ variant = "full", initialOccasion, initialEvent }) {
	const [step, setStep] = (0, import_react.useState)(initialOccasion ? 1 : 0);
	const [data, setData] = (0, import_react.useState)({
		...empty,
		occasion: initialOccasion ?? null,
		notes: initialEvent ? `RSVP for: ${initialEvent}` : ""
	});
	const [confirmed, setConfirmed] = (0, import_react.useState)(null);
	const totalSteps = variant === "private" ? 3 : 4;
	const update = (p) => setData((d) => ({
		...d,
		...p
	}));
	const submit = () => {
		setConfirmed({ id: "HM-" + Math.floor(1e5 + Math.random() * 9e5) });
	};
	if (confirmed) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Confirmation, {
		id: confirmed.id,
		data,
		variant
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-3xl border border-white/8 bg-[var(--panel)]/80 backdrop-blur-md p-6 md:p-10 glow-red/0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-8 flex items-center gap-2",
				children: Array.from({ length: totalSteps }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `h-1.5 rounded-full transition-all duration-500 ${i <= step ? "bg-[var(--blitz)] glow-red" : "bg-white/10"}` })
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mb-2 font-display text-sm tracking-widest text-[var(--gold)]",
				children: [
					"STEP ",
					Math.min(step + 1, totalSteps),
					" / ",
					totalSteps
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				mode: "wait",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						x: 30
					},
					animate: {
						opacity: 1,
						x: 0
					},
					exit: {
						opacity: 0,
						x: -30
					},
					transition: {
						duration: .4,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					children: [
						variant === "private" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							step === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivateStep1, {
								data,
								update,
								next: () => setStep(1)
							}),
							step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivateStep2, {
								data,
								update,
								next: () => setStep(2),
								back: () => setStep(0)
							}),
							step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactStep, {
								data,
								update,
								submit,
								back: () => setStep(1),
								label: "Send Inquiry"
							})
						] }),
						variant === "event" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							step === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DateTimeStep, {
								data,
								update,
								next: () => setStep(1)
							}),
							step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AreaStep, {
								data,
								update,
								next: () => setStep(2),
								back: () => setStep(0),
								skipGame: true
							}),
							step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactStep, {
								data,
								update,
								submit,
								back: () => setStep(1)
							})
						] }),
						variant === "full" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							step === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OccasionStep, {
								data,
								update: (p) => {
									update(p);
									setStep(1);
								}
							}),
							step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DateTimeStep, {
								data,
								update,
								next: () => setStep(2),
								back: () => setStep(0)
							}),
							step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AreaStep, {
								data,
								update,
								next: () => setStep(3),
								back: () => setStep(1)
							}),
							step === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactStep, {
								data,
								update,
								submit,
								back: () => setStep(2)
							})
						] })
					]
				}, step)
			})
		]
	});
}
function OccasionStep({ data, update }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "font-display text-3xl md:text-5xl mb-2",
			children: "What's the occasion?"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-bone/70 mb-8",
			children: "Pick one — we'll tailor your spot for the night."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 md:grid-cols-2",
			children: OCCASIONS.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => update({ occasion: o.value }),
				className: `group text-left rounded-2xl border p-6 transition ${data.occasion === o.value ? "border-[var(--blitz)] glow-red bg-[var(--blitz)]/10" : "border-white/10 bg-black/30 hover:border-[var(--gold)]/50 hover:bg-[var(--gold)]/5"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-black border border-white/10 text-[var(--gold)]",
						children: o.icon
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-2xl",
						children: o.value
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-bone/65 text-sm mt-1",
						children: o.desc
					})
				]
			}, o.value))
		})
	] });
}
function DateTimeStep({ data, update, next, back }) {
	const valid = data.date && data.time && data.party > 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "font-display text-3xl md:text-5xl mb-2",
			children: "When & how many?"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-bone/70 mb-8",
			children: "We hold spots up to 2 hours past your booked time."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-5 md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, {}),
					label: "Date",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "date",
						value: data.date,
						min: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
						onChange: (e) => update({ date: e.target.value }),
						className: "w-full bg-transparent text-bone outline-none font-display text-xl"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {}),
					label: "Time",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						value: data.time,
						onChange: (e) => update({ time: e.target.value }),
						className: "w-full bg-transparent text-bone outline-none font-display text-xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							className: "bg-black",
							children: "Pick a time"
						}), [
							"11:30 AM",
							"1:00 PM",
							"3:00 PM",
							"5:00 PM",
							"6:30 PM",
							"8:00 PM",
							"9:30 PM",
							"11:00 PM",
							"12:30 AM"
						].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: t,
							className: "bg-black",
							children: t
						}, t))]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {}),
					label: "Party size",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => update({ party: Math.max(1, data.party - 1) }),
								className: "h-10 w-10 rounded-md border border-white/15 text-bone hover:border-[var(--blitz)]",
								children: "−"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex-1 text-center font-display text-2xl",
								children: data.party
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => update({ party: Math.min(40, data.party + 1) }),
								className: "h-10 w-10 rounded-md border border-white/15 text-bone hover:border-[var(--gold)]",
								children: "+"
							})
						]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavButtons, {
			onNext: next,
			onBack: back,
			nextDisabled: !valid
		})
	] });
}
function AreaStep({ data, update, next, back, skipGame }) {
	const showGame = !skipGame && data.occasion === "Watch a Game";
	const valid = data.area && (!showGame || data.game);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "font-display text-3xl md:text-5xl mb-2",
			children: "Pick your area"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-bone/70 mb-8",
			children: "Where do you want to land?"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 sm:grid-cols-2",
			children: AREAS.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => update({ area: a.value }),
				className: `text-left rounded-xl border p-5 transition ${data.area === a.value ? "border-[var(--gold)] glow-gold bg-[var(--gold)]/10" : "border-white/10 bg-black/30 hover:border-white/30"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[var(--blitz)]",
						children: a.icon
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-xl",
						children: a.value
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm text-bone/65",
						children: a.desc
					})] })]
				})
			}, a.value))
		}),
		showGame && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
				className: "font-display text-xl text-[var(--gold)] mb-3",
				children: "Which game?"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-2",
				children: GAMES$1.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => update({ game: g }),
					className: `text-left px-4 py-3 rounded-lg border transition ${data.game === g ? "border-[var(--blitz)] bg-[var(--blitz)]/10 text-bone" : "border-white/10 bg-black/30 hover:border-white/30 text-bone/80"}`,
					children: g
				}, g))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavButtons, {
			onNext: next,
			onBack: back,
			nextDisabled: !valid
		})
	] });
}
function ContactStep({ data, update, submit, back, label = "Confirm Reservation" }) {
	const valid = data.name && data.phone && data.email;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "font-display text-3xl md:text-5xl mb-2",
			children: "Your info"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-bone/70 mb-8",
			children: "We'll text you to confirm the spot."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 md:grid-cols-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, {}),
					label: "Full name",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: data.name,
						onChange: (e) => update({ name: e.target.value }),
						className: "w-full bg-transparent outline-none text-bone font-display text-lg",
						placeholder: "Jane Quarterback"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {}),
					label: "Phone",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: data.phone,
						onChange: (e) => update({ phone: e.target.value }),
						className: "w-full bg-transparent outline-none text-bone font-display text-lg",
						placeholder: "+1 555 555 5555"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {}),
					label: "Email",
					className: "md:col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: data.email,
						onChange: (e) => update({ email: e.target.value }),
						className: "w-full bg-transparent outline-none text-bone font-display text-lg",
						placeholder: "you@email.com"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {}),
					label: "Anything we should know?",
					className: "md:col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						rows: 3,
						value: data.notes,
						onChange: (e) => update({ notes: e.target.value }),
						className: "w-full bg-transparent outline-none text-bone resize-none",
						placeholder: "Birthday, dietary stuff, fave team..."
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavButtons, {
			onNext: submit,
			onBack: back,
			nextLabel: label,
			nextDisabled: !valid
		})
	] });
}
function PrivateStep1({ data, update, next }) {
	const valid = data.party > 0 && data.date;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "font-display text-3xl md:text-5xl mb-2",
			children: "Book the booth."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-bone/70 mb-8",
			children: "Tell us the basics — we'll come back with options."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-5 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, {}),
				label: "Date",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "date",
					value: data.date,
					onChange: (e) => update({ date: e.target.value }),
					className: "w-full bg-transparent text-bone outline-none font-display text-xl",
					min: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {}),
				label: "Party size",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "number",
					min: 4,
					max: 120,
					value: data.party,
					onChange: (e) => update({ party: parseInt(e.target.value) || 0 }),
					className: "w-full bg-transparent text-bone outline-none font-display text-xl"
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavButtons, {
			onNext: next,
			nextDisabled: !valid
		})
	] });
}
function PrivateStep2({ data, update, next, back }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "font-display text-3xl md:text-5xl mb-2",
			children: "What are we celebrating?"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PartyPopper, {}),
				label: "Occasion",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: data.notes,
					onChange: (e) => update({ notes: e.target.value }),
					className: "w-full bg-transparent outline-none text-bone font-display text-lg",
					placeholder: "Birthday, bachelor(ette), work party..."
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Beer, {}),
				label: "Rough budget",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					value: data.game || "",
					onChange: (e) => update({ game: e.target.value }),
					className: "w-full bg-transparent outline-none text-bone font-display text-lg",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							className: "bg-black",
							value: "",
							children: "Pick a range"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							className: "bg-black",
							children: "$300 – $600"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							className: "bg-black",
							children: "$600 – $1,200"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							className: "bg-black",
							children: "$1,200 – $2,500"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							className: "bg-black",
							children: "$2,500+"
						})
					]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavButtons, {
			onNext: next,
			onBack: back
		})
	] });
}
function Field({ icon, label, children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: `block rounded-xl border border-white/10 bg-black/30 p-4 focus-within:border-[var(--gold)] transition ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 text-xs font-display tracking-widest text-bone/60 mb-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[var(--blitz)] [&_svg]:h-4 [&_svg]:w-4",
				children: icon
			}), label.toUpperCase()]
		}), children]
	});
}
function NavButtons({ onBack, onNext, nextDisabled, nextLabel = "Continue" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-10 flex flex-wrap justify-between gap-3",
		children: [onBack ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: onBack,
			className: "font-display tracking-widest text-sm text-bone/60 hover:text-bone px-2 py-3",
			children: "← BACK"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CTAButton, {
			onClick: onNext,
			disabled: nextDisabled,
			variant: "blitz",
			size: "lg",
			className: nextDisabled ? "opacity-40 pointer-events-none" : "",
			children: [nextLabel, " →"]
		})]
	});
}
function Confirmation({ id, data, variant }) {
	const ics = () => {
		const dt = /* @__PURE__ */ new Date(`${data.date}T${convert24(data.time)}`);
		const end = new Date(dt.getTime() + 7200 * 1e3);
		const fmt = (d) => d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
		const body = `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nUID:${id}@hailmarys\nDTSTAMP:${fmt(/* @__PURE__ */ new Date())}\nDTSTART:${fmt(dt)}\nDTEND:${fmt(end)}\nSUMMARY:Hail Mary's — ${data.occasion || "Reservation"}\nLOCATION:5114 W Camelback Rd, Glendale, AZ 85301\nDESCRIPTION:Reservation ${id} for ${data.party} guests${data.area ? " in " + data.area : ""}${data.game ? " — " + data.game : ""}.\nEND:VEVENT\nEND:VCALENDAR`;
		const blob = new Blob([body], { type: "text/calendar" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = `hail-marys-${id}.ics`;
		a.click();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			scale: .95
		},
		animate: {
			opacity: 1,
			scale: 1
		},
		transition: { duration: .6 },
		className: "text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: { scale: 0 },
				animate: { scale: 1 },
				transition: {
					delay: .2,
					type: "spring",
					stiffness: 200
				},
				className: "mx-auto mb-6 grid h-20 w-20 place-items-center rounded-full bg-[var(--blitz)] glow-red",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-10 w-10 text-white" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-script text-3xl text-[var(--gold)] mb-2",
				children: "you're in."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-4xl md:text-6xl neon-red mb-2",
				children: variant === "private" ? "INQUIRY SENT" : "RESERVATION LOCKED"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-bone/70 mb-2",
				children: "Reservation #"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-3xl neon-gold mb-8",
				children: id
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-md rounded-2xl border border-white/10 bg-black/40 p-6 text-left mb-8 space-y-3",
				children: [
					data.occasion && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Occasion",
						value: data.occasion
					}),
					data.date && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Date",
						value: (/* @__PURE__ */ new Date(data.date + "T00:00")).toLocaleDateString("en-US", {
							weekday: "long",
							month: "long",
							day: "numeric"
						})
					}),
					data.time && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Time",
						value: data.time
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Party",
						value: `${data.party} guest${data.party === 1 ? "" : "s"}`
					}),
					data.area && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Area",
						value: data.area
					}),
					data.game && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Game",
						value: data.game
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Name",
						value: data.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Phone",
						value: data.phone
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-bone/80 mb-8",
				children: [
					"📲 ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: "text-[var(--gold)]",
						children: "We'll text you to confirm your spot"
					}),
					" within an hour. Save the date below."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap justify-center gap-3",
				children: [data.date && data.time && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTAButton, {
					onClick: ics,
					variant: "gold",
					children: "Add to Calendar"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTAButton, {
					onClick: () => window.location.reload(),
					variant: "ghost",
					children: "New Reservation"
				})]
			})
		]
	});
}
function Row({ label, value }) {
	if (!value) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between gap-4 text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-display tracking-widest text-bone/55",
			children: label.toUpperCase()
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-display text-bone text-right",
			children: value
		})]
	});
}
function convert24(t) {
	if (!t) return "12:00:00";
	const [hm, ampm] = t.split(" ");
	let [h, m] = hm.split(":").map(Number);
	if (ampm === "PM" && h !== 12) h += 12;
	if (ampm === "AM" && h === 12) h = 0;
	return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:00`;
}
var Route$6 = createFileRoute("/reserve")({
	head: () => createSeo({
		title: "Reserve a Booth | Hail Mary's Sports Bar Glendale",
		description: "Reserve a booth, RSVP for a watch party, or plan a private event at Hail Mary's Sports Bar in Glendale. Quick and free, with no payment needed.",
		path: "/reserve"
	}),
	component: Reserve
});
function Reserve() {
	const [tab, setTab] = (0, import_react.useState)("book");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "relative pt-40 pb-16 border-b border-white/5 overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,32,44,0.2),transparent_60%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "wrap relative text-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionReveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-script text-3xl text-[var(--gold)] mb-3",
					children: "grab your spot"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "font-display text-6xl md:text-9xl leading-[0.85]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "neon-red",
							children: "RESERVE"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "neon-gold",
							children: "YOUR SPOT"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-bone/75 max-w-xl mx-auto",
					children: "Sundays, fight nights, big shows — we fill up fast. Lock it in below in under a minute."
				})
			] })
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "wrap py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-10 mx-auto inline-flex w-full max-w-md p-1 rounded-full border border-white/10 bg-black/40",
			children: ["book", "private"].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => setTab(t),
				className: `relative flex-1 py-3 rounded-full font-display tracking-widest text-sm transition ${tab === t ? "text-white" : "text-bone/60 hover:text-bone"}`,
				children: [tab === t && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
					layoutId: "resvtab",
					className: "absolute inset-0 rounded-full bg-[var(--blitz)] glow-red",
					transition: {
						type: "spring",
						stiffness: 280,
						damping: 24
					}
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "relative",
					children: t === "book" ? "BOOK A SPOT" : "PRIVATE / BOOTH"
				})]
			}, t))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				opacity: 0,
				y: 20
			},
			animate: {
				opacity: 1,
				y: 0
			},
			transition: { duration: .4 },
			className: "mx-auto max-w-3xl",
			children: tab === "book" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReservationFlow, { variant: "full" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReservationFlow, { variant: "private" })
		}, tab)]
	})] });
}
function MarqueeTicker({ items, accent = "red" }) {
	const list = [
		...items,
		...items,
		...items
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `relative overflow-hidden border-y ${accent === "red" ? "border-[var(--blitz)]/40 bg-black" : "border-[var(--gold)]/40 bg-black"} py-4`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "marquee-track",
			children: list.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: `mx-8 font-display uppercase text-2xl md:text-3xl tracking-widest ${accent === "red" ? "neon-red" : "neon-gold"}`,
				children: [
					t,
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "opacity-50 mx-4",
						children: "★"
					})
				]
			}, i))
		})
	});
}
function Carousel({ children, className = "", slideClassName = "min-w-0 flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_32%]" }) {
	const [emblaRef, embla] = useEmblaCarousel({
		loop: true,
		dragFree: false,
		align: "start"
	});
	const [canPrev, setCanPrev] = (0, import_react.useState)(false);
	const [canNext, setCanNext] = (0, import_react.useState)(false);
	const onSelect = (0, import_react.useCallback)(() => {
		if (!embla) return;
		setCanPrev(embla.canScrollPrev());
		setCanNext(embla.canScrollNext());
	}, [embla]);
	(0, import_react.useEffect)(() => {
		if (!embla) return;
		onSelect();
		embla.on("select", onSelect);
		embla.on("reInit", onSelect);
	}, [embla, onSelect]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `relative ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-hidden",
			ref: emblaRef,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-5",
				children: children.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: slideClassName,
					children: c
				}, i))
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 flex items-center justify-end gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => embla?.scrollPrev(),
				disabled: !canPrev && !embla?.canScrollPrev(),
				"aria-label": "Previous",
				className: "grid h-12 w-12 place-items-center rounded-full border border-white/15 text-bone hover:border-[var(--blitz)] hover:text-[var(--blitz)] transition",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => embla?.scrollNext(),
				"aria-label": "Next",
				className: "grid h-12 w-12 place-items-center rounded-full border border-white/15 text-bone hover:border-[var(--gold)] hover:text-[var(--gold)] transition",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {})
			})]
		})]
	});
}
function MenuItemCard({ name, price, desc, highlight }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		whileHover: { y: -4 },
		className: `flex items-start gap-4 rounded-xl border p-5 transition ${highlight ? "border-[var(--gold)]/40 bg-gradient-to-br from-[var(--gold)]/10 to-transparent glow-gold" : "border-white/8 bg-[var(--panel)] hover:border-[var(--blitz)]/40"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex-1 min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
				className: "font-display text-xl tracking-wide",
				children: name
			}), desc && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-bone/65",
				children: desc
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `shrink-0 font-display text-2xl ${highlight ? "neon-gold" : "text-[var(--gold)]"}`,
			children: price
		})]
	});
}
var cocktail_default = "/assets/cocktail-BPcmLy9-.jpg";
var margaritas_default = "/assets/margaritas-DDNVpWoF.jpg";
var Route$5 = createFileRoute("/menu")({
	head: () => createSeo({
		title: "Drink Menu | Hail Mary's Sports Bar Glendale",
		description: "Explore Hail Mary's drink menu: signature cocktails, beer, canned cocktails, wine, party packs, weekly specials, and the famous House Punch.",
		path: "/menu"
	}),
	component: Menu$1
});
var SPECIALS$1 = [
	{
		l: "ALL DAY $3",
		items: [
			"Budweiser",
			"Busch Light",
			"Rolling Rock",
			"Coors Light",
			"Well Tequila"
		]
	},
	{
		l: "THU",
		items: ["Ladies Night 2-for-1 Wells"]
	},
	{
		l: "FRI",
		items: ["$5 Fridays — bar wide"]
	},
	{
		l: "SAT",
		items: ["Latin Night — $6 1800 Shots"]
	},
	{
		l: "SUN",
		items: ["Happy Hour ALL DAY"]
	}
];
var TABS = [
	"Cocktails",
	"Canned",
	"Beer",
	"Bottles",
	"Wine",
	"Party Packs",
	"N/A",
	"Munchies"
];
var ITEMS = {
	Cocktails: [
		{
			name: "Hail Mary's House Punch",
			price: "$10",
			desc: "Secret recipe. Goes down smooth, lands heavy.",
			highlight: true
		},
		{
			name: "Lemon Drop",
			price: "$6",
			desc: "10oz. Sweet, sour, dangerous."
		},
		{
			name: "HennyRita",
			price: "$12",
			desc: "Hennessy margarita. Yes really."
		},
		{
			name: "Casamigos Margarita",
			price: "$10",
			desc: "Top-shelf tequila, fresh lime."
		},
		{
			name: "Blue MF",
			price: "$10",
			desc: "Electric, irresponsible, unforgettable."
		},
		{
			name: "Mexican Candy",
			price: "$10",
			desc: "Tequila, watermelon, chamoy, tajín."
		},
		{
			name: "Pink P***ie",
			price: "$10",
			desc: "Don't ask. Just order."
		}
	],
	Canned: [
		{
			name: "Ciroc Sun Citrus",
			price: "$8.50"
		},
		{
			name: "Ciroc Watermelon Kiwi",
			price: "$8.50"
		},
		{
			name: "Crown Royal Washington Apple",
			price: "$8.50"
		},
		{
			name: "Nitro Espresso Martini",
			price: "$8.50"
		},
		{
			name: "Casamigos Margarita — Passionfruit Prickly Pear",
			price: "$8.50"
		},
		{
			name: "Casamigos Margarita — Strawberry Lime",
			price: "$8.50"
		},
		{
			name: "Casamigos Margarita — Guava Hibiscus",
			price: "$8.50"
		},
		{
			name: "Casamigos Margarita — Classic",
			price: "$8.50"
		},
		{
			name: "High Noon — Watermelon",
			price: "$8.50"
		},
		{
			name: "High Noon — Pineapple",
			price: "$8.50"
		},
		{
			name: "High Noon — Black Cherry",
			price: "$8.50"
		},
		{
			name: "High Noon — Grapefruit",
			price: "$8.50"
		}
	],
	Beer: [
		{
			name: "Michelob Ultra — 6-pack",
			price: "$18"
		},
		{
			name: "Budweiser — 6-pack",
			price: "$18"
		},
		{
			name: "Bud Light — 6-pack",
			price: "$18"
		},
		{
			name: "Coors Light — 6-pack",
			price: "$18"
		},
		{
			name: "Coors Banquet — 6-pack",
			price: "$18"
		},
		{
			name: "Miller Genuine Draft — 6-pack",
			price: "$18"
		}
	],
	Bottles: [
		{
			name: "Vodka — 1L",
			price: "$20"
		},
		{
			name: "Whiskey — 1L",
			price: "$20"
		},
		{
			name: "Rum — 1L",
			price: "$20"
		},
		{
			name: "Gin — 1L",
			price: "$20"
		},
		{
			name: "Tequila Silver — 1L",
			price: "$20"
		},
		{
			name: "Tequila Gold — 1L",
			price: "$20"
		},
		{
			name: "Long Island Mix — 1L",
			price: "$20",
			desc: "Add sweet & sour + a splash of Coke."
		}
	],
	Wine: [{
		name: "House White — 10oz",
		price: "$7"
	}, {
		name: "House Red — 10oz",
		price: "$7"
	}],
	"Party Packs": [
		{
			name: "Craft Cocktails — 4 for $30",
			price: "$30",
			desc: "Pick any 4 cocktails ≤ $10.",
			highlight: true
		},
		{
			name: "Craft Cocktails — 6 for $50",
			price: "$50",
			desc: "Pick any 6 cocktails ≤ $10.",
			highlight: true
		},
		{
			name: "Craft Cocktails — 8 for $70",
			price: "$70",
			desc: "Pick any 8 cocktails ≤ $10.",
			highlight: true
		},
		{
			name: "Craft Cocktails — 10 for $85",
			price: "$85",
			desc: "Pick any 10 cocktails ≤ $10.",
			highlight: true
		},
		{
			name: "Bottles — 2 for $35",
			price: "$35",
			desc: "Any two 1L bottles ≤ $20."
		},
		{
			name: "Bottles — 3 for $50",
			price: "$50",
			desc: "Any three 1L bottles ≤ $20."
		},
		{
			name: "Bottles — 4 for $65",
			price: "$65",
			desc: "Any four 1L bottles ≤ $20."
		}
	],
	"N/A": [
		{
			name: "Red Bull",
			price: "$5"
		},
		{
			name: "Coke",
			price: "$3"
		},
		{
			name: "Sprite",
			price: "$3"
		}
	],
	Munchies: [{
		name: "Spicy Pork Rinds",
		price: "$3"
	}, {
		name: "Welch's Fruit Snacks",
		price: "$3"
	}]
};
var FEATURED = [
	{
		name: "House Punch",
		price: "$10",
		img: cocktail_default,
		desc: "Our secret recipe. The drink that built this place."
	},
	{
		name: "HennyRita",
		price: "$12",
		img: margaritas_default,
		desc: "Hennessy meets margarita. Don't fight it."
	},
	{
		name: "Mexican Candy",
		price: "$10",
		img: margaritas_default,
		desc: "Tequila, watermelon, chamoy. Spicy-sweet."
	},
	{
		name: "Blue MF",
		price: "$10",
		img: cocktail_default,
		desc: "Bright blue, bigger headache."
	},
	{
		name: "Casamigos Marg",
		price: "$10",
		img: margaritas_default,
		desc: "Top-shelf. Fresh-pressed lime."
	},
	{
		name: "Pink P***ie",
		price: "$10",
		img: cocktail_default,
		desc: "Pink, fruity, ferocious."
	}
];
function Menu$1() {
	const [tab, setTab] = (0, import_react.useState)("Cocktails");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "pt-40 pb-12 border-b border-white/5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "wrap text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionReveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-script text-3xl text-[var(--gold)] mb-3",
						children: "drink it in"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "font-display text-6xl md:text-9xl leading-[0.85]",
						children: ["THE ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "neon-red",
							children: "MENU"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-bone/70 max-w-xl mx-auto",
						children: "Strong pours. Sharp prices. Bottles, cans, craft cocktails, party packs. Pick your weapon."
					})
				] })
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden border-b border-[var(--blitz)]/30",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(244,169,31,0.15),transparent_60%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap relative py-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionReveal, {
					className: "mb-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-script text-2xl text-[var(--gold)] mb-1",
						children: "in-venue specials"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-3xl md:text-5xl",
						children: ["At the bar, ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "neon-red",
							children: "all week"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 md:grid-cols-5",
					children: SPECIALS$1.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-white/10 bg-black/40 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-[var(--gold)] text-xs tracking-widest mb-2",
							children: s.l
						}), s.items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-bone leading-tight",
							children: i
						}, i))]
					}, s.l))
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "wrap py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionReveal, {
				className: "mb-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-script text-3xl text-[var(--gold)] mb-2",
					children: "house favorites"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-5xl md:text-7xl",
					children: ["Featured ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "neon-red",
						children: "cocktails"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Carousel, {
				slideClassName: "min-w-0 flex-[0_0_80%] sm:flex-[0_0_45%] lg:flex-[0_0_30%]",
				children: FEATURED.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "group rounded-2xl overflow-hidden border border-white/10 bg-[var(--panel)] h-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-[4/5] overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: f.img,
							alt: f.name,
							loading: "lazy",
							className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline justify-between gap-3 mb-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl",
								children: f.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-2xl neon-gold",
								children: f.price
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-bone/70",
							children: f.desc
						})]
					})]
				}, f.name))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarqueeTicker, {
			accent: "gold",
			items: [
				"21+ ONLY",
				"VALID ID REQUIRED",
				"DRINK RESPONSIBLY",
				"DON'T DRINK & DRIVE"
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "wrap py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionReveal, {
					className: "mb-8 flex flex-wrap items-end justify-between gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-script text-3xl text-[var(--gold)] mb-2",
						children: "the full list"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-5xl md:text-7xl",
						children: ["Order ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "neon-gold",
							children: "menu"
						})]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://www.seamless.com/",
						target: "_blank",
						rel: "noopener",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTAButton, {
							variant: "gold",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-2",
								children: ["Order on Seamless ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-4 w-4" })]
							})
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-10 flex flex-wrap gap-2",
					children: TABS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setTab(t),
						className: `px-4 py-2 rounded-full font-display tracking-wider text-sm transition border ${tab === t ? "border-[var(--blitz)] bg-[var(--blitz)] text-white glow-red" : "border-white/15 text-bone/70 hover:text-bone hover:border-white/30"}`,
						children: t.toUpperCase()
					}, t))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
					mode: "wait",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						exit: {
							opacity: 0,
							y: -10
						},
						transition: { duration: .3 },
						className: "grid gap-4 md:grid-cols-2",
						children: ITEMS[tab].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuItemCard, { ...i }, i.name))
					}, tab)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 flex items-center gap-3 rounded-xl border border-[var(--gold)]/30 bg-[var(--gold)]/5 p-5 text-bone/80",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "h-5 w-5 text-[var(--gold)] shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "text-[var(--gold)]",
							children: "21+ only."
						}), " Valid ID required at the door and at the bar. We card. No exceptions."]
					})]
				})
			]
		})
	] });
}
var gameday_crowd_default = "/assets/gameday-crowd-CmjBda5t.jpg";
var bar_tvs_default = "/assets/bar-tvs-DhS7FTeg.jpg";
var whiskey_default = "/assets/whiskey-B1nNkb5W.jpg";
var Route$4 = createFileRoute("/game-day")({
	head: () => createSeo({
		title: "NFL & Cardinals Watch Parties | Hail Mary's",
		description: "Watch NFL games and the Arizona Cardinals at Hail Mary's in Glendale, with Sunday Ticket, wall-to-wall screens, all-day happy hour, and booth reservations.",
		path: "/game-day"
	}),
	component: GameDay
});
var SPECIALS = [
	{
		name: "Bud Light Pitchers",
		price: "$12",
		desc: "All game long. Don't fumble."
	},
	{
		name: "Touchdown Shots",
		price: "$3",
		desc: "Cards score, the room drinks."
	},
	{
		name: "Game-Day Bucket",
		price: "$22",
		desc: "5 ice-cold domestics in a bucket."
	},
	{
		name: "Halftime Wings + Pitcher",
		price: "$28",
		desc: "Crispy wings, ice cold beer."
	}
];
function GameDay() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden pt-32 min-h-[80svh] flex items-end pb-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: gameday_crowd_default,
					alt: "",
					className: "absolute inset-0 h-full w-full object-cover",
					loading: "lazy"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/70 to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "wrap relative",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionReveal, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-script text-3xl text-[var(--gold)] mb-3",
							children: "red sea, west side"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-display text-7xl md:text-[11vw] leading-[0.82]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "neon-red",
									children: "GAME DAY"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "neon-gold",
									children: "RUNS HERE"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-2xl text-lg text-bone/80",
							children: "Every NFL Sunday turns Hail Mary's into Cardinals HQ. Wall-to-wall TVs, every game on, the loudest crowd between 51st and Camelback. Reserve your booth or risk standing room only."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/reserve",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTAButton, {
									variant: "blitz",
									size: "lg",
									children: "Reserve a Booth"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/menu",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTAButton, {
									variant: "ghost",
									children: "See Game-Day Drinks"
								})
							})]
						})
					] })
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarqueeTicker, { items: [
			"EVERY GAME ON",
			"HAPPY HOUR ALL SUNDAY",
			"TOUCHDOWN = SHOTS",
			"BIRDS GANG",
			"RED SEA RISING"
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "wrap py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
				className: "grid gap-6 md:grid-cols-2 lg:grid-cols-4",
				children: [
					{
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tv, {}),
						t: "Every Screen, Every Game",
						d: "NFL Sunday Ticket. RedZone. Local feeds. If it's on, it's on here."
					},
					{
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Beer, {}),
						t: "Happy Hour ALL DAY",
						d: "From doors at 11AM till the final whistle. Yes, all of it."
					},
					{
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, {}),
						t: "Cardinals First",
						d: "We're a Cards bar, no apologies. Birds score, you drink."
					},
					{
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, {}),
						t: "Booths for the Diehards",
						d: "Front-row booths in the Big-Screen Section. Reserve early."
					}
				].map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaggerItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-white/10 bg-[var(--panel)] p-6 h-full",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-4 inline-grid h-12 w-12 place-items-center rounded-xl bg-[var(--blitz)]/15 text-[var(--blitz)] [&_svg]:h-6 [&_svg]:w-6",
							children: c.icon
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl mb-2",
							children: c.t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-bone/70",
							children: c.d
						})
					]
				}) }, i))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "wrap pb-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-[1.2fr_1fr] items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionReveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-script text-3xl text-[var(--gold)] mb-2",
						children: "game-day deals"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-5xl md:text-7xl mb-8",
						children: ["SUNDAY ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "neon-red",
							children: "SPECIALS"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-3",
						children: SPECIALS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-4 rounded-xl border border-white/10 bg-[var(--panel)] p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-2xl",
								children: s.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-bone/65 text-sm",
								children: s.desc
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-3xl neon-gold shrink-0",
								children: s.price
							})]
						}, s.name))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionReveal, {
					delay: .15,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 col-span-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: bar_tvs_default,
									alt: "",
									loading: "lazy",
									className: "h-full w-full object-cover"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "aspect-square overflow-hidden rounded-2xl border border-white/10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: whiskey_default,
									alt: "",
									loading: "lazy",
									className: "h-full w-full object-cover"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "aspect-square overflow-hidden rounded-2xl border border-white/10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: gameday_crowd_default,
									alt: "",
									loading: "lazy",
									className: "h-full w-full object-cover"
								})
							})
						]
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden py-24 border-y border-[var(--blitz)]/30",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,32,44,0.25),transparent_60%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap relative text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-5xl md:text-7xl mb-6",
						children: ["LOCK IN YOUR ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "neon-red",
							children: "BOOTH"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-bone/75 mb-8 max-w-xl mx-auto",
						children: "Sundays sell out fast — especially when the Cards are home. Reserve in 60 seconds."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/reserve",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTAButton, {
							variant: "blitz",
							size: "lg",
							children: "Reserve for Game Day"
						})
					})
				]
			})]
		})
	] });
}
var billiards_default = "/assets/billiards-mxtSgXHs.jpg";
var karaoke_default = "/assets/karaoke-BuGJF3Wp.jpg";
var patio_default = "/assets/patio-C-Zmtxeo.jpg";
var live_band_default = "/assets/live-band-CVJCLTwX.jpg";
var bingo_default = "/assets/bingo-DRAQ6iWx.jpg";
var poker_default = "/assets/poker-BlU4yQFh.jpg";
var dj_night_default = "/assets/dj-night-DEsLpQO3.jpg";
var latin_night_default = "/assets/latin-night-B17LZmqc.jpg";
var Route$3 = createFileRoute("/gallery")({
	head: () => createSeo({
		title: "Photo Gallery | Hail Mary's Sports Bar Glendale",
		description: "See game-day crowds, neon nights, karaoke, live bands, billiards, cocktails, and the patio at Hail Mary's Sports Bar in Glendale.",
		path: "/gallery"
	}),
	component: Gallery
});
var IMAGES = [
	{
		src: gameday_crowd_default,
		alt: "Crowd cheering on game day",
		span: "lg:col-span-2 lg:row-span-2"
	},
	{
		src: karaoke_default,
		alt: "Karaoke night"
	},
	{
		src: billiards_default,
		alt: "Billiards under neon"
	},
	{
		src: patio_default,
		alt: "Outdoor patio at night",
		span: "lg:col-span-2"
	},
	{
		src: live_band_default,
		alt: "Live band"
	},
	{
		src: bingo_default,
		alt: "Bingo night"
	},
	{
		src: poker_default,
		alt: "Poker night"
	},
	{
		src: dj_night_default,
		alt: "DJ night",
		span: "lg:col-span-2 lg:row-span-2"
	},
	{
		src: latin_night_default,
		alt: "Latin night"
	},
	{
		src: cocktail_default,
		alt: "Cocktail"
	},
	{
		src: bar_tvs_default,
		alt: "Wall of TVs"
	},
	{
		src: margaritas_default,
		alt: "Margaritas"
	},
	{
		src: whiskey_default,
		alt: "Whiskey"
	}
];
function Gallery() {
	const [lightbox, setLightbox] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "pt-40 pb-12 border-b border-white/5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "wrap text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionReveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-script text-3xl text-[var(--gold)] mb-3",
						children: "caught on camera"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "font-display text-6xl md:text-9xl leading-[0.85]",
						children: ["THE ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "neon-red",
							children: "GALLERY"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-bone/70 max-w-xl mx-auto",
						children: "A dive bar lives in its details — the crowd, the neon, the spilled beer, the dancing on chairs. Here's ours."
					})
				] })
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "wrap py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionReveal, {
				className: "mb-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-3xl md:text-5xl",
					children: ["Lately at ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "neon-gold",
						children: "Hail Mary's"
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Carousel, {
				slideClassName: "min-w-0 flex-[0_0_80%] md:flex-[0_0_50%] lg:flex-[0_0_38%]",
				children: IMAGES.slice(0, 8).map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setLightbox(i),
					className: "block w-full aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 group",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: img.src,
						alt: img.alt,
						loading: "lazy",
						className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
					})
				}, i))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "wrap pb-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
				gap: .04,
				className: "grid gap-4 grid-cols-2 lg:grid-cols-4 auto-rows-[180px] md:auto-rows-[240px]",
				children: IMAGES.map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaggerItem, {
					className: img.span || "",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setLightbox(i),
						className: "group block h-full w-full overflow-hidden rounded-2xl border border-white/10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: img.src,
							alt: img.alt,
							loading: "lazy",
							className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
						})
					})
				}, i))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: lightbox !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			onClick: () => setLightbox(null),
			className: "fixed inset-0 z-[80] bg-black/95 backdrop-blur-md grid place-items-center p-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => setLightbox(null),
				className: "absolute top-6 right-6 text-bone/80 hover:text-bone",
				"aria-label": "Close",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-8 w-8" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
				initial: {
					scale: .95,
					opacity: 0
				},
				animate: {
					scale: 1,
					opacity: 1
				},
				src: IMAGES[lightbox].src,
				alt: IMAGES[lightbox].alt,
				className: "max-h-[85vh] max-w-[92vw] rounded-2xl object-contain"
			}, lightbox)]
		}) })
	] });
}
function EventCard({ event, onRsvp }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
		whileHover: {
			y: -8,
			rotateX: 3,
			rotateY: -3
		},
		transition: {
			type: "spring",
			stiffness: 180,
			damping: 18
		},
		style: { transformStyle: "preserve-3d" },
		className: "group relative overflow-hidden rounded-2xl bg-[var(--panel)] border border-white/5 h-full",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-[4/3] overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: event.image,
					alt: event.title,
					loading: "lazy",
					className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-[var(--blitz)] px-3 py-1 text-xs font-display tracking-widest text-white",
					children: event.day
				}),
				event.tag && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute top-4 right-4 inline-flex items-center gap-2 rounded-full bg-[var(--gold)]/95 px-3 py-1 text-xs font-display tracking-widest text-[var(--ink)]",
					children: event.tag
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-2xl md:text-3xl leading-tight mb-2",
					children: event.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-[var(--gold)] font-display tracking-wider mb-3",
					children: event.time
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-bone/70 text-sm mb-5",
					children: event.desc
				}),
				onRsvp ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onRsvp,
					className: "inline-flex items-center gap-2 font-display tracking-widest text-sm text-bone hover:text-[var(--blitz)] transition",
					children: "RSVP →"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/reserve",
					className: "inline-flex items-center gap-2 font-display tracking-widest text-sm text-bone hover:text-[var(--blitz)] transition",
					children: "RSVP →"
				})
			]
		})]
	});
}
var WEEKLY_EVENTS = [
	{
		day: "MON",
		title: "Dammit Bingo",
		time: "Sign-up 7PM · Bingo 7:30PM",
		desc: "Bingo with attitude. Cash prizes, salty callers, $5 well drinks, and the loudest BINGO! shout in Glendale.",
		image: bingo_default,
		tag: "Cash Prizes"
	},
	{
		day: "TUE",
		title: "Throwback Tuesday + Straight 8 Billiards",
		time: "Pool tourney 8PM",
		desc: "All your favorite throwback jams pumping while Straight 8 runs the 'Hail of a Shot' billiards tournament. Rack 'em up.",
		image: billiards_default,
		tag: "Tournament"
	},
	{
		day: "WED",
		title: "Rockin' Wednesday",
		time: "Live bands from 9PM",
		desc: "Local rock bands taking over our stage. Loud guitars, cold beer, no cover. Hump day done right.",
		image: live_band_default,
		tag: "Live Music"
	},
	{
		day: "THU",
		title: "Ladies Night & Karaoke",
		time: "Karaoke 9PM",
		desc: "Ladies get 2-for-1 well drinks all night. Mic's open at nine. Bring the crew, butcher a ballad.",
		image: karaoke_default,
		tag: "2-for-1 Wells"
	},
	{
		day: "FRI",
		title: "$5 Fridays + Poker Night",
		time: "Poker 8PM",
		desc: "Five-buck specials across the bar and a poker table that runs till someone busts. Friday night, dialed up.",
		image: poker_default,
		tag: "$5 Drinks"
	},
	{
		day: "SAT",
		title: "Latin Night",
		time: "10PM till late",
		desc: "Reggaeton, salsa, perreo. $6 1800 shots. The patio packs out. Wear something you can dance in.",
		image: latin_night_default,
		tag: "$6 Shots"
	},
	{
		day: "SUN",
		title: "NFL Sunday + Cardinals Watch Party",
		time: "Doors 11AM · Kickoff = chaos",
		desc: "Every game, every screen. Happy Hour ALL day. Cardinals fans drink first. Touchdowns = shots.",
		image: gameday_crowd_default,
		tag: "Happy Hour ALL DAY"
	}
];
var SPECIAL_PARTIES = [
	{
		day: "SAT NOV 16",
		title: "Neon Rodeo Late Night",
		time: "10PM · DJ ROJO",
		desc: "Cowboy boots meet neon lights. Mechanical bull on the patio (probably), two-step on the floor, tequila everywhere.",
		image: dj_night_default,
		tag: "Featured"
	},
	{
		day: "FRI NOV 22",
		title: "Cardinals Pre-Game Tailgate",
		time: "Doors 5PM",
		desc: "Tailgate inside our walls. Game-day jerseys = free shot. Wing platters at half-price till kickoff.",
		image: gameday_crowd_default
	},
	{
		day: "FRI DEC 6",
		title: "Heavyweight Boxing PPV",
		time: "Main card 7PM",
		desc: "All TVs locked on the fight. Buckets of Bud Light, pizza specials, and ringside seating in the booths.",
		image: live_band_default,
		tag: "PPV"
	}
];
var Route$2 = createFileRoute("/events")({
	head: () => createSeo({
		title: "Events & Weekly Lineup | Hail Mary's Sports Bar",
		description: "See what's happening at Hail Mary's in Glendale: bingo, karaoke, poker, live music, Latin night, drink specials, and NFL watch parties.",
		path: "/events"
	}),
	component: Events
});
function Events() {
	const [rsvp, setRsvp] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "relative overflow-hidden pt-40 pb-24 border-b border-white/5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(244,169,31,0.18),transparent_60%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "wrap relative text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionReveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-script text-3xl text-[var(--gold)] mb-3",
						children: "what's on"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "font-display text-6xl md:text-9xl leading-[0.85]",
						children: [
							"SEVEN",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "neon-red",
								children: "NIGHTS"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "neon-gold",
								children: "A WEEK"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-bone/75 max-w-2xl mx-auto",
						children: "Bingo, karaoke, live bands, DJ takeovers, poker, billiards, watch parties. There's never nothing happening. Pick a night. RSVP. We'll have the booth ready."
					})
				] })
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarqueeTicker, {
			accent: "gold",
			items: [
				"DAMMIT BINGO MON",
				"ROCKIN' WED",
				"KARAOKE THU",
				"$5 FRIDAYS",
				"LATIN SATURDAYS",
				"NFL SUNDAYS",
				"POKER NIGHTS"
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "wrap py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionReveal, {
				className: "mb-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-script text-3xl text-[var(--gold)] mb-2",
					children: "this week's highlights"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-5xl md:text-7xl",
					children: [
						"Big ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "neon-red",
							children: "parties"
						}),
						" coming up"
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Carousel, {
				slideClassName: "min-w-0 flex-[0_0_88%] md:flex-[0_0_55%] lg:flex-[0_0_45%]",
				children: SPECIAL_PARTIES.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventCard, {
					event: e,
					onRsvp: () => setRsvp(e.title)
				}, i))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "wrap pb-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionReveal, {
				className: "mb-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-5xl md:text-7xl",
					children: ["Weekly ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "neon-gold",
						children: "lineup"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-bone/65 mt-3",
					children: "Same time every week. Different chaos."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
				className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: WEEKLY_EVENTS.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaggerItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventCard, {
					event: e,
					onRsvp: () => setRsvp(e.title)
				}) }, i))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "wrap pb-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl border border-[var(--blitz)]/30 bg-gradient-to-br from-[var(--blitz)]/10 to-transparent p-10 md:p-16 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-script text-3xl text-[var(--gold)] mb-2",
						children: "need the whole booth?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-5xl md:text-7xl mb-4",
						children: "PRIVATE PARTIES"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-bone/75 max-w-2xl mx-auto mb-8",
						children: "Birthdays, bachelor(ette)s, work crews — we lock down booths, the patio, or the whole spot."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTAButton, {
						variant: "blitz",
						size: "lg",
						onClick: () => setRsvp("__private"),
						children: "Inquire Now"
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: rsvp && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			className: "fixed inset-0 z-[60] bg-black/80 backdrop-blur-md p-4 overflow-y-auto",
			onClick: () => setRsvp(null),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					scale: .95,
					y: 30
				},
				animate: {
					scale: 1,
					y: 0
				},
				exit: {
					scale: .95,
					y: 30
				},
				className: "relative wrap !w-[min(94vw,800px)] my-12",
				onClick: (e) => e.stopPropagation(),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setRsvp(null),
					className: "absolute -top-12 right-0 text-bone/70 hover:text-bone flex items-center gap-2 font-display tracking-widest text-sm",
					children: ["CLOSE ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })]
				}), rsvp === "__private" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReservationFlow, { variant: "private" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReservationFlow, {
					variant: "event",
					initialEvent: rsvp
				})]
			})
		}) })
	] });
}
var Route$1 = createFileRoute("/about")({
	head: () => createSeo({
		title: "About & Contact | Hail Mary's Sports Bar Glendale",
		description: "Visit Hail Mary's Sports Bar in Glendale, Arizona. Find our address, daily hours, phone number, patio details, amenities, and social links.",
		path: "/about"
	}),
	component: About
});
var AMENITIES = [
	{
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tv, {}),
		label: "Wall-to-Wall TVs"
	},
	{
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Beer, {}),
		label: "Full Bar + Craft Cocktails"
	},
	{
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Music, {}),
		label: "Live Music & DJ Nights"
	},
	{
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wind, {}),
		label: "Enclosed Patio + Hookah"
	},
	{
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, {}),
		label: "Billiards, Poker, Bingo, Karaoke"
	}
];
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "relative pt-40 pb-16 border-b border-white/5 overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: bar_tvs_default,
					alt: "",
					className: "absolute inset-0 h-full w-full object-cover opacity-25",
					loading: "lazy"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/80 to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "wrap relative",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionReveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-script text-3xl text-[var(--gold)] mb-3",
						children: "the story"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "font-display text-6xl md:text-9xl leading-[0.85]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "neon-red",
								children: "DIVE BAR"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "neon-gold",
								children: "DONE RIGHT"
							})
						]
					})] })
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "wrap py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-[1.2fr_1fr] items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionReveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl md:text-3xl leading-snug mb-6 text-bone",
					children: "Hail Mary's is a sports bar that never forgot how to be a dive."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5 text-bone/75 leading-relaxed",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We opened with one rule: make the kind of place we'd actually want to drink at. Strong pours. Cold beer. Every TV on every game. A patio you can smoke on. A jukebox the regulars fight over. A staff that remembers your drink by the second visit." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Tucked inside Westside Cocktail Lounge on Camelback, we've become Glendale's go-to for NFL Sundays, Cardinals watch parties, karaoke meltdowns on Thursdays, and Latin night chaos on Saturdays. Bingo on Mondays, live rock on Wednesdays, poker on Fridays — there's always something on, and it's almost always loud." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-script text-3xl text-[var(--gold)]",
							children: "we're not for everyone — and that's kind of the point."
						})
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionReveal, {
					delay: .15,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-[4/5] overflow-hidden rounded-3xl border border-white/10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: patio_default,
							alt: "Patio at Hail Mary's",
							loading: "lazy",
							className: "h-full w-full object-cover"
						})
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "wrap pb-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionReveal, {
				className: "mb-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-4xl md:text-6xl",
					children: ["What's ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "neon-red",
						children: "inside"
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-5",
				children: AMENITIES.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaggerItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-white/10 bg-[var(--panel)] p-6 h-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-4 inline-grid h-12 w-12 place-items-center rounded-xl bg-[var(--blitz)]/15 text-[var(--blitz)] [&_svg]:h-6 [&_svg]:w-6",
						children: a.icon
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-lg leading-tight",
						children: a.label
					})]
				}) }, a.label))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "wrap pb-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 lg:grid-cols-[1.2fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionReveal, {
					className: "rounded-3xl border border-white/10 overflow-hidden bg-[var(--panel)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						title: "Map",
						src: "https://www.google.com/maps?q=5114+W+Camelback+Rd,+Glendale,+AZ+85301&output=embed",
						className: "w-full h-[460px] grayscale-[40%]",
						loading: "lazy"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionReveal, {
					delay: .15,
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-2xl border border-white/10 bg-[var(--panel)] p-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-5 w-5 text-[var(--blitz)] mt-1 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-xl",
										children: "VISIT"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-bone/80",
										children: [
											"5114 W Camelback Rd",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"Glendale, AZ 85301"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-bone/55 text-sm mt-1",
										children: "(located in Westside Cocktail Lounge)"
									})
								] })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-2xl border border-white/10 bg-[var(--panel)] p-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-5 w-5 text-[var(--blitz)] mt-1 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-xl",
									children: "HOURS"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-bone/80",
									children: [
										"Open 7 days a week",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"11:00 AM – 2:00 AM"
									]
								})] })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "tel:+16239341780",
							className: "block rounded-2xl border border-white/10 bg-[var(--panel)] p-6 hover:border-[var(--blitz)] transition",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-5 w-5 text-[var(--blitz)] mt-1 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-xl",
									children: "CALL"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-2xl neon-gold",
									children: "+1 623-934-1780"
								})] })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "mailto:hmsportsbar@gmail.com",
							className: "block rounded-2xl border border-white/10 bg-[var(--panel)] p-6 hover:border-[var(--blitz)] transition",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-5 w-5 text-[var(--blitz)] mt-1 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-xl",
									children: "EMAIL"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-bone/80 break-all",
									children: "hmsportsbar@gmail.com"
								})] })]
							})
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "wrap pb-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl border border-[var(--gold)]/30 bg-gradient-to-br from-[var(--gold)]/10 to-transparent p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "h-10 w-10 text-[var(--gold)] mb-4" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-script text-3xl text-[var(--gold)] mb-2",
							children: "drink specials, delivered"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "font-display text-4xl mb-3",
							children: [
								"TEXT \"",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "neon-gold",
									children: "JOIN"
								}),
								"\" TO 833-366-8785"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-bone/75 mb-6",
							children: "Early drops on parties, surprise specials, last-minute DJ news. No spam."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "sms:8333668785?body=JOIN",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTAButton, {
								variant: "gold",
								size: "lg",
								children: "Tap to Join"
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl border border-white/10 bg-[var(--panel)] p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-script text-3xl text-[var(--gold)] mb-2",
							children: "follow the chaos"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "font-display text-4xl mb-6",
							children: [
								"We're ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "neon-red",
									children: "online"
								}),
								" too"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "https://instagram.com/hailmaryssportsbar",
									target: "_blank",
									rel: "noopener",
									className: "flex items-center gap-3 px-4 py-3 rounded-xl border border-white/10 hover:border-[var(--blitz)] transition",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-5 w-5 text-[var(--blitz)]" }),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-display tracking-wider",
											children: "@hailmaryssportsbar"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "https://facebook.com/HailMarysSportsbar",
									target: "_blank",
									rel: "noopener",
									className: "flex items-center gap-3 px-4 py-3 rounded-xl border border-white/10 hover:border-[var(--blitz)] transition",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { className: "h-5 w-5 text-[var(--blitz)]" }),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-display tracking-wider",
											children: "HailMarysSportsbar"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "https://tiktok.com/@hailmaryssportsbar",
									target: "_blank",
									rel: "noopener",
									className: "flex items-center gap-3 px-4 py-3 rounded-xl border border-white/10 hover:border-[var(--blitz)] transition",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										viewBox: "0 0 24 24",
										className: "h-5 w-5 fill-[var(--blitz)]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19.6 6.7a5.7 5.7 0 0 1-3.4-1.1V15a5.5 5.5 0 1 1-4.8-5.4v2.7a2.8 2.8 0 1 0 2 2.7V2h2.6a3.6 3.6 0 0 0 3.6 3.3v1.4Z" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display tracking-wider",
										children: "@hailmaryssportsbar"
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-8 text-sm text-bone/55",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-[var(--gold)]",
								children: "We're hiring."
							}), " Friendly bartenders & barbacks who love game day. Email us."]
						})
					]
				})]
			})
		})
	] });
}
var hero_bg_default = "/assets/hero-bg-BvKKYIQr.jpg";
var neon_sign_default = "/assets/neon-sign-CuFvn4xD.png";
var hero_foreground_default = "/assets/hero-foreground-GaUByuyy.png";
var mobile_hero_default = "/assets/mobile-hero-BdeWBdkl.jpg";
function NeonParallaxHero() {
	const ref = (0, import_react.useRef)(null);
	const { scrollY } = useScroll();
	const yBg = useTransform(scrollY, [0, 800], [0, 180]);
	const ySign = useTransform(scrollY, [0, 800], [0, 80]);
	const yFg = useTransform(scrollY, [0, 800], [0, -120]);
	const opacity = useTransform(scrollY, [0, 600], [1, 0]);
	const [mouse, setMouse] = (0, import_react.useState)({
		x: 0,
		y: 0
	});
	const [isMobile, setIsMobile] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const check = () => setIsMobile(window.innerWidth < 768);
		check();
		window.addEventListener("resize", check);
		return () => window.removeEventListener("resize", check);
	}, []);
	const embers = Array.from({ length: 22 });
	if (isMobile) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative h-[100svh] w-full overflow-hidden bg-black",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: mobile_hero_default,
				alt: "Hail Mary's Sports Bar",
				className: "absolute inset-0 h-full w-full object-cover opacity-80"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 scrim-dark" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 flex flex-col items-center justify-end pb-16 text-center px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-script text-2xl text-[var(--gold)] mb-3",
						children: "welcome to"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-6xl leading-[0.9] neon-red mb-2",
						children: "HAIL MARY'S"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xl text-bone/80 mb-8",
						children: "The Best Damn Dive Bar in Glendale"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-3 w-full max-w-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/reserve",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTAButton, {
								variant: "blitz",
								size: "lg",
								className: "w-full",
								children: "Reserve Your Spot"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/events",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTAButton, {
								variant: "ghost",
								className: "w-full",
								children: "Tonight's Lineup"
							})
						})]
					})
				]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref,
		onMouseMove: (e) => {
			const r = ref.current.getBoundingClientRect();
			setMouse({
				x: (e.clientX - r.width / 2) / r.width,
				y: (e.clientY - r.height / 2) / r.height
			});
		},
		className: "relative h-[100svh] min-h-[720px] w-full overflow-hidden bg-black",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				style: {
					y: yBg,
					x: mouse.x * -25,
					backgroundImage: `url(${hero_bg_default})`,
					opacity
				},
				className: "absolute -inset-20 bg-cover bg-center"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute inset-0 mix-blend-screen opacity-60",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-40 left-1/4 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(212,32,44,0.35),transparent_60%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-40 right-1/4 h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle,rgba(244,169,31,0.25),transparent_60%)]" })]
			}),
			embers.map((_, i) => {
				const left = i * 53 % 100;
				const dur = 8 + i % 7 * 1.5;
				const delay = i * .6 % 12;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ember",
					style: {
						left: `${left}%`,
						bottom: `-20px`,
						animationDuration: `${dur}s`,
						animationDelay: `-${delay}s`
					}
				}, i);
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
				src: neon_sign_default,
				alt: "",
				style: {
					y: ySign,
					x: mouse.x * 18,
					opacity
				},
				className: "absolute left-1/2 top-[18%] w-[78vw] max-w-[1100px] -translate-x-1/2 select-none flicker",
				draggable: false
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				style: { opacity },
				className: "absolute inset-x-0 top-[52%] -translate-y-1/2 wrap text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 30
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							delay: .4,
							duration: .8
						},
						className: "font-script text-3xl md:text-4xl text-[var(--gold)] mb-2",
						children: "Glendale, Arizona — open 11AM to 2AM"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						transition: {
							delay: .6,
							staggerChildren: .05
						},
						className: "font-display text-[12vw] md:text-[9vw] leading-[0.85] neon-red",
						children: [
							"THE BEST DAMN".split("").map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
								initial: {
									opacity: 0,
									y: 50
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									delay: .6 + i * .03,
									duration: .5
								},
								className: "inline-block",
								children: c === " " ? "\xA0" : c
							}, i)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "neon-gold",
								children: "DIVE BAR IN TOWN"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 30
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							delay: 1.4,
							duration: .8
						},
						className: "mt-10 flex flex-wrap justify-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/reserve",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTAButton, {
								variant: "blitz",
								size: "lg",
								children: "Reserve Your Spot"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/events",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTAButton, {
								variant: "ghost",
								size: "lg",
								children: "See Tonight's Lineup"
							})
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
				src: hero_foreground_default,
				alt: "",
				style: {
					y: yFg,
					x: mouse.x * 40,
					opacity
				},
				className: "absolute -bottom-12 right-[5%] w-[44vw] max-w-[640px] select-none pointer-events-none drop-shadow-[0_30px_60px_rgba(212,32,44,0.4)]",
				draggable: false
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				animate: { y: [
					0,
					8,
					0
				] },
				transition: {
					repeat: Infinity,
					duration: 1.8
				},
				className: "absolute bottom-6 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.4em] text-bone/60",
				children: "scroll ▾"
			})
		]
	});
}
function CountUp({ to, suffix = "", decimals = 0, duration = 1.8 }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		amount: .5
	});
	const mv = useMotionValue(0);
	const rounded = useTransform(mv, (v) => decimals ? v.toFixed(decimals) : Math.floor(v).toLocaleString());
	(0, import_react.useEffect)(() => {
		if (inView) return animate(mv, to, {
			duration,
			ease: [
				.22,
				1,
				.36,
				1
			]
		}).stop;
	}, [
		inView,
		mv,
		to,
		duration
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		className: "tabular-nums",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, { children: rounded }), suffix]
	});
}
var Route = createFileRoute("/")({
	head: () => createSeo({
		title: "Hail Mary's Sports Bar — Glendale's Best Damn Dive Bar",
		description: "Glendale sports and dive bar with NFL watch parties, karaoke, live music, bingo, poker, billiards, strong drinks, and a late-night patio."
	}),
	component: Home
});
var GAMES = [
	{
		title: "Billiards",
		img: billiards_default,
		copy: "Tuesdays = tournament. Every other night = your turn at the table."
	},
	{
		title: "Karaoke",
		img: karaoke_default,
		copy: "Thursdays after 9PM. Bring a song. Leave with a story."
	},
	{
		title: "Bingo",
		img: bingo_default,
		copy: "Mondays at 7:30. Cash prizes. Salty callers. Loud reactions."
	},
	{
		title: "Poker",
		img: poker_default,
		copy: "Friday nights, 8PM. Buy in, sit down, send it."
	}
];
var HIGHLIGHTS = [
	{
		name: "Hail Mary's House Punch",
		price: "$10",
		desc: "Our secret-recipe punch. Smooth, dangerous, legendary.",
		img: cocktail_default,
		h: true
	},
	{
		name: "HennyRita",
		price: "$12",
		desc: "Hennessy margarita. Don't argue.",
		img: margaritas_default
	},
	{
		name: "Lemon Drop",
		price: "$6",
		desc: "Sweet, sour, and goes down too easy.",
		img: cocktail_default
	},
	{
		name: "Mexican Candy",
		price: "$10",
		desc: "Tequila, watermelon, chamoy. Spicy-sweet.",
		img: margaritas_default
	},
	{
		name: "Casamigos Margarita",
		price: "$10",
		desc: "Top-shelf tequila, fresh lime. Classic.",
		img: margaritas_default
	},
	{
		name: "Blue MF",
		price: "$10",
		desc: "Blue, electric, irresponsible. You've been warned.",
		img: cocktail_default
	}
];
var REVIEWS = [
	{
		name: "Marisol G.",
		quote: "Best dive in the West Valley. Karaoke nights are unhinged in the best way.",
		stars: 5
	},
	{
		name: "Tony R.",
		quote: "Cardinals games here = pure chaos. Wouldn't watch anywhere else.",
		stars: 5
	},
	{
		name: "Dee K.",
		quote: "Strong pours, friendly staff, patio is unmatched. My new spot.",
		stars: 5
	},
	{
		name: "Brandon P.",
		quote: "Won bingo Monday. Drank for free Friday. 10/10 establishment.",
		stars: 5
	},
	{
		name: "Sophie L.",
		quote: "House Punch hits different. Bingo cards in one hand, drink in the other.",
		stars: 4
	}
];
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NeonParallaxHero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarqueeTicker, { items: [
			"TONIGHT AT HAIL MARY'S",
			"BINGO MON 7:30",
			"KARAOKE THU 9PM",
			"POKER FRI 8PM",
			"LATIN NIGHT SAT",
			"NFL SUNDAY ALL DAY",
			"HAPPY HOUR ALL DAY SUNDAY"
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "wrap py-24 md:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-[1.2fr_1fr] items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionReveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-script text-3xl text-[var(--gold)] mb-3",
						children: "since day one"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-5xl md:text-7xl leading-[0.95] mb-6",
						children: [
							"We're not ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "neon-red",
								children: "trying"
							}),
							" to be",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"a ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "neon-gold",
								children: "sports bar"
							}),
							". We are one."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-bone/75 text-lg max-w-xl mb-8",
						children: "Every TV. Every game. Sundays for the Cards, Mondays for bingo, Thursdays for ladies night, Saturdays for tequila. Hookah on the patio till close. The pours are loud, the crowd is louder, and you're always welcome at the bar."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/reserve",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTAButton, {
								variant: "blitz",
								size: "lg",
								children: "Reserve Your Spot"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/menu",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTAButton, {
								variant: "ghost",
								size: "lg",
								children: "See the Menu"
							})
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Stagger, {
					className: "grid grid-cols-2 gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StaggerItem, {
							className: "rounded-2xl border border-white/10 bg-[var(--panel)] p-6 col-span-2 glow-red",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center gap-1 text-[var(--gold)] mb-2",
									children: [...Array(5)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-5 w-5 fill-current" }, i))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "font-display text-6xl",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountUp, {
										to: 4.5,
										decimals: 1
									}), "★"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-bone/60 mt-1",
									children: "Google rating · 28 reviews & climbing"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StaggerItem, {
							className: "rounded-2xl border border-white/10 bg-[var(--panel)] p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-5xl neon-gold",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountUp, {
									to: 1100,
									suffix: "+"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-bone/60 mt-1 text-sm",
								children: "Facebook fans"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StaggerItem, {
							className: "rounded-2xl border border-white/10 bg-[var(--panel)] p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-5xl neon-red",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountUp, { to: 7 })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-bone/60 mt-1 text-sm",
								children: "Nights a week"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StaggerItem, {
							className: "rounded-2xl border border-white/10 bg-[var(--panel)] p-6 col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-5xl",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountUp, {
									to: 15,
									suffix: " HRS"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-bone/60 mt-1 text-sm",
								children: "Daily: 11AM → 2AM"
							})]
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden py-24 border-y border-white/5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: gameday_crowd_default,
					alt: "",
					className: "absolute inset-0 h-full w-full object-cover opacity-25",
					loading: "lazy"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "wrap relative grid gap-8 lg:grid-cols-[1.2fr_1fr] items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionReveal, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-script text-3xl text-[var(--gold)] mb-3",
							children: "sundays in glendale"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-5xl md:text-7xl leading-[0.95] mb-6",
							children: [
								"CARDINALS",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "neon-red",
									children: "WATCH PARTIES"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-bone/80 text-lg max-w-xl mb-8",
							children: "Every Sunday we turn into the loudest red-and-white room in the valley. NFL Sunday Ticket on every screen, happy hour all day, touchdown shots, and a section of booths reserved for the diehards. Cards score? You drink."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/game-day",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTAButton, {
									variant: "blitz",
									size: "lg",
									children: "Game Day Details"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/reserve",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTAButton, {
									variant: "gold",
									children: "Reserve a Booth"
								})
							})]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionReveal, {
						delay: .2,
						className: "hidden lg:block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-[4/5] rounded-3xl overflow-hidden border border-white/10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: bar_tvs_default,
								alt: "Wall of TVs at Hail Mary's",
								loading: "lazy",
								className: "h-full w-full object-cover"
							})
						})
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "wrap py-24 md:py-32",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionReveal, {
				className: "mb-12 flex flex-wrap items-end justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-script text-3xl text-[var(--gold)] mb-2",
					children: "7 nights, 7 reasons"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-5xl md:text-7xl leading-[0.95]",
					children: ["This week's ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "neon-red",
						children: "lineup"
					})]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/events",
					className: "font-display tracking-widest text-sm text-bone/80 hover:text-[var(--gold)]",
					children: "SEE ALL EVENTS →"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Carousel, { children: WEEKLY_EVENTS.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventCard, { event: e }, i)) })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "wrap py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionReveal, {
				className: "mb-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-script text-3xl text-[var(--gold)] mb-2",
					children: "bar games on tap"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-5xl md:text-7xl leading-[0.95]",
					children: ["Pick your ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "neon-gold",
						children: "poison"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
				className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
				children: GAMES.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaggerItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: g.img,
							alt: g.title,
							loading: "lazy",
							className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute bottom-0 left-0 right-0 p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-3xl neon-red mb-2",
								children: g.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-bone/80",
								children: g.copy
							})]
						})
					]
				}) }, g.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "wrap py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionReveal, {
				className: "mb-12 flex flex-wrap items-end justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-script text-3xl text-[var(--gold)] mb-2",
					children: "strong pours, sharp prices"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-5xl md:text-7xl leading-[0.95]",
					children: ["Featured ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "neon-red",
						children: "cocktails"
					})]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/menu",
					className: "font-display tracking-widest text-sm text-bone/80 hover:text-[var(--gold)]",
					children: "FULL MENU →"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Carousel, {
				slideClassName: "min-w-0 flex-[0_0_80%] sm:flex-[0_0_45%] lg:flex-[0_0_30%]",
				children: HIGHLIGHTS.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "group rounded-2xl overflow-hidden border border-white/10 bg-[var(--panel)] h-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-[4/5] overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: h.img,
							alt: h.name,
							loading: "lazy",
							className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline justify-between gap-3 mb-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl",
								children: h.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `font-display text-2xl ${h.h ? "neon-gold" : "text-[var(--gold)]"}`,
								children: h.price
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-bone/70",
							children: h.desc
						})]
					})]
				}, h.name))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "py-24 border-y border-white/5 bg-black",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "wrap mb-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionReveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-script text-3xl text-[var(--gold)] mb-2",
					children: "the vibe"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-5xl md:text-7xl leading-[0.95]",
					children: ["Inside ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "neon-red",
						children: "Hail Mary's"
					})]
				})] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Carousel, {
					slideClassName: "min-w-0 flex-[0_0_85%] md:flex-[0_0_55%] lg:flex-[0_0_40%]",
					children: [
						patio_default,
						karaoke_default,
						billiards_default,
						gameday_crowd_default,
						live_band_default,
						latin_night_default,
						whiskey_default
					].map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-[4/5] overflow-hidden rounded-2xl border border-white/10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: img,
							alt: "",
							loading: "lazy",
							className: "h-full w-full object-cover"
						})
					}, i))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 text-right",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/gallery",
						className: "font-display tracking-widest text-sm text-bone/80 hover:text-[var(--gold)]",
						children: "FULL GALLERY →"
					})
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "wrap py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionReveal, {
				className: "mb-12 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-script text-3xl text-[var(--gold)] mb-2",
					children: "they're talking"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-5xl md:text-7xl leading-[0.95]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "neon-gold",
						children: "4.5★"
					}), " from the locals"]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Carousel, {
				slideClassName: "min-w-0 flex-[0_0_85%] md:flex-[0_0_45%]",
				children: REVIEWS.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
					className: "h-full rounded-2xl border border-white/10 bg-[var(--panel)] p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-1 text-[var(--gold)] mb-4",
							children: [...Array(r.stars)].map((_, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-current" }, j))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-2xl leading-snug mb-4",
							children: [
								"\"",
								r.quote,
								"\""
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
							className: "text-bone/60 text-sm",
							children: ["— ", r.name]
						})
					]
				}, i))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "wrap py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 lg:grid-cols-[1.2fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionReveal, {
					className: "rounded-3xl border border-white/10 overflow-hidden bg-[var(--panel)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						title: "Hail Mary's Map",
						src: "https://www.google.com/maps?q=5114+W+Camelback+Rd,+Glendale,+AZ+85301&output=embed",
						className: "w-full h-[420px] grayscale-[40%] contrast-110",
						loading: "lazy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6 grid sm:grid-cols-3 gap-4 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-[var(--blitz)] shrink-0 mt-0.5" }),
									" 5114 W Camelback Rd",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Glendale, AZ 85301"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-4 w-4 text-[var(--blitz)] shrink-0 mt-0.5" }), " Daily 11AM – 2AM"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-[var(--blitz)] shrink-0 mt-0.5" }), " +1 623-934-1780"]
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionReveal, {
					delay: .2,
					className: "rounded-3xl border border-[var(--gold)]/30 bg-gradient-to-br from-[var(--gold)]/10 to-transparent p-8 flex flex-col justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "h-10 w-10 text-[var(--gold)] mb-4" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-script text-3xl text-[var(--gold)] mb-2",
							children: "the inside line"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "font-display text-4xl md:text-5xl leading-tight mb-4",
							children: [
								"TEXT ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "neon-gold",
									children: "\"JOIN\""
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"TO 833-366-8785"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-bone/75 mb-8",
							children: "Be first to know drink specials, surprise DJ nights, and Cardinals tailgate plans. No spam. We text when it counts."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "sms:8333668785?body=JOIN",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTAButton, {
							variant: "gold",
							size: "lg",
							className: "w-full",
							children: "Tap to Text JOIN"
						})
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden border-y border-[var(--blitz)]/30 py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,32,44,0.25),transparent_60%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "wrap relative text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionReveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-script text-3xl text-[var(--gold)] mb-3",
						children: "your booth is waiting"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-6xl md:text-8xl leading-[0.9] mb-8",
						children: [
							"SEE YOU AT",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "neon-red",
								children: "HAIL MARY'S"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap justify-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/reserve",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTAButton, {
								variant: "blitz",
								size: "lg",
								children: "Reserve Now"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "tel:+16239341780",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTAButton, {
								variant: "ghost",
								size: "lg",
								children: "Call (623) 934-1780"
							})
						})]
					})
				] })
			})]
		})
	] });
}
var SitemapDotxmlRoute = Route$7.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$8
});
var ReserveRoute = Route$6.update({
	id: "/reserve",
	path: "/reserve",
	getParentRoute: () => Route$8
});
var MenuRoute = Route$5.update({
	id: "/menu",
	path: "/menu",
	getParentRoute: () => Route$8
});
var GameDayRoute = Route$4.update({
	id: "/game-day",
	path: "/game-day",
	getParentRoute: () => Route$8
});
var GalleryRoute = Route$3.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => Route$8
});
var EventsRoute = Route$2.update({
	id: "/events",
	path: "/events",
	getParentRoute: () => Route$8
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$8
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$8
	}),
	AboutRoute,
	EventsRoute,
	GalleryRoute,
	GameDayRoute,
	MenuRoute,
	ReserveRoute,
	SitemapDotxmlRoute
};
var routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
