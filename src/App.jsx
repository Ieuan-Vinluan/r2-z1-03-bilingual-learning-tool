import React, { useState } from "react";
import "./css/App.css";
import HomeScreen from "./HomeScreen";
import LessonPage from "./LessonPage";
import StandardHeader from "./StandardHeader";
import StandardFooter from "./StandardFooter";
import Latex from "react-latex-next";
import "katex/dist/katex.min.css";

function App() {
	const [curScreen, setCurScreen] = useState("home");
	function goTo() {
		if (curScreen == "home") {
			document.title = "Homepage";
			return <HomeScreen setCurScreen={setCurScreen} />;
		} else if (curScreen == "lesson1") {
			document.title = "Lesson 1";
			return (
				<LessonPage setCurScreen={setCurScreen}>
					<h1>Lesson 1: Uniformly Accelerated Motion</h1>
					<h2>Pagpapakilala</h2> <br />
					<p>
						Bago tayo nagsimula, panoorin muna natin ang short video
						na ito.
					</p>
					<div className="iframe-container">
						<iframe
							width="560"
							height="315"
							src="https://www.youtube.com/embed/UWMBj-uD37Y?si=sY2E-kF_TCoN-7Nr"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowfullscreen
						></iframe>
					</div>
					<p>
						Sa short video na ito, makikita natin ang pagbagsak ng
						dahon sa tubig. Ano ang mapapansin niyo sa pagbagsak ng
						dahon? At sa tingin niyo, bakit ganoon ang pagbagsak ng
						dahon? <br />
						<br /> Sa ating mundo, araw-araw tayong nakakakita ng
						motion sa mga tao at bagay sa ating paligid. Pwede itong
						maging mabilis, mabagal, nakahinto, pabilis ng pabilis,
						at iba pa. So to differentiate and describe motion?
						Siyempre, gagamit tayo ng Physics.
					</p>
					<br />
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
							frameborder="0"
						></iframe>
					</div>
					<p>
						Gawin ang sumusunod:
						<ul className="task-list">
							<li>
								<input type="checkbox" name="meow" id="" onChange={console.log("CLICKEDDDD")}/>
								Panatilihin ang position ng tao sa 0 meters
							</li>
							<li>
								<input type="checkbox" name="meow" id="" />
								Lagyan ng 2 m/s na velocity ang tao at pindutin
								ang play button
							</li>
							<li>
								<input type="checkbox" name="meow" id="" />
								Ireset ang simulation at lagyan naman ng 4 m/s
								ang velocity ang tao at pindutin ang play button
							</li>
							<li>
								<input type="checkbox" name="meow" id="" />
								Ireset ang simulation muli at lagyan ng 1 m/s2
								ang acceleration ng tao at pindutin ang play
								button. Pansinin ang mangyayari sa velocity ng
								tao
							</li>
						</ul>
					</p>
					<br />
					<p>
						Pagkatapos ito gawin, sagutin ang mga sumusunod na
						tanong:
					</p>
					<br />
					<p>
						Ang paggalaw o motion ng tao sa simulation ay may
						kinalaman sa isang branch ng Physics na tinatawag na
						mechanics. Sa ilalim ng mechanics ay may dalawang
						bahagi, kinematics at dynamics. Pero para sa lesson na
						ito, magpopokus tayo sa kinematics.
					</p>
					<br />
					<h2>Kinematics</h2>
					<br />
					<div className="box">
						<p>
							Ang kinematics ay isang parte ng mechanics na
							nagpapaliwanag sa paggalaw ng mga bagay, without
							considering the forces acting upon it.
						</p>
					</div>
					<br />
					<h3>Position</h3>
					<br />
					<p>
						Sa pagpapaliwanag ng paggalaw o motion, kailangan din
						natin ipakita ang position ng isang bagay. Gawin nating
						halimbawa ang simulation na ating ginagamit kanina,
						makikita natin na nag-iba ang position ng tao kapag siya
						ay naglalakad from one position to another.
					</p>
					<br />
					<p>
						Ang lahat ng linakad ng tao from their original position
						para makarating sa kanyang final position ay tinatawag
						na distance. Ito ay isang scalar unit, kaya ito ay may
						magnitude (na laging positive) lamang. Ang magnitude ng
						distance ay ang kabuuang haba ng daan na tinahak ng
						isang bagay.
					</p>
					<br />
					<p>
						Pero kapag hinahanap lang natin ay ang difference ng
						original position at final position ng tao, ito ay
						tinatawag natin na displacement. Ito ay isang vector
						unit, kaya ito ay may parehong magnitude at direction.
						Ang magnitude ng displacement ay ang pinakamaikling
						distance from the original position to the final
						position of an object, habang ang direction naman ay
						nakaturo mula sa initial position towards the final
						position. Para sa one-dimensional motion:
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
						Sa simulation, ang kanan o east direction ay positive
						sign. Kaya nung naglakad yun tao sa papunta sa kanan na
						pader, ang sign ng kanyang displacement vector ay
						positive. Pero kung naglakad siya papunta sa kaliwang
						pader, ang sign ng kanyang displacement vector ay
						negative.
					</p>
					<br />
					<p>
						Dahil ang displacement ang pinakamaikling distance ng
						initial at final positions ng isang bagay, ito ay isang
						straight line lamang habang ang distance naman ay
						nakadepende sa dadaanan ng isang bagay at hindi ito
						palagi sang straight line. Ang SI unit para sa distance
						at displacement ay meters (m).
					</p>
					<br />
					<p>VIDEO HERE</p>
					<br />
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
