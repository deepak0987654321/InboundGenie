import React from 'react';
import { Button } from "@/components/ui/button"


const VisaCard: React.FC = () => {
    return (
       
        <div className="visa-card">
            <div className="card-header">
            <h4>VISA ending in 1314</h4>
<img src="../images/visa.png" alt='card img'/>
            </div>
            <div className='card-body'>
                <p>Expires 07/2026</p>
                <div className="flex flex-wrap gap-10 items-center">
                    
                <p>Default Card</p>
                <Button className="text-secondary px-0 underline" variant="link">Edit</Button>

                </div>

            </div>
          </div>
   
       
    );
  };
  
  export default VisaCard;


