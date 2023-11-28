/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

const Section = ({ title, items }) => {
   const itemsArray = items.map((item,index) =><li key={index}>{item}</li>)
    return (
        <section>
            <h1>{title}</h1>
            <ul>{itemsArray}</ul>
        </section>
    );
}

export default Section;