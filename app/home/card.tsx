import React from 'react';
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

const Card: React.FC = () => {
    return (
       
        <div className="bg-white rounded-md shadow-lg p-5">
          <div className="flex items-center justify-between py-3">
            <div className="block">
              Sources
            </div>
            <div className="flex gap-4">
             
              <Button className="text-secondary px-0 underline" variant="link">Edit</Button>
             
            </div>
          </div>
          <div className="block">
            <div className="grid grid-cols-2 gap-5">
          
              <div className="flex items-center space-x-2">
             <Checkbox id="terms" />
             <label
               htmlFor="Facebook"
               className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
             >
               Facebook
               
             </label>
           </div>
           <div className="flex items-center space-x-2">
             <Checkbox id="terms" />
             <label
               htmlFor="Twitter"
               className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
             >
               Twitter
               
             </label>
           </div>
           <div className="flex items-center space-x-2">
             <Checkbox id="terms" />
             <label
               htmlFor="Instagram"
               className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
             >
               Instagram
               
             </label>
           </div>
           <div className="flex items-center space-x-2">
             <Checkbox id="terms" />
             <label
               htmlFor="seo"
               className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
             >
               Seo marketers forum
               
             </label>
           </div>
              
              </div>
            
            </div>
          </div>
   
       
    );
  };
  
  export default Card;


