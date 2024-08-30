import './App.css';
import Footer from './components/footer';
import Navbar from './components/Navbar';
import ServiceCard from './components/ServiceCard';
import Home from './pages/home/home';

function App() {

  const services = [
    {
      icon: '🎨', // Customize these icons as needed
      title: 'Portrait Logo Digitizing',
      description:
        'Our Portrait Logo Digitizing service captures the essence and details of portraits, converting them into embroidery-ready files. We use advanced techniques to ensure every stitch reflects the intricacies of facial features, expressions, and nuances, making your embroidered portraits look lifelike and professional.',
    },
    {
      icon: '🧢',
      title: '3D Puff Logo Digitizing',
      description:
        '3D Puff Logo Digitizing adds a stunning, raised effect to your logos, giving them a bold and eye-catching look. Ideal for caps, jackets, and other apparel, our service ensures precise padding and stitch angles to create depth and dimension, enhancing the visual appeal of your brand’s logos.',
    },
    {
      icon: '🪡',
      title: 'Patch Logo Digitizing',
      description:
        'Our Patch Logo Digitizing service specializes in creating high-quality patches that are perfect for uniforms, promotional items, and personal use. We meticulously design each patch to ensure that it’s both visually appealing and durable, with crisp edges and vibrant colors that stand out on any fabric.',
    },
    {
      icon: '🧵',
      title: 'Applique Digitizing',
      description:
        'Applique Digitizing combines fabric pieces with embroidery to create unique and artistic designs. Our service emphasizes clean cuts and precise stitching, allowing for creative customization of logos and graphics that add texture and contrast to any garment, making your designs truly one-of-a-kind.',
    },
    {
      icon: '🔤',
      title: 'Small Text Digitizing',
      description:
        'Small Text Digitizing focuses on the precision required to make small letters and details legible and clear, even at reduced sizes. Perfect for badges, patches, and intricate logos, our service ensures that your text remains readable, crisp, and aesthetically pleasing, regardless of the size constraints.',
    },
  ];
  return (
    <div className="App">
      <Navbar />
      <Home />
      <div className="min-h-[100vh] w-full" >
        <div className="  text-center py-10">
          <h4 className='text-[16px] poppinEbold'>Our Services</h4>
          <h1 className='text-[30px] poppinEbold'>What Our Agency Provides</h1>
          <div className="grid py-10 grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
