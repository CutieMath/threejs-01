import { Sphere, MeshDistortMaterial } from "@react-three/drei";

const AnimatedSphere = () => {
  return <Sphere visible args={[1, 100, 200]} scale={2} />;
};

export default AnimatedSphere;
