
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Contact Us</h2>
          <p className="text-dealership-tertiary max-w-2xl mx-auto">
            Reach out to our team of automotive experts to schedule a test drive, 
            inquire about our inventory, or discuss your specific requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-dealership-light p-8 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <MapPin className="w-5 h-5 text-dealership-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Visit Our Showroom</h4>
                    <p className="text-dealership-tertiary">
                      123 Luxury Lane, Prestige Hills<br />
                      California, CA 90210
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Phone className="w-5 h-5 text-dealership-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Call Us</h4>
                    <p className="text-dealership-tertiary">
                      +1 (555) 123-4567<br />
                      +1 (555) 987-6543
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Mail className="w-5 h-5 text-dealership-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Email Us</h4>
                    <p className="text-dealership-tertiary">
                      info@elitemotors.com<br />
                      sales@elitemotors.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Clock className="w-5 h-5 text-dealership-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Opening Hours</h4>
                    <p className="text-dealership-tertiary">
                      Monday - Friday: 9:00 AM - 7:00 PM<br />
                      Saturday: 10:00 AM - 5:00 PM<br />
                      Sunday: By Appointment Only
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden h-64">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26430.393553120906!2d-118.43209204772811!3d34.10028430642641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379fd081ed1!2sBeverly%20Hills%2C%20CA%2C%20USA!5e0!3m2!1sen!2sca!4v1626383599182!5m2!1sen!2sca" 
                width="100%" 
                height="100%" 
                className="border-0" 
                loading="lazy"
                title="Elite Motors Location"
              ></iframe>
            </div>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-8">
            <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="font-medium">Full Name*</label>
                  <Input id="name" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="font-medium">Email*</label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="font-medium">Phone Number</label>
                  <Input id="phone" placeholder="+1 (555) 123-4567" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="font-medium">Subject*</label>
                  <Input id="subject" placeholder="Test Drive Request" required />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="font-medium">Message*</label>
                <Textarea 
                  id="message" 
                  placeholder="I'm interested in the Mercedes-Benz S-Class and would like to schedule a test drive." 
                  rows={5} 
                  required 
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-dealership-secondary hover:bg-dealership-secondary/90 text-white py-6"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
