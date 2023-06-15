import './aboutme.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import myImage from "../../assets/images/20220929_172929.jpg";

const ABOUT = () => {
    return (
		<Container>
			<h2 className="title">About Me</h2>
			<Row>
				<Col md={5} lg={4} className="profile-div">
					<img
						src={myImage}
						alt="profile"
						className="profile"
                        height={400}
                        width={300}
					/>
				</Col>
				<Col md={7} lg={8} className="profile-div">
					<div className="description">
						<p>
							Hello and welcome to my portfolio. I am
							Stephen Castillo, a seasoned system
							administrator and software developer with
							over 9 years of experience in the tech
							industry. My expertise in managing and
							maintaining complex IT infrastructure,
							combined with my passion for coding and
							developing innovative solutions, makes me a
							valuable asset to any organization.
						</p>
						<p>
							I've spent the past 8 years honing my skills
							as a system administrator, working with a
							variety of technologies to ensure smooth and
							secure operations for my clients. In my most
							recent role, I led a team of administrators
							in managing and maintaining a large-scale
							enterprise network.
						</p>
						<p>
                            In addition to my experience in system administration, I've also had the opportunity to work on software development projects for the past year. This experience has allowed me to bring a unique perspective to my work and has allowed me to bridge the gap between IT operations and software development.
                        </p>
						<p>
                            I am constantly seeking new challenges and opportunities to expand my skill set and bring added value to my clients. I'm confident that my combination of technical skills, leadership experience, and passion for technology make me a great fit for any organization looking to enhance its IT operations and bring its software development initiatives to the next level.
                        </p>
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default ABOUT;
