import POST_ARTICLE from "../components/article";
import Card from "../components/card";

function OurServices() {
    const images = [{photo:'Butterfly-braids.jpeg', name:'Butterfly Braids'}, {photo:'crocheting.jpg', name:'Crocheting'}, {photo:'distress-locks.jpg', name:'Distress-Locks'}, {photo:'gel-pony.jpg', name:'Gel Pony'}, {photo:'corn-row.jpg', name:'Corn Row'}, {photo:'boho.jpg', name:'Boho'}]
    
    return <section className="bg-gray-100 mx-8 md:mx-16">
        <section className="py-4">
          <h1 className="font-bold text-4xl mt-8 mb-16 text-center underline">OUR STUDIO POLICIES</h1>
          <article className=" my-12">
            <h2 className="font-bold text-lg my-4">Bookings</h2>
            <p className="mb-4">All services aside CORNROWS AND PONIES  goes through a straight booking process without needing any approval (you will receive a confirmation text from BUKSLAY stating your appointment date, time, and booking code after payment is done).</p>
            <p className="mb-4">However, when booking for CORNROWS AND PONIES, the system automatically redirects you to our official WHATSAPP page where you will be engaged by someone to know if you have a preferred style (this is to check for availability and help book you with the best possible stylist for your preferred style. When you both come to an agreement, she will approve your appointment and send you a payment link.</p>
            <p className="mb-4">As soon as payment is done, you will receive a confirmation text from BUKSLAY with all necessary information.</p>
            <p className="mb-4">PAYMENT VALIDATES APPOINTMENT !!!</p>
          </article>
          <article className=" my-8">
            <h2 className="font-bold text-lg my-4">Sizes and Length</h2>
            <p>Our sizes have been categorized into "ROWS" ( ie. 3 rows to 8 rows , with 3 rows being the biggest size and 8 rows being the smallest size ), However, pictures are provided to help you identify the size you want before proceeding to book.</p>
            <p>Our standard length is WAIST LENGTH. Additional length comes a cost . (this will be added to the price indicated below your preferred style )</p>
          <ul></ul>
          </article>
          <article className=" my-8">
            <h2 className="font-bold text-lg my-4">Age Requirements</h2>
            <p className="mb-4">We engage with clients 12 years and above. Children below 12 years may be considered in the near future as we revise our policies.</p>
            <p className="mb-4">As part of our measures to prevent the spread of COVID-19, We do not encourage you to bring an extra  person for your appointment as we are trying to reduce the number of persons in the salon at a time. In instances when you decide to bring them along(for other reasons), they may be asked to wait outside. kindly bare with us!</p>
          </article>
          <article className=" my-8">
            <h2 className="font-bold text-lg my-4">Service Requirements</h2>
            <p className="mb-4">We do not work with dump hair. This is to make sure we provide you with the best possible result and outcome. Thus, you may be asked to wash your hair at the salon if it has been washed for more than 1 week (PERMED / NATURAL HAIR ),</p>
            <p className="mb-4">however, if you wish to wash your hair before coming to the salon, be sure to arrive with your hair thoroughly washed  more than a week (PERMED HAIR ). For natural hair, be sure to arrive with your hair thoroughly washed not more than a week and blow-dried / threaded (depending on your hairstyle and preference) not more than a day.</p>
            <p className="mb-4"> However, we can provide this service at a fee. Check through our catalogues for the price list of additional services we provide.</p>
          </article>
          <POST_ARTICLE post={{
              title: 'Payments and balances',
              content: 'All balances are due on your scheduled day of the appointment. The client’s remaining balance can be paid with mobile money, credit/ debit card . The necessary transactional details would be provided to aid payment..'
          }}      
          />
          <POST_ARTICLE post={{
              title: 'Lateness',
              content: 'All clients are advised to arrive for their appointment on time. Kindly note, your appointment might be rescheduled or canceled when you are more than 30 minutes late for your appointment and please do not arrive more than 30 minutes early before your appointment time (unless told otherwise). this is to reduce the number of persons in the space at a particular time. Kindly note.'
          }}      
          />
          <POST_ARTICLE post={{
              title: 'Cancellations',
              content: 'All cancellations must be made within 48 hours prior to the scheduled appointment. Failure to do so, will attract loss of your deposit. Please, keep in mind that our appointment slots are limited so you might want to reschedule.'
          }}      
          />
          <button>book now</button>
        </section>
        <section>
            <details>
                <summary>
                    <h3 className="bold">Will I be required to wash my hair when I come?</h3>
                </summary>
                <article className="text-sm">
                    <p>Yes, we do not work with damp hairs so we would ensure that you wash it before work commences. Your hair must be clean and dandruff free. Kindly note that, additional charges may be applied for the following:
                    Hair isn’t properly blown out - GH₵ 10.00
                    Washing of hair - GH₵ 30.00 or GH₵ 50.00 depending on the product used</p>
                </article>
            </details>
            <details>
                <article className="text-sm">
                    <p>Yes, we do not work with damp hairs so we would ensure that you wash it before work commences. Your hair must be clean and dandruff free. Kindly note that, additional charges may be applied for the following:
                    Hair isn’t properly blown out - GH₵ 10.00
                    Washing of hair - GH₵ 30.00 or GH₵ 50.00 depending on the product used</p>
                </article>
                <summary>
                    <h3 className="bold">Will I be required to wash my hair when I come?</h3>
                </summary>
               
            </details>
        </section>
        </section>
} 

export default OurServices;