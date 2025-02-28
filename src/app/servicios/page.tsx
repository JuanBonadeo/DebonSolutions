import { Hero1 } from "@/components/servicios/Hero1";
import { Hero2 } from "@/components/servicios/Hero2";
import { Hero3 } from "@/components/servicios/Hero3";



export const metadata = {
 title: 'Servicios',
 description: 'Nos enfocamos en crear landing pages de alto rendimiento utilizando Next.js, garantizando velocidad, SEO optimizado y una experiencia de usuario excepcional.',
};

export default function Servicios() {
  return (
    <main>
      <Hero1/>
      <Hero2/>
      <Hero3/>
    </main>
  );
}