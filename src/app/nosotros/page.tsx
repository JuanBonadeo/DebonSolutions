import { Hero1 } from "@/components/nosotros/Hero1";
import { Hero2 } from "@/components/nosotros/Hero2";
import { Projectos } from "@/components/nosotros/Projectos";


export const metadata = {
 title: 'Nosotros',
 description: 'Utilizamos tecnologías de vanguardia para transformar organizaciones, potenciando su crecimientol.',
};

export default function Nosotros() {
  return (
    <main>
      <Hero1/>
      <Hero2/>
      <Projectos/>
    </main>
  );
}