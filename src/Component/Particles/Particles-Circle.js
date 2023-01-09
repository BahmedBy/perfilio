import {loadFull} from "tsparticles";
import {useCallback} from "react";
import Particles from "react-tsparticles";
import {useSelector} from "react-redux";
import './ParticlesCircle.css'
export  default function  ParticlesCircle () {
    const theme=useSelector(state => state.theme.val)
    let light={circl:"#010721",background:"rgba(248,248,248,0.99)",links:"#a8a8fa"}
    let dark={circl:"#303069",
        background:"rgb(0, 3, 10)",
        links:"#a8a8fa"}
    const Ptheme=theme==="light"?light:dark
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <Particles className="ParticlesCircle"
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fullScreen:false,

                background: {
                    color: {
                        value: Ptheme.background,
                    },

                },
                fpsLimit: 30,
                interactivity: {

                    modes: {
                        push: {
                            quantity: 2,
                        },
                        repulse: {
                            distance: 400,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: Ptheme.circl,
                    },
                    links: {
                        color: Ptheme.links,
                        distance: 450,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: false,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: true,
                        speed: 1.5,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 600,

                        },
                        value: 20,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 3, max: 9 },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};