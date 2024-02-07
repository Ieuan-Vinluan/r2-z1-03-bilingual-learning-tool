import React, { useState } from "react";
import "./css/App.css";
import HomeScreen from "./HomeScreen";
import LessonPage from "./LessonPage";
import StandardHeader from "./StandardHeader";
import Checkbox from "./Checkbox";
import Latex from "react-latex-next";
import "katex/dist/katex.min.css";
import LessonSection from "./LessonSection";

function App() {
	const [curScreen, setCurScreen] = useState("home");
	const [canProceed, setCanProceed] = useState(false);
	const [finishedTasks, setFinishedTasks] = useState({
		0: false,
		1: false,
		2: false,
		3: false,
	});
	const taskDone = (task) => {
		finishedTasks[task] = !finishedTasks[task];
		setCanProceed(allDone());
		console.log(finishedTasks);
	};
	const allDone = () => {
		let ok = 1;
		for (let task in finishedTasks) {
			ok &= finishedTasks[task];
		}
		return ok;
	};

	function goTo() {
		if (curScreen == "home") {
			document.title = "Homepage";
			return <HomeScreen setCurScreen={setCurScreen} />;
		} else if (curScreen == "lesson1") {
			document.title = "Lesson 1";
			return (
				<LessonPage setCurScreen={setCurScreen}>
					<LessonSection>
						<h1>Lesson 1: Uniformly Accelerated Motion</h1>
						<h2>Pagpapakilala</h2> <br />
						<p>
							Bago tayo nagsimula, panoorin muna natin ang short
							video na ito.
						</p>
						<div className="iframe-container">
							<iframe
								width="560"
								height="315"
								src="https://www.youtube.com/embed/UWMBj-uD37Y?si=sY2E-kF_TCoN-7Nr"
								title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowFullScreen
							></iframe>
						</div>
						<p>
							Sa short video na ito, makikita natin ang pagbagsak
							ng dahon sa tubig. Ano ang mapapansin niyo sa
							pagbagsak ng dahon? At sa tingin niyo, bakit ganoon
							ang pagbagsak ng dahon? <br />
							<br /> Sa ating mundo, araw-araw tayong nakakakita
							ng motion sa mga tao at bagay sa ating paligid.
							Pwede itong maging mabilis, mabagal, nakahinto,
							pabilis ng pabilis, at iba pa. So to differentiate
							and describe motion? Siyempre, gagamit tayo ng
							Physics.
						</p>
						<br />
					</LessonSection>
					<LessonSection>
						<p>
							Pindutin ang{" "}
							<a
								className="hyperlink"
								href="https://phet.colorado.edu/sims/cheerpj/moving-man/latest/moving-man.html?simulation=moving-man"
							>
								link
							</a>{" "}
							na ito o gamitin ang PHET simulation sa ibaba para
							pagalawin ang tao.
						</p>
						<div className="iframe-container">
							<iframe
								width="800"
								height="600"
								src="https://phet.colorado.edu/sims/cheerpj/moving-man/latest/moving-man.html?simulation=moving-man"
								frameBorder="0"
							></iframe>
						</div>
						<p>Gawin ang sumusunod:</p>
						<ul className="task-list">
							<li>
								<Checkbox
									task={0}
									taskDone={taskDone}
									finishedTasks={finishedTasks}
								/>
								Panatilihin ang position ng tao sa 0 meters
							</li>
							<li>
								<Checkbox
									task={1}
									taskDone={taskDone}
									finishedTasks={finishedTasks}
								/>
								Lagyan ng 2 m/s na velocity ang tao at pindutin
								ang play button
							</li>
							<li>
								<Checkbox
									task={2}
									taskDone={taskDone}
									finishedTasks={finishedTasks}
								/>
								Ireset ang simulation at lagyan naman ng 4 m/s
								ang velocity ang tao at pindutin ang play button
							</li>
							<li>
								<Checkbox
									task={3}
									taskDone={taskDone}
									finishedTasks={finishedTasks}
								/>
								Ireset ang simulation muli at lagyan ng 1 m/s2
								ang acceleration ng tao at pindutin ang play
								button. Pansinin ang mangyayari sa velocity ng
								tao
							</li>
						</ul>
					</LessonSection>
					{/* so users cannot access the rest of the page without doing the tasks */}

					{canProceed ? (
						<LessonSection>
							<p className="greenText">Maaari nang magpatuloy!</p>
							<br />
							<p>
								Pagkatapos ito gawin, sagutin ang mga sumusunod
								na tanong:
							</p>
							<ol>
								<li>
									Ilang meters ang kailangan lakarin ng tao
									para pumunta sa kanang pader galing sa 0
									meters?
								</li>
								<li>
									Ano ang mapapansin natin na magkaiba sa 2
									m/s at 4 m/s na velocity ng tao?
								</li>
								<li>
									Ano ang nangyayari sa velocity ng tao kapag
									may acceleration?
								</li>
							</ol>
							<br />
							<p>
								Ang paggalaw o motion ng tao sa simulation ay
								may kinalaman sa isang branch ng Physics na
								tinatawag na mechanics. Sa ilalim ng mechanics
								ay may dalawang bahagi, kinematics at dynamics.
								Pero para sa lesson na ito, magpopokus tayo sa
								kinematics.
							</p>
							<br />
							<h2>Kinematics</h2>
							<br />
							<div className="box">
								<p>
									Ang kinematics ay isang parte ng mechanics
									na nagpapaliwanag sa paggalaw ng mga bagay,
									without considering the forces acting upon
									it.
								</p>
							</div>
							<br />
							<h3>Position</h3>
							<br />
							<p>
								Sa pagpapaliwanag ng paggalaw o motion,
								kailangan din natin ipakita ang position ng
								isang bagay. Gawin nating halimbawa ang
								simulation na ating ginagamit kanina, makikita
								natin na nag-iba ang position ng tao kapag siya
								ay naglalakad from one position to another.
							</p>
							<br />
							<p>
								Ang lahat ng linakad ng tao from their original
								position para makarating sa kanyang final
								position ay tinatawag na distance. Ito ay isang
								scalar unit, kaya ito ay may magnitude (na
								laging positive) lamang. Ang magnitude ng
								distance ay ang kabuuang haba ng daan na tinahak
								ng isang bagay.
							</p>
							<br />
							<p>
								Pero kapag hinahanap lang natin ay ang
								difference ng original position at final
								position ng tao, ito ay tinatawag natin na
								displacement. Ito ay isang vector unit, kaya ito
								ay may parehong magnitude at direction. Ang
								magnitude ng displacement ay ang pinakamaikling
								distance from the original position to the final
								position of an object, habang ang direction
								naman ay nakaturo mula sa initial position
								towards the final position. Para sa
								one-dimensional motion:
							</p>
							<br />
							<div className="box">
								<Latex>{"$\\Delta x = x_{f} - x_{0}$"}</Latex>
							</div>
							<p className="center-horizontal">
								<Latex>{"$\\Delta x$"}</Latex> - displacement,{" "}
								<Latex>{"$x_{f}$"}</Latex> - final position,{" "}
								<Latex>{"$x_{0}$"}</Latex> - initial position
							</p>
							<br />
							<p>
								Sa simulation, ang kanan o east direction ay
								positive sign. Kaya nung naglakad yun tao sa
								papunta sa kanan na pader, ang sign ng kanyang
								displacement vector ay positive. Pero kung
								naglakad siya papunta sa kaliwang pader, ang
								sign ng kanyang displacement vector ay negative.
							</p>
							<br />
							<p>
								Dahil ang displacement ang pinakamaikling
								distance ng initial at final positions ng isang
								bagay, ito ay isang straight line lamang habang
								ang distance naman ay nakadepende sa dadaanan ng
								isang bagay at hindi ito palagi sang straight
								line. Ang SI unit para sa distance at
								displacement ay meters (m).
							</p>
							<br />
							<p>VIDEO HERE</p>
							<br />
							<h3>Velocity</h3>
							<br />
							<p>
								Sa simulation. Kapag naglalakad yun tao papunta
								sa pader, paano natin malalaman kung gaano siya
								kabilis naglalakad? Well, ito ang sinasabi sa
								atin ng speed at velocity.
							</p>
							<br />
							<p>
								May dalawang paraan para ipakita ang speed at
								velocity, pwede ito maging average or
								instantaneous. Ang average speed at velocity ay
								nagpapakita ng bilis depende sa layo ng narating
								ng isang bagay at a certain time interval.
								Habang ang instantaneous naman ay nagpapakita ng
								bilis ng isang bagay in a specific point in
								time. Para sa modyul na ito, tatalakayin lang
								natin ang average speed at velocity.
							</p>
							<br />
							<p>
								Ang average speed ay isang scalar unit na
								nagpapakita ng bilis ng isang bagay base sa
								dinaanan ng isang bagay from its initial
								position to its final position at a certain time
								interval. Ito ay palaging may positive na value.
							</p>
							<br />
							<p>Dahil dito, ang equation ng speed ay:</p>
							<br />
							<div className="box">
								<Latex>{"$v = \\dfrac{d}{t}$"}</Latex>
							</div>
							<p className="center-horizontal">
								<Latex>{"$v$"}</Latex> - speed,{" "}
								<Latex>{"$d$"}</Latex> - distance,{" "}
								<Latex>{"$t$"}</Latex> - time
							</p>
							<br />
							<p>
								Ang average velocity naman ay isang vectory
								unit. Di tulad ng speed, ang average velocity ay
								nagpapakita lamang ng bilis ng isang bagay base
								sa displacement ng isang bagay at a certain time
								interval. Ito ang "bilis" ng pagbago ng posisyon
								ng bagay at hindi ang bilis ng pagtakbo nito.
								Ang value ng velocity ay maaaring maging
								positive o negative, depende sa direction ng
								displacement.
							</p>
							<br />
							<p>Dahil dito, ang equation ng velocity ay:</p>
							<div className="box">
								<Latex>
									{
										"$\\vec{v} = \\dfrac{\\vec{\\Delta x}}{t}$"
									}
								</Latex>
							</div>
							<p className="center-horizontal">
								<Latex>{"$\\vec{v}$"}</Latex> - velocity,{" "}
								<Latex>{"$\\vec{\\Delta x}$"}</Latex> -
								displacement, <Latex>{"$t$"}</Latex> - time
							</p>
							<br />
							<p>
								Ang speed at velocity ay parehas nagsasabi kung
								gaano kabilis ang tao o bagay at nagkaiba lamang
								sa pagkakaroon ng direction. Ang SI unit para sa
								distance at displacement ay meters per second
								(m/s).
							</p>
							<br />
							<p>VIDEO HERE</p>
							<br />
							<h3>Acceleration</h3>
							<br />
							<p>
								Sa simulation, alam na natin ang bilis ng
								paglalakad ng tao. Pero, hindi naman laging
								pare-pareho ang bilis ng tao sa iba’t ibang
								oras. Minsan ito’y bumibilis, bumabagal, o
								nakahinto. Ang pagbilis o pagbagal ng tao ay
								tinatawag natin na acceleration.
							</p>
							<br />
							<p>
								Ang acceleration ay isang vector unit, at ito ay
								nangyayari kapag may pagbabago sa velocity. Ang
								direction ng acceleration ay nakadepende sa
								dalawang bagay: ang direction ng velocity at
								kung ang acceleration ay accelerating or
								decelerating. Ang value ng velocity ay maaaring
								maging positive o negative, depende sa direction
								nito.
							</p>
							<div>
								<p>Accelerating</p>
								<p>Decelerating</p>
								<ul>
									<li>Ang bagay ay bumibilis</li>
									<li>
										Ang direction ng acceleration ay parehas
										sa direction ng velocity
									</li>
								</ul>
								<ul>
									<li>Ang bagay ay bumabagal</li>
									<li>
										Ang direction ng acceleration object ay
										opposite sa direction ng velocity
									</li>
								</ul>
							</div>
							<br />
							<p>
								Ang pagbabago ng velocity kada unit of time ay
								ang tinatawag na average acceleration.
								Samakatuwid, ang equation ng average
								acceleration ay:
							</p>
							<div className="box">
								<Latex>
									{
										"$\\vec{a} = \\dfrac{\\Delta \\vec{v}}{\\Delta t} = \\dfrac{\\vec{v} - \\vec{v_0}}{\\Delta t}$"
									}
								</Latex>
							</div>
							<p className="center-horizontal">
								<Latex>{"$\\vec{a}$"}</Latex> - acceleration,{" "}
								<Latex>{"$\\vec{v}$"}</Latex> - final velocity,{" "}
								<Latex>{"$\\vec{v_0}$"}</Latex> - initial
								velocity, <Latex>{"$\\Delta t$"}</Latex> - time
							</p>
							<br />
							<p>VIDEO HERE</p>
						</LessonSection>
					) : (
						<p className="redText">
							Gawin muna ang LAHAT ng mga task.
						</p>
					)}
				</LessonPage>
			);
		} else if (curScreen == "lesson2") {
			document.title = "Lesson 2";
			return (
				<LessonPage setCurScreen={setCurScreen}>
					<h1>Lesson 2</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Sint eum fugiat laborum perspiciatis consequatur.
						Facilis quaerat distinctio placeat! Velit tempore
						laboriosam maxime sed iure tempora voluptatibus
						molestiae corporis esse nam.
					</p>
					<div className="lesson-two-equation-one">
						<Latex>{"$x = x_0 + v_0t + \\frac{1}{2} at^2$"}</Latex>
					</div>
				</LessonPage>
			);
		} else {
			document.title = "Lesson 3";
			return (
				<LessonPage setCurScreen={setCurScreen}>
					<h1>Lesson 3</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Debitis aspernatur quas neque maiores eligendi soluta
						culpa. Consequatur incidunt quidem voluptatum.
					</p>
					<Latex>{"$A_x = Acos\\theta, A_y = Asin\\theta$"}</Latex>
				</LessonPage>
			);
		}
	}

	return (
		<>
			<StandardHeader curScreen={curScreen} setCurScreen={setCurScreen} />
			{goTo()}
			{/* <StandardFooter /> */}
		</>
	);
}

{
	/* TODO add images and other media */
}
{
	/* TODO add footer */
}

export default App;
