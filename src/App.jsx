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
import StandardFooter from "./StandardFooter";

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
				<LessonPage nonLessonPages={[6, 7, 8, 9, 10, 11]} lastScreen={1} canProceed={canProceed} needContinue={true} setCurScreen={setCurScreen} id={0}>
					<LessonSection>
						<h1>Aralin 1: Uniformly Accelerated Motion</h1>
						<hr />
						<p className="time-limit">Inirerekomendang oras para sa bahaging ito: 1 minuto</p>
						<br />
						<p>
							Bago tayo magsimula, panoorin muna natin ang short
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
							Sa short video na ito, pinakita ang pagbagsak ng dahon sa tubig. Batay sa iyong obserbasyon, ano ang napansin niyo sa pagbagsak ng dahon at bakit ganoon ang pagbagsak ng dahon sa iyong palagay? <br />
							<br /> Sa ating mundo, araw-araw tayong nakakakita ng <i>motion</i> sa ating paligid tulad ng paglakad ng tao at paggalaw ng mga ibang bagay. Ang <i>motion</i> na ito ay maaaring maging mabilis, mabagal, nakahinto, pabilis nang pabilis, at iba pa. Kaya’t para mailarawan at mapagkaiba natin ang iba’t ibang <i>motion</i>, syempre gagamit tayo ng <strong>Physics</strong>.
						</p>
						<br />
					</LessonSection>
					<LessonSection>
						<h2>Maikling Gawain</h2>
						<hr />
						<p className="time-limit">Inirerekomendang oras para sa bahaging ito: 2-4 minuto</p>
						<br />
						<p>
							Pindutin ang{" "}
							<a
								className="hyperlink"
								href="https://phet.colorado.edu/sims/cheerpj/moving-man/latest/moving-man.html?simulation=moving-man"
							>
								<i>link</i>
							</a>{" "}
							na ito o gamitin ang <i>PHET simulation</i> sa ibaba para
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
						<br />
						<p>Pagkatapos natin buksan ang <i>PHET simulation,</i> gawin ang lahat ng mga sumusunod. I-tick ang mga kahon pagkatapos makumpleto ang mga gawain; kung hindi naka-tick ang lahat ng kahon, hindi maa-access ang iba pang <i>pages</i>.</p> <br />
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
									Gawing <Latex>{"$2 \\, m/s$"}</Latex> ang velocity ng tao at pindutin
									ang <i>play button</i>
								</p>
							</li>
							<li>
								<Checkbox
									task={2}
									taskDone={taskDone}
									finishedTasks={finishedTasks}
								/>
								<p>
									Ireset ang <i>simulation</i> at lagyan naman ng <Latex>{"$4 \\, m/s$"}</Latex> ang velocity ang tao at pindutin ang <i>play button</i>
								</p>
							</li>
							<li>
								<Checkbox
									task={3}
									taskDone={taskDone}
									finishedTasks={finishedTasks}
								/>
								<p>
									Ireset ulit ang <i>simulation</i>, lagyan ng <Latex>{"$1 \\, m/s^2$"}</Latex> ang acceleration ng tao, at pindutin ang <i>play button</i>. Pansinin ang mangyayari sa velocity ng
									tao
								</p>
							</li>
						</ul>
					</LessonSection>
					{canProceed ? (
						<LessonSection>
							<h2>Pagpapatuloy</h2>
							<hr />
							<p className="time-limit">Inirerekomendang oras para sa bahaging ito: 1 minuto</p>
							<br />
							<p className="greenText">Maaari nang magpatuloy!</p> <br />
							<p>Heto ang iyong ginawa kanina.</p>
							<br />
							<div className="simulation-questions" >
								<img src="./media/simulation-ss.png" className="simulation-ss" alt="" />
								<br />
								<div>
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
								</div>
							</div>
							<br />
							<p>
								Ang paggalaw o motion ng tao sa simulation ay may kinalaman sa isang larangan ng Physics na tinatawag na mechanics. Sa ilalim ng larangan ng mechanics ay mayroon itong dalawang bahagi, kinematics at dynamics. Ngunit para sa lesson na ito, tututukan natin ang kinematics.
							</p>
							<br />
						</LessonSection>
					) : (
						<>
							<p className="redText">
								Gawin muna ang LAHAT ng mga task.
							</p>
						</>
					)}
					{canProceed ? (
						<LessonSection>
							<h2>Posisyon (<i>Position</i>)</h2>
							<hr />
							<p className="time-limit">Inirerekomendang oras para sa bahaging ito: 3 minuto</p>
							<br />
							<p>
								Sa pagpapaliwanag ng motion, kailangan natin ipakita ang position ng isang bagay. Gawin nating halimbawa ang simulation na ating ginamit kanina, makikita natin ang pagkakaiba ng position ng tao kapag siya ay nasa gitna at sa kanang pader. Sabihin natin nasa gitna ang initial position ng tao, at ang kanang pader ay ang final position ng tao.
							</p>
							<br />
							<p>
								Ang haba ng linakad ng tao galing sa pinagmulan niyang position para makarating sa kanyang paroroonan na position ay tinatawag natin na <strong>distance</strong>. Ito ay isang <strong>scalar</strong> unit, kaya ito ay may magnitude (na
								laging positive) lamang. Ang magnitude ng
								distance ay ang <strong>haba ng lahat ng nadaanan ng isang bagay</strong> sa motion nito (Lubrica, 2020).
							</p>
							<br />
							<Flashcard
								cardTitle="Halimbawa 1"
								current={0}
								answer={<Latex>{"$3 \\, m$"}</Latex>}
								problem={
									<div>
										Kung naglakad si Aydan nang <Latex>{"$2 \\, m$"}</Latex> papunta sa east, at pagkatapos nito ay naglakad pa siya nang karagdagang <Latex>{"$1 \\, m$"}</Latex> papunta sa east, ano ang distance ng kanyang linakad?
									</div>
								}
								solution={
									<div>
										<p>Ang distansya na linakad ni Aydan ay <Latex>{"$3 \\, m$"}</Latex> dahil <Latex>{"$2 \\, m + 1 \\, m = 3 \\, m$"}</Latex>. Makikita ito sa diagram sa baba; ang isang linya ay <Latex>{"$1 \\, m$"}</Latex>.</p>
										<img src="./media/lesson-one-flashcard-one-crop.gif" className="lesson-one-gif-one" alt="" />
									</div>
								}
							/>
							<br />
							<p>
								Ngunit paano naman kung gusto lang natin malaman ang distance ng initial position at final position ng isang bagay at hindi sa buong dinaanan nito?

								Ito ngayon ay tinatawag natin na <strong>displacement</strong>. Ito ay isang <strong>vector</strong> unit, kaya ito
								ay may magnitude at direction. Ang
								magnitude ng displacement ay ang pinakamaikling
								distance mula sa initial position patungo sa final position ng isang bagay; ito ay isang straight line mula sa starting point hanggang ang endpoint. Sa direction naman ng displacement, nakaturo ito mula sa initial position papunta sa final position at gumagamit tayo ng +/- signs para matukoy saan nakaturo ang displacement vector (Lubrica, 2020). Para sa
								one-dimensional motion:
							</p>
							<div className="box">
								<h3 className="box-title">Pormula ng <i>Displacement</i></h3>
								<p className="center-horizontal">
									<Latex>{"$\\Delta x = x_{f} - x_{0}$"}</Latex>, where:
									<Latex>{"$\\, \\Delta x$"}</Latex> - displacement,{" "}
									<Latex>{"$x_{f}$"}</Latex> - final position,{" "}
									<Latex>{"$x_{0}$"}</Latex> - initial position
								</p>
							</div>
							<p>
								Sa simulation, ang kanan o east direction ay positive sign. Kaya’t nung naglakad yung tao papunta sa kanan na pader, ang sign ng kanyang displacement vector ay positive. Ngunit kung naglakad siya papunta sa kaliwang pader, ang sign ng kanyang displacement vector ay negative.
							</p>
							<br />
							<div className="displacement-figures">
								<img src="./media/positive-displacement-fig.png" alt="" />
								<img src="./media/negative-displacement-fig.png" alt="" />
							</div>
							<br />
							<p>
								Sapagkat ang displacement ang pinakamaikling distance ng initial at final positions ng isang bagay, ito lamang ay isang diretsong linya habang ang distance naman ay nakadepende sa nadaanan ng isang bagay at hindi ito palagi isang diretsong linya. Ang SI unit para sa distance at displacement ay meters (Lubrica, 2020). Para makita ang pinagkaiba ng distance at displacement, tingnan natin ang halimbawang ito.
							</p>
							<br />
							<Flashcard
								cardTitle={"Halimbawa 2"}
								answer={<Latex>{"distance: $6 \\, m$ east, at dislacement: $2 \\, m$ east"}</Latex>}
								current={0}
								problem={
									<div>
										Si Aydan ay naglakad ng <Latex>{"$4 \\, m$"}</Latex> to the east, tapos naglakad ng <Latex>{"$2 \\, m$"}</Latex> to the west. Ano ang kanyang distance at displacement?
									</div>
								}
								solution={
									<div className="flashcard-two-solution">
										<img src="./media/lesson-one-flashcard-two-1-crop.gif" alt="" />
										<p>Ang unang distansya na linakad ni Aydan ay <Latex>{"$4 \\, m$"}</Latex> to the east.</p>
										<img src="./media/lesson-one-flashcard-two-2-crop.gif" alt="" />
										<p>Ang unang distansya na linakad ni Aydan ay <Latex>{"$3 \\, m$"}</Latex> to the west.</p>
										<img src="./media/lesson-one-flashcard-two-3.png" alt="" />
										<p>Kung titignan lamang ang final position ni Aydan, ang kanyang displacement ay <Latex>{"$4 \\, m - 2 \\, m = 2 \\, m$"}</Latex> lamang, ngunit ang kabuuang distansyang linakad niya ay <Latex>{"$4 \\, m + 2 \\, m = 6 \\, m$"}</Latex> </p>
									</div>
								}
							/>
						</LessonSection>
					) : (
						null
					)}
					{canProceed ? (
						<LessonSection>
							<h3>Bilis at Belosidad (<i>Speed</i> and <i>Velocity</i>)</h3>
							<hr />
							<p className="time-limit">Inirerekomendang oras para sa bahaging ito: 4 minuto</p>
							<br />
							<p>
								Sa simulation, paano natin malalaman kung gaano kabilis naglalakad yung tao papunta sa pader? Ito ngayon ang tinatawag natin na <strong>speed</strong> at <strong>velocity</strong>.
							</p>
							<br />
							<p>
								May dalawang paraan para ipakita ang speed at velocity: pwede ito maging <strong>average</strong> o <strong>instantaneous</strong>. Ang average speed at velocity ay nagpapakita ng bilis depende sa layong narating ng isang bagay a isang time interval, habang ang instantaneous speed at velocity naman ay nagpapakita ng bilis ng isang bagay sa isang partikular na oras (Lubrica, 2020). Para sa modyul na ito, tatalakayin lang natin ang average speed at velocity.
							</p>
							<br />
							<p>
								Ang <strong>average speed</strong> ay isang <strong>scalar</strong> unit na
								nagpapakita ng bilis ng isang bagay base sa <strong>distance</strong> ng nadaanan ng isang bagay galing sa initial position hanggang sa final position nito sa isang espisipikong time interval. Ito ay palaging may positive na value (Lubrica, 2020).
							</p>
							<br />
							<p>Dahil dito, ang equation ng speed ay:</p>
							<br />
							<div className="box">
								<h3 className="box-title">Pormula ng <i>Speed</i></h3>
								<p className="center-horizontal">
									<Latex>{"$v = \\dfrac{d}{t}$"}</Latex>, where
									<Latex>{"$\\,v$"}</Latex> - speed,{" "}
									<Latex>{"$d$"}</Latex> - distance,{" "}
									<Latex>{"$t$"}</Latex> - time
								</p>
							</div>
							<br />
							<p>
								Ang <strong>average velocity</strong> naman ay isang <strong>vector</strong> unit. Hindi tulad ng speed, ang average velocity ay nagpapakita lamang ng bilis ng isang bagay base sa <strong>displacement</strong> ng isang bagay sa isang time interval. Ang value ng velocity ay maaaring maging positive o negative, depende sa direction ng displacement (Lubrica, 2020).
							</p>
							<br />
							<p>Dahil dito, ang equation ng velocity para sa one-dimensional motion ay:</p>
							<div className="box">
								<h3 className="box-title">Pormula ng <i>Velocity</i></h3>
								<p className="center-horizontal">
									<Latex>
										{
											"$\\vec{v} = \\dfrac{\\Delta x}{t} = \\dfrac{x_f - x_0}{t}$"
										}
									</Latex>, where
									<Latex>{"$\\, \\vec{v}$"}</Latex> - velocity,{" "}
									<Latex>{"$x_f$"}</Latex> -
									final position, <Latex>{"$x_0$"}</Latex> - initial position, <Latex>{"$t$"}</Latex> - time
								</p>
							</div>
							<p>
								Sa kabuuan, ang speed at velocity ay parehas nagsasabi kung gaano kabilis ang tao o bagay at nagkakaiba lamang sa pagkakaroon ng direction (Lubrica, 2020). Ang SI unit para sa speed at velocity ay <strong>meters per second</strong> <Latex>{"$\\, (m/s)$"}</Latex>.
							</p>
							<br />
							<Flashcard
								current={0}
								cardTitle={"Halimbawa 3"}
								answer={
									<Latex>{"$0.8 \\, m/s$ pakanan"}</Latex>
								}
								problem={
									<div>
										Si Aydan ay tumakbo ng <Latex>{"$50 \\, m$"}</Latex> to the right sa kalye sa loob ng <Latex>{"$10 \\, s$"}</Latex>. Tapos, tumakbo siya ng <Latex>{"$30 \\, m$"}</Latex> to the left sa loob ng <Latex>{"$15\\, s$"}</Latex>. Ano ang average velocity sa buong pagtakbo niya?
									</div>
								}
								solution={
									<div className="flashcard-three-solution">
										<img src="./media/lesson-one-flashcard-three-1-crop.gif" alt="" />
										<p>
											Sa unang paggalaw, tumakbo si Aydan nang <Latex>{"$50 \\, m$"}</Latex> papuntang east sa loob ng <Latex>{"$10 \\, s$"}</Latex>.
										</p>
										<img src="./media/lesson-one-flashcard-three-2-crop.gif" alt="" />
										<p>
											Sa pangalawang paggalaw, tumakbo si Aydan ng <Latex>{"$30 \\, m$"}</Latex> papuntang west sa loob ng <Latex>{"$15 \\, s$"}</Latex>.
										</p>
										<p>
											Kunin muna ang displacement: <Latex>{"$d = 50 \\, m - 30 \\, m = 20 \\, m$"}</Latex>
										</p>
										<p>
											Pagkatapos, kunin ang total time: <Latex>{"$t = 10 \\, s + 15 \\, s = 25 \\, s$"}</Latex>
										</p>
										<p>
											Ngayon, malalaman na natin ang velocity: <Latex>{"$v = \\dfrac{d}{t} = \\dfrac{20 \\, m}{25 \\, s} = 0.8 \\, \\dfrac{m}{s}$"}</Latex>
										</p>
									</div>
								}
							/>
							<br />
						</LessonSection>
					) : (
						<p className="redText">
							Gawin muna ang LAHAT ng mga task.
						</p>
					)}
					{canProceed ? (
						<LessonSection>
							<h3>Pagbilis (<i>Acceleration</i>)</h3>
							<hr />
							<p className="time-limit">Inirerekomendang oras para sa bahaging ito: 3 minuto</p>
							<br />
							<p>
								Sa simulation, maaari na natin malaman ang bilis ng paglalakad ng tao. Ngunit, hindi naman palagi pare-pareho ang bilis ng tao sa iba’t ibang oras. Minsan ito’y bumibilis, bumabagal, o nakahinto lamang. Ang pagbilis o pagbagal ng tao o bagay ay tinatawag natin na <strong>acceleration</strong>.
							</p>
							<br />
							<p>
								Ang acceleration ay isang <strong>vector</strong> unit, at ito ay ang <strong>pagbabago sa velocity</strong>. Ang
								value ng velocity ng isang accelerating object ay nakadepende sa
								dalawang bagay: ang direction ng velocity at
								kung ang acceleration ay accelerating or
								decelerating (Lubrica, 2020).
							</p>
							<div className="lesson-one-table">
								<p>
									Accelerating
								</p>
								<p>
									Decelerating
								</p>
								<p>Ang bagay ay bumibilis</p>
								<p>Ang bagay ay bumabagal</p>
								<p>
									Ang direction ng acceleration ay kapareho ng
									direction ng velocity
								</p>
								<p>
									Ang direction ng acceleration object ay
									kabaliktaran ng direction ng velocity
								</p>
							</div>
							<br />
							<p>
								Ang acceleration ay maaari ring mangyari kapag bumabago ang direksyon ng motion ng isang bagay, ngunit hindi natin ito tatalakayin. Ang pagbabago ng velocity kada unit of time ay
								ang tinatawag na <strong>average acceleration</strong>. Samakatuwid, ang equation ng average
								acceleration ay:
							</p>
							<div className="box">
								<h3 className="box-title">Pormula ng <i>Acceleration</i></h3>
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
							<p>
								Ngayon na alam na natin ang acceleration, tanungin ko naman kayo. Kung ang isang bagay ay may positibong acceleration, lagi ba itong accelerating? At kung ang bagay ay may negatibong acceleration, lagi ba itong decelerating?
							</p>
							<br />
							<p>
								Dahil may direction ang acceleration, hindi ito palaging totoo. Ang isang bagay na may positibong acceleration (i.e., pakanan) ay maaaring bumabagal kung, sa una, ito ay gumagalaw pakaliwa (i.e., negative ang velocity ng bagay). Accelerating naman ang bagay kung parehas na pakanan ang acceleration at velocity. Parehas lamang ang konsepto kung may negatibong acceleration: accelerating ang isang bagay pakaliwa ang paggalaw, habang ito ay decelerating naman kung ang paggalaw nito ay pakanan.
							</p>
							<br />
							<Flashcard
								cardTitle={"Halimbawa 4"}
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
						<p>
							Gawin muna ang LAHAT ng mga task.
						</p>
					)}
					{canProceed ? (
						<LessonSection>
							<h2>Pagsasanay</h2>
							<hr />
							<div className="prac-problems-container">
								<PracticeProblem
									current={0}
									problem={
										<>
											Mayroong Jollibee na nakaposition ng <Latex>{"$60 \\, m$"}</Latex> galing sa bahay ni Bong. Kung kailangan niya makarating sa loob ng <Latex>{"$1 \\text{ hr}$"}</Latex> gaano kabilis dapat siya maglakad in meters per second?
										</>
									}
									cardTitle={"Pagsasanay 1"}
									answer={<Latex>{"$0.0166 \\, m/s$"}</Latex>}
									solution={
										<div>
											<iframe className="video-center-horizontal" width="560" height="315" src="https://www.youtube.com/embed/kCpR4o05DWM?si=EIUT7h4BZ_y52Ssi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
							<h2>Pagsasanay</h2>
							<hr />
							<div className="prac-problems-container">
								<PracticeProblem
									current={0}
									problem={
										<div>
											Si Ian ay nagsimula sa isang parke tapos naglalakad siya nang <Latex>{"$30 \\, m$"}</Latex> east  papunta sa supermarket, tapos siya ay naglakad nang <Latex>{"$50 \\, m$"}</Latex> north para puntahan ang paaralan, tapos naglakad siya nang <Latex>{"$30 \\, m$"}</Latex> west papunta sa kanyang bahay. Kung ginawa niya ito lahat sa loob ng <Latex>{"$10 \\text{ min}$"}</Latex>. Ano ang (1) distance, (2) displacement, (3) average speed, at (4) average velocity?
										</div>
									}
									cardTitle={"Pagsasanay 2"}
									answer={<Latex>{"$110 \\, m$, $50 \\, m$, $0.183 \\, m/s$, at $0.0833 \\, m/s$"}</Latex>}
									solution={
										<div>
											<iframe className="video-center-horizontal" width="560" height="315" src="https://www.youtube.com/embed/k2sxwAGzlxc?si=0K5aUC97H13FwCTp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
							<h2>Pagsasanay</h2>
							<hr />
							<div className="prac-problems-container">
								<PracticeProblem
									current={0}
									problem={
										<div>
											Si Juan ay naglalaro ng baseball, ang bola ay may velocity <Latex>{"$30 \\, m/s$"}</Latex> pagkatapon niya papunta sa kaliwa. Kung ang bola ay may deceleration na <Latex>{"$3 \\, m/s^2$"}</Latex> ilang segundo bago natigil ang paggalaw ng bola?
										</div>
									}
									cardTitle={"Pagsasanay 3"}
									answer={<Latex>{"$10 \\, s$"}</Latex>}
									solution={
										<div>
											<iframe className="video-center-horizontal" width="560" height="315" src="https://www.youtube.com/embed/lMBEwliD0fg?si=4snrVExFxd9kaolc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
							<h2>Pagsasanay</h2>
							<hr />
							<div className="prac-problems-container">
								<PracticeProblem
									current={0}
									problem={
										<div>
											Mayroong pulis na bumaril sa isang target. Ang bala ay mayroong final velocity na <Latex>{"$40 \\, m/s$"}</Latex>, kung ito ay nagdedecelerate sa rate na <Latex>{"$40 \\, m/s^2$"}</Latex> ano ang position nito pagkatapos ng <Latex>{"$4 \\, s$"}</Latex>?
										</div>
									}
									cardTitle={"Pagsasanay 4"}
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
							<h2>Mga Mahihirap na Pagsasanay</h2>
							<hr />
							<div className="prac-problems-container">
								<PracticeProblem
									current={0}
									problem={
										<div>
											Si Bella ay naglalakbay ng mga lugar sa Pilipinas. Siya ay sumakay ng eroplano galing Manila para pumunta sa Cebu. Ang Cebu ay may distance na <Latex>{"$600 \\ \\textrm{km}$"}</Latex> sa timog (south) ng Manila. Pero bago pumunta ang eroplano sa Cebu, dumaan muna ito sa Pampanga na may <Latex>{"$100 \\ \\textrm{km}$"}</Latex> layo sa hilaga (north) ng Manila. Kung <Latex>{"$5 \\ \\textrm{hr}$"}</Latex> ang tagal ng buong lakbay ni Bella, sagutin ang mga tanong. Ano ang distance ng nilipad ng eroplano? Ano ang average speed ng eroplano? Ano ang average velocity ng eroplano?
										</div>
									}
									cardTitle={"Pagsasanay 1"}
									answer={<Latex>{"$700 \\ \\textrm{km}, \\ 140 \\ \\textrm{km/hr}, \\ 120 \\ \\textrm{km/hr}$"}</Latex>}
									solution={
										<div>
											<p>Distance: <Latex>{"$d = 100 \\ \\textrm{km} + 600 \\ \\textrm{km} = 700 \\ \\textrm{km}$"}</Latex></p>
											<br />
											<p>Average speed: <Latex>{"$v = \\dfrac{d}{t} = \\dfrac{700 \\ \\textrm{km}}{5 \\ \\textrm{hr}} = 140 \\ \\textrm{km/hr}$"}</Latex></p>
											<br />
											<p>Average velocity: <Latex>{"$v = \\dfrac{\\Delta x}{t} = \\dfrac{600 \\ \\textrm{km}}{5 \\ \\textrm{hr}} = 120 \\ \\textrm{km/hr}$"}</Latex></p>
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
							<h2>Mga Mahihirap na Pagsasanay</h2>
							<hr />
							<div className="prac-problems-container">
								<PracticeProblem
									current={0}
									problem={
										<div>
											Sa <Latex>{"$t=0$"}</Latex>, si John ay nagmamaneho ng kanyang kotse na may velocity na <Latex>{"$35.00 \\ \\textrm{m/s}$"}</Latex>. Pagkatapos ng <Latex>{"$7.500 \\ \\textrm{s}$"}</Latex>, may nadaanan na stoplight na may red light si John at tinigil niya ang kotse sa loob ng <Latex>{"$2.500 \\ \\textrm{s}$"}</Latex>. Nakalipas ang <Latex>{"$30.00 \\ \\textrm{s}$"}</Latex>, umilaw na ang green light sa stoplight, pinaandar muli ni John ang kanyang kotse at nagkaroon ito ng <Latex>{"$60.00 \\ \\textrm{m/s}$"}</Latex> na velocity pagkalipas ng <Latex>{"$10.00 \\ \\textrm{s}$"}</Latex> pagkatapos niya ito muling paandarin.
											Ano ang average acceleration ni John from <Latex>{"$t=0$"}</Latex> hanggang huminto siya sa stoplight?
											Ano ang average acceleration ni John from <Latex>{"$t=0$"}</Latex> hanggang nagkaroon siya ng <Latex>{"$60.00 \\ \\textrm{m/s}$"}</Latex> na velocity?
										</div>
									}
									cardTitle={"Pagsasanay 2"}
									answer={<Latex>{"$-3.500 \\ \\textrm{m/s}, \\ 0.5000 \\ \\textrm{m/s}$"}</Latex>}
									solution={
										<div>
											<p>Mula <Latex>{"$t = 0$"}</Latex> hanggang huminto si John sa stoplight: <Latex>{"$a = \\dfrac{v - v_0}{\\Delta t} = \\dfrac{0 \\ \\textrm{m/s} - 35.00 \\ \\textrm{m/s}}{10.000 \\ \\textrm{s}} = -3.500 \\ \\textrm{m/s}$"}</Latex></p>
											<br />
											<p>Mula <Latex>{"$t = 0$"}</Latex> hanggang naging <Latex>{"$60.00 \\ \\textrm{m/s}$"}</Latex> ang kanyang velocity: <Latex>{"$a = \\dfrac{v - v_0}{\\Delta t} = \\dfrac{60.00 \\ \\textrm{m/s} - 35.00 \\ \\textrm{m/s}}{50.00 \\ \\textrm{s}} = 0.5000 \\ \\textrm{m/s}$"}</Latex></p>
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
							<h2>Mga Sanggunian</h2>
							<hr />
							<p>
								Lubrica, Q, Y, B. (2020). <i>Kinematic Quantities</i> [Module]. Moodle. https://khub.mc.pshs.edu.ph/
							</p>
							<br />
							<p>
								<i>PHET Simulation</i>. (n.d.). https://phet.colorado.edu/sims/cheerpj/moving-man/latest/moving-man.html?simulation=moving-man
							</p>
							<br />
							<p>
								Scribbles and Ink Spots. (2013). <i>Falling Leaf Animation</i> [Video]. YouTube. https://www.youtube.com/watch?v=UWMBj-uD37Y
							</p>
							<div className="end-of-lesson-btn-container">
								<button className={"end-of-lesson-btn"} type="button" onClick={() => {
									setCurScreen('home');
								}}>Back to homepage!</button>
								<button className={"end-of-lesson-btn"} type="button" onClick={() => {
									setCurScreen('lesson3');
								}}>Next lesson!</button>
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
				<LessonPage nonLessonPages={[6, 7]} setCurScreen={setCurScreen} id={1}>
					<LessonSection>
						<h1>Aralin 2: Free Fall</h1>
						<hr />
						<p className="time-limit">Inirerekomendang oras para sa bahaging ito: 1 minuto</p>
						<br />
						<p>
							Ngayon na tinalakay na natin ang kinematics in one-dimension, tatalakayin naman natin ang isang special case nito na tinatawag na <strong>free fall</strong>. Sa simula ng modyul, nakita natin na nalalaglag ng dahan-dahan ang dahon at iyon ay isang halimbawa ng free fall. Nakikita natin ang free fall sa ating araw-araw na pamumuhay tulad ng patak ng ulan o pagbitaw natin sa bagay na ating hinahawakan.
						</p>
						<br />
						<img src={FallGif} alt="" className="center-horizontal-image" />
						<br />
						<p>
							Ngayon, bakit nga ba nakakaranas ng free fall ang mga ito? Ito ay dahil sa isang force  na tinatawag natin na <strong>gravity</strong>. Ito ay ang nag-iisang tanging force na kumikilos sa isang bagay sa free fall (Perez, 2020). Dahil dito, nahuhulog ang lahat ng bagay na itinatapon pataas; ika nga ni Newton, <em>“what goes up must come down”</em>. Natalakay natin sa kinematics ang motion ng mga bagay sa x-axis, pero para sa pagtalakay natin ng free-fall, gagamitin naman natin ang y-axis (at hindi natin iintindihin ang air resistance).
						</p>
						<br />
					</LessonSection>
					<LessonSection>
						<h2>Pagbilis dahil sa Grabidad (<i>Gravitational Acceleration</i>)</h2>
						<hr />
						<p className="time-limit">Inirerekomendang oras para sa bahaging ito: 1 minuto</p>
						<br />
						<p>
							Ang acceleration ng isang bagay dahil sa force ng gravity ay tinatawag natin na <strong>gravitational acceleration</strong>. Ginagamit ang simbolong <Latex>{"$g$"}</Latex> para rito, at ito ay may value na: <Latex>{"$$g=9.8 \\, m/s^2$$"}</Latex> Ang magnitude na ito ay <strong>hindi nagbabago</strong> at <strong>hindi nakadepende sa bigat ng isang bagay</strong> na nakakaranas ng free fall. Ang direction ng gravitational acceleration ay <strong>pababa</strong> kaya’t ang sign na ginagamit dito ay negatibo (Perez, 2020).
						</p>
						<br />
						<img src={GravAccelDiagram} alt="" className="lesson-two-grav-accel center-horizontal-image" />
					</LessonSection>
					<LessonSection>
						<h2>Belosidad (<i>Velocity</i>)</h2>
						<hr />
						<p className="time-limit">Inirerekomendang oras para sa bahaging ito: 2 minuto</p>
						<br />
						<p>
							Isipin natin na may hawak kayong bola at nabitawan niyo ito sa ere. Sa pinagmulan na position ng bola, hindi ito gumagalaw kaya’t ang velocity nito ay zero. Pagkatapos nating bitawan ang bola, ito ay nahuhulog hanggang matamaan nito ang lupa dahil sa gravitational acceleration mula sa gravity. Dahil ang velocity at acceleration ng bola ay parehas pababa, ang velocity ng bola ay pataas ng pataas sa negatibong direction. Kung magiging espisipiko, ang magnitude ng velocity ng bola ay tumataas ng <Latex>{"$9.8 \\, m/s$"}</Latex>, KADA segundo. Ito ang ating gravitational acceleration! Kaya kung ang height ng bola ay mas nahulog sa mas mataas na position, mas matagal ang free fall ng bola papunta sa lapag at mas malaki ang velocity nito kapag mas malapit na ito sa lapag.
						</p>
						<br />
						<img src={FreeFallDiagram} alt="" className="lesson-two-free-fall-diagram center-horizontal-image" />
						<br />
						<p>
							Ngayon, paano naman kung tinapon natin ang bola pataas. Sa ating pagkakaalam, ang bola ay gagalaw pataas hanggang saang height ang kaya nito marating at pagkatapos ay babagsak rin ito. Kapag tinapon na natin ang bola pataas, ito ay makakaranas ng positibong initial velocity galing sa atin. Ang velocity ng bola ay pataas habang ang acceleration naman ng bola ay pababa, kaya ang bola ay unti-unting babagal hanggang maging zero ang velocity nito. Kapag zero na ang velocity ng bola, ito ay nasa pinakamataas na height na maaabot nito bago ito magsimulang bumaba. Tuwing pababa na ito, ang velocity at acceleration ay magkakaroon ng parehas na direction, kaya ito’y bibilis (Perez, 2020).
						</p>
						<br />
						<p>
							Sa huli, dahil hindi nagbabago ang gravitational acceleration sa pagtaas at pagbaba ng bola, ang pagbagal at pagbilis ng bola midair ay parehas. Kaya pag sinalo natin ang bola sa parehas na position kung saan natin tinapon ang bola, ang velocity ng bola sa oras na sinalo natin ay pareho sa velocity ng bola na ating tinapon.
						</p>
						<br />
					</LessonSection>
					<LessonSection>
						<h2><i>Displacement</i> at Haba ng Paglipad (<i>Time of Flight</i>)</h2>
						<hr />
						<p className="time-limit">Inirerekomendang oras para sa bahaging ito: 3 minuto</p>
						<br />
						<p>
							Base sa ating mga tinalakay kanina, ang displacement ng isang bagay ay positibo kung ito’y <strong>nasa taas ng initial height</strong> nito, negatibo kung ito’y <strong>nasa baba ng initial height</strong> nito, at zero kung <strong>bumalik ang bagay sa initial height nito</strong> (halimbawa: ang pagtapon at pagsalo ng bola).
						</p>
						<br />
						<p>
							Ngayon, balikan natin ang pagtapon natin ng bola pataas. Tinalakay natin na <strong>mananatiling tumataas ang bola hanggang makarating ito sa kanyang maximum height</strong>, kung kailan magiging <strong>zero ang velocity nito</strong>. Sapagkat hindi nagbabago ang gravitational acceleration na nararanasan ng bola sa ere, mas mataas ang maabot na height ng bola at mas matagal ang magiging oras ng bola para makarating sa kanyang pinakamataas na height kapag mas malaki ang initial velocity na binigay natin sa bola. Samakatuwid, masasabi natin na ang pinakamataas na height ng bola ay nakadepende sa initial velocity ng bola.
						</p>
						<br />
						<p>
							At dahil hindi nagbabago ang gravitational acceleration sa pagtaas at pagbaba ng bola, ang pagbagal at pagbilis ng bola midair ay magkapareho ng magnitude. Kaya kapag sinalo natin ang bola sa parehas na position kung saan natin tinapon ang bola, ang oras ng pagtaas ng bola papunta sa pinakamataas na height nito at ang pagbaba nito ay pareho lamang (Perez, 2020).
						</p>
						<br />
						<Flashcard
							current={0}
							cardTitle={"Halimbawa 1"}
							problem={
								<div>
									Si Carlo ay may hawak na feather sa kanyang kaliwang kamay at metal ball naman sa kanyang kanang kamay. Pagkatapos ay sabay niyang binitawan ang dalawang bagay na ito sa kanyang kamay. Ano ang mauuna makakarating sa lupa? (Huwag intindihin ang air resistance)
								</div>
							}
							solution={
								<div>
									Sabay silang makakarating sa lupa dahil ang kanilang acceleration ay parehas na gravitational acceleration.
								</div>
							}
						/>
					</LessonSection>
					<LessonSection>
						<h2>Mga Pormula sa <i>Free Fall</i></h2>
						<hr />
						<p className="time-limit">Inirerekomendang oras para sa bahaging ito: 5 minuto</p>
						<br />
						<p>
							Ang kinematic equations ay ang mga equations na nag-uugnay sa 5 kinematic variables: displacement <Latex>{"$(\\Delta y)$"}</Latex>, time interval <Latex>{"$(\\Delta t)$"}</Latex>, initial velocity <Latex>{"$(v_0)$"}</Latex>, final velocity <Latex>{"$(v_f)$"}</Latex>, at constant acceleration <Latex>{"$(a)$"}</Latex>.
						</p>
						<br />
						<p>
							Ang mga kinematic equations ay maaari nating magamit kung tatlo sa limang kinematic variables ay ibinigay para makahanap ng isang unknown variables. Para sa free fall, ang constant acceleration natin ay magiging equal sa gravitational acceleration or: <Latex>{"$$a = -g = -9.8 \\, m/s^2$$"}</Latex>
						</p>
						<br />
						<p>
							Narito ang mga equations na ating makukuha mula rito:
						</p>
						<br />
						<Latex>{"$$a = \\dfrac{v - v_0}{t} \\rightarrow -g = \\dfrac{v - v_0}{t}$$"}</Latex>
						<Latex>{"$$\\therefore v = v_0 - gt$$"}</Latex>
						<p>
							Ito ang ating equation relating final velocity, initial velocity, at time!
						</p>
						<div className="box">
							<h3 className="box-title">Mahalagang Pormula</h3>
							<p className="center-horizontal">
								<Latex>{"$v=v_0-gt$"}</Latex>
							</p>
						</div>
						<p>
							Ngayon, alam natin na:
						</p>
						<Latex>{"$$\\Delta y = v_{\\text{average}}t$$"}</Latex>
						<p>
							Dahil constant ang ating acceleration na <Latex>{"$a = -g$"}</Latex>:
						</p>
						<Latex>{"$$\\Delta y = \\dfrac{v + v_0}{2}t$$"}</Latex>
						<p>
							Ngayon, i-substitute natin ang <Latex>{"$v = v_0 - gt$"}</Latex> sa equation na ito:
						</p>
						<Latex>{"$$\\Delta y = \\dfrac{v_0 - gt + v_0}{2}t = v_0t - \\dfrac{1}{2}gt^2$$"}</Latex>
						<p>
							Ito ang ating equation relating displacement at initial velocity!
						</p>
						<div className="box">
							<h3 className="box-title">Mahalagang Pormula</h3>
							<p className="center-horizontal">
								<Latex>{"$\\Delta y = v_0t - \\dfrac{1}{2}gt^2$"}</Latex>
							</p>
						</div>
						<p>
							Balikan natin ang ating unang equation na <Latex>{"$v = v_0 - gt$"}</Latex>. I-square natin ang parehong side ng equation:
						</p>
						<Latex>{"$$v^2 = (v_0 - gt)^2 = v_0^2 - 2v_0gt + g^2t^2$$"}</Latex>
						<p>
							Ngayon, obserbahan natin ang mangyayari kung i-multiply natin ng <Latex>{"$-2g$"}</Latex> ang equation na <Latex>{"$\\Delta y = v_0t - \\dfrac{1}{2}gt^2$"}</Latex>:
						</p>
						<Latex>{"$$-2g\\Delta y = -2v_0gt + g^2t^2$$"}</Latex>
						<p>
							Dahil doon, kaya nating i-substitute ito sa <Latex>{"$v^2 = v_0^2 - 2v_0gt + g^2t^2$"}</Latex> para makuha ang:
						</p>
						<Latex>{"$$v^2 = v_0^2 - 2g\\Delta y$$"}</Latex>
						<p>
							Ito naman ang ating equation relating initial velocity, final velocity, at displacement!
						</p>
						<div className="box">
							<h3 className="box-title">Mahalagang Pormula</h3>
							<p className="center-horizontal">
								<Latex>{"$v^2=v_0^2-2g\\Delta y$"}</Latex>
							</p>
						</div>
						<br />
					</LessonSection>
					<LessonSection>
						<h2>Buod ng mga Pormula</h2>
						<hr />
						<p className="time-limit">Inirerekomendang oras para sa bahaging ito: 1 minuto</p>
						<br />
						<p>
							Sa kabuuan, ang mga equations natin sa free fall ay ang mga sumusunod:
						</p>
						<br />
						<div className="box">
							<h3 className="box-title">Mahalagang Pormula</h3>
							<div className="lesson-two-equations">
								<Latex>{"$$v = v_0 - gt$$"}</Latex>
								<Latex>{"$$\\Delta y = \\dfrac{(v + v_0)t}{2}$$"}</Latex>
								<Latex>{"$$\\Delta y = v_0t - \\dfrac{1}{2}gt^2$$"}</Latex>
								<Latex>{"$$v^2 = v_0^2 - 2g\\Delta y$$"}</Latex>
							</div>
						</div>
						<br />
						<p>
							Tandaan na ang mga kinematic equations na ito ay gagana lamang sa isang dimension. Sa ating tinalakay, ginamit natin ang y-axis.
						</p>
						<br />
						<Flashcard
							current={0}
							cardTitle={"Halimbawa 2"}
							problem={
								<div>
									Si Caleb ay naghulog ng basketball. Nakararanas ang basketball ng free fall na tumagal ng <Latex>{"$2.5 \\, s$"}</Latex> sa ere. Ano ang velocity ng basketball nang ito’y tumama sa lupa?
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
						<h2>Pagsasanay</h2>
						<hr />
						<div className="prac-problems-container">
							<PracticeProblem
								current={0}
								problem={
									<div>
										Nagpalipad ang mga estudyante ng bottle rocket pataas. Kung ito ay may initial velocity na <Latex>{"$30 \\, m/s$"}</Latex>, at may mass ito na <Latex>{"$1 \\, kg$"}</Latex>, ano ang maximum height nito?
									</div>
								}
								cardTitle={"Pagsasanay 1"}
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
						<h2>Mga Mahihirap na Pagsasanay</h2>
						<hr />
						<div className="prac-problems-container">
							<PracticeProblem
								current={0}
								problem={
									<div>
										Si Rocky ay nagtapon ng ping pong ball pataas at noong pabagsak na an ping pong ball, pumasok ito sa isang plastic cup na nakapatong sa lamesa. Ang kamay ni Rocky noong hinagis niya ang ping pong ball ay <Latex>{"$50.0 \\ \\textrm{m}$"}</Latex> above sa plastic cup.  Kung ang velocity ng ping pong ball ay <Latex>{"$60.0 \\ \\textrm{m/s}$"}</Latex> nang ito’y lumapag sa plastic cup, ano ang initial velocity ng ping pong ball nung tinapon ito ni Rocky?
									</div>
								}
								cardTitle={"Pagsasanay 1"}
								answer={<Latex>{"$51.2 \\ \\textrm{m/s}$"}</Latex>}
								solution={
									<div>
										<p>Ang height ng ping pong ball ay ibinibigay ng equation na <Latex>{"$y - 50 = v_0t - \\dfrac{1}{2}gt^2$"}</Latex>, habang ang velocity nito ay ibinibigay naman ng equation na <Latex>{"${v = v_0 - gt}$"}</Latex>. Tatama ang ping pong ball sa plastic cup kapag naging <Latex>{"$0$"}</Latex> ang <Latex>{"$y$"}</Latex>. Gamit ang quadratic formula:</p>
										<Latex>{"\\[t = \\dfrac{-v_0 + \\sqrt{v_0^2 - 4\\left(-\\dfrac{1}{2}g\\right)(50)}}{2\\left(-\\dfrac{1}{2}g\\right)} = \\dfrac{v_0 + \\sqrt{v_0^2 + 100 g}}{g}\\]"}</Latex>
										<p>Samakatuwid, magiging <Latex>{"$-60 \\ \\textrm{m/s}$"}</Latex> ang <Latex>{"$v$"}</Latex> sa <Latex>{"$t = \\dfrac{v_0 + \\sqrt{v_0^2 + 100g}}{g}$"}</Latex>. Gamit ang ating equation para sa velocity:</p>
										<Latex>{"$$\\begin{align*} -60 \&= v_0 - g \\cdot \\dfrac{v_0 + \\sqrt{v_0^2 + 100g}}{g} = - \\sqrt{v_0^2 + 100g} \\\\ 3600 \&= v_0^2 + 100g \\\\ v_0 \&= \\sqrt{3600 - 100g} \\approx 51.2 \\ \\textrm{m/s} \\end{align*}$$"}</Latex>
									</div>
								}
							/>
						</div>
					</LessonSection>
					<LessonSection>
						<h2>Eksperimento</h2>
						<hr />
						<p>
							Panoorin ang paghulog ng eraser sa baba. Kung hinulog ang eraser mula sa taas na <Latex>{"$3 \\, m$"}</Latex>, gaano katagal ito mahuhulog hanggang marating ito ang lupa?
						</p>
						<br />
						<img src="./media/confirmatory.gif" alt="" className="confirmatory" />
						<br />
						<p>
							Ayon sa video, tama ba ang iyong sagot? Kung hindi, bakit kaya? Ano ang pwedeng paliwanag para rito? Pagnilayan.
						</p>
					</LessonSection>
					<LessonSection>
						<h2>Mga Sanggunian</h2>
						<hr />
						<p>
							<i>Illustration - to fall (tomber).gif</i>. (2009). https://commons.wikimedia.org/wiki/File:Illustration_-_to_fall_(tomber).gif
						</p>
						<br />
						<p>
							Khan Academy. (2018). [Diagram of velocity in free fall]. https://www.khanacademy.org/science/in-in-class11th-physics/in-in-class11th-physics-motion-in-a-straight-line/in-in-class11-objects-in-freefall/a/freefall-ap1
						</p>
						<br />
						<p>
							Piping Designer. (2016). [Diagram of an object undergoing free fall]. https://www.piping-designer.com/index.php/properties/classical-mechanics/384-gravitational-acceleration
						</p>
						<br />
						<p>
							Perez, R. M. M. (2020). <i>1D FREE FALL - POSITION, VELOCITY, AND ACCELERATION OF A FREE FALLING OBJECT</i> [Module]. Moodle. https://khub.mc.pshs.edu.ph/
						</p>
						<div className="end-of-lesson-btn-container">
							<button className={"end-of-lesson-btn"} type="button" onClick={() => {
								setCurScreen('lesson1');
							}}>Previous lesson!</button>
							<button className={"end-of-lesson-btn"} type="button" onClick={() => {
								setCurScreen('home');
							}}>Back to homepage!</button>
						</div>
					</LessonSection>
				</LessonPage>
			);
		}
	}


	return (
		<>
			<StandardHeader curScreen={curScreen} setCurScreen={setCurScreen} />
			{goTo()}
			<StandardFooter curScreen={curScreen} setCurScreen={setCurScreen} />
		</>
	);
}


export default App;


{/*
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⠖⠀⠀⢀⣨⣤⡤⠶⠶⠶⠶⢦⣤⣤⣀⠐⠢⢤⣀⠀⠀⠀⠀⠀⠀⠀⡆⣿⠀⠀⣀⠈⢷⡘⣷⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡴⠚⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠓⠦⣌⡙⠶⣄⠀⠀⠀⢠⠀⣿⠀⢠⡇⠀⠈⡇⢸⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠶⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠷⣌⠻⣦⣠⠏⣸⠃⢀⣎⡇⠀⢠⡇⣼⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠞⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡀⢀⡴⠶⣄⠀⠀⠀⠀⠈⠳⣌⡙⢰⠇⢀⣾⠟⠛⢳⡼⢁⠋⠀⠀⠀⠀⠀
⠀⠰⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⡏⠀⠀⠀⠓⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⠙⠻⢤⣀⣈⣷⡚⠛⠲⠦⣄⣨⣿⡟⢠⡿⠁⢀⣴⠟⢡⠎⠀⠀⠀⠀⠀⠀
⠀⠀⠹⡏⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠞⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣼⣧⡀⠀⠀⠀⠉⠉⠳⣄⠀⠈⠙⣿⢁⣿⣥⣶⡟⢁⣠⡤⠔⠒⠒⠒⠒⠀⠀
⠀⠀⠀⢻⣦⡀⣀⡀⠀⠀⠀⠀⠀⣠⡴⠛⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣴⣿⣏⡁⢎⠻⠶⣦⣄⠀⠀⠀⠈⣧⠀⠀⣿⣼⡿⣿⣿⠟⠋⢁⣀⠀⠀⠀⠀⠀⠀⣀
⠀⠀⠀⠀⢿⡁⠉⠉⠉⠁⢀⣴⠞⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣴⣟⣛⡛⠉⣿⡻⢷⣶⣾⡶⣿⢷⡄⠀⠀⢸⡷⣦⣸⣿⣿⣶⣿⣶⣾⣿⣦⠀⢀⣀⡤⠖⠋⠁
⠀⠀⠀⠀⠈⢷⡀⠀⠀⢠⣿⡅⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣴⣾⣿⣿⣿⣿⣿⣶⣿⣷⣄⠙⢯⡉⠙⠛⠛⢦⣄⡋⢛⠀⢻⠋⣠⡟⢸⣿⣋⣀⣼⣶⡟⢥⡖⠋⠁⠀
⠀⠀⠀⠀⠀⠈⡇⠀⠀⣿⠋⢻⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣴⡾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡀⠙⠒⠒⠒⠂⠻⣿⣺⠀⣼⠟⠉⢀⣼⣿⣿⣿⣿⣙⢿⡌⢷⡀⠀⠀
⠀⠀⠀⠀⠀⠀⣇⠀⠀⢸⣦⣌⣻⣷⣤⣄⣀⠀⠀⣀⣤⣶⣾⣿⣿⣿⣶⣿⣿⣿⣿⣿⣿⣿⣽⣿⣿⣏⣹⣿⣦⡀⠀⢀⣤⡴⠛⢿⡞⠃⠀⢠⣾⣧⣅⡀⠸⣿⣿⣾⢳⡄⢳⣄⠀
⠀⠀⠀⠀⠀⠀⠙⠷⣤⣄⣉⠻⠿⣶⣤⣭⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⠏⢀⡴⠿⠿⢶⣾⣋⠁⠀⠈⢳⣄⣿⣿⣿⣧⣿⡆⢸⢠
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢨⡿⣠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠀⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢁⡴⠛⠃⣀⠀⠀⠙⡇⢀⣀⣀⣈⣿⣿⣿⣿⣿⣿⠇⣼⣻
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠞⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠗⠶⠦⢼⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣾⣿⣿⣿⣿⣿⣷⣤⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⢁⡼⣹⣿
⣤⣤⡀⠀⠀⢀⣤⣴⠞⠋⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠀⠀⠀⠺⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠁⠀⠈⣸⣿⣿
⣿⣿⣿⣷⠞⢉⡽⠁⠀⠀⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⠏⠀⢀⣠⣤⣤⣀⠉⢪⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡅⠀⠀⠀⠀⣿⣿⣿
⣿⠿⠋⠀⢀⠞⠀⠀⠀⢠⣾⣿⣿⣿⣿⣿⣿⠟⣹⣥⡀⣰⣿⡿⠁⠀⠀⢩⣾⣿⣿⡙⠿⣦⣍⠈⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⢻⡿⢸
⠀⠀⠀⢠⠏⠀⠠⠤⠾⠿⠛⣿⣿⣿⣿⣿⣿⣰⣟⣿⣾⠟⠉⠀⠀⠀⠀⠀⣿⣟⣿⡟⠓⠺⢿⣿⠦⠞⣿⣿⣿⣿⣿⣿⣿⡟⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠈⠃⠘
⠀⠀⢠⠏⠀⠀⠀⣠⠶⠆⢸⡿⢻⣿⣿⣿⣿⣿⡟⣿⣟⠀⠀⠀⠀⠀⠀⠀⠹⣿⣻⡟⣀⡀⠚⠁⠀⠀⣿⣿⣿⣿⣿⣿⣯⣤⡈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⢀⣀⠀
⠀⢠⠏⠀⠀⣠⠞⠁⠀⠀⢸⡇⠀⢻⣿⣿⣿⣧⠁⣻⣿⣷⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠉⠀⠀⠀⠀⢀⣿⠃⢹⣿⣿⣿⣡⣾⡇⢸⣿⣿⣿⣿⣿⣿⣿⡿⣿⣧⡀⠀⠀⠀⣾⣿⣿
⢀⠏⢀⡠⠞⠉⠀⠀⠀⠀⠘⠃⠁⢸⣿⣿⣿⣿⠀⠉⣹⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡾⣁⢠⣾⣿⣿⣿⣿⠛⣰⣿⣿⣿⣿⣿⣿⣿⣿⠁⠈⠉⠛⠒⢀⣴⣿⣿⣿
⢞⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠚⣱⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⠟⣿⠁⠀⠀⠀⠀⠁⣸⣿⣿⣿⣿
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡾⠿⠛⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⠟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢃⣤⣘⠇⠀⠀⣰⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠋⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢸⣿⠙⠛⠛⠻⠛⣀⣽⡿⣿⢿⣿⠿
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣿⣿⣿⠙⢧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⠟⠀⠀⣠⣾⣿⣿⣿⡟⠙⣿⣿⣿⠻⣿⣷⠸⠿⠶⠶⠶⣦⣄⠁⠂⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⡟⣿⣿⣧⠀⠻⣄⠀⠀⠀⠀⠀⠀⠀⢀⣠⡴⠏⠁⠀⠀⢀⢿⣿⣿⣿⣿⠇⠀⢹⣿⢿⣶⣾⣿⡶⠖⠒⠒⠲⣆⢻⣆⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⠁⠀⠀⠘⣦⡀⠀⢀⣀⣴⣾⠿⣅⠀⠀⠀⠀⠀⠀⣸⣿⣿⣟⠁⢀⣀⣠⣿⡿⠟⠋⠁⠀⠀⠀⠀⠀⠹⣆⠻⣦⡀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⠟⢻⣿⢻⡄⠀⠀⠀⠈⣙⣛⣻⣭⣴⠶⡛⢿⡆⠀⠀⠀⢀⣼⡿⢿⣿⣿⣟⣿⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠳⣬⡙⠂⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣧⣸⣧⣿⡥⠖⠒⠋⠉⠉⣡⣾⠏⣡⣤⣯⣿⣿⣤⣶⣾⡿⣿⣿⣞⣿⣿⣿⠏⠀⠀⠀⢀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⡈⠙⠓⠲⢦⠀
⠀⠀⠀⠀⠀⠀⠀⠘⠶⣶⢤⠤⠤⠤⣶⣾⢿⣿⡇⠀⠀⠀⠀⢀⣾⠟⠀⠀⣿⣿⠿⢿⡿⠚⠋⢹⠀⣿⡇⣿⡟⢉⣟⣠⣤⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣭⣉⣀⠀⠈⢠
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠓⠲⠾⢿⣀⣼⣿⠧⣶⣶⣶⣿⣿⣿⡀⠀⢠⣿⡏⠀⢸⡇⠀⠀⢸⡆⢻⣿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡷⠆⣼
⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⣠⣄⡀⣹⠟⣠⡾⠛⣻⣿⣿⣿⣿⣿⣀⣼⠏⠀⠀⣾⠀⠀⠀⢸⣇⣼⣿⣿⣯⠄⡌⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⡿⣿⠃⣼⣿
⠀⠀⠀⠀⠀⠀⠀⠀⠸⣧⣀⣠⣿⡙⣛⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠀⣼⣧⣤⣶⣿⣿⣿⣿⣿⣿⡇⣀⣰⣞⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⣸⣿⣿
*/
}