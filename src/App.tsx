import React, { useEffect, useState, FormEvent } from "react"
import { motion, LayoutGroup, AnimatePresence } from "motion/react"
import { TextRotate } from "./components/ui/text-rotate"
import Floating, { FloatingElement } from "./components/ui/parallax-floating"
import { ZoomParallax } from "./components/ui/zoom-parallax"
import { Phone, MapPin, Send, ShoppingBag, Menu, X } from "lucide-react"
import Lenis from '@studio-freight/lenis'

// Vite serves public and root folder files.
const exampleImages = [
  { url: "/photo_1_2026-04-02_19-16-02.jpg", title: "Товар 1" },
  { url: "/photo_2_2026-04-02_19-16-02.jpg", title: "Товар 2" },
  { url: "/photo_3_2026-04-02_19-16-02.jpg", title: "Товар 3" },
  { url: "/photo_4_2026-04-02_19-16-02.jpg", title: "Товар 4" },
  { url: "/photo_5_2026-04-02_19-16-02.jpg", title: "Товар 5" },
  { url: "/photo_6_2026-04-02_19-16-02.jpg", title: "Товар 6" },
  { url: "/photo_18_2026-04-02_19-16-02.jpg", title: "Вход в магазин" },
]

const zoomImages = [
  { src: "/zdanie.webp", alt: "БалтМаг" },
  { src: "/photo_7_2026-04-02_19-16-02.jpg", alt: "Товар 7" },
  { src: "/photo_8_2026-04-02_19-16-02.jpg", alt: "Товар 8" },
  { src: "/photo_9_2026-04-02_19-16-02.jpg", alt: "Товар 9" },
  { src: "/photo_10_2026-04-02_19-16-02.jpg", alt: "Товар 10" },
  { src: "/photo_11_2026-04-02_19-16-02.jpg", alt: "Товар 11" },
  { src: "/photo_12_2026-04-02_19-16-02.jpg", alt: "Товар 12" },
]

function LandingHero() {
  return (
    <section className="w-full min-h-[90vh] overflow-hidden flex flex-col items-center justify-center relative bg-gradient-to-b from-green-50/50 to-white">
      {/* Hidden on mobile, visible on desktop */}
      <div className="hidden md:block absolute inset-0 w-full h-full">
        <Floating sensitivity={-0.5} className="h-full z-0 pointer-events-none">
          <FloatingElement depth={0.5} className="top-[15%] left-[2%] md:top-[25%] md:left-[5%] pointer-events-auto">
            <motion.img
              src={exampleImages[0].url}
              alt={exampleImages[0].title}
              className="w-16 h-12 sm:w-24 sm:h-16 md:w-32 md:h-24 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform -rotate-[3deg] shadow-lg rounded-xl border-4 border-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            />
          </FloatingElement>

          <FloatingElement depth={1} className="top-[5%] left-[10%] md:top-[10%] md:left-[15%] pointer-events-auto">
            <motion.img
              src={exampleImages[1].url}
              alt={exampleImages[1].title}
              className="w-32 h-24 sm:w-48 sm:h-36 md:w-56 md:h-44 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform -rotate-12 shadow-xl rounded-xl border-4 border-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            />
          </FloatingElement>

          <FloatingElement depth={4} className="top-[85%] left-[5%] md:top-[75%] md:left-[8%] pointer-events-auto">
            <motion.img
              src={exampleImages[2].url}
              alt={exampleImages[2].title}
              className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 object-cover -rotate-[4deg] hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rounded-xl border-4 border-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            />
          </FloatingElement>

          <FloatingElement depth={2} className="top-[5%] left-[80%] md:top-[10%] md:left-[75%] pointer-events-auto">
            <motion.img
              src={exampleImages[3].url}
              alt={exampleImages[3].title}
              className="w-36 h-32 sm:w-48 sm:h-44 md:w-60 md:h-52 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform shadow-xl rotate-[6deg] rounded-xl border-4 border-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            />
          </FloatingElement>

          <FloatingElement depth={1.5} className="top-[75%] left-[75%] md:top-[65%] md:left-[75%] pointer-events-auto">
            <motion.img
              src={exampleImages[4].url}
              alt={exampleImages[4].title}
              className="w-44 h-44 sm:w-56 sm:h-56 md:w-80 md:h-80 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rotate-[12deg] rounded-xl border-4 border-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
            />
          </FloatingElement>

          <FloatingElement depth={0.8} className="top-[45%] left-[85%] md:top-[40%] md:left-[88%] pointer-events-auto">
            <motion.img
              src={exampleImages[6].url}
              alt={exampleImages[6].title}
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform shadow-xl rotate-[-8deg] rounded-xl border-4 border-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            />
          </FloatingElement>
        </Floating>
      </div>

      <div className="flex flex-col justify-center items-center w-[90%] sm:w-[80%] md:w-[700px] z-10 pointer-events-auto bg-white/70 backdrop-blur-md p-6 md:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white/60 mt-16 md:mt-0">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 md:mb-8"
        >
          <img src="/logo.png" alt="БалтМаг Лого" className="w-32 h-32 md:w-48 md:h-48 object-contain drop-shadow-xl" />
        </motion.div>

        <motion.h1
          className="text-2xl sm:text-4xl md:text-6xl text-center w-full justify-center items-center flex-col flex whitespace-pre leading-tight font-extrabold tracking-tight space-y-2 text-slate-800"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 }}
        >
          <span>БалтМаг — это </span>
          <LayoutGroup>
            <motion.span layout className="flex whitespace-pre mb-2">
              <TextRotate
                texts={[
                  "чистота ✨",
                  "свежесть 🍏",
                  "уют дома 🏡",
                  "низкие цены 💸",
                  "сладости 🍫",
                  "Калининград ❤️",
                ]}
                mainClassName="overflow-hidden px-2 text-brandGreen rounded-xl"
                staggerDuration={0.03}
                staggerFrom="last"
                rotationInterval={3000}
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
              />
            </motion.span>
          </LayoutGroup>
        </motion.h1>

        <motion.p
          className="text-xs sm:text-lg md:text-xl text-center text-slate-600 pt-4 md:pt-6 font-medium"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.5 }}
        >
          Супермаркет хозтоваров, бытовой химии и любимых продуктов. ЖК Восток.
        </motion.p>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 items-center mt-6 md:mt-8 text-sm w-full">
          <motion.a
            href="#contacts"
            className="w-full sm:w-auto justify-center sm:text-base md:text-lg font-semibold text-white bg-brandGreen px-6 py-3 rounded-full shadow-[0_8px_30px_rgba(75,123,34,0.4)] flex items-center gap-2 hover:opacity-90 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MapPin size={20} /> Как добраться
          </motion.a>
          <motion.a
            href="tel:+79062300041"
            className="w-full sm:w-auto justify-center sm:text-base md:text-lg font-semibold text-brandGreen bg-white border border-green-200 px-6 py-3 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.06)] flex items-center gap-2 hover:bg-green-50 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone size={20} /> Позвонить нам
          </motion.a>
        </div>
      </div>
    </section>
  )
}

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const userMsg = formData.get("message") as string;

    // Telegram Bot Token
    const BOT_TOKEN = "8006677315:AAF8nIWmSuQwH0qbvHIi0THplgbVGp91qZY";

    const TELEGRAM_API = "https://solitary-leaf-533d.akbarchik0071.workers.dev";

    try {
      // Базовый администратор - ваш ID. Он нужен обязательно, так как метод getUpdates 
      // хранит историю только 24 часа, после чего динамические админы могут "отвалиться".
      const adminChats = new Set<string>();
      adminChats.add("837329049");

      // Динамически забираем новых админов
      try {
        const updatesRes = await fetch(`${TELEGRAM_API}/bot${BOT_TOKEN}/getUpdates`);
        const updatesData = await updatesRes.json();

        if (updatesData.ok && updatesData.result) {
          updatesData.result.forEach((update: any) => {
            const text = update.message?.text || '';
            if (text.includes('/adminBaltMag') || text.includes('/adminbaltmag')) {
              if (update.message?.chat?.id) {
                adminChats.add(update.message.chat.id.toString());
              }
            }
          });
        }
      } catch (err) {
        console.warn("Не удалось обновить динамических админов:", err);
      }

      if (adminChats.size === 0) {
        setStatus("error");
        setMessage("Ошибка. Свяжитесь с нами по номеру +7 (906) 230-00-41");
        return;
      }

      const formattedMessage = `🛒 *БалтМаг*\n\n👤 Имя: ${name}\n📞 Телефон: ${phone}\n\n📝 Сообщение:\n${userMsg}`;

      const promises = Array.from(adminChats).map(chatId =>
        fetch(`${TELEGRAM_API}/bot${BOT_TOKEN}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chat_id: chatId, text: formattedMessage, parse_mode: 'Markdown' })
        })
      );

      await Promise.all(promises);
      setStatus("success");
      setMessage("Ваше сообщение успешно отправлено руководителям магазина!");
      (e.target as HTMLFormElement).reset();

    } catch (err) {
      console.error(err);
      setStatus("error");
      setMessage("Произошла ошибка при отправке.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-5 md:p-8 rounded-2xl md:rounded-3xl shadow-xl border border-slate-100 max-w-lg w-full mx-auto relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brandGreen to-brandOrange"></div>

      <h3 className="text-lg md:text-2xl font-bold mb-4 md:mb-6 text-slate-800 text-center">Связаться с нами</h3>

      <div className="space-y-3 md:space-y-4">
        <div>
          <label className="block text-xs md:text-sm font-medium text-slate-700 mb-1">Ваше имя</label>
          <input required name="name" type="text" className="text-slate-900 text-sm md:text-base w-full px-4 py-2.5 md:py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brandGreen focus:outline-none transition" placeholder="Иван Иванов" />
        </div>
        <div>
          <label className="block text-xs md:text-sm font-medium text-slate-700 mb-1">Телефон</label>
          <input required name="phone" type="text" className="text-slate-900 text-sm md:text-base w-full px-4 py-2.5 md:py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brandGreen focus:outline-none transition" placeholder="+7 (900) 000-00-00" />
        </div>
        <div>
          <label className="block text-xs md:text-sm font-medium text-slate-700 mb-1">Сообщение</label>
          <textarea required name="message" rows={3} className="text-slate-900 text-sm md:text-base w-full px-4 py-2.5 md:py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brandGreen focus:outline-none transition" placeholder="Интересует наличие..."></textarea>
        </div>

        <button
          disabled={status === 'loading'}
          type="submit"
          className="w-full bg-brandGreen hover:bg-[#3f671c] text-white text-sm md:text-base font-semibold py-3 md:py-4 rounded-xl flex justify-center items-center gap-2 transition disabled:opacity-50 mt-2 md:mt-4 shadow-[0_8px_20px_rgba(75,123,34,0.3)]"
        >
          {status === 'loading' ? 'Отправка...' : <><Send size={18} /> Отправить</>}
        </button>

        {status === 'success' && <p className="text-brandGreen text-sm md:text-base text-center font-medium mt-4 bg-green-50 py-3 rounded-xl border border-green-200">{message}</p>}
        {status === 'error' && <p className="text-red-500 text-sm md:text-base text-center font-medium mt-4 bg-red-50 py-3 rounded-xl border border-red-200">{message}</p>}
      </div>
    </form>
  )
}

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  React.useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
    return () => {
      lenis.destroy()
    }
  }, [])

  const reviewsData = [
    { n: "Екатерина У.", t: "Отличный магазин у дома 👍🏼 Приятно находится, всегда чисто и опрятно. Большой выбор товаров от средств для уборки до продуктов...", d: "23 февраля" },
    { n: "Арсений Русанов", t: "Отличной магазин, хороший выбор различной продукции, которую трудно найти в других магазинах. Очень вежливый и приятный сотрудник.", d: "3 марта" },
    { n: "Guntor", t: "Товары всегда свежие и аккуратно лежат на полках, можно найти что угодно. Есть товары с Литвы, Латвии и Польши.", d: "12 февраля" },
    { n: "Крис Зубкова", t: "Самый лучший магазин на районе, каждый день добавляются новые товары! Цены радуют! Любим его всей семьёй!)", d: "16 марта 2026" },
    { n: "Дмитрий Сафонов", t: "Отличные продукты и приятные работники. На кассе доброжелательный и отдохнувший кассир, не испортит настроение!", d: "20 февраля 2026" }
  ];

  const infiniteReviews = [...reviewsData, ...reviewsData, ...reviewsData, ...reviewsData];

  return (
    <div className="bg-slate-50 min-h-screen font-calendas text-slate-900 overflow-clip selection:bg-brandGreen selection:text-white">

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 md:gap-4 font-bold text-xl md:text-2xl text-slate-800 tracking-tight cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src="/logo.png" alt="Logo" className="h-[40px] md:h-[48px] object-contain drop-shadow-sm transition-transform hover:scale-105" />
            <span>БалтМаг</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-center items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#intro" className="hover:text-brandGreen transition">Главная</a>
            <a href="#gallery" className="hover:text-brandGreen transition">Галерея</a>
            <a href="#about" className="hover:text-brandGreen transition">О нас</a>
            <a href="#reviews" className="hover:text-brandGreen transition">Отзывы</a>
            <a href="#map" className="hover:text-brandGreen transition">Карта</a>
          </div>

          <a href="tel:+79062300041" className="hidden md:flex items-center gap-2 bg-green-50 text-brandGreen px-5 py-2.5 rounded-full font-semibold hover:bg-green-100 transition shadow-sm">
            <Phone size={18} /> <span>+7 (906) 230-00-41</span>
          </a>

          {/* Mobile Hamburger Button */}
          <button className="md:hidden text-slate-800 p-2 focus:outline-none" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-100 overflow-hidden flex flex-col items-center py-4 space-y-4 font-semibold text-slate-700 shadow-md"
            >
              <a href="#intro" onClick={() => setIsMobileMenuOpen(false)} className="w-full text-center py-2 hover:bg-green-50 hover:text-brandGreen transition">Главная</a>
              <a href="#gallery" onClick={() => setIsMobileMenuOpen(false)} className="w-full text-center py-2 hover:bg-green-50 hover:text-brandGreen transition">Галерея</a>
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="w-full text-center py-2 hover:bg-green-50 hover:text-brandGreen transition">О нас</a>
              <a href="#reviews" onClick={() => setIsMobileMenuOpen(false)} className="w-full text-center py-2 hover:bg-green-50 hover:text-brandGreen transition">Отзывы</a>
              <a href="#map" onClick={() => setIsMobileMenuOpen(false)} className="w-full text-center py-2 hover:bg-green-50 hover:text-brandGreen transition">Карта</a>
              <div className="pt-2">
                <a href="tel:+79062300041" className="flex items-center gap-2 bg-brandGreen text-white px-6 py-3 rounded-full shadow-md text-sm">
                  <Phone size={16} /> Позвонить
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Gallery Section */}
      <LandingHero />

      {/* Introduction Custom Text Section */}
      <section id="intro" className="min-h-[80vh] md:min-h-screen w-full flex items-center justify-center bg-white relative overflow-hidden py-16 md:py-24">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-8 relative z-10 p-6 md:p-10 bg-white/40 rounded-[2rem] backdrop-blur-md shadow-2xl border border-white/60 mx-4 md:mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-5xl font-extrabold text-slate-900 mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-brandGreen to-brandOrange inline-block drop-shadow-sm">
              Ваш уют начинается здесь
            </h2>
            <p className="text-base md:text-2xl text-slate-800 leading-relaxed font-semibold">
              Каждый день мы стараемся делать вашу жизнь удобнее и ярче. В нашем ассортименте вы найдете не только качественные товары первой необходимости, бытовую химию и свежайшие продукты, но и уникальные европейские сладости, которые так сложно отыскать.
              <br /><br />
              Мы искренне ценим каждого клиента, создаем чистоту и дружелюбную атмосферу, чтобы каждый визит к нам приносил лишь положительные эмоции!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Zoom Parallax Gallery inside Gallery wrapper */}
      <section id="gallery" className="w-full bg-slate-50 pt-16 md:pt-20">
        <ZoomParallax images={zoomImages} />
      </section>

      {/* Info Sections */}
      <section id="about" className="py-16 md:py-20 bg-slate-50 border-t border-slate-100 relative mt-[20vh] md:mt-[10vh]">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-slate-800">Мы работаем для вас!</h2>
            <p className="text-brandOrange font-medium text-base md:text-lg">Ждем вас каждый день без выходных</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white p-6 md:p-10 rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-shadow">
              <h3 className="text-lg md:text-2xl font-bold flex items-center gap-3 mb-6 md:mb-8 text-slate-800"><ShoppingBag className="text-brandOrange w-6 h-6 md:w-7 md:h-7" /> Время работы</h3>
              <ul className="space-y-3 md:space-y-4">
                {['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'].map((day, i) => (
                  <li key={day} className="flex justify-between items-center border-b border-dashed border-slate-200 pb-2 md:pb-3">
                    <span className="font-medium text-slate-600 text-sm md:text-lg">{day}</span>
                    <span className={`font-bold text-sm md:text-lg px-2 md:px-3 py-1 rounded-md md:rounded-lg ${i === 6 ? 'bg-orange-50 text-brandOrange' : 'bg-slate-50 text-slate-800'}`}>08:00 – 22:00</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 md:p-10 rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100 flex flex-col hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-shadow">
              <h3 className="text-lg md:text-2xl font-bold flex items-center gap-3 mb-6 md:mb-8 text-slate-800"><MapPin className="text-brandGreen w-6 h-6 md:w-7 md:h-7" /> Наши контакты</h3>

              <div className="space-y-4 md:space-y-8 flex-1">
                <div className="bg-slate-50 p-4 md:p-6 rounded-2xl border border-slate-100">
                  <p className="text-xs md:text-sm text-slate-500 font-semibold mb-1 uppercase tracking-wider">Адрес</p>
                  <p className="text-base md:text-lg font-bold text-slate-800">Калининград, ул. Флотская, 9 (1 этаж)</p>
                </div>
                <div className="bg-slate-50 p-4 md:p-6 rounded-2xl border border-slate-100">
                  <p className="text-xs md:text-sm text-slate-500 font-semibold mb-1 uppercase tracking-wider">Телефон</p>
                  <a href="tel:+79062300041" className="text-xl md:text-2xl font-bold text-brandGreen hover:opacity-80 transition">+7 (906) 230-00-41</a>
                </div>
              </div>

              <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4">
                <a href="https://t.me/baltmag" target="_blank" className="flex-1 bg-[#0088cc] hover:bg-[#0077b3] text-white py-3 md:py-4 px-4 md:px-6 rounded-2xl font-bold text-sm md:text-base flex items-center justify-center gap-2 transition shadow-md">
                  <Send size={18} /> Telegram
                </a>
                <a href="https://max.ru/join/fTvQSFhpqnT-osv-I9XQfr5IJ82wOvZgg_xxH-hDngo" target="_blank" className="flex-1 bg-slate-800 hover:bg-slate-900 text-white py-3 md:py-4 px-4 md:px-6 rounded-2xl font-bold text-sm md:text-base flex items-center justify-center transition shadow-md">
                  Max Приложение
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Marquee Reviews */}
      <section id="reviews" className="py-16 md:py-24 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 mb-10 md:mb-12 flex flex-col md:flex-row justify-between items-center md:items-end text-center md:text-left gap-2 md:gap-4">
          <div>
            <h2 className="text-2xl md:text-5xl font-extrabold text-slate-800 w-full">Что о нас говорят</h2>
            <p className="text-brandOrange font-semibold text-sm md:text-xl mt-2 md:mt-3">Рейтинг 5.0 среди жителей района</p>
          </div>
          <div className="flex items-center justify-center w-full md:w-auto gap-2 text-yellow-400 text-2xl md:text-3xl mt-2 md:mt-0">
            ★★★★★
          </div>
        </div>

        <div className="relative w-full flex overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <div className="flex w-max animate-marquee pb-8 md:pb-12 gap-4 md:gap-6 items-stretch px-0">
            {infiniteReviews.map((review, i) => (
              <div key={i} className="w-[280px] md:w-[400px] bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-100 flex flex-col justify-between shadow-[0_4px_20px_rgb(0,0,0,0.03)] mx-2 md:mx-3">
                <div>
                  <div className="text-yellow-400 text-lg md:text-xl mb-3 md:mb-4 tracking-widest">★★★★★</div>
                  <p className="italic text-slate-700 leading-relaxed text-sm md:text-lg">"{review.t}"</p>
                </div>
                <div className="mt-6 md:mt-8 flex items-center gap-3 md:gap-4 bg-white p-3 md:p-4 rounded-2xl shadow-sm border border-slate-50">
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-green-50 text-brandGreen rounded-full flex items-center justify-center font-bold text-base md:text-xl border border-green-100 shrink-0">
                    {review.n.substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base leading-tight">{review.n}</h4>
                    <p className="text-[10px] md:text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">{review.d}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Yandex Maps Area */}
      <section id="map" className="py-16 md:py-20 bg-slate-50 relative border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-5xl font-extrabold text-slate-800 mb-3 md:mb-4">Как нас найти</h2>
            <p className="text-slate-600 text-base md:text-lg font-medium">Калининград, улица Флотская, 9</p>
          </div>
          <div className="w-full h-[350px] md:h-[600px] rounded-3xl md:rounded-[2rem] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)] border-4 md:border-8 border-white">
            <iframe
              src="https://yandex.ru/map-widget/v1/?mode=search&ol=biz&oid=2644527777&z=17.5"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen={true}
            ></iframe>
          </div>
        </div>
      </section>

      {/* Telegram Contact Section */}
      <section id="contacts" className="py-12 md:py-24 bg-gradient-to-br from-brandGreen to-[#335515] text-white relative border-t-8 border-brandOrange">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 md:gap-20 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-6xl font-extrabold mb-3 md:mb-6 leading-tight drop-shadow-sm">Остались вопросы? <br /><span className="text-brandOrange drop-shadow-md">Мы на связи!</span></h2>
            <p className="text-sm md:text-xl text-green-50 mb-5 md:mb-8 opacity-90 leading-relaxed font-medium">
              Напишите нам, если ищете конкретный товар или хотите оставить пожелание. Руководители магазина получат ваше сообщение напрямую в Telegram!
            </p>
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-md">
                <p className="font-semibold text-lg flex items-center gap-3"><ShoppingBag /> Супермаркет БалтМаг</p>
                <p className="opacity-80 mt-2">Ваш уютный магазин у дома.</p>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 md:py-16 text-center border-t-4 border-brandGreen px-4">
        <div className="flex justify-center mb-6 md:mb-8">
          <img src="/logo.png" alt="Logo" className="h-16 md:h-20 opacity-80 transition hover:opacity-100 hover:scale-105 duration-300 drop-shadow-[0_0_15px_rgba(75,123,34,0.5)] cursor-pointer" onClick={() => window.scrollTo(0, 0)} />
        </div>
        <p className="font-extrabold text-white text-xl md:text-2xl mb-2 tracking-wide uppercase">БалтМаг</p>
        <p className="mb-6 md:mb-8 font-medium text-base md:text-lg">Супермаркет хозтоваров и бытовой химии</p>

        <div className="w-16 md:w-24 h-1 bg-brandOrange mx-auto mb-6 md:mb-8 rounded-full opacity-50"></div>

        <p className="text-xs md:text-sm opacity-60 font-medium tracking-wide">&copy; 2026 БалтМаг. Все права защищены. <br /> г. Калининград, ул. Флотская, 9</p>
      </footer>

      {/* Tailwind utility overrides for strict marquee without layout breaks */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  )
}

export default App
