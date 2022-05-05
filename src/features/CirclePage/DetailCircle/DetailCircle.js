import './style.scss';

export const DetailCircle = () => {
    return (
        <div className='container__detail-circle'>
            <div className='container__header-circle'>
                <p className='header-circle__name'>Nom Cercle</p>
                <p className='header-circle__description'> Description</p>
                <div className='header-circle__img' >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Circle-icons-image.svg" alt='logo du cercle'/>
                </div>
            </div>

            <hr />

            <div className='container__detail-admin'>
                <div className='container__detail-admin--img'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Circle-icons-image.svg" alt='avatar'/>
                </div>
                <div className='container__detail-admin--text'>
                    <p className='container__detail-admin--text--name'>Nom</p>
                    <p className='container__detail-admin--text--status'>Admin</p>
                </div>
                
            </div>

            <hr />
            <div className='container__members'>
                <p className='container__members__text'>Les membres du cercle : </p>
                <span className='container__members__image'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Circle-icons-image.svg" alt='avatar1 pour test'/>
                </span>
                <span className='container__members__image'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Circle-icons-image.svg" alt='avatar1 pour test'/>
                </span>
                <span className='container__members__image'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Circle-icons-image.svg" alt='avatar1 pour test'/>
                </span>
                <span className='container__members__image'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Circle-icons-image.svg" alt='avatar1 pour test'/>
                </span>
                <span className='container__members__image'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Circle-icons-image.svg" alt='avatar1 pour test'/>
                </span>
                <span className='container__members__image'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Circle-icons-image.svg" alt='avatar1 pour test'/>
                </span>


            </div>



        </div>
    )
}