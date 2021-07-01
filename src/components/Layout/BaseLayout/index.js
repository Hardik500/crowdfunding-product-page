import './style.scss'

export default function BaseLayout({style, children}){
    return (
        <div className="base-layout-container" style={style}>
            {children}
        </div>
    )
}