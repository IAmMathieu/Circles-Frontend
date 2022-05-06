import './Aside.scss';

export const Aside = () => {
    return (
        <div className="circle__aside">
            <div className="circle__aside--logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Circle-icons-image.svg" alt='logo Circle'/>
            </div>
            

            <hr />
            <div className="circle__aside__list">
                <div className="circle__aside__list--circle">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Circle-icons-image.svg" alt='logo du cercle1'/>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Circle-icons-image.svg" alt='logo du cercle2'/>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Circle-icons-image.svg" alt='logo du cercle3'/>
                </div>

                <div className="circle__aside__list--icons">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Circle-icons-image.svg" alt='icon contact'/>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Circle-icons-image.svg" alt='icon FAQ'/>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Circle-icons-image.svg" alt='icon deco'/>
                </div>
            </div>



        </div>
        

    )
}