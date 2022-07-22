import React, {
    useRef,
    useState,
} from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

var scaling = 1.5;

export function PythonModel({ ...props }) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/python.gltf')

    useFrame(() => {
        group.current.rotation.y += 0.01;
    });

    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    return (
        <group ref={group} {...props} dispose={null} scale={scaling * 0.01}>
            <group rotation={[-Math.PI / 2, 0, 0]} >
                <mesh
                    geometry={nodes.Python_Python_0.geometry}
                    material={materials.Python}
                    onClick={(event) => setActive(!active)}
                    onPointerOver={(event) => setHover(true)}
                    onPointerOut={(event) => setHover(false)} >
                </mesh>
            </group>
        </group>
    )
}

export function DockerModel({ ...props }) {
    const group = useRef()

    useFrame(() => {
        group.current.rotation.y += 0.01;
    });

    const { nodes, materials } = useGLTF('/docker.gltf')
    return (
        <group ref={group} {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={scaling * 0.1}>
                <group position={[4.08, 1.01, 5.9]} rotation={[-0.27, 0.6, 1.93]} />
                <group position={[-1.55, 0, -0.07]} scale={2.73}>
                    <mesh geometry={nodes.Sphere_0.geometry} material={materials.whale} />
                </group>
                <group position={[-3.01, -0.43, 0.66]} scale={0.43}>
                    <mesh geometry={nodes.Cube_0.geometry} material={materials.crate} />
                </group>
                <group position={[-2.03, -0.43, 0.66]} scale={0.43}>
                    <mesh geometry={nodes.Cube001_0.geometry} material={materials.crate} />
                </group>
                <group position={[-1.07, -0.43, 0.66]} scale={0.43}>
                    <mesh geometry={nodes.Cube002_0.geometry} material={materials.crate} />
                </group>
                <group position={[-0.13, -0.43, 0.66]} scale={0.43}>
                    <mesh geometry={nodes.Cube003_0.geometry} material={materials.crate} />
                </group>
                <group position={[0.83, -0.43, 0.66]} scale={0.43}>
                    <mesh geometry={nodes.Cube004_0.geometry} material={materials.crate} />
                </group>
                <group position={[-0.13, -0.43, 1.55]} scale={0.43}>
                    <mesh geometry={nodes.Cube005_0.geometry} material={materials.crate} />
                </group>
                <group position={[-1.07, 0.44, 1.55]} scale={0.43}>
                    <mesh geometry={nodes.Cube006_0.geometry} material={materials.crate} />
                </group>
                <group position={[-2.03, -0.43, 1.53]} scale={0.43}>
                    <mesh geometry={nodes.Cube007_0.geometry} material={materials.crate} />
                </group>
                <group position={[-0.13, -0.43, 2.44]} scale={0.43}>
                    <mesh geometry={nodes.Cube008_0.geometry} material={materials.crate} />
                </group>
                <group position={[-2.02, 0.53, 0.68]} scale={0.43}>
                    <mesh geometry={nodes.Cube009_0.geometry} material={materials.crate} />
                </group>
                <group position={[-0.13, 0.49, 0.66]} scale={0.43}>
                    <mesh geometry={nodes.Cube010_0.geometry} material={materials.crate} />
                </group>
                <group position={[-0.13, 0.47, 1.55]} scale={0.43}>
                    <mesh geometry={nodes.Cube011_0.geometry} material={materials.crate} />
                </group>
                <group position={[-1.07, 0.48, 0.66]} scale={0.43}>
                    <mesh geometry={nodes.Cube012_0.geometry} material={materials.crate} />
                </group>
                <group position={[-1.55, 0, -0.07]} scale={2.73}>
                    <mesh geometry={nodes.Sphere001_0.geometry} material={materials.whale_outline} />
                </group>
            </group>
        </group>
    )
}

export function HTMLModel({ ...props }) {
    const group = useRef()
    useFrame(() => {
        group.current.rotation.y += 0.01;
    });
    const { nodes, materials } = useGLTF('/html.gltf')
    return (
        <group ref={group} {...props} dispose={null}>
            <group scale={scaling * 0.0015} position={[-0.01, -0.4, 0]} rotation={[Math.PI / 1.8, -Math.PI / 2, Math.PI / 1.8]}>
                <group position={[0, 0, -1.08]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={100}>
                    <mesh geometry={nodes['Plane_escudo-2_0'].geometry} material={materials['escudo-2']} />
                </group>
                <group position={[11.81, 52.91, -1.08]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={82.79}>
                    <mesh geometry={nodes.Plane001_orange_0.geometry} material={materials.orange} />
                    <mesh geometry={nodes['Plane001_orange-lite_0'].geometry} material={materials['orange-lite']} />
                </group>
                <group position={[61.85, 307.49, 35.17]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={100}>
                    <mesh geometry={nodes.Plane002_five_0.geometry} material={materials.five} />
                </group>
            </group>
        </group >
    )
}

export function EthernetModel({ ...props }) {
    const group = useRef()
    useFrame(() => {
        group.current.rotation.y += 0.01;
    });
    const { nodes, materials } = useGLTF('/ethernet.gltf')
    return (
        <group ref={group} {...props} dispose={null}>
            <group scale={scaling * 0.05} rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
                <group position={[0, 0, 0]} rotation={[-0.43, -0.7, 1.59]} />
                <mesh geometry={nodes.Cube001_0.geometry} material={materials['yellow-plastic']} />
                <mesh geometry={nodes.Cube001_1.geometry} material={materials.copper} />
                <mesh geometry={nodes.Cube001_2.geometry} material={materials['Material.001']} />
            </group>
        </group>
    )
}

export function CloudModel({ ...props }) {
    const group = useRef()
    useFrame(() => {
        group.current.rotation.y += 0.01;
    });
    const { nodes, materials } = useGLTF('/cloud.gltf')
    return (
        <group ref={group} {...props} dispose={null}>
            <group scale={scaling * 0.2} rotation={[-Math.PI / 2, 0, 0]}>
                <mesh geometry={nodes.Cloud_0.geometry} material={materials.CloudMaterial} />
            </group>
        </group>
    )
}