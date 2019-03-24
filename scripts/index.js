const work_history = [

]

class Experience {
    constructor(attributes){
        this.title = attributes.title;
        this.period = attributes.period;
        this.employer = attributes.employer;
        this.description = attributes.description;
    }
}

class Project {
    constructor(attributes){
        this.title = attributes.title;
        this.demo = attributes.demo;
        this.git = attributes.git;
    }
}

const content = {
    navigation: {
        label: {
            'h1-name': 'Duc Vu',
            'h2-occupation': 'Software Developer'
        },
        anchors: ['About', 'Project', 'Experience', 'Contact']
    },
    header: 'Welcome to my personal website, where I showcase my progress of becoming a better software developer.',
    'section-project': [
    ],
    'section-experience': [
        new Experience({
            title: 'Entry Level .Net Engineer',
            period: 'July, 2018 - Present',
            employer: 'Fast Solution Inc.',
            description: 'Working with senior engineers and business analyst to analyze and develope robust .Net applications'
        }),
        new Experience({
            title: 'Software Engineer Internship',
            period: 'January, 2018 - May, 2018',
            employer: 'Fast Solution Inc.',
            description: 'Gained real engineering experience by working with different departments within the company to analyze, create, and enhance different financial applications'
        }),
        new Experience({
            title: 'iOS Front-End Engineer Internship',
            period: 'September, 2018 - September, 2019',
            employer: 'Lilitofu',
            description: 'Worked with a team full of talented interns to create and deploy a new social media iOS mobile app from scratch'
        }),],
    aside: {
        'section-skill': [],
    },
    footer: {
        'section-contact': []
    } 


}
console.log("hi");
let spinner = document.querySelector(".spinner");
console.log(spinner);

let angle = 0;
document.addEventListener('wheel', (e) => {
    // angle++
    if (e.deltaY > 0) {
        angle++;
    } else {
        angle--;
    }
    // console.log(angle);
    // console.log(e);
    spinner.style.transform = `rotate(${angle*10}deg)`;
    // spinner.style.transform = `rotate(10deg)`;
    spinner.style.transition = `transform 0.5s`;
    

})


