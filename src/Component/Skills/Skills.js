import './skills.css'

const technit = ["Java", "Python", "Javascript", "Typescript", "Nodejs", "Reactjs", "Spring Boot", "ExpressJs", "SQL", "Mongodb"]

function importAll(r) {
    let images = {};
    r.keys().map(item => {
        images[item.replace('./', '')] = r(item);
    });
    return images;
}

const images = importAll(require.context('../../Icons', false, /\.svg/));
export default function Skills({re}) {

    return (<div className='section' ref={re}>
        <div>
            <p className="section_title titls">My Technique Skills</p>
        </div>

        <div className='skills-container'>
            {technit.map(e => {
                return <Tech name={e}/>
            })}
        </div>
    </div>)
}

function Tech({img, name}) {
    return (<div className='Tech'>
        <img src={images[name + '.svg']} alt='' className='icon'/>
        <span>{name}</span>
    </div>)
}