import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

const littleTalesProducts = [
  {
    id: 1,
    name: "Blush Note",
    description: "Soft pink everyday press-on nails",
    price: 599,
  },
  {
    id: 2,
    name: "Vanilla French",
    description: "Minimal classic French-tip nails",
    price: 699,
  },
  {
    id: 3,
    name: "Cherry Kiss",
    description: "Glossy cherry-red short nails",
    price: 749,
  },
  {
    id: 4,
    name: "Sunday Bloom",
    description: "Delicate floral press-on nails",
    price: 899,
  },
];

const luxeTalesProducts = [
  {
    id: 5,
    name: "Rosé After Midnight",
    description: "Wine chrome nails with crystal details",
    price: 1299,
  },
  {
    id: 6,
    name: "The Pearl Chapter",
    description: "Pearl and bow luxury press-on nails",
    price: 1499,
  },
  {
    id: 7,
    name: "Written in the Stars",
    description: "Celestial chrome statement nails",
    price: 1699,
  },
  {
    id: 8,
    name: "Happily Ever After",
    description: "Luxury bridal press-on nail set",
    price: 1999,
  },
];

function HomeHeader() {
  return (
    <nav className="border-b border-[#EFDDE2] bg-[#FFF7F8] px-6 py-3 md:px-12">
      <div className="flex w-full items-center justify-between">
        <Link to="/" className="flex items-center gap-4">
          <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#E8C9D2] bg-[#FFF7F8] shadow-md">
            <img
              src="/logo.png"
              alt="The Nails Tale logo"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <h1 className="font-serif text-2xl leading-none text-[#641F3A] md:text-3xl">
              The Nails Tale
            </h1>

            <p className="mt-2 text-[9px] tracking-[0.24em] text-[#C96C87] md:text-xs">
              EVERY SET TELLS A STORY
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-8 text-sm text-[#641F3A] lg:flex">
          <Link to="/" className="transition hover:text-[#C96C87]">
            Home
          </Link>

          <Link
            to="/little-tales"
            className="transition hover:text-[#C96C87]"
          >
            Little Tales
          </Link>

          <Link
            to="/luxe-tales"
            className="transition hover:text-[#C96C87]"
          >
            Luxe Tales
          </Link>

          <Link
            to="/custom-nails"
            className="transition hover:text-[#C96C87]"
          >
            Custom Nails
          </Link>

          <Link
            to="/cart"
            className="rounded-full bg-[#641F3A] px-6 py-2.5 text-white transition hover:bg-[#C96C87]"
          >
            Cart
          </Link>
        </div>

        <Link
          to="/cart"
          className="rounded-full bg-[#641F3A] px-5 py-2 text-sm text-white lg:hidden"
        >
          Cart
        </Link>
      </div>
    </nav>
  );
}

function PageHeader({ luxe = false }) {
  const navigate = useNavigate();

  return (
    <header
      className={`border-b px-6 py-5 md:px-12 ${
        luxe
          ? "border-[#50303D] bg-[#26171E]"
          : "border-[#EFDDE2] bg-[#FFF7F8]"
      }`}
    >
      <div className="relative mx-auto flex max-w-7xl items-center justify-between">
        <button
          onClick={() => navigate("/")}
          className={`text-sm transition ${
            luxe
              ? "text-[#E8C98E] hover:text-white"
              : "text-[#641F3A] hover:text-[#C96C87]"
          }`}
        >
          ← Home
        </button>

        <Link
          to="/"
          className="absolute left-1/2 -translate-x-1/2 text-center"
        >
          <h1
            className={`whitespace-nowrap font-serif text-2xl md:text-3xl ${
              luxe ? "text-[#FFF4F6]" : "text-[#641F3A]"
            }`}
          >
            The Nails Tale
          </h1>

          <p
            className={`mt-1 hidden text-[9px] tracking-[0.22em] sm:block ${
              luxe ? "text-[#D8B679]" : "text-[#C96C87]"
            }`}
          >
            EVERY SET TELLS A STORY
          </p>
        </Link>

        <Link
          to="/cart"
          className={`rounded-full px-5 py-2 text-sm transition ${
            luxe
              ? "bg-[#D8B679] text-[#26171E] hover:bg-[#F0D69D]"
              : "bg-[#641F3A] text-white hover:bg-[#C96C87]"
          }`}
        >
          Cart
        </Link>
      </div>
    </header>
  );
}

function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FFF7F8] text-[#26171E]">
      <HomeHeader />

      <main>
        <section className="flex min-h-[75vh] flex-col items-center justify-center px-6 py-16 text-center">
          <p className="mb-4 text-xs tracking-[0.35em] text-[#C96C87] md:text-sm">
            HANDCRAFTED PRESS-ON NAILS
          </p>

          <h2 className="max-w-4xl font-serif text-5xl leading-tight text-[#641F3A] md:text-7xl">
            Every set tells a tale.
            <br />
            What’s yours?
          </h2>

          <p className="mt-6 max-w-xl leading-7 text-[#765560]">
            Discover reusable press-on nails designed for everyday moments and
            your most unforgettable chapters.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/little-tales"
              className="rounded-full bg-[#641F3A] px-8 py-3 text-white transition hover:bg-[#C96C87]"
            >
              Shop Little Tales
            </Link>

            <Link
              to="/luxe-tales"
              className="rounded-full border border-[#641F3A] px-8 py-3 text-[#641F3A] transition hover:bg-[#F7E5EA]"
            >
              Explore Luxe Tales
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

function ProductCard({ product, luxe }) {
  return (
    <article
      className={`overflow-hidden rounded-[1.5rem] border shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl ${
        luxe
          ? "border-[#6D4352] bg-[#321C26]"
          : "border-[#E8C9D2] bg-[#FFFCFA]"
      }`}
    >
      <div
        className={`flex aspect-square items-center justify-center ${
          luxe ? "bg-[#412630]" : "bg-[#F7E5EA]"
        }`}
      >
        <p
          className={`font-serif text-xl ${
            luxe ? "text-[#D8B679]" : "text-[#C96C87]"
          }`}
        >
          Product image
        </p>
      </div>

      <div className="p-6">
        <h3
          className={`font-serif text-2xl ${
            luxe ? "text-[#FFF4F6]" : "text-[#641F3A]"
          }`}
        >
          {product.name}
        </h3>

        <p
          className={`mt-2 text-sm ${
            luxe ? "text-[#D9C2CA]" : "text-[#765560]"
          }`}
        >
          {product.description}
        </p>

        <div className="mt-5 flex items-center justify-between gap-3">
          <p
            className={`text-lg font-semibold ${
              luxe ? "text-[#E8C98E]" : "text-[#641F3A]"
            }`}
          >
            ₹{product.price}
          </p>

          <button
            className={`rounded-full px-5 py-2 text-sm transition ${
              luxe
                ? "bg-[#D8B679] text-[#2B1821] hover:bg-[#F0D69D]"
                : "bg-[#641F3A] text-white hover:bg-[#C96C87]"
            }`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}

function CollectionPage({ type }) {
  const isLuxe = type === "luxe";
  const products = isLuxe ? luxeTalesProducts : littleTalesProducts;

  return (
    <div
      className={`min-h-screen ${
        isLuxe ? "bg-[#26171E]" : "bg-[#FFF7F8]"
      }`}
    >
      <PageHeader luxe={isLuxe} />

      <main className="px-6 py-16 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p
              className={`text-xs tracking-[0.35em] ${
                isLuxe ? "text-[#D8B679]" : "text-[#C96C87]"
              }`}
            >
              {isLuxe ? "PREMIUM SETS" : "EVERYDAY SETS UNDER ₹1,000"}
            </p>

            <h2
              className={`mt-4 font-serif text-5xl md:text-6xl ${
                isLuxe ? "text-[#FFF4F6]" : "text-[#641F3A]"
              }`}
            >
              {isLuxe ? "The Luxe Tales" : "Little Tales"}
            </h2>

            <p
              className={`mx-auto mt-5 max-w-xl leading-7 ${
                isLuxe ? "text-[#D9C2CA]" : "text-[#765560]"
              }`}
            >
              {isLuxe
                ? "Intricate, luxurious statement nails handcrafted for your most unforgettable chapters."
                : "Cute, reusable and affordable nail sets created for all your everyday stories."}
            </p>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                luxe={isLuxe}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

function CustomNailsPage() {
  function handleSubmit(event) {
    event.preventDefault();

    alert(
      "Your request form is working. We will connect it to the backend later."
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF7F8] text-[#26171E]">
      <PageHeader />

      <main className="px-6 py-16 md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="text-xs tracking-[0.35em] text-[#C96C87]">
              DESIGNED ESPECIALLY FOR YOU
            </p>

            <h2 className="mt-4 font-serif text-5xl text-[#641F3A] md:text-6xl">
              Create Your Own Tale
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#765560]">
              Share your idea, colours and inspiration. We’ll review your
              request and contact you with the final design, price and timeline.
            </p>
          </div>

          <div className="grid overflow-hidden rounded-[2rem] border border-[#E8C9D2] bg-[#FFFCFA] shadow-xl lg:grid-cols-[0.8fr_1.2fr]">
            <div className="relative overflow-hidden bg-[#641F3A] p-8 text-white md:p-12">
              <div className="absolute -right-10 -top-10 text-[150px] text-white/5">
                ♡
              </div>

              <p className="text-xs tracking-[0.3em] text-[#F4C9D6]">
                YOUR DREAM SET ✦
              </p>

              <h3 className="mt-4 font-serif text-4xl">
                Tell us your story ♡
              </h3>

              <p className="mt-5 leading-7 text-[#F8E8ED]">
                Birthday glam, bridal magic, vacation sparkle—or simply because
                you deserve pretty nails. Share your idea and we’ll turn it
                into a tiny masterpiece made just for you ♡
              </p>

              <div className="mt-10 space-y-7">
                <div className="rounded-2xl border border-white/15 bg-white/5 p-4 transition hover:bg-white/10">
                  <p className="font-serif text-xl text-[#FFD9E4]">
                    ♡ Dream it your way
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[#F1DCE3]">
                    Pick your colours, details, charms and mood—we’ll bring your
                    nail vision to life.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/5 p-4 transition hover:bg-white/10">
                  <p className="font-serif text-xl text-[#FFD9E4]">
                    ♡ Approve every detail
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[#F1DCE3]">
                    We’ll confirm the design, price and timeline with you before
                    anything is final.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/5 p-4 transition hover:bg-white/10">
                  <p className="font-serif text-xl text-[#FFD9E4]">
                    ♡ Made only for you
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[#F1DCE3]">
                    Your set will be individually handcrafted—because your tale
                    should never feel ordinary.
                  </p>
                </div>
              </div>

              <div className="mt-10 rounded-2xl border border-[#C8879C] bg-[#75324B] p-5">
                <p className="text-sm leading-6 text-[#FFF0F4]">
                  No payment yet, promise ♡ Submit your idea and we’ll contact
                  you before creating your custom set.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-8 md:p-12">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="customerName"
                    className="mb-2 block text-sm text-[#641F3A]"
                  >
                    Your name
                  </label>

                  <input
                    id="customerName"
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-[#DFC2CB] bg-white px-4 py-3 outline-none transition focus:border-[#C96C87]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm text-[#641F3A]"
                  >
                    WhatsApp number
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    required
                    placeholder="+91"
                    className="w-full rounded-xl border border-[#DFC2CB] bg-white px-4 py-3 outline-none transition focus:border-[#C96C87]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="occasion"
                    className="mb-2 block text-sm text-[#641F3A]"
                  >
                    Occasion
                  </label>

                  <select
                    id="occasion"
                    required
                    className="w-full rounded-xl border border-[#DFC2CB] bg-white px-4 py-3 outline-none transition focus:border-[#C96C87]"
                  >
                    <option value="">Select an occasion</option>
                    <option>Everyday</option>
                    <option>Birthday</option>
                    <option>Wedding or engagement</option>
                    <option>Vacation</option>
                    <option>Festival</option>
                    <option>Date night</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="budget"
                    className="mb-2 block text-sm text-[#641F3A]"
                  >
                    Approximate budget
                  </label>

                  <select
                    id="budget"
                    required
                    className="w-full rounded-xl border border-[#DFC2CB] bg-white px-4 py-3 outline-none transition focus:border-[#C96C87]"
                  >
                    <option value="">Select your budget</option>
                    <option>Under ₹1,000</option>
                    <option>₹1,000–₹1,499</option>
                    <option>₹1,500–₹1,999</option>
                    <option>₹2,000 and above</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="shape"
                    className="mb-2 block text-sm text-[#641F3A]"
                  >
                    Preferred shape
                  </label>

                  <select
                    id="shape"
                    className="w-full rounded-xl border border-[#DFC2CB] bg-white px-4 py-3 outline-none transition focus:border-[#C96C87]"
                  >
                    <option value="">Not decided</option>
                    <option>Almond</option>
                    <option>Oval</option>
                    <option>Square</option>
                    <option>Coffin</option>
                    <option>Stiletto</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="length"
                    className="mb-2 block text-sm text-[#641F3A]"
                  >
                    Preferred length
                  </label>

                  <select
                    id="length"
                    className="w-full rounded-xl border border-[#DFC2CB] bg-white px-4 py-3 outline-none transition focus:border-[#C96C87]"
                  >
                    <option value="">Not decided</option>
                    <option>Short</option>
                    <option>Medium</option>
                    <option>Long</option>
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="colours"
                  className="mb-2 block text-sm text-[#641F3A]"
                >
                  Preferred colours
                </label>

                <input
                  id="colours"
                  type="text"
                  placeholder="Example: blush pink, white and gold"
                  className="w-full rounded-xl border border-[#DFC2CB] bg-white px-4 py-3 outline-none transition focus:border-[#C96C87]"
                />
              </div>

              <div className="mt-6">
                <label
                  htmlFor="inspiration"
                  className="mb-2 block text-sm text-[#641F3A]"
                >
                  Upload inspiration
                </label>

                <input
                  id="inspiration"
                  type="file"
                  accept="image/*"
                  className="w-full cursor-pointer rounded-xl border border-dashed border-[#D8A9B8] bg-[#FFF7F8] px-4 py-6 text-sm text-[#765560]"
                />

                <p className="mt-2 text-xs text-[#9B7682]">
                  Upload a Pinterest screenshot or another reference image. We
                  will not create an exact copy of another artist’s work.
                </p>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="details"
                  className="mb-2 block text-sm text-[#641F3A]"
                >
                  Describe your nail idea
                </label>

                <textarea
                  id="details"
                  required
                  rows="5"
                  placeholder="Tell us about the design, colours, charms or details you want..."
                  className="w-full resize-none rounded-xl border border-[#DFC2CB] bg-white px-4 py-3 outline-none transition focus:border-[#C96C87]"
                />
              </div>

              <button
                type="submit"
                className="mt-8 w-full rounded-full bg-[#641F3A] px-8 py-3.5 text-white transition hover:bg-[#C96C87]"
              >
                Submit My Nail Tale
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

function CartPage() {
  return (
    <div className="min-h-screen bg-[#FFF7F8] text-[#26171E]">
      <PageHeader />

      <main className="px-6 py-16 md:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-xs tracking-[0.35em] text-[#C96C87]">
              YOUR SELECTED TALES
            </p>

            <h2 className="mt-4 font-serif text-5xl text-[#641F3A] md:text-6xl">
              Your Cart ♡
            </h2>
          </div>

          <div className="mt-12 rounded-[2rem] border border-[#E8C9D2] bg-[#FFFCFA] px-6 py-20 text-center shadow-sm">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#F7E5EA] text-4xl text-[#C96C87]">
              ♡
            </div>

            <h3 className="mt-6 font-serif text-3xl text-[#641F3A]">
              Your cart is waiting for a tale
            </h3>

            <p className="mx-auto mt-4 max-w-md leading-7 text-[#765560]">
              You haven’t added a nail set yet. Explore our everyday favourites
              or discover something a little more luxurious.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/little-tales"
                className="rounded-full bg-[#641F3A] px-7 py-3 text-white transition hover:bg-[#C96C87]"
              >
                Shop Little Tales
              </Link>

              <Link
                to="/luxe-tales"
                className="rounded-full border border-[#641F3A] px-7 py-3 text-[#641F3A] transition hover:bg-[#F7E5EA]"
              >
                Explore Luxe Tales
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/little-tales"
          element={<CollectionPage type="little" />}
        />

        <Route
          path="/luxe-tales"
          element={<CollectionPage type="luxe" />}
        />

        <Route path="/custom-nails" element={<CustomNailsPage />} />

        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;