import Card from "../components/card";

function About() {
  const images = [{photo:'Butterfly-braids.jpeg', name:'BRAIDS'}, {photo:'crocheting.jpg', name:'WEAVES and WIGS'}, {photo:'distress-locks.jpg', name:'HAIR CARE'}, {photo:'gel-pony.jpg', name:'NAIL CARE'}]

    return <div className="bg-gray-100">
       
        <section className="mx-8 md:mx-16">
        <section className="py-4">
          <h1 className="font-bold text-4xl mt-8 mb-16 text-center underline">Who we are</h1>
          <article className=" my-12">
            <h2 className="font-bold text-lg my-4">We are just like you</h2>
            <p>The stylist behind ThruHair are just like you. We believe in the beauty of protective styles and agree that there’s nothing wrong with enhancing what you already have and loving the crown on your head. Our arms are always opened to receive and style you up.</p>
          </article>
          <article className=" my-8">
            <h2 className="font-bold text-lg my-4">Top Quality</h2>
            <p>We know the differences between a “quick fix” and a transformed look crafted with quality. Our priority is to offer you a beautiful look that not only looks astonishing, but also lasts. Quality products and services will speak for itself.</p>
          </article>
          <article className=" my-8">
            <h2 className="font-bold text-lg my-4">Team Work</h2>
            <p>Our team of professional stylists will never leave you unsatisfied. From small enhancements to completely new looks, check out the versatility of our hair transformations. We’ve got your back solidly.</p>
          </article>
        </section>
        <section className="pb-8">
        <h2 className="font-bold text-4xl mt-4 mb-16 text-center underline">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4">
        { images.map(img => <Card img={img}/>)}
        </div>
        </section>

        <section className="pb-8">
        <h2 className="font-bold text-4xl mt-4 mb-16 text-center underline">Creative Works</h2>
        <article>
            <h4>Do you like what you see? </h4>
            <p>Follow! Let us take you through our various hair styles catalogue that will help you select your suitable match. It is that easy and convenient and just a click away from booking us.</p>
          </article>
        <div className="grid md:grid-cols-2 lg:grid-cols-4">
        { images.map(img => <Card img={img}/>)}
        </div>
        </section>
        <section className="pb-8">
        <h2 className="font-bold text-4xl mt-4 mb-16 text-center underline">Our Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4">
        { images.map(img => <Card img={img}/>)}
        </div>
        </section>

      <section>
        <h2 className="font-bold text-4xl mt-4 mb-16 text-center underline">Contact Us</h2>
      <form action="" className="w-3/4">
        <fieldset>
          {/* <legend>Your contact details</legend> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="">
              <label htmlFor='name'>Name:</label>
              <input type="text" placeholder="NAME" className="block w-full p-2 rounded shadow"/>
            </div>
            
            <div>
              <label htmlFor='name'>Email:</label>
              <input type="email" placeholder="EMAIL" className="block w-full p-2 rounded shadow"/>
            </div>
           
          </div>
        </fieldset>
        <fieldset className="pb-16 ">
          {/* <legend>Your message</legend> */}
          <div className="my-4">
            <label htmlFor='name' >Subject:</label>
            <input type="text" placeholder="SUBJECT" className="block w-full p-2 rounded shadow"/>
          </div>
              <label htmlFor='name'>Message:</label>
              <textarea rows={5} name={'message'} placeholder="MESSAGE" className="block w-full p-2 rounded shadow"/>
              <input type="submit" className="btn w-full p-2 mt-4"/>

        </fieldset>
        </form>
      </section>
       
        </section>
        </div>
} 

export default About;