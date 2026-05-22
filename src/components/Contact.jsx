function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      
      <div className="max-w-3xl mx-auto text-center bg-white/10 backdrop-blur-lg p-10 rounded-3xl border border-white/10">
        
        <h2 className="text-5xl font-bold mb-6">
          Contact Me
        </h2>

        <p className="text-gray-300 text-lg">
          Ayodhya, Uttar Pradesh, India
        </p>

        <a
          href="mailto:umair@example.com"
          className="inline-block mt-8 bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full text-lg transition"
        >
          Send Email
        </a>

      </div>
    </section>
  );
}

export default Contact;