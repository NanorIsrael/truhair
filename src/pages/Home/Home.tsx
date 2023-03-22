import style from './home.module.css'


// TODO: use a reusable component for services
export function Home() {
    return(
         <article className={style.home_page}>
           <h1>Book a service now!</h1>
           <div className='two-col mb-8'> 
           <section className='mt-8'>
            <h2 className={style.hero__h2}>Hair styles</h2>
            <figure className={style.card}>
                <img src="/logo512.png" alt="Tacos and a Drink" title="hair service illustrations!" width="100"
                    height="667"/>
                <figcaption className="offscreen">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quo. Mollitia impedit officia iusto omnis voluptas fugit accusamus ipsum, unde corrupti, delectus odit sequi facere nesciunt magni qui sed consequatur!
                </figcaption>
            </figure>
           </section>

           <section className='mt-8'>
            <h2 className="hero__h2">Pedicure</h2>
            <figure className={style.card}>
                <img src="/logo512.png" alt="Tacos and a Drink" title="hair service illustrations!" width="100"
                    height="667"/>
                <figcaption className="offscreen">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quo. Mollitia impedit officia iusto omnis voluptas fugit accusamus ipsum, unde corrupti, delectus odit sequi facere nesciunt magni qui sed consequatur!
                </figcaption>
            </figure>
           </section>
           </div>

           <div className='two-col mb-8'> 
           <section className='mt-8'>
            <h2 className={style.hero__h2}>Hair styles!</h2>
            <figure className={style.card}>
                <img src="/logo512.png" alt="Tacos and a Drink" title="hair service illustrations!" width="100"
                    height="667"/>
                <figcaption className="offscreen">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quo. Mollitia impedit officia iusto omnis voluptas fugit accusamus ipsum, unde corrupti, delectus odit sequi facere nesciunt magni qui sed consequatur!
                </figcaption>
            </figure>
           </section>

           <section className='mt-8'>
            <h2 className="hero__h2">Hair styles!</h2>
            <figure className={style.card}>
                <img src="/logo512.png" alt="Tacos and a Drink" title="hair service illustrations!" width="100"
                    height="667"/>
                <figcaption className="offscreen">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quo. Mollitia impedit officia iusto omnis voluptas fugit accusamus ipsum, unde corrupti, delectus odit sequi facere nesciunt magni qui sed consequatur!
                </figcaption>
            </figure>
           </section>
           </div>
           <section className={style.book_now_contact}>
               <p className='text-center'>Call: <a href='tel:+233271053774'>+233271053774</a> or email: <a href='email:truhairnbeauty@gmail.com'>truhairnbeauty@gmail.com</a> to book a service <strong>now!</strong></p>
           </section>
       </article>
      )
} 

