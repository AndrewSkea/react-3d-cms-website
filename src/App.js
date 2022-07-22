import * as THREE from "three";
import React, {
  Suspense,
  useMemo,
  useRef,
  useState,
  useCallback,
  useEffect
} from "react";
import styled from "styled-components";
import { SizeMe } from "react-sizeme";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, useAspect, Html, Text } from "@react-three/drei";
import { Flex, Box } from '@react-three/flex';

import { TopSection } from "./components/topSection";
import { World } from "./components/globe";
import { Technologies } from "./components/techSection";

import { PythonModel, DockerModel, HTMLModel, EthernetModel, CloudModel } from "./Models"

const state = {
  top: 0
};

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;

var marginScale = 1;

function Introduction() {
  const group = useRef();
  return (
    <group ref={group}>

      <Text
        scale={[10, 10, 10]}
        color="black" // default
        anchorX="center" // default
        anchorY="middle" // default
        color="white"
      >
      </Text>


    </group>
  )
}

function Page({ onChangePages }) {
  const group = useRef();
  const { size } = useThree();
  const [vpWidth, vpHeight] = useAspect(size.width, size.height);
  const vec = new THREE.Vector3();
  useFrame(() =>
    group.current.position.lerp(vec.set(0, state.top / 100, 0), 0.1)
  );
  const handleReflow = useCallback(
    (w, h) => {
      onChangePages(h / vpHeight);
      // console.log({ h, vpHeight, pages: h / vpHeight });
    },
    [onChangePages, vpHeight]
  );

  return (
    <group ref={group}>

      <Flex
        flexDirection="row"
        size={[vpWidth, vpHeight, 0]}
        onReflow={handleReflow}
        position={[-vpWidth / 2, vpHeight / 2, 0]}
      >

        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          flexWrap="wrap"
          height="70%"
          width="70%"
        >
          <Box margin={marginScale} key={"Python"} centerAnchor>
            <PythonModel />
          </Box>

          <Box margin={marginScale} key={"Docker"} centerAnchor>
            <DockerModel />
          </Box>

          <Box margin={marginScale} key={"Html"} centerAnchor>
            <HTMLModel />
          </Box>

          <Box margin={marginScale} key={"Ethernet"} centerAnchor>
            <EthernetModel />
          </Box>

          <Box margin={marginScale} key={"Cloud"} centerAnchor>
            <CloudModel />
          </Box>

        </Box>

      </Flex>
    </group>
  );
}


function App() {
  const [pages, setPages] = useState(0);
  return (<>
    <div id="firstRow" className="container">
      <div className="row">
        <div className="col-md-4">
          <TopSection />
        </div>
        <div id="worldcontainer" className="col-md-8">
          <SizeMe>{({ size: { width } }) => (
            <World width={width} height={width} />
          )}</SizeMe>
        </div>
      </div>
    </div>
    <Technologies />
    {/* <div id="secondRow" className="container">
      <div id="canvasClass" className="row">
        <div className="col-md-12">
          <Canvas>
            <Suspense fallback={<Html center>Technologies...</Html>}>
              <pointLight position={[0, 1, 4]} intensity={0.1} />
              <ambientLight intensity={10} />
              <spotLight
                position={[1, 1, 10]}
                penumbra={1}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
              />
              <Introduction />
              <Page onChangePages={setPages} />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </div> */}
  </>
  );
}


export default App;
