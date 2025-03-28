
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "Your message has been sent successfully. We'll get back to you soon.",
    });
  };

  return (
    <div className="flex flex-col min-h-screen px-4 py-2">
      <Navbar />
      
      <motion.div 
        className="flex-grow flex flex-col items-center py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-5xl w-full">
          <motion.h1 
            className="cyber-text text-4xl font-display mb-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            CONTACT
          </motion.h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <motion.div 
              className="cyber-panel p-6 lg:col-span-1"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="cyber-text text-xl mb-6">GET IN TOUCH</h2>
              
              <div className="flex flex-col items-center mb-6">
                <Avatar className="w-32 h-32 border-2 border-cyber-blue mb-4 shadow-glow">
                  <AvatarImage src="/lovable-uploads/3b96da11-c8ac-4774-b04a-f3cc13ea367d.png" alt="Shawaiz profile" />
                  <AvatarFallback className="bg-cyber-dark text-cyber-blue">N</AvatarFallback>
                </Avatar>
                <h3 className="text-white font-medium text-lg">Shawaiz Data Scientist</h3>
                <p className="text-white/70 text-sm">Senior Tech Developer</p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="cyber-circle w-10 h-10 flex-shrink-0">
                    <MapPin className="w-5 h-5 text-cyber-blue" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">LOCATION</h3>
                    <p className="text-white/70 text-sm">Gujranwala City<br />Pakistan </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="cyber-circle w-10 h-10 flex-shrink-0">
                    <Mail className="w-5 h-5 text-cyber-blue" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">EMAIL</h3>
                    <p className="text-white/70 text-sm">231980079@gift.edu.pk<br />231980079@gift.edu.pk</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="cyber-circle w-10 h-10 flex-shrink-0">
                    <Phone className="w-5 h-5 text-cyber-blue" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">COM-LINK || Phone Number</h3>
                    <p className="text-white/70 text-sm">877-CYBER-00<br />Direct: 03266235229</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-cyber-blue/20">
                <h3 className="text-white font-medium mb-3">WORKING HOURS</h3>
                <p className="text-white/70 text-sm mb-1">Monday - Friday: 09:00 - 20:00</p>
                <p className="text-white/70 text-sm">Neural Network: Always Online</p>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div 
              className="cyber-panel p-6 lg:col-span-2"
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="cyber-text text-xl mb-6">SEND MESSAGE</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">NAME</Label>
                    <Input id="name" className="bg-cyber-dark/50" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">EMAIL</Label>
                    <Input id="email" type="email" className="bg-cyber-dark/50" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">SUBJECT</Label>
                  <Input id="subject" className="bg-cyber-dark/50" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">MESSAGE</Label>
                  <Textarea id="message" className="bg-cyber-dark/50 min-h-[150px]" required />
                </div>
                
                <div className="pt-4">
                  <Button type="submit" className="cyber-button w-full md:w-auto">
                    <Send className="mr-2 h-4 w-4" />
                    SEND MESSAGE
                  </Button>
                </div>
              </form>
              
              <div className="mt-8 pt-6 border-t border-cyber-blue/20">
                <p className="text-white/70 text-sm">
                  All messages are encrypted using quantum-grade security protocols. 
                  Your data remains confidential and is never shared with third parties.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
      
      <Footer />
    </div>
  );
};

export default Contact;
