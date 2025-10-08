import React from "react"
import Section from "./Section"
import './FeaturedSection.scss'
// Images for featured section
import dispImg1 from '../../assets/pictures/display_pic_1.png'
import dispImg2 from '../../assets/pictures/display_pic_2.png'
import dispImg3 from '../../assets/pictures/display_pic_3.png'

const FeaturedSection = () => {
    const featuredData = [
        {
        id: 1,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: dispImg1,
        alt: 'Display image 1'
        },
        {
        id: 2,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: dispImg2,
        alt: 'Display image 2'
        },
        {
        id: 3,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: dispImg3,
        alt: 'Display image 3'
        }
    ];

    const sections = featuredData.map((item) => ({
        left: (
            <div className="featured-text">{item.text}</div>
        ),
        right: (
            <div className="featured-image">
                <img src={item.image} alt={item.alt} />
            </div>
        ),
    }));

    return (
        <div className='overflow-x-hidden'>
            <section className="featured-container">
                {sections.map((s, i) => (
                  <Section key={i} leftContent={s.left} rightContent={s.right} />
                ))}
            </section>
        </div>
    );
}

export default FeaturedSection;