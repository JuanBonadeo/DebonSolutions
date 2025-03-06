import { ContactUs } from "@/components/home/ContactUs";



export const metadata = {
 title: 'Contacto',
 description: 'Esta es la página de contacto',
};

export default function ContactPage() {
  return (
    <div className="md:min-h-[75vh] !pt-0 md:!pt-25 lg:!pt-0">
      <ContactUs/>
    </div>
  );
}