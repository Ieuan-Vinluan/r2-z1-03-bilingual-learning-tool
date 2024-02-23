import React, { useState } from "react";
import "./css/App.css";
import HomeScreen from "./HomeScreen";
import LessonPage from "./LessonPage";
import StandardHeader from "./StandardHeader";
import Checkbox from "./Checkbox";
import Latex from "react-latex-next";
import "katex/dist/katex.min.css";
import LessonSection from "./LessonSection";
import FallGif from "./media/fall.gif";
import GravAccelDiagram from "./media/gravitational-acceleration-diagram.png";
import FreeFallDiagram from "./media/freefall-diagram.png";

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
							<ol className="indent">
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
							<div className="lesson-one-table">
								<p className="center-horizontal">
									Accelerating
								</p>
								<p className="center-horizontal">
									Decelerating
								</p>
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
		} else {
			document.title = "Lesson 3";
			return (
				<LessonPage setCurScreen={setCurScreen}>
					<LessonSection>
						<h1>Lesson 2: Free Fall</h1>
						<br />
						<p>
							Ngayon na tinalakay na natin ang kinematics in one-dimension, tatalakayin naman natin ang isang special case nito which is free fall. Sa simula ng modyul, nakita natin na nalaglag ng dahan-dahan ang dahon at yun ay isang halimbawa ng free fall. Nakikita natin ang free fall palagi araw-araw tulad ng patak ng ulan o pag nabitawan natin ang ating hawak na bagay.
						</p>
						<br />
						<img src={FallGif} alt="" className="center-horizontal-image" />
						<br />
						<p>
							Ngayon, bakit nga ba nag undergo ng free fall ang mga ito? Ito ay dahil sa isang force lamang na tinatawag natin na gravity. Ang gravity ay ang nag-iisang tanging force that acts upon the object in the free fall. Ito ang rason bakit bumabagsak lahat ng bagay at ika nga ni Newton na “what goes up must come down”. Natalakay natin sa kinematics ang motion ng mga bagay within the x-axis. Pero para sa pagtalakay natin ng free-fall, gagamitin naman natin ang y-axis at hindi natin iintindihin ang air resistance.
						</p>
						<br />
					</LessonSection>
					<LessonSection>
						<h2>Gravitational Acceleration</h2>
						<br />
						<p>
							Ang acceleration ng isang bagay dahil sa force ng gravity ay tinatawag natin na gravitational acceleration. Ang magnitude nito ay tinatawag natin na g at ito ay may value na: <Latex>{"$$g=9.8 \\dfrac{m}{s^2}$$"}</Latex> Ang magnitude na ito ay constant at hindi nakadepende sa bigat ng isang bagay na nasa free fall. Para sa direction ng gravitational acceleration, palagi itong pababa kaya’t ang sign nito ay negative.
						</p>
						<br />
						<img src={GravAccelDiagram} alt="" className="lesson-two-grav-accel center-horizontal-image" />
					</LessonSection>
					<LessonSection>
						<h2>Velocity</h2>
						<br />
						<p>
							Imagine natin na may hawak kayong bola at nabitawan niyo ito midair. Sa initial position ng bola, hindi ito gumagalaw kaya’t ang velocity nito ay zero. Nung nabitawan natin ang bola, ito ay nahuhulog hangga’t mapunta sa lapag dahil sa gravitational acceleration mula sa gravity. Dahil ang velocity at acceleration ng bola ay parehas pababa, ang velocity ng bola ay pataas ng pataas in a negative direction. Specifically, ang magnitude ng velocity ng bola ay tumataas ng <Latex>{"$9.8 \\dfrac{m}{s}$"}</Latex> every second, which is the gravitational acceleration. Kaya 'pag ang height ng bola ay mas nahulog sa mas mataas na position, mas matagal ang free fall ng bola papunta sa lapag at mas malaki ang velocity nito pag palapit na ito sa lapag.
						</p>
						<br />
						<p>
							Ngayon, paano naman kung tinapon natin ang bola vertically upward. Sa ating pagkakaalam, ang bola ay pupunta pataas hanggang kung saang height ang kaya nito marating tas ito’y bababa rin. Kapag binato na natin ang bola pataas, ito ay makakaranas ng positive initial velocity galing sa atin at ng gravitational acceleration dahil sa gravity. Dahil ang velocity ng bola ay pataas habang ang acceleration naman ng bola ay pababa, ang velocity ng bola ay onti-onting bumabagal hanggang maging zero ang velocity nito. Kapag zero na ang velocity ng bola, ito ang maximum height na maabot ng bola at magsisimula na ito bumaba. Kapag pababa na ito, ang velocity at acceleration ay magkakaroon ng parehas na direction kaya’t ito’y bibilis.
						</p>
						<br />
						<img src={FreeFallDiagram} alt="" className="lesson-two-free-fall-diagram center-horizontal-image" />
						<br />
						<p>
							Sa huli, dahil constant ang gravitational acceleration sa pagtaas at pagbaba ng bola, ang pagbagal at pagbilis ng bola midair ay parehas. Kaya pag sinalo niyo yung bola sa parehas na position kung saan niyo binato ang bola, ang velocity ng bola kapag sinalo niyo ay parehas sa velocity ng bola noong binato niyo.
						</p>
						<br />
						<h2>Displacement and Time of Flight</h2>
						<br />
						<p>
							Base sa ating mga tinalakay natin kanina, ang magiging displacement ng isang bagay ay positive kapag ito’y pataas, negative kung ito’y pababa, at zero kung bumalik sa initial position ang isang bagay tulad ng pagbato at pagsalo ng bola na ating tinalakay.
						</p>
						<br />
						<p>
							Ngayon, balikan natin ang pagbato natin ng bola pataas. Natalakay natin na tataas ang bola hanggang makarating ito sa kanyang maximum height kung kailan zero ang velocity nito. Dahil constant ang gravitational acceleration na nararanasan ng bola midair, mas mataas ang magiging maximum height ng bola at mas matagal ang oras nito para makarating sa kanyang maximum height kapag mas malaki ang initial velocity na binigay natin sa bola. Kaya’t masasabi natin na ang maximum height ng bola ay dependent sa initial velocity ng bola.
						</p>
						<br />
						<p>
							At dahil constant ang gravitational acceleration sa pagtaas at pagbaba ng bola, ang pagbagal at pagbilis ng bola midair ay parehas. Kaya pag sinalo niyo yung bola sa parehas na position kung saan niyo binato ang bola, ang oras ng pagtaas ng bola papunta sa maximum height at ang pagbaba nito galing sa maximum height ay parehas lamang.
						</p>
					</LessonSection>
					<LessonSection>
						<h2>Kinematic Equations in Free Fall</h2>
						<br />
						<p>
							Ang kinematic equations ay mga equations na nag-uugnay sa 5 kinematic variables: displacement <Latex>{"$(\\Delta x)$"}</Latex>, time interval <Latex>{"$(\\Delta t)$"}</Latex>, initial velocity <Latex>{"$(v_0)$"}</Latex>, final velocity <Latex>{"$(v_f)$"}</Latex>, at constant acceleration <Latex>{"$(a)$"}</Latex>.
						</p>
						<br />
						<p>
							Ang mga kinematic equations ay maaari nating gamitin kapag 3 sa 5 kinematic variables ay given para makahanap ng isang unknown variables at para sa free fall. Ang constant acceleration natin ay magiging equal sa gravitational acceleration or: <Latex>{"$$a = -g = -9.8 \\dfrac{m}{s^2}$$"}</Latex>
						</p>
						<br />
						<p>
							Narito ang mga equations na makukuha natin mula rito:
						</p>
						<br />
						<Latex>{"$$a = \\dfrac{v - v_0}{t} \\rightarrow -g = \\dfrac{v - v_0}{t}$$"}</Latex>
						<Latex>{"$$\\therefore v = v_0 - gt$$"}</Latex>
						<p>
							Ito ang ating equation relating final velocity, initial velocity, at time! Ngayon, alam natin na:
						</p>
						<Latex>{"$$\\Delta x = v_{\\text{average}}t$$"}</Latex>
						<p>
							Dahil constant ang ating acceleration:
						</p>
						<Latex>{"$$\\Delta x = \\dfrac{v + v_0}{2}t$$"}</Latex>
						<p>
							Ngayon, dahil <Latex>{"$v = v_0 - gt$"}</Latex>:
						</p>
						<Latex>{"$$\\Delta x = \\dfrac{v_0 - gt + v_0}{2}t = v_0t - \\dfrac{1}{2}gt^2$$"}</Latex>
						<p>
							Balikan natin ang equation na <Latex>{"$v = v_0 - gt$"}</Latex>. Squaring both sides:
						</p>
						<Latex>{"$$v^2 = (v_0 - gt)^2 = v_0^2 - 2v_0gt + g^2t^2 = v_0^2 - 2g(v_0t - \\dfrac{1}{2}gt^2)$$"}</Latex>
						<p>
							Kaya nating isubstitute ang equation na <Latex>{"$\\Delta x = v_0t - \\dfrac{1}{2}gt^2$"}</Latex> dito para makuha ang sumusunod:
						</p>
						<Latex>{"$$v^2 = v_0^2 - 2g\\Delta x$$"}</Latex>
					</LessonSection>
					<LessonSection>
						<h2>Summary of Equations</h2>
						<br />
						<p>
							Sa kabuua, ang mga equations natin sa free fall ay ang mga sumusunod:
						</p>
						<br />
						<div className="lesson-two-equations">
							<Latex>{"$$v = v_0 - gt$$"}</Latex>
							<Latex>{"$$\\Delta x = \\dfrac{(v + v_0)t}{2}$$"}</Latex>
							<Latex>{"$$\\Delta x = v_0t - \\dfrac{1}{2}gt^2$$"}</Latex>
							<Latex>{"$$v^2 = v_0^2 - 2g\\Delta x$$"}</Latex>
						</div>
						<br />
						<p>
							Tandaan na ang mga kinematic equations na ito ay gagana lamang sa one-dimension. Para sa tinalakay natin, ginagamit natin ang y-axis.
						</p>
					</LessonSection>
				</LessonPage>
			);
		}
		// } else {
		// 	document.title = "Lesson 3";
		// 	return (
		// 		<LessonPage setCurScreen={setCurScreen}>
		// 			<h1>Lesson 3</h1>
		// 			<p>
		// 				Lorem ipsum dolor sit amet consectetur adipisicing elit.
		// 				Debitis aspernatur quas neque maiores eligendi soluta
		// 				culpa. Consequatur incidunt quidem voluptatum.
		// 			</p>
		// 			<Latex>{"$A_x = Acos\\theta, A_y = Asin\\theta$"}</Latex>
		// 		</LessonPage>
		// 	);
		// }
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
