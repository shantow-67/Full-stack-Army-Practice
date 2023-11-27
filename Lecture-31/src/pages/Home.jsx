
import Layout from '../components/layout/Layout';
import Section from '../components/section/Section';

function Home() {
    const experiences = [
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, sed.',
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, sed.',
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, sed.',
];

const educations = [
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, sed.',
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, sed.',
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, sed.',
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, sed.',
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, sed.',
];
    return (
        <div>
            <Layout>
                <Section title="Experiences" items={experiences}/>
                <Section title="Education" items={educations}/>
            </Layout>
        </div>
    );
}

export default Home;