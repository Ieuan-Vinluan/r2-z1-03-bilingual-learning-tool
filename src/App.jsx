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
import Flashcard from "./Flashcard";
import PracticeProblem from "./PracticeProblem";


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
				<LessonPage setCurScreen={setCurScreen} id={0}>
					<LessonSection>
						<h1>Lesson 1: Uniformly Accelerated Motion</h1>
						<br />
						<p>
							Bago tayo nagsimula, panoorin muna natin ang short
							video na ito.
						</p>
						<div className="iframe-container">
							<iframe
								width="560"
								height="315"
								src="https://www.youtube.com/embed/UWMBj-uD37Y?si=sY2E-kF_TCoN-7Nr&autoplay=1"
								title="YouTube video player"
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
								<p>
									Panatilihin ang position ng tao sa <Latex>{"$0 \\, m$"}</Latex>
								</p>
							</li>
							<li>
								<Checkbox
									task={1}
									taskDone={taskDone}
									finishedTasks={finishedTasks}
								/>
								<p>
									Lagyan ng <Latex>{"$2 \\, m/s$"}</Latex> na velocity ang tao at pindutin
									ang play button
								</p>
							</li>
							<li>
								<Checkbox
									task={2}
									taskDone={taskDone}
									finishedTasks={finishedTasks}
								/>
								<p>
									Ireset ang simulation at lagyan naman ng <Latex>{"$4 \\, m/s$"}</Latex>
									ang velocity ang tao at pindutin ang play button
								</p>
							</li>
							<li>
								<Checkbox
									task={3}
									taskDone={taskDone}
									finishedTasks={finishedTasks}
								/>
								<p>
									Ireset ang simulation muli at lagyan ng <Latex>{"$1 \\, m/s^2$"}</Latex>
									ang acceleration ng tao at pindutin ang play
									button. Pansinin ang mangyayari sa velocity ng
									tao
								</p>
							</li>
						</ul>
					</LessonSection>
					{/* so users cannot access the rest of the page without doing the tasks */}


					{canProceed ? (
						<LessonSection>
							<p className="greenText">Maaari nang magpatuloy!</p> <br />
							<p>Heto ang iyong ginawa kanina.</p>
							<img src="../src/media/simulation-ss.png" className="simulation-ss" alt="" />
							<br />
							<p>
								Sagutin ang mga sumusunod
								na tanong:
							</p>
							<ol className="indent">
								<li>
									Ilang meters ang kailangan lakarin ng tao
									para pumunta sa kanang pader galing sa <Latex>{"$0 \\, m$"}</Latex> ?
								</li>
								<li>
									Ano ang mapapansin natin na magkaiba sa <Latex>{"$2 \\, m/s$"}</Latex> at <Latex>{"$4 \\, m/s$"}</Latex> na velocity ng tao?
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
								<h3>Definition of Kinematics</h3>
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
							<Flashcard
								cardTitle="Example One"
								current={0}
								answer={<Latex>{"$3 \\, m$"}</Latex>}
								problem={
									<div>
										Kung naglakad si Aydan nang <Latex>{"$2 \\, m$"}</Latex> papunta sa east, at pagkatapos nito ay naglakad pa siya nang karagdagang <Latex>{"$1 \\, m$"}</Latex> papunta sa east, ano ang distance na kanyang linakad? Ibigay ang iyong sagot sa meters.
									</div>
								}
								solution={
									<div>
										<p>Ang distansya na linakad ni Aydan ay <Latex>{"$3 \\, m$"}</Latex> dahil <Latex>{"$2 \\, m + 1 \\, m = 3 \\, m$"}</Latex>.</p>
										<img src="./src/media/lesson-one-flashcard-one-crop.gif" className="lesson-one-gif-one" alt="" />
									</div>
								}
							/>
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
								<h3>Displacement Formula</h3>
								<p className="center-horizontal">
									<Latex>{"$\\Delta x = x_{f} - x_{0}$"}</Latex>, where:
									<Latex>{"$\\, \\Delta x$"}</Latex> - displacement,{" "}
									<Latex>{"$x_{f}$"}</Latex> - final position,{" "}
									<Latex>{"$x_{0}$"}</Latex> - initial position
								</p>
							</div>
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
							<Flashcard
								cardTitle={"Example Two"}
								answer={<Latex>{"$2 \\, m$ east"}</Latex>}
								current={0}
								problem={
									<div>
										Si Aydan ay naglakad ng <Latex>{"$4 \\, m$"}</Latex> to the east, tapos naglakad ng <Latex>{"$2 \\, m$"}</Latex> to the west. Ano ang kanyang displacement?
									</div>
								}
								solution={
									<div className="flashcard-two-solution">
										<img src="./src/media/lesson-one-flashcard-two-1-crop.gif" alt="" />
										<p>Ang unang distansya na linakad ni Aydan ay <Latex>{"$4 \\, m$"}</Latex> to the east.</p>
										<img src="./src/media/lesson-one-flashcard-two-2-crop.gif" alt="" />
										<p>Ang unang distansya na linakad ni Aydan ay <Latex>{"$3 \\, m$"}</Latex> to the west.</p>
										<img src="./src/media/lesson-one-flashcard-two-3.png" alt="" />
										<p>Kung titignan lamang ang final position ni Aydan, siya ay gumalaw lamang ng <Latex>{"$2 \\, m$"}</Latex> to the east.</p>
									</div>
								}
							/>
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
								<h3>Speed Formula</h3>
								<p className="center-horizontal">
									<Latex>{"$v = \\dfrac{d}{t}$"}</Latex>, where
									<Latex>{"$\\,v$"}</Latex> - speed,{" "}
									<Latex>{"$d$"}</Latex> - distance,{" "}
									<Latex>{"$t$"}</Latex> - time
								</p>
							</div>
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
								<h3>Velocity Formula</h3>
								<p className="center-horizontal">
									<Latex>
										{
											"$\\vec{v} = \\dfrac{\\Delta \\vec{x}}{t}$"
										}
									</Latex>, where
									<Latex>{"$\\, \\vec{v}$"}</Latex> - velocity,{" "}
									<Latex>{"$\\vec{\\Delta x}$"}</Latex> -
									displacement, <Latex>{"$t$"}</Latex> - time
								</p>
							</div>
							<br />
							<p>
								Ang speed at velocity ay parehas nagsasabi kung
								gaano kabilis ang tao o bagay at nagkaiba lamang
								sa pagkakaroon ng direction. Ang SI unit para sa
								distance at displacement ay meters per second
								<Latex>{"$\\, (m/s)$"}</Latex>.
							</p>
							<br />
							<Flashcard
								current={0}
								cardTitle={"Example Three"}
								answer={
									<Latex>{"$0.8 m/s$ to the right"}</Latex>
								}
								problem={
									<div>
										Si Aydan ay nakatakbo ng <Latex>{"$50 \\, m$"}</Latex> to the right sa kalye pagkatapos ng <Latex>{"$10 \\, s$"}</Latex>. Tapos, tumakbo siya ng <Latex>{"$30 \\, m$"}</Latex> to the left pagkatapos ng <Latex>{"$15\\, s$"}</Latex>. Ano ang average velocity sa buong takbo niya?
									</div>
								}
								solution={
									<div className="flashcard-three-solution">
										<img src="./src/media/lesson-one-flashcard-three-1-crop.gif" alt="" />
										<p>
											Sa unang paggalaw, gumalaw si Aydan nang <Latex>{"$50 \\, m$"}</Latex> papuntang east sa loob ng <Latex>{"$10 \\, s$"}</Latex>.
										</p>
										<img src="./src/media/lesson-one-flashcard-three-2-crop.gif" alt="" />
										<p>
											Sa pangalawang paggalaw, gumalaw si Aydan ng <Latex>{"$30 \\, m$"}</Latex> papuntang west sa loob ng <Latex>{"$15 \\, s$"}</Latex>.
										</p>
										<p>
											Kunin muna ang displacement: <Latex>{"$d = 50 \\, m - 30 \\, m = 20 \\, m$"}</Latex>
										</p>
										<p>
											Pangalawa, kunin ang total time: <Latex>{"$t = 10 \\, s + 15 \\, s = 25 \\, s$"}</Latex>
										</p>
										<p>
											Ngayon, malalaman na natin ang velocity: <Latex>{"$v = \\dfrac{d}{t} = \\dfrac{20 \\, m}{25 \\, s} = 0.8 \\, \\dfrac{m}{s}$"}</Latex>
										</p>
									</div>
								}
							/>
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
								<p>Ang bagay ay bumibilis</p>
								<p>Ang bagay ay bumabagal</p>
								<p>
									Ang direction ng acceleration ay parehas
									sa direction ng velocity
								</p>
								<p>
									Ang direction ng acceleration object ay
									opposite sa direction ng velocity
								</p>
							</div>
							<br />
							<p>
								Ang pagbabago ng velocity kada unit of time ay
								ang tinatawag na average acceleration.
								Samakatuwid, ang equation ng average
								acceleration ay:
							</p>
							<div className="box">
								<h3>Acceleration Formula</h3>
								<p className="center-horizontal">
									<Latex>
										{
											"$\\vec{a} = \\dfrac{\\Delta \\vec{v}}{\\Delta t} = \\dfrac{\\vec{v} - \\vec{v_0}}{\\Delta t}$"
										}
									</Latex>, where
									<Latex>{"$\\, \\vec{a}$"}</Latex> - acceleration,{" "}
									<Latex>{"$\\vec{v}$"}</Latex> - final velocity,{" "}
									<Latex>{"$\\vec{v_0}$"}</Latex> - initial
									velocity, <Latex>{"$\\Delta t$"}</Latex> - time</p>
							</div>
							<br />
							<Flashcard
								cardTitle={"Example Four"}
								current={0}
								answer={<Latex>{"$2.67 \\, m/s^2$"}</Latex>}
								problem={
									<div>
										Si Kira ay nagpapatakbo ng kotse sa bilis ng <Latex>{"$48 \\, m/s$"}</Latex>. Pagkatapos ng <Latex>{"$12 \\, s$"}</Latex>, ang kanyang kotse ay umaandar na sa bilis ng <Latex>{"$80 \\, m/s$"}</Latex>. Ano ang average acceleration ni Kira?
									</div>
								}
								solution={
									<div>
										<p>
											Given: <Latex>{"$v_f = 80 \\, m/s, \\, v_0 = 48 \\, m/s, \\, \\Delta t = 12 \\, s$"}</Latex>
										</p>
										<p>
											Kunin muna ang change in velocity! <Latex>{"$$\\Delta v = v_f - v_0 = 80 \\, \\dfrac{m}{s} - 48 \\, \\dfrac{m}{s} = 32 \\, \\dfrac{m}{s}$$"}</Latex>
										</p>
										<p>Tapos, <Latex>{"$$a = \\dfrac{\\Delta v}{\\Delta t} = \\dfrac{32 \\, \\dfrac{m}{s}}{12 \\, s} = 2.67 \\, \\dfrac{m}{s^2}$$"}</Latex></p>
									</div>
								}
							/>
						</LessonSection>
					) : (
						<p className="redText">
							Gawin muna ang LAHAT ng mga task.
						</p>
					)}
					{canProceed ? (
						<LessonSection>
							<h2>Practice Problems!</h2>
							<br />
							<div className="prac-problems-container">
								<PracticeProblem
									current={0}
									problem={
										<div>
											Mayroong Jollibee na nakaposition ng <Latex>{"$60 \\, m$"}</Latex> galing sa bahay ni Bong. Kung kailangan niya makarating sa loob ng <Latex>{"$1 \\text{ hr}$"}</Latex> gaano kabilis dapat siya maglakad in meters per second?
										</div>
									}
									cardTitle={"Problem 1"}
									answer={<Latex>{"$0.0166 \\, m/s$"}</Latex>}
									solution={
										<div>
											<iframe className="video-center-horizontal" width="560" height="315" src="https://www.youtube.com/embed/kCpR4o05DWM?si=EIUT7h4BZ_y52Ssi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
										</div>
									}
								/>
								<PracticeProblem
									current={0}
									problem={
										<div>
											Si Ian ay nagsimula sa isang parke tapos naglalakad siya nang <Latex>{"$30 \\, m$"}</Latex> east  papunta sa supermarket, tapos siya ay naglakad nang <Latex>{"$50 \\, m$"}</Latex> north para puntahan ang paaralan, tapos naglakad siya nang <Latex>{"$30 \\, m$"}</Latex> west papunta sa kanyang bahay. Kung ginawa niya ito lahat sa loob ng <Latex>{"$22 \\text{ min}$"}</Latex>. Ano ang (1) distance, (2) displacement, (3) average speed, at (4) average velocity?
										</div>
									}
									cardTitle={"Problem 2"}
									answer={<Latex>{"$2.273 \\, m/s$"}</Latex>}
									solution={
										<div>
											<iframe className="video-center-horizontal" width="560" height="315" src="https://www.youtube.com/embed/k2sxwAGzlxc?si=0K5aUC97H13FwCTp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
										</div>
									}
								/>
								<PracticeProblem
									current={0}
									problem={
										<div>
											Si Juan ay naglalaro ng baseball, ang bola ay may velocity <Latex>{"$30 \\, m/s$"}</Latex> pagkatapon niya papunta sa kaliwa. Kung ang bola ay may deceleration na <Latex>{"$3 \\, m/s^2$"}</Latex> ilang segundo bago natigil ang paggalaw ng bola?
										</div>
									}
									cardTitle={"Problem 3"}
									answer={<Latex>{"$10 \\, s$"}</Latex>}
									solution={
										<div>
											<iframe className="video-center-horizontal" width="560" height="315" src="https://www.youtube.com/embed/lMBEwliD0fg?si=4snrVExFxd9kaolc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
										</div>
									}
								/>
								<PracticeProblem
									current={0}
									problem={
										<div>
											Mayroong pulis na bumaril sa isang target. Ang bala ay mayroong final velocity na <Latex>{"$40 \\, m/s$"}</Latex>, kung ito ay nagdedecelerate sa rate na <Latex>{"$40 \\, m/s^2$"}</Latex> ano ang position nito pagkatapos ng <Latex>{"$4 \\, s$"}</Latex>?
										</div>
									}
									cardTitle={"Problem 4"}
									answer={<Latex>{"$480 \\, m$"}</Latex>}
									solution={
										<div>
											<iframe className="video-center-horizontal" width="560" height="315" src="https://www.youtube.com/embed/cR929k_iAo0?si=674caBbkmi6kH0yF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
										</div>
									}
								/>
							</div>
						</LessonSection>
					) : (
						null
					)}
					{canProceed ? (
						<LessonSection>
							<h2>Challenge Problems!</h2>
							<br />
							<div className="prac-problems-container">
								<PracticeProblem
									current={0}
									problem={
										<div>
											Si Bella ay naglalakbay ng mga lugar sa Pilipinas. Siya ay sumakay ng eroplano galing Manila para pumunta sa Cebu. Ang Cebu ay may distance na <Latex>{"$600 \\, km$"}</Latex> sa timog (south) ng Manila. Pero bago pumunta ang eroplano sa Cebu, dumaan muna ito sa Pampanga na may <Latex>{"$100 \\, km$"}</Latex> layo sa hilaga (north) ng Manila. Sa buong lakbay ni Bella, sagutin ang mga tanong. Ano ang distance ng nilipad ng eroplano? Ano ang average speed ng eroplano? Ano ang average velocity ng eroplano?
										</div>
									}
									cardTitle={"Challenge Problem 1"}
									answer={null}
									solution={
										null
									}
								/>
								<PracticeProblem
									current={0}
									problem={
										<div>
											At <Latex>{"$t=0$"}</Latex>, si John ay nagmamaneho ng kanyang kotse na may velocity na <Latex>{"$35.00 \\, m/s$"}</Latex>. Pagkatapos ng <Latex>{"$7.500 \\, s$"}</Latex>, may nadaanan na stoplight na may red light si John at tinigil niya ang kotse. Nakalipas ang <Latex>{"$30.00 \\, s$"}</Latex>, umilaw na ang green light sa stoplight, pinaandar muli ni John ang kanyang kotse at nagkaroon ito ng <Latex>{"$60.00 \\, m/s$"}</Latex> na velocity pagkalipas ng <Latex>{"$15.00 \\, s$"}</Latex> pagkatapos nito huminto.
											Ano ang average acceleration ni John from <Latex>{"$t=0$"}</Latex> hanggang huminto siya sa stoplight?
											Ano ang average acceleration ni John from <Latex>{"$t=0$"}</Latex> hanggang nagkaroon siya ng <Latex>{"$60.00 \\, m/s$"}</Latex> na velocity?
										</div>
									}
									cardTitle={"Challenge Problem 2"}
									answer={null}
									solution={
										null
									}
								/>
							</div>
						</LessonSection>
					) : (
						null
					)}
				</LessonPage>
			);
		} else {
			document.title = "Lesson 2";
			return (
				<LessonPage setCurScreen={setCurScreen} id={1}>
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
							Ang acceleration ng isang bagay dahil sa force ng gravity ay tinatawag natin na gravitational acceleration. Ang magnitude nito ay tinatawag natin na g at ito ay may value na: <Latex>{"$$g=9.8 m/s^2$$"}</Latex> Ang magnitude na ito ay constant at hindi nakadepende sa bigat ng isang bagay na nasa free fall. Para sa direction ng gravitational acceleration, palagi itong pababa kaya’t ang sign nito ay negative.
						</p>
						<br />
						<img src={GravAccelDiagram} alt="" className="lesson-two-grav-accel center-horizontal-image" />
					</LessonSection>
					<LessonSection>
						<h2>Velocity</h2>
						<br />
						<p>
							Imagine natin na may hawak kayong bola at nabitawan niyo ito midair. Sa initial position ng bola, hindi ito gumagalaw kaya’t ang velocity nito ay zero. Nung nabitawan natin ang bola, ito ay nahuhulog hangga’t mapunta sa lapag dahil sa gravitational acceleration mula sa gravity. Dahil ang velocity at acceleration ng bola ay parehas pababa, ang velocity ng bola ay pataas ng pataas in a negative direction. Specifically, ang magnitude ng velocity ng bola ay tumataas ng <Latex>{"$9.8 m/s$"}</Latex> every second, which is the gravitational acceleration. Kaya 'pag ang height ng bola ay mas nahulog sa mas mataas na position, mas matagal ang free fall ng bola papunta sa lapag at mas malaki ang velocity nito pag palapit na ito sa lapag.
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
						<br />
						<Flashcard
							current={0}
							cardTitle={"Example One"}
							problem={
								<div>
									Si Carlo ay may hawak na feather sa kanyang kaliwang kamay at metal ball naman sa kanyang kanang kamay, sabay niya ito hinulog. Ignoring air resistance, ano ang mauuna makakarating sa lupa?
								</div>
							}
							solution={
								<div>
									Sabay silang makakarating sa lupa dahil pareho ang kanilang rate of acceleration which is ang gravitational acceleration.
								</div>
							}
						/>
					</LessonSection>
					<LessonSection>
						<h2>Kinematic Equations in Free Fall</h2>
						<br />
						<p>
							Ang kinematic equations ay mga equations na nag-uugnay sa 5 kinematic variables: displacement <Latex>{"$(\\Delta x)$"}</Latex>, time interval <Latex>{"$(\\Delta t)$"}</Latex>, initial velocity <Latex>{"$(v_0)$"}</Latex>, final velocity <Latex>{"$(v_f)$"}</Latex>, at constant acceleration <Latex>{"$(a)$"}</Latex>.
						</p>
						<br />
						<p>
							Ang mga kinematic equations ay maaari nating gamitin kapag 3 sa 5 kinematic variables ay given para makahanap ng isang unknown variables at para sa free fall. Ang constant acceleration natin ay magiging equal sa gravitational acceleration or: <Latex>{"$$a = -g = -9.8 m/s^2$$"}</Latex>
						</p>
						<br />
						<p>
							Narito ang mga equations na makukuha natin mula rito:
						</p>
						<br />
						<Latex>{"$$a = \\dfrac{v - v_0}{t} \\rightarrow -g = \\dfrac{v - v_0}{t}$$"}</Latex>
						<Latex>{"$$\\therefore v = v_0 - gt$$"}</Latex>
						<p>
							Ito ang ating equation relating final velocity, initial velocity, at time!
						</p>
						<div className="box">
							<h3>Important Equation!</h3>
							<p className="center-horizontal">
								<Latex>{"$v=v_0-gt$"}</Latex>
							</p>
						</div>
						<p>
							Ngayon, alam natin na:
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
							Ito ang ating equation relating displacement at initial velocity!
						</p>
						<div className="box">
							<h3>Important Equation!</h3>
							<p className="center-horizontal">
								<Latex>{"$\\Delta x = v_0t - \\dfrac{1}{2}gt^2$"}</Latex>
							</p>
						</div>
						<p>
							Balikan natin ang equation na <Latex>{"$v = v_0 - gt$"}</Latex>. Squaring both sides:
						</p>
						<Latex>{"$$v^2 = (v_0 - gt)^2 = v_0^2 - 2v_0gt + g^2t^2 = v_0^2 - 2g(v_0t - \\dfrac{1}{2}gt^2)$$"}</Latex>
						<p>
							Kaya nating isubstitute ang equation na <Latex>{"$\\Delta x = v_0t - \\dfrac{1}{2}gt^2$"}</Latex> dito para makuha ang sumusunod:
						</p>
						<Latex>{"$$v^2 = v_0^2 - 2g\\Delta x$$"}</Latex>
						<p>
							Ito naman ang ating equation relating initial velocity, final velocity, at displacement!
						</p>
						<div className="box">
							<h3>Important Equation!</h3>
							<p className="center-horizontal">
								<Latex>{"$v^2=v_0^2-2g\\Delta x$"}</Latex>
							</p>
						</div>
						<br />
					</LessonSection>
					<LessonSection>
						<h2>Summary of Equations</h2>
						<br />
						<p>
							Sa kabuuan, ang mga equations natin sa free fall ay ang mga sumusunod:
						</p>
						<br />
						<div className="box">
							<h3>Important Equations</h3>
							<div className="lesson-two-equations">
								<Latex>{"$$v = v_0 - gt$$"}</Latex>
								<Latex>{"$$\\Delta x = \\dfrac{(v + v_0)t}{2}$$"}</Latex>
								<Latex>{"$$\\Delta x = v_0t - \\dfrac{1}{2}gt^2$$"}</Latex>
								<Latex>{"$$v^2 = v_0^2 - 2g\\Delta x$$"}</Latex>
							</div>
						</div>
						<br />
						<p>
							Tandaan na ang mga kinematic equations na ito ay gagana lamang sa one-dimension. Para sa tinalakay natin, ginagamit natin ang y-axis.
						</p>
						<br />
						<Flashcard
							current={0}
							cardTitle={"Example Two"}
							problem={
								<div>
									Si Caleb ay naghulog ng basketball. Nag-undergo ang basketball sa free fall at ito’y tumagal ng <Latex>{"$2.5 \\, s$"}</Latex> sa ere. Ano ang velocity ng basketball nang ito’y tumama sa lupa?
								</div>
							}
							solution={
								<div>
									<p>
										Dahil hinulog lang ni Caleb ang bola, ang initial velocity nito ay <Latex>{"$0 \\, m/s$"}</Latex>.
									</p>
									<p>
										Alam na rin natin na ang gravitational acceleration ng bola ay <Latex>{"$9.8 \\, m/s^2$"}</Latex> at ang time ng free fall ng bola ay <Latex>{"$2.5 \\, s$"}</Latex>. Kaya’t gamitin natin ang equation na <Latex>{"$v_f = v_0 - gt$"}</Latex> para mahanap ang final velocity ng bola kung saan ito tumama sa lupa.
									</p>
									<p><Latex>{"$$v_f = v_0 - gt = 0 \\, \\dfrac{m}{s} - (9.8 \\, \\dfrac{m}{s^2} \\cdot 2.5 \\, \\dfrac{m}{s}) = -24.5 \\dfrac{m}{s}$$"}</Latex>
									</p>
								</div>
							}
							answer={
								<Latex>{"$-24.5 \\, m/s$"}</Latex>
							}
						/>
					</LessonSection>
					<LessonSection>
						<h2>Practice Problems!</h2>
						<br />
						<div className="prac-problems-container">
							<PracticeProblem
								current={0}
								problem={
									<div>
										Nagpalipad ang mga estudyante ng bottle rocket pataas. Kung ito ay may initial velocity na <Latex>{"$30 \\, m/s$"}</Latex>, at may mass ito na <Latex>{"$1 \\, kg$"}</Latex>, ano ang maximum height nito?
									</div>
								}
								cardTitle={"Practice Problem 1"}
								answer={<Latex>{"$0.0166 \\, \\dfrac{m}{s}$"}</Latex>}
								solution={
									<div>
										<iframe className="video-center-horizontal" width="560" height="315" src="https://www.youtube.com/embed/s6W_itvXXR0?si=pCOCn-lTNHP4DP91" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
									</div>
								}
							/>
						</div>
					</LessonSection>
					<LessonSection>
						<h2>Challenge Problems!</h2>
						<br />
						<div className="prac-problems-container">
							<PracticeProblem
								current={0}
								problem={
									<div>
										Si Rocky ay nagtapon ng ping pong ball pataas at noong pabagsak na an ping pong ball, pumasok ito sa isang plastic cup na nakapatong sa lamesa. Ang kamay ni Rocky noong hinagis niya ang ping pong ball ay <Latex>{"$50 \\, m$"}</Latex> above sa plastic cup.  Kung ang velocity ng ping pong ball ay <Latex>{"$60 \\, m/s$"}</Latex> noong ito’y lumapag sa plastic cup, ano ang initial velocity ng ping pong ball nung tinapon ito ni Rocky?
									</div>
								}
								cardTitle={"Challenge Problem 1"}
								answer={null}
								solution={
									null
								}
							/>
						</div>
					</LessonSection>
					<LessonSection>
						<h2>Confirmatory Experiment</h2>
						<br />
						<p>
							Panoorin ang paghulog ng eraser sa baba. Kung hinulog ang eraser mula sa taas na <Latex>{"$3 \\, m$"}</Latex>, gaano katagal ito mahuhulog hanggang marating ito ang lupa?
						</p>
						<br />
						<img src="./media/confirmatory.gif" alt="" className="confirmatory" />
						<br />
						<p>
							Ayon sa video, tama ba ang iyong sagot? Kung hindi, bakit kaya? Ano ang pwedeng paliwanag para rito? Pagnilayan!
						</p>
					</LessonSection>
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


