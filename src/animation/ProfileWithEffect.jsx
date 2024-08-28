// src/ProfileWithEffect.js
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const ProfileWithEffect = ({ src }) => {
    const mountRef = useRef(null);

    useEffect(() => {
        let renderer, scene, camera, spotLight, lightHelper;

        function init() {
            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(300, 300);               
            renderer.setAnimationLoop(animate);
            mountRef.current.appendChild(renderer.domElement);

            renderer.shadowMap.enabled = true;
            renderer.shadowMap.type = THREE.PCFSoftShadowMap;

            scene = new THREE.Scene();

            camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
            camera.position.set(3, 3, 3);

            const controls = new OrbitControls(camera, renderer.domElement);
            controls.minDistance = 2;
            controls.maxDistance = 10;
            controls.maxPolarAngle = Math.PI / 2;
            controls.target.set(0, 1, 0);
            controls.update();

            const ambient = new THREE.HemisphereLight(0xffffff, 0x8d8d8d, 0.15);
            scene.add(ambient);

            spotLight = new THREE.SpotLight(0xffffff, 2);
            spotLight.position.set(2.5, 5, 2.5);
            spotLight.angle = Math.PI / 6;
            spotLight.penumbra = 1;
            spotLight.decay = 2;
            spotLight.distance = 50;

            spotLight.castShadow = true;
            spotLight.shadow.mapSize.width = 1024;
            spotLight.shadow.mapSize.height = 1024;
            spotLight.shadow.camera.near = 1;
            spotLight.shadow.camera.far = 10;
            spotLight.shadow.focus = 1;
            scene.add(spotLight);

            lightHelper = new THREE.SpotLightHelper(spotLight);
            scene.add(lightHelper);

            

            const textureLoader = new THREE.TextureLoader();
            const profileTexture = textureLoader.load(src);
            const geometry = new THREE.CircleGeometry(1, 32);
            const material = new THREE.MeshBasicMaterial({ map: profileTexture });
            const mesh = new THREE.Mesh(geometry, material);
            mesh.position.set(0, 0, 0);
            scene.add(mesh);

            window.addEventListener('resize', onWindowResize);
        }

        function onWindowResize() {
            camera.aspect = 1;
            camera.updateProjectionMatrix();
            renderer.setSize(300, 300);                
        }

        function animate() {
            const time = performance.now() / 3000;

            spotLight.position.x = Math.cos(time) * 2.5;
            spotLight.position.z = Math.sin(time) * 2.5;

            lightHelper.update();

            renderer.render(scene, camera);
        }

        init();

        return () => {
            mountRef.current.removeChild(renderer.domElement);
            window.removeEventListener('resize', onWindowResize);
        };
    }, [src]);

    return <div ref={mountRef}></div>;
};

export default ProfileWithEffect;
