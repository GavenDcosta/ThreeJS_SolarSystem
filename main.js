import * as THREE from 'three'                                              
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js' 

import sunTexture from './assets/sun.jpg'
import starTexture from './assets/stars.jpg'
import earthTexture from './assets/earth.jpg'
import jupiterTexture from './assets/jupiter.jpg'
import marsTexture from './assets/mars.jpg'
import mercuryTexture from './assets/mercury.jpg'
import neptuneTexture from './assets/neptune.jpg'
import plutoTexture from './assets/pluto.jpg'
import saturnTexture from './assets/saturn.jpg'
import saturnRingTexture from './assets/saturn ring.png'
import uranusTexture from './assets/uranus.jpg'
import uranusRingTexture from './assets/uranus ring.png'
import venusTexture from './assets/venus.jpg'

const renderer = new THREE.WebGL1Renderer()                 
renderer.setSize(window.innerWidth,window.innerHeight)    
document.body.appendChild(renderer.domElement) 
const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(      
    65,                                          
    window.innerWidth / window.innerHeight,     
    0.1,                                        
    1000                                        
)

camera.position.set(128, 120, 0) 

const orbit = new OrbitControls(camera, renderer.domElement)                               
orbit.update() 


const ambientLight = new THREE.AmbientLight(0x333333)                 
scene.add(ambientLight)                                                

const pointLight = new THREE.PointLight(0x545454,15000)               
scene.add(pointLight)


const cubeTextureLoader = new THREE.CubeTextureLoader()          
scene.background = cubeTextureLoader.load([                     
    starTexture, 
    starTexture,
    starTexture,
    starTexture,
    starTexture,
    starTexture
])

const textureLoader = new THREE.TextureLoader()                   



const sunGeo = new THREE.SphereGeometry(16, 30, 30)                
const sunMat = new THREE.MeshBasicMaterial({                       
    map: textureLoader.load(sunTexture)
})
const sun = new THREE.Mesh(sunGeo, sunMat)                         
scene.add(sun)


const mercuryGeo = new THREE.SphereGeometry(3.2, 30, 30)             //Mercury 
const mercuryMat = new THREE.MeshStandardMaterial({                  
        map: textureLoader.load(mercuryTexture)                        
    })
const mercury = new THREE.Mesh(mercuryGeo, mercuryMat)
const mercuryObj = new THREE.Object3D()                            
mercuryObj.add(mercury)                                               //adding an object to the scene and adding mercury to that object 
scene.add(mercuryObj)                                               
mercury.position.x = 28


const venusGeo = new THREE.SphereGeometry(5.8, 30, 30)            //Venus
const venusMat = new THREE.MeshStandardMaterial({                  
        map: textureLoader.load(venusTexture)                        
    })
const venus = new THREE.Mesh(venusGeo, venusMat)
const venusObj = new THREE.Object3D()                            
venusObj.add(venus)                                               
scene.add(venusObj)                                               
venus.position.x = 44      
    




const earthGeo = new THREE.SphereGeometry(6, 30, 30)            //Earth
const earthMat = new THREE.MeshStandardMaterial({                  
        map: textureLoader.load(earthTexture)                        
    })
const earth = new THREE.Mesh(earthGeo, earthMat)
const earthObj = new THREE.Object3D()                            
earthObj.add(earth)                                               
scene.add(earthObj)                                               
earth.position.x = 62  





const marsGeo = new THREE.SphereGeometry(4, 30, 30)            //Mars
const marsMat = new THREE.MeshStandardMaterial({                  
        map: textureLoader.load(marsTexture)                        
    })
const mars = new THREE.Mesh(marsGeo, marsMat)
const marsObj = new THREE.Object3D()                            
marsObj.add(mars)                                               
scene.add(marsObj)                                               
mars.position.x = 78  





const jupiterGeo = new THREE.SphereGeometry(12, 30, 30)            //Jupiter
const jupiterMat = new THREE.MeshStandardMaterial({                  
        map: textureLoader.load(jupiterTexture)                        
    })
const jupiter = new THREE.Mesh(jupiterGeo, jupiterMat)
const jupiterObj = new THREE.Object3D()                            
jupiterObj.add(jupiter)                                               
scene.add(jupiterObj)                                               
jupiter.position.x = 100 



const neptuneGeo = new THREE.SphereGeometry(7, 30, 30)          //Neptune
const neptuneMat = new THREE.MeshStandardMaterial({            
            map: textureLoader.load(neptuneTexture)   
        })
const neptune = new THREE.Mesh(neptuneGeo, neptuneMat)
const neptuneObj = new THREE.Object3D()                           
neptuneObj.add(neptune)
scene.add(neptuneObj)                                                 
neptune.position.x = 200               





const plutoGeo = new THREE.SphereGeometry(2.8, 30, 30)          //Pluto
const plutoMat = new THREE.MeshStandardMaterial({            
            map: textureLoader.load(neptuneTexture)   
        })
const pluto = new THREE.Mesh(plutoGeo, plutoMat)
const plutoObj = new THREE.Object3D()                           
plutoObj.add(pluto)
scene.add(plutoObj)                                                 
pluto.position.x = 216 



const saturnGeo = new THREE.SphereGeometry(10, 30, 30)          //Saturn
const saturnMat = new THREE.MeshStandardMaterial({            
            map: textureLoader.load(saturnTexture)   
        })
const saturn = new THREE.Mesh(saturnGeo, saturnMat)
const saturnObj = new THREE.Object3D()                           
saturnObj.add(saturn)
scene.add(saturnObj)                                               
saturn.position.x = 138               


const saturnRingGeo = new THREE.RingGeometry(10, 20,32)       //Saturn Ring  (inner radius, outer radius)
const saturnRingMat = new THREE.MeshBasicMaterial({            
        map: textureLoader.load(saturnRingTexture),   
        side: THREE.DoubleSide                        
    })
const saturnRing = new THREE.Mesh(saturnRingGeo, saturnRingMat)                  
saturnObj.add(saturnRing)                                                
saturnRing.position.x = 138   
saturnRing.rotateX(-0.5*Math.PI)
    
    


    

const uranusGeo = new THREE.SphereGeometry(7, 30, 30)          //Uranus
const uranusMat = new THREE.MeshStandardMaterial({            
            map: textureLoader.load(uranusTexture)   
        })
const uranus = new THREE.Mesh(uranusGeo, uranusMat)
const uranusObj = new THREE.Object3D()                           
uranusObj.add(uranus)
scene.add(uranusObj)                                                 
uranus.position.x = 176               


const uranusRingGeo = new THREE.RingGeometry(7, 12)       //Uranus Ring  (inner radius, outer radius)
const uranusRingMat = new THREE.MeshBasicMaterial({            
        map: textureLoader.load(uranusRingTexture),   
        side: THREE.DoubleSide                        
    })
const uranusRing = new THREE.Mesh(uranusRingGeo, uranusRingMat)                  
uranusObj.add(uranusRing)                                                
uranusRing.position.x = 176   
uranusRing.rotateX(-0.5*Math.PI)



function animate(){               
    
    sun.rotateY(0.004)   


    
    mercury.rotateY(0.004)  
    mercuryObj.rotateY(0.04)  

    saturn.rotateY(0.038)
    saturnObj.rotateY(0.0009) 

    venus.rotateY(0.002)
    venusObj.rotateY(0.015)

    earth.rotateY(0.02)
    earthObj.rotateY(0.01)

    mars.rotateY(0.018)
    marsObj.rotateY(0.008)

    jupiter.rotateY(0.04)
    jupiterObj.rotateY(0.002)

    uranus.rotateY(0.03)
    uranusObj.rotateY(0.0004)

    neptune.rotateY(0.032)
    neptuneObj.rotateY(0.0001)

    pluto.rotateY(0.008)
    plutoObj.rotateY(0.00007)



    renderer.render(scene,camera) 
}

renderer.setAnimationLoop(animate)                                 


window.addEventListener('resize',function(){                       
    camera.aspect = window.innerWidth / this.window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
})


