import React from 'react'
import * as THREE from 'three'
import icon from '../../assets/icon_sm.png'
import Grid from "@material-ui/core/Grid";
import {withStyles} from "@material-ui/core";
import {MapControls} from 'three/examples/jsm/controls/OrbitControls.js';
import {GoogleOutlined, LogoutOutlined, ToolOutlined} from '@ant-design/icons'
import Button from "@material-ui/core/Button";

function MapCreation(props) {

    let camera, controls, scene, renderer;

    init();
    //render(); // remove when using next line for animation loop (requestAnimationFrame)
    animate();

    function init() {

        scene = new THREE.Scene();
        scene.background = new THREE.Color(0xcccccc);

        renderer = new THREE.WebGLRenderer({antialias: true});
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight - 110);
        document.body.appendChild(renderer.domElement);

        camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000000);
        camera.position.set(400, 200, 0);

        // controls

        controls = new MapControls(camera, renderer.domElement);

        //controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)

        controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
        controls.dampingFactor = 0.08;

        controls.screenSpacePanning = true;

        controls.minDistance = 500;
        controls.maxDistance = 500;

        controls.maxPolarAngle = Math.PI / 100000;

        // world

        const geometry = new THREE.BoxBufferGeometry(1, 1, 1);
        geometry.translate(0, 0.5, 0);
        const material = new THREE.MeshPhongMaterial({color: 0xff0000, flatShading: true});

        for (var i = 0; i < 500; i++) {

            const mesh = new THREE.Mesh(geometry, material);
            mesh.position.x = Math.random() * 1600 - 800;
            mesh.position.y = 0;
            mesh.position.z = Math.random() * 1600 - 800;
            mesh.scale.x = 20;
            mesh.scale.y = 0.1
            mesh.scale.z = 20;
            mesh.updateMatrix();
            mesh.matrixAutoUpdate = false;
            scene.add(mesh);

        }

        // lights

        const light = new THREE.DirectionalLight(0xffffff);
        light.position.set(1, 1, 1);
        scene.add(light);

        const light2 = new THREE.DirectionalLight(0x002288);
        light2.position.set(-1, -1, -1);
        scene.add(light2);

        const light3 = new THREE.AmbientLight(0x222222);
        scene.add(light3);

        //

        window.addEventListener('resize', onWindowResize, false);

    }

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight - 110);

    }

    function animate() {

        requestAnimationFrame(animate);

        controls.update(); // only required if controls.enableDamping = true, or if controls.autoRotate = true

        render();

    }

    function render() {

        renderer.render(scene, camera);

    }

    const classes = props.classes;
    return (
        <div>
            <div className={classes.topBuffer}>
                <img src={icon} className={classes.image} alt={'xx'}/>
            </div>
            <div className={classes.ui}>
                <Grid container direction="row" justify="space-evenly" alignItems="center">
                    <Grid item className={classes.item} xs>
                        <Button className={classes.buttons}>
                            <LogoutOutlined className={classes.icon}/>
                        </Button>
                    </Grid>
                    <Grid item className={classes.item} xs>
                        <Button className={classes.buttons}>
                            <GoogleOutlined className={classes.icon}/>
                        </Button>
                    </Grid>
                    <Grid item className={classes.item} xs>
                        <Button className={classes.buttons}>
                            <ToolOutlined className={classes.icon}/>
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

const styles = {
    topBuffer: {
        height: '55px'
    },
    ui: {
        zIndex: 1,
        position: 'absolute',
        bottom: '0px',
        height: '55px',
        width: '100%'
    },
    image: {
        height: '42px',
        marginLeft: '50%',
        transform: 'translateX(-50%)',
        marginTop: '6px'
    },
    item: {
        textAlign: 'center',
        height: '55px'
    },
    icon: {
        marginTop: '3px',
        fontSize: '30px'
    },
    buttons: {
        width: '100%',
        height: '55px'
    }
};

export default withStyles(styles)(MapCreation)
