import Card from "./components/Card.jsx";

function App() {
 
 const cars = [
  {
    name: "Bugatti Chiron",
    image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&h=600&fit=crop",
    maxSpeed: "490 km/h",
    torque: "1600 Nm",
    color: "Blue",
    slogan: "Unmatched Power. Ultimate Luxury.",
    website: "https://www.bugatti.com/chiron/"
  },
  {
    name: "Lamborghini Aventador",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop",
    maxSpeed: "350 km/h",
    torque: "720 Nm",
    color: "Yellow",
    slogan: "Born to Dominate.",
    website: "https://www.lamborghini.com/en-en/models/aventador"
  },
  {
    name: "Ferrari SF90 Stradale",
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&h=600&fit=crop",
    maxSpeed: "340 km/h",
    torque: "800 Nm",
    color: "Red",
    slogan: "Redefining Hybrid Performance.",
    website: "https://www.ferrari.com/en-EN/auto/sf90-stradale"
  },
  {
    name: "Porsche 911 Turbo S",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop",
    maxSpeed: "330 km/h",
    torque: "800 Nm",
    color: "Silver",
    slogan: "Engineered for Perfection.",
    website: "https://www.porsche.com/international/models/911/911-turbo-models/"
  },
  {
    name: "McLaren 720S",
    image: "https://images.unsplash.com/photo-1606664515527-28c0c0e2b5c0?w=800&h=600&fit=crop",
    maxSpeed: "341 km/h",
    torque: "770 Nm",
    color: "Orange",
    slogan: "Beautifully Brutal.",
    website: "https://cars.mclaren.com/en/super-series/720s"
  },
  {
    name: "Aston Martin DBS Superleggera",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop",
    maxSpeed: "340 km/h",
    torque: "900 Nm",
    color: "Black",
    slogan: "Power Wrapped in Elegance.",
    website: "https://www.astonmartin.com/en/models/dbs"
  },
  {
    name: "Mercedes AMG GT Black Series",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop",
    maxSpeed: "325 km/h",
    torque: "800 Nm",
    color: "Orange",
    slogan: "Track Born. Road Ready.",
    website: "https://www.mercedes-amg.com/en/vehicles/gt/gt-black-series.html"
  },
  {
    name: "BMW M8 Competition",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop",
    maxSpeed: "305 km/h",
    torque: "750 Nm",
    color: "Green",
    slogan: "Luxury Meets Savage Power.",
    website: "https://www.bmwusa.com/vehicles/m-models/m8.html"
  },
  {
    name: "Audi R8 V10 Plus",
    image: "https://images.unsplash.com/photo-1606664515527-28c0c0e2b5c0?w=800&h=600&fit=crop",
    maxSpeed: "330 km/h",
    torque: "560 Nm",
    color: "Blue",
    slogan: "The Everyday Supercar.",
    website: "https://www.audi.com/en/models/r8.html"
  },
  {
    name: "Nissan GT-R Nismo",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop",
    maxSpeed: "315 km/h",
    torque: "652 Nm",
    color: "White",
    slogan: "Godzilla of the Streets.",
    website: "https://www.nissanusa.com/vehicles/sports-cars/gt-r.html"
  },
  {
    name: "Ford Mustang GT500",
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&h=600&fit=crop",
    maxSpeed: "290 km/h",
    torque: "847 Nm",
    color: "Red",
    slogan: "Raw Muscle. Modern Precision.",
    website: "https://www.ford.com/performance/gt500/"
  },
  {
    name: "Chevrolet Corvette C8",
    image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&h=600&fit=crop",
    maxSpeed: "312 km/h",
    torque: "637 Nm",
    color: "Orange",
    slogan: "The American Mid-Engine Revolution.",
    website: "https://www.chevrolet.com/performance/corvette"
  },
  {
    name: "Jaguar F-Type R",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop",
    maxSpeed: "300 km/h",
    torque: "700 Nm",
    color: "Grey",
    slogan: "Grace, Space, Pace.",
    website: "https://www.jaguar.com/jaguar-range/f-type/index.html"
  },
  {
    name: "Bentley Continental GT",
    image: "https://images.unsplash.com/photo-1606664515527-28c0c0e2b5c0?w=800&h=600&fit=crop",
    maxSpeed: "333 km/h",
    torque: "900 Nm",
    color: "Dark Green",
    slogan: "Luxury Beyond Limits.",
    website: "https://www.bentleymotors.com/en/models/continental-gt.html"
  },
  {
    name: "Koenigsegg Jesko",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop",
    maxSpeed: "531 km/h (theoretical)",
    torque: "1500 Nm",
    color: "White",
    slogan: "Speed Without Boundaries.",
    website: "https://www.koenigsegg.com/model/jesko"
  },
  {
    name: "Pagani Huayra",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop",
    maxSpeed: "383 km/h",
    torque: "1000 Nm",
    color: "Silver",
    slogan: "Art Meets Engineering.",
    website: "https://www.pagani.com/huayra/"
  },
  {
    name: "Lexus LC 500",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop",
    maxSpeed: "270 km/h",
    torque: "540 Nm",
    color: "Gold",
    slogan: "A Beauty That Roars.",
    website: "https://www.lexus.com/models/LC"
  },
  {
    name: "Dodge Challenger SRT Hellcat",
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&h=600&fit=crop",
    maxSpeed: "315 km/h",
    torque: "888 Nm",
    color: "Red",
    slogan: "Supercharged Madness.",
    website: "https://www.dodge.com/challenger.html"
  },
  {
    name: "Rolls-Royce Wraith",
    image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&h=600&fit=crop",
    maxSpeed: "250 km/h",
    torque: "870 Nm",
    color: "Black",
    slogan: "Power in Silence.",
    website: "https://www.rolls-roycemotorcars.com/wraith"
  },
  {
    name: "Toyota Supra GR",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop",
    maxSpeed: "250 km/h",
    torque: "500 Nm",
    color: "Yellow",
    slogan: "Born for the Streets.",
    website: "https://www.toyota.com/grsupra/"
  }
];
  return (
    <div>
      <header className="app-header">
        <h1>Luxury Car Collection</h1>
        <p>Discover the world's most prestigious supercars</p>
      </header>
      <div className="card-container">
        {cars.map((car, idx) => (
          <Card key={idx} data={car} />
        ))}
      </div>
    </div>
  );
}

export default App;
