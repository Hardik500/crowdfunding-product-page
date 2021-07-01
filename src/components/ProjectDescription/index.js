import './style.scss'

import Modal from 'react-modal';

import { ReactComponent as ModalClose } from '../../assets/images/icon-close-modal.svg'
import { ReactComponent as CheckIcon } from '../../assets/images/icon-check.svg'
import { ReactComponent as BookmarkIcon } from '../../assets/images/icon-bookmark.svg'
import { ReactComponent as ProductLogo } from '../../assets/images/logo-mastercraft.svg';

import { useFunds } from '../Context/FundProvider';
import BaseLayout from '../Layout/BaseLayout';
import Typography from '../Helper/Typography';
import Button from '../Helper/Button';
import ProductCard from '../Helper/ProductCard';

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.75)'
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        maxHeight: '80vh',
        maxWidth: '80vw',
        overflowY: 'auto',
        transform: 'translate(-50%, -50%)',
        border: 'none',
    },
};

const productCardList = [
    {
        "heading": "Pledge with no reward",
        "body": "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
        "pledgeAmount": 0,
        "quantity": 0
    },
    {
        "heading": "Bamboo Stand",
        "body": "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
        "pledgeAmount": 25,
        "quantity": 101
    },
    {
        "heading": "Black Edition Stand",
        "body": "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
        "pledgeAmount": 75,
        "quantity": 64
    },
    {
        "heading": "Mahogany Special Edition",
        "body": "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
        "pledgeAmount": 200,
        "quantity": 0,
        "disabled": true,
        "btnTitle": "Out of Stock"
    }
]

export default function ProjectDescription() {
    const {selectedCard, supportModalIsOpen, toggleSupportModal, thankYouModalIsOpen, toggleThankYouModal} = useFunds();

    const performSupportAction = () => {
        toggleSupportModal(false);
        toggleThankYouModal(true);
    }

    return (
        <div className="project-description-container">
            <div className="product-description-logo">
                <ProductLogo />
            </div>
            <BaseLayout>
                <div className="project-description-body-container">
                    <Typography variant="h4" fontWeight={700}>Mastercraft Bamboo Monitor Riser</Typography>

                    <Typography variant="body2">A beautiful handcrafted monitor stand to reduce neck and eye strain.</Typography>
                </div>
                <div className="flex project-description-body-actions">
                    <Button title="Back this project" style={{ width: '75%' }} onClick={() => toggleSupportModal(true)}/>
                    <BookmarkIcon />
                </div>
            </BaseLayout>

            <Modal
                isOpen={supportModalIsOpen}
                style={customStyles}
                onRequestClose={() => toggleSupportModal(false)}
                contentLabel="Support Modal"
            >
                <div className="flex align-center" style={{justifyContent: 'space-between'}}>
                    <Typography variant="h6" fontWeight={700}>Back this project</Typography>
                    
                    <button onClick={() => {console.log("clicked");toggleSupportModal(false)}} style={{border: 'none',background: 'white', padding: '5px 10px'}}>
                        <ModalClose />
                    </button>
                </div>
                <br/>
                <Typography variant="subheading2" color="grey">Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</Typography>

                {
                    productCardList.map((productItem, index) => 
                        <ProductCard 
                            heading={productItem.heading}
                            key={index}
                            index={productItem.heading}
                            body={productItem.body}
                            performSupportAction={performSupportAction}
                            pledgeAmount={productItem.pledgeAmount}
                            selectable={true}
                            selected={productItem.heading === selectedCard}
                            quantity={productItem.quantity}
                            disabled={productItem.disabled}
                            btnTitle={productItem.btnTitle}
                        />
                    )
                }
            </Modal>

            <Modal
                isOpen={thankYouModalIsOpen}
                style={customStyles}
                onRequestClose={() => toggleThankYouModal(false)}
                contentLabel="Thank You Modal"
            >
                <div className="flex align-center flex-vertical" style={{justifyContent: 'space-between'}}>
                    <CheckIcon/>
                    <br/>
                    <Typography variant="h6" fontWeight={700}>Thank you for your support</Typography>
                <br/>
                <Typography variant="subheading2" color="grey">Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</Typography>
                <br/>
                <Button onClick={() => toggleThankYouModal(false)} title="Got it!" style={{padding: '15px 40px'}}/>
                </div>
            </Modal>
        </div>
    )
}