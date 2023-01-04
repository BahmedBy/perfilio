import './skilles.css'

const technit=["Java","Python","Javascript","Typescript","Nodejs","Reactjs","Spring Boot","ExpressJs","SQL","Mongodb"]

function importAll(r) {
    let images = {};
    r.keys().map(item => { images[item.replace('./', '')] = r(item); });
    return images;
}
const images = importAll(require.context('../../Icons', false, /\.svg/));
export default function Skilles () {
    console.log(images.length)
    return  (< div className='container'>
        {technit.map(e=>{return <Tech name={e} />})}
    </div>)
}
function Tech({img,name}){
    return(<div>
        <img src={images[name+'.svg']} alt=''/>
        <span>{name}</span>
    </div>)
}