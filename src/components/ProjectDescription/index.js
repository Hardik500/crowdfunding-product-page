import './style.scss'

import { ReactComponent as BookmarkIcon } from '../../assets/images/icon-bookmark.svg'
import { ReactComponent as ProductLogo } from '../../assets/images/logo-mastercraft.svg';

import BaseLayout from '../Layout/BaseLayout';
import Typography from '../Helper/Typography';
import Button from '../Helper/Button';

export default function ProjectDescription() {
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
                <div className="flex flex-center project-description-body-actions">
                    <Button title="Back this project" style={{width: '75%'}}/>
                    <BookmarkIcon />
                </div>
            </BaseLayout>
        </div>
    )
}