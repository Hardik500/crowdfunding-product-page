import BaseLayout from '../Layout/BaseLayout';
import Typography from '../Helper/Typography'
import ProductCard from '../Helper/ProductCard';

export default function ProjectAbout(){
    return (
        <BaseLayout>
            <div>
                <Typography variant="h5" fontWeight={700}>About this project</Typography>
                <Typography color="grey" variant="body2" fontWeight={400}>
                    The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
                </Typography>
                <Typography color="grey" variant="body2" fontWeight={400}>
                    Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.
                </Typography>

                <ProductCard 
                    heading="Bamboo Stand" 
                    subheading="Pledge $25 or more" 
                    body="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list." 
                    quantity={101}
                />

                <ProductCard 
                    heading="Black Edition Stand" 
                    subheading="Pledge $75 or more" 
                    body="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
                    member list. Shipping is included." 
                    quantity={64}
                />

                <ProductCard 
                    heading="Mahogany Special Edition" 
                    subheading="Pledge $200 or more" 
                    body="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
                    to our Backer member list. Shipping is included." 
                    quantity={0}
                    disabled={true}
                    btnTitle="Out of Stock"
                />
            </div>
        </BaseLayout>
    )
}